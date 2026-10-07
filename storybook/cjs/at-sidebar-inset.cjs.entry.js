'use strict';

var index = require('./index-D62KzS1q.js');

const atSidebarInsetCss = () => `at-sidebar-inset{display:flex;flex-direction:column;flex-grow:1;min-width:0;overflow-y:auto;overflow-x:clip;position:relative}`;

const AtSidebarInsetComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
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
        return (index.h(index.Host, { key: 'b121e61e1ce4df820f1715c6af251d480bf06e4b', "data-name": "page-content", "aria-hidden": this.isInert ? 'true' : 'false', inert: this.isInert }, index.h("slot", { key: 'b329febccfe46d5ce939ca2523de2a6bb4215a48' })));
    }
};
AtSidebarInsetComponent.style = atSidebarInsetCss();

exports.at_sidebar_inset = AtSidebarInsetComponent;
