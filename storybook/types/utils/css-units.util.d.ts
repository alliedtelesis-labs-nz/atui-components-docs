/**
 * Converts a CSS size value to pixels.
 *
 * The Canvas 2D API (`ctx.font`, `ctx.fillText`, etc.) is outside the CSS
 * cascade and only understands absolute units. Design tokens often use `rem`
 * or `em`, so this utility resolves them to `px` at call time — after the
 * component is mounted and stylesheets are applied.
 *
 * Supported units: px, rem, em. Unitless values are treated as px.
 *
 * @param value          - CSS size string, e.g. '0.875rem', '14px', '1em'
 * @param contextElement - Reference element for `em` resolution. Defaults to
 *                         `document.body`. Pass the component's host element
 *                         for accurate `em` resolution relative to that element.
 * @returns Resolved pixel value, or 0 if the value cannot be parsed.
 *
 * @example
 * // In a Stencil component's initChart():
 * const fontSize = cssSizeToPixels('0.875rem'); // e.g. 14 (if root is 16px)
 * ctx.font = `${fontSize}px ${fontFamily}`;
 */
export declare function cssSizeToPixels(value: string, contextElement?: Element): number;
