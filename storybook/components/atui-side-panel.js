import { p as proxyCustomElement, H, h } from './p-CHjIMSAP.js';
import { d as defineCustomElement$2 } from './p-B2J3peye.js';

const atuiSidePanelCss = "dialog.backdrop::backdrop{background:rgba(0, 0, 0, 0.2);transition:opacity 0.3s ease;animation:fadeIn 0.3s ease forwards;transition:opacity var(--token-transition-time) ease-in-out allow-discrete}dialog.backdrop::backdrop{z-index:var(--z-backdrop, 1000)}@keyframes fadeIn{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}";

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
const AtuiSidePanelComponent = /*@__PURE__*/ proxyCustomElement(class AtuiSidePanelComponent extends H {
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
        /**
         * Whether to show a backdrop behind the panel
         */
        this.backdrop = false;
        this.isExpanded = false;
        this.handleClose = () => {
            this.closeSidePanel();
        };
    }
    /**
     * Opens the side panel
     * @returns Promise that resolves when the panel is opened
     */
    async openSidePanel() {
        if (this.panelDialog && !this.panelDialog.open) {
            this.panelDialog.showModal();
            this.isExpanded = true;
            if (this.backdrop) {
                this.panelDialog.classList.add('backdrop');
            }
        }
    }
    /**
     * Closes the side panel
     * @returns Promise that resolves when the panel is closed
     */
    async closeSidePanel() {
        if (this.panelDialog && this.panelDialog.open) {
            this.panelDialog.close();
            this.isExpanded = false;
            this.panelDialog.classList.remove('backdrop');
        }
    }
    offClickHandler(event) {
        var _a, _b;
        if (!this.close_backdrop || !((_a = this.panelDialog) === null || _a === void 0 ? void 0 : _a.open))
            return;
        if (!((_b = this.sidePanelWrapper) === null || _b === void 0 ? void 0 : _b.contains(event.target))) {
            this.handleClose();
        }
    }
    render() {
        return (h("div", { key: 'dd5997b4f7b0b72be4eaa25f0eb9edd13928ad5e' }, h("dialog", { key: '15bca474c6cc7736d89fe8a426a78c084a5bfc67', id: this.panel_id, ref: (el) => (this.panelDialog = el), class: this.backdrop ? 'backdrop' : '' }, h("div", { key: '140f01234a892eab163b2ebdf84b9b8030fa3818', class: `${this.panelClasses} ${this.sizeClasses}`, ref: (el) => (this.sidePanelWrapper = el), "data-name": "panel-wrapper" }, h("div", { key: '047dc44a98299aefccfd5c805ca4210ee9d3e9ff', class: 'sticky top-0 z-nav' }, h("atui-header", { key: '8a293a6c36ae58ed69cc69a4ad2d971d5fc14af3', header_title: this.panel_title, subtitle: this.panel_subtitle }, this.has_close_button && (h("span", { key: 'da50b74bca5bdd9cdf0ac2555917d206fdb9c43b', class: 'rounded-full hover:bg-gray-100', slot: 'actions' }, h("i", { key: 'e3cfda2ac5e167c122dc11a09a62053dd4ece3b7', class: "material-icons md-16 right-16 top-20 cursor-pointer p-8 !text-[18px]", onClick: this.handleClose, "data-name": "panel-close" }, "close"))))), h("div", { key: '8fa71de39a93bfde19facec8d3312f23102d386f', class: 'flex w-full flex-1 flex-col' }, h("slot", { key: 'eb4af5d45dfd6954ced389b7b638e24cd05a0dac', name: 'content' }))))));
    }
    get panelClasses() {
        return `${panelVariants.base} ${panelVariants.origin[this.origin]} ${this.isExpanded ? panelVariants.isExpanded : ''} 
        ${this.fixed ? panelVariants.fixed.true : panelVariants.fixed.false} ${!this.has_scrollbar ? panelVariants.noScrollbar : ''}`;
    }
    get sizeClasses() {
        return `${sizeVariants.base} ${sizeVariants.size[this.size]}`;
    }
    get el() { return this; }
    static get style() { return atuiSidePanelCss; }
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
        "backdrop": [4],
        "isExpanded": [32],
        "openSidePanel": [64],
        "closeSidePanel": [64]
    }, [[5, "mousedown", "offClickHandler"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-side-panel", "atui-header"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-side-panel":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiSidePanelComponent);
            }
            break;
        case "atui-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtuiSidePanel = AtuiSidePanelComponent;
const defineCustomElement = defineCustomElement$1;

export { AtuiSidePanel, defineCustomElement };
//# sourceMappingURL=atui-side-panel.js.map

//# sourceMappingURL=atui-side-panel.js.map