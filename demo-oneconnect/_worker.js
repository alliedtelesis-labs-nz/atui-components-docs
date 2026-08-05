/**
 * Password gate for the hosted OneConnect prototype.
 *
 * Cloudflare Access cannot protect a production `*.pages.dev` hostname — Access
 * enforces on zones in your own account, and `pages.dev` is Cloudflare's — so the
 * gate lives in the deployment itself. Basic auth against a single shared
 * password, which is the right weight for a design prototype shared by link with
 * reviewers. If this ever needs per-person login and an audit trail, put the
 * project behind a custom domain and use Access instead; then delete this file.
 *
 * The password is the `SITE_PASSWORD` secret on the Pages project:
 *
 *   wrangler pages secret put SITE_PASSWORD --project-name atui-oneconnect
 *
 * Any username is accepted — only the password is checked.
 *
 * Being a `_worker.js` puts this in front of every request, so it also has to
 * serve the assets (`env.ASSETS`) and do the SPA fallback that `public/_redirects`
 * does for a plain static deploy: unmatched paths get index.html, or deep links
 * and refreshes inside a workflow dialog 404.
 */

const REALM = "OneConnect prototype";

export default {
  async fetch(request, env) {
    // Fail closed. A deploy that forgot the secret must not quietly publish the
    // prototype to anyone with the link — that is the failure this file exists
    // to prevent, so it is the one case worth being loud about.
    if (!env.SITE_PASSWORD) {
      return new Response("Not configured: this deployment has no SITE_PASSWORD secret.", {
        status: 503,
        headers: { "cache-control": "no-store" },
      });
    }

    if (!(await isAuthorized(request, env.SITE_PASSWORD))) {
      return new Response("Authentication required.", {
        status: 401,
        headers: {
          "www-authenticate": `Basic realm="${REALM}", charset="UTF-8"`,
          "cache-control": "no-store",
        },
      });
    }

    const asset = await env.ASSETS.fetch(request);
    if (asset.status !== 404) return asset;

    const indexUrl = new URL("/index.html", request.url);
    return env.ASSETS.fetch(new Request(indexUrl, { headers: request.headers }));
  },
};

async function isAuthorized(request, expected) {
  const [scheme, encoded] = (request.headers.get("Authorization") ?? "").split(" ");
  if (scheme !== "Basic" || !encoded) return false;

  let decoded;
  try {
    decoded = atob(encoded);
  } catch {
    return false;
  }

  // `user:pass`, and a password may itself contain ":" — split on the first only.
  const separator = decoded.indexOf(":");
  if (separator < 0) return false;

  return timingSafeEqual(decoded.slice(separator + 1), expected);
}

/** Compared without leaking length-independent timing. Unequal lengths are not secret. */
function timingSafeEqual(a, b) {
  const encoder = new TextEncoder();
  const left = encoder.encode(a);
  const right = encoder.encode(b);
  if (left.byteLength !== right.byteLength) return false;
  return crypto.subtle.timingSafeEqual(left, right);
}
