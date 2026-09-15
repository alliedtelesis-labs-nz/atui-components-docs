import { r as registerInstance, a as getElement, h, H as Host } from './index-p5TDLQHl.js';

const atSidebarInsetCss = () => `at-sidebar-inset{display:flex;flex-direction:column;flex-grow:1;min-width:0;overflow-y:auto;overflow-x:clip;position:relative}`;

const AtSidebarInsetComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
        return (h(Host, { key: '7969f833280e977d35d8a3944eda4076db47d93c', "data-name": "page-content", "aria-hidden": this.isInert ? 'true' : 'false', inert: this.isInert }, h("slot", { key: 'c523ee200fd5d36f479378675071929835883970' })));
    }
};
AtSidebarInsetComponent.style = atSidebarInsetCss();

export { AtSidebarInsetComponent as at_sidebar_inset };
