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
        this.provider = this.el.parentElement?.closest('at-sidebar-provider');
        this.provider?.addEventListener('atuiSidebarBackdropChange', this.handleBackdropChange);
    }
    disconnectedCallback() {
        this.provider?.removeEventListener('atuiSidebarBackdropChange', this.handleBackdropChange);
    }
    render() {
        return (h(Host, { key: '31107de1a43418e0b193ffcdb1e19ed89f545e55', "data-name": "page-content", "aria-hidden": this.isInert ? 'true' : 'false', inert: this.isInert }, h("slot", { key: '43dd9f6fea342e65013850a0358901700bffd5b6' })));
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
