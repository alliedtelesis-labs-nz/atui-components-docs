import { p as proxyCustomElement, H, h } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$2 } from './p-ujLxb3Rx.js';

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
        this.triggerEls = [];
        this.externalTriggerListeners = [];
        this.handleClose = () => {
            this.closeSidePanel();
        };
        this.handleDialogClose = (event) => {
            event.preventDefault();
            if (this.isExpanded) {
                this.closeSidePanel();
            }
        };
        this.handleKeyDown = (event) => {
            if (event.key === 'Escape' && this.isExpanded) {
                event.preventDefault();
                this.closeSidePanel();
            }
        };
    }
    /**
     * Toggles the side panel between open and closed states
     * @returns Promise that resolves when the panel state is toggled
     */
    async toggleSidePanel() {
        if (this.isExpanded) {
            await this.closeSidePanel();
        }
        else {
            await this.openSidePanel();
        }
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
    async componentDidLoad() {
        if (this.trigger_id) {
            this.triggerEls = Array.from(document.querySelectorAll(`[data-id="${this.trigger_id}"]`));
            if (this.triggerEls.length === 0) {
                console.warn(`atui-side-panel: No elements found with data-id="${this.trigger_id}"`);
                return;
            }
            this.setupExternalTriggerListeners();
        }
    }
    disconnectedCallback() {
        this.cleanupExternalTriggerListeners();
    }
    cleanupExternalTriggerListeners() {
        this.externalTriggerListeners.forEach(({ element, event, handler }) => {
            element.removeEventListener(event, handler);
        });
        this.externalTriggerListeners = [];
    }
    setupExternalTriggerListeners() {
        if (!this.triggerEls || this.triggerEls.length === 0)
            return;
        const clickHandler = async (event) => {
            event.preventDefault();
            event.stopPropagation();
            await this.toggleSidePanel();
        };
        const keydownHandler = async (event) => {
            switch (event.key) {
                case 'Enter':
                case ' ':
                    event.preventDefault();
                    await this.toggleSidePanel();
                    break;
            }
        };
        this.triggerEls.forEach((el) => {
            el.addEventListener('click', clickHandler);
            el.addEventListener('keydown', keydownHandler);
            this.externalTriggerListeners.push({ element: el, event: 'click', handler: clickHandler }, { element: el, event: 'keydown', handler: keydownHandler });
        });
    }
    render() {
        return (h("div", { key: 'd211a07eda5723a9f10055ecf4bd13f4d07e16a3' }, h("dialog", { key: '257c0d45235db65655cdb240bbd742b2819507eb', id: this.panel_id, ref: (el) => (this.panelDialog = el), class: this.backdrop ? 'backdrop' : '', onClose: this.handleDialogClose, onKeyDown: this.handleKeyDown }, h("div", { key: '6d71bf2195605e7481c539cbd138c01bcba53f23', class: `${this.panelClasses} ${this.sizeClasses}`, ref: (el) => (this.sidePanelWrapper = el), "data-name": "panel-wrapper" }, h("div", { key: '4df526e0383659b51f97b55c682e6db7c1bffb61', class: 'z-nav sticky top-0' }, h("atui-header", { key: '98a932a3be955172f52d24a1e021b73aa06eb777', header_title: this.panel_title, subtitle: this.panel_subtitle }, this.has_close_button && (h("span", { key: '494443344e7d61d874f4ac8be271b1c819e1091f', class: 'rounded-full hover:bg-gray-100', slot: 'actions' }, h("i", { key: 'ffdf8745d6ee4dbac16f15ee0836397033a45367', class: "material-icons md-16 top-20 right-16 cursor-pointer p-8 !text-[18px]", onClick: this.handleClose, "data-name": "panel-close" }, "close"))))), h("div", { key: '75225667d5eb12d6079cae60b85988bb22bda085', class: 'flex w-full flex-1 flex-col' }, h("slot", { key: 'e4c264f4bb6f31c20d1855e42602a4b1a77a3f05' }))))));
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
        "trigger_id": [1],
        "isExpanded": [32],
        "toggleSidePanel": [64],
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