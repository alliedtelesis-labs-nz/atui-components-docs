/**
 * Registers stub icons before the app boots, so icon-dependent e2e tests have
 * visible, hoverable icons to interact with. Fixture pages load no icons —
 * consuming apps populate `window.__atIconRegistry` at bootstrap, and an
 * unregistered `at-icon` renders empty at zero size.
 *
 * Call before `page.goto`, or follow with `page.reload()` when the page is
 * already loaded.
 */
export const seedIconRegistry = async (page, names) => {
    await page.addInitScript((iconNames) => {
        const registry = window.__atIconRegistry ??
            (window.__atIconRegistry = new Map());
        for (const name of iconNames) {
            registry.set(name, {
                attrs: { viewBox: '0 0 16 16' },
                content: [{ elem: 'circle', attrs: { cx: 8, cy: 8, r: 8 } }],
            });
        }
    }, names);
};
