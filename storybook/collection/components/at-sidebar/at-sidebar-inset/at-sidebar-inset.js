import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description The shared page-content region for a multi-sidebar layout under at-sidebar-provider. Goes inert while a sibling at-sidebar panel is a modal (backdropped) overlay.
 * @slot - Page content
 */
export class AtSidebarInsetComponent {
    el;
    isInert = false;
    provider = null;
    hasLoaded = false;
    handleBackdropChange = (event) => {
        this.isInert = event.detail;
    };
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
    handleScroll() {
        if (this.el.scrollLeft !== 0) {
            this.el.scrollLeft = 0;
        }
    }
    componentDidLoad() {
        this.hasLoaded = true;
        this.subscribeToProvider();
    }
    /**
     * Re-insertion (an Angular @if, a Vue v-if) disconnects the element, which drops the
     * subscription below, but Stencil re-runs only connectedCallback — not componentDidLoad —
     * so without this the re-inserted inset would never go inert behind a modal panel again.
     */
    connectedCallback() {
        if (!this.hasLoaded)
            return;
        this.subscribeToProvider();
    }
    subscribeToProvider() {
        this.provider = this.el.parentElement?.closest('at-sidebar-provider');
        this.provider?.addEventListener('atuiSidebarBackdropChange', this.handleBackdropChange);
    }
    disconnectedCallback() {
        this.provider?.removeEventListener('atuiSidebarBackdropChange', this.handleBackdropChange);
    }
    render() {
        return (h(Host, { key: '6bcadc4f05783477ed6327df3a99b2ef3ea6d34a', "data-name": "page-content", "aria-hidden": this.isInert ? 'true' : 'false', inert: this.isInert }, h("slot", { key: 'ea9bb8916424ead30be2d1117be239a66a37db94' })));
    }
    static get is() { return "at-sidebar-inset"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-sidebar-inset.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-sidebar-inset.css"]
        };
    }
    static get states() {
        return {
            "isInert": {}
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "scroll",
                "method": "handleScroll",
                "target": undefined,
                "capture": false,
                "passive": true
            }];
    }
}
