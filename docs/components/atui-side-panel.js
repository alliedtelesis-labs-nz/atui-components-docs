import { p as proxyCustomElement, H, h } from './p-kcU6cSzl.js';
import { d as defineCustomElement$2 } from './p-DpB_Sinf.js';

const panelVariants = {
    base: 'z-nav !fixed h-full min-w-panel-xs bg-white transition-transform shadow-md',
    origin: {
        left: 'left-0 top-0',
        right: 'right-0 top-0',
    },
    isExpanded: 'border-l-med border-l-2 transition-transform duration-[300ms] ease-[cubic-bezier(0.455,0.03,0.515,0.955)]',
    fixed: {
        true: 'fixed h-full top-0',
        false: 'absolute h-full',
    },
    noScrollbar: 'overflow-y-hidden',
};
const sizeVariants = {
    base: 'overflow-x-hidden overflow-y-auto h-full flex flex-col',
    size: {
        xs: 'w-panel-xs',
        sm: 'w-panel-sm',
        md: 'w-panel-md',
        lg: 'w-panel-lg',
        xl: 'w-panel-xl',
    },
};
const AtuiDialogComponent = /*@__PURE__*/ proxyCustomElement(class AtuiDialogComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Size of the size panel
         */
        this.size = 'xs';
        /**
         *  Position of the side panel
         */
        this.origin = 'right';
        /**
         * Puts a scrollbar on the sidepanel if set
         */
        this.has_scrollbar = true;
        /**
         * Displays a close button if set
         */
        this.has_close_button = true;
        /**
         * Will close the sidepanel if clicked off when set
         */
        this.close_backdrop = false;
        /**
         * If sidepanel should used fixed positioning (otherwise absolute)
         */
        this.fixed = true;
        this.isExpanded = false;
    }
    handleClose() {
        this.panelDialog.close();
        this.isExpanded = false;
    }
    get panelClasses() {
        return `${panelVariants.base} ${panelVariants.origin[this.origin]} ${this.isExpanded ? panelVariants.isExpanded : ''} 
        ${this.fixed ? panelVariants.fixed.true : panelVariants.fixed.false} ${!this.has_scrollbar ? panelVariants.noScrollbar : ''}`;
    }
    get sizeClasses() {
        return `${sizeVariants.base} ${sizeVariants.size[this.size]}`;
    }
    offClickHandler(event) {
        if (!this.close_backdrop || !this.panelDialog.open)
            return;
        if (!this.sidePanelWrapper.contains(event.target)) {
            this.handleClose();
        }
    }
    render() {
        return (h("div", { key: '2331314a9d681bee6b145dd211a248e10c2ead36' }, h("dialog", { key: '795f60de78016850c2e1f8b736fd94ffeadb1e7e', id: this.panel_id, ref: (el) => (this.panelDialog = el) }, h("div", { key: 'f3460bcb6adcfb3c9e1d7829afa192116fca3942', class: `${this.panelClasses} ${this.sizeClasses}`, ref: (el) => (this.sidePanelWrapper = el), "data-name": "panel-wrapper" }, h("div", { key: 'ecec539dd4c2e79007ac868f0b37d8092d3719dc', class: 'sticky top-0 z-nav' }, h("atui-header", { key: 'e36aa02d28022b6ce9d96b1cecdd0fde371079a5', header_title: this.panel_title, subtitle: this.panel_subtitle }, this.has_close_button && (h("span", { key: 'ad7ecf58f172b94a8869e93e42d72f943e5e42fc', class: 'rounded-full hover:bg-gray-100', slot: 'actions' }, h("i", { key: '8bd352ae36665cb43a377ec28998a5363ea0d910', class: "material-icons md-16 right-16 top-20 cursor-pointer p-8 !text-[18px]", onClick: () => this.handleClose(), "data-name": "panel-close" }, "close"))))), h("div", { key: '2e2cd97b6f54eb7573fe63f748c7bbaee416ea02', class: 'flex w-full flex-1 flex-col' }, h("slot", { key: 'fafe52992808cb3f1ffa17522b38a8fb905c28fc', name: 'content' }))))));
    }
}, [260, "atui-side-panel", {
        "size": [1],
        "panel_id": [1],
        "panel_title": [1],
        "panel_subtitle": [1],
        "origin": [1],
        "has_scrollbar": [4],
        "has_close_button": [4],
        "close_backdrop": [4],
        "fixed": [4],
        "isExpanded": [32],
        "sidePanelWrapper": [32],
        "panelDialog": [32]
    }, [[5, "mousedown", "offClickHandler"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-side-panel", "atui-header"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-side-panel":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiDialogComponent);
            }
            break;
        case "atui-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtuiSidePanel = AtuiDialogComponent;
const defineCustomElement = defineCustomElement$1;

export { AtuiSidePanel, defineCustomElement };
//# sourceMappingURL=atui-side-panel.js.map

//# sourceMappingURL=atui-side-panel.js.map