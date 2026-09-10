/**
 * @category Navigation
 * @description The shared page-content region for a multi-sidebar layout under at-sidebar-provider. Goes inert while a sibling at-sidebar panel is a modal (backdropped) overlay.
 * @slot - Page content
 */
export declare class AtSidebarInsetComponent {
    el: HTMLElement;
    private isInert;
    private provider;
    private handleBackdropChange;
    /**
     * This region never scrolls horizontally (see `overflow-x: clip` in the
     * stylesheet) — but a contained fixed-position panel (e.g. at-side-panel)
     * still has descendants a browser can focus, and opening a <dialog> runs
     * the HTML spec's dialog-focusing steps regardless of `.show()` vs
     * `.showModal()`. Chromium's focus-follow-into-view isn't blocked by
     * `overflow-x: clip` — it's a native scroll, not a CSSOM one — so it
     * still shifts scrollLeft here even though nothing should ever be able
     * to. Snap it back the instant it happens rather than relying on CSS
     * containment alone to guarantee the invariant.
     */
    handleScroll(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
