/**
 * Opens the window in which the custom-elements build has not yet armed a
 * component's `@Watch` handlers, and keeps it open until `armWatchers` runs.
 * Call before `goto`; the fixture must load the component from
 * `dist-components` (the custom-elements build), not the lazy loader.
 */
export const holdWatcherArming = (page) => page.addInitScript(() => {
    const whenDefined = customElements.whenDefined.bind(customElements);
    let release;
    const armed = new Promise((resolve) => {
        release = resolve;
    });
    window.armWatchers = () => release();
    customElements.whenDefined = (name) => whenDefined(name).then((ctor) => armed.then(() => ctor));
});
export const armWatchers = (page) => page.evaluate(() => window.armWatchers());
