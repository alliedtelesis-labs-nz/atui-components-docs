import { h, } from "@stencil/core";
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
/**
 * @category Overlays
 * @description A sliding side panel component for displaying secondary content or forms. Features customizable positioning, backdrop, and animation options.
 *
 * @slot default - Used for placing the content of the side panel.
 */
export class AtSidePanelComponent {
    constructor() {
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
        return (h("div", { key: '1bdac146247129818bdd0ec5e62aec03c32e4e94' }, h("dialog", { key: 'ba3fbe217bd0127c495909aa83c79ec09fcecec4', id: this.panel_id, ref: (el) => (this.panelDialog = el), class: this.backdrop ? 'backdrop' : 'no-backdrop', onClose: this.handleDialogClose, onKeyDown: this.handleKeyDown }, h("div", { key: 'eb01c8bd72de9d6dc2f54c8b78447fbf2bdafc19', class: `${this.panelClasses} ${this.sizeClasses}`, ref: (el) => (this.sidePanelWrapper = el), "data-name": "panel-wrapper" }, h("div", { key: '3474159f54200070391e2a98995ab84b3dc1e6ce', class: 'z-nav sticky top-0' }, h("at-header", { key: '3011bba258c4075973e8284f97d1f291af074c47', header_title: this.panel_title, subtitle: this.panel_subtitle }, this.has_close_button && (h("span", { key: '1615ce23b8ac52c4060815ca1272ac7293b1c961', class: 'rounded-full hover:bg-gray-100', slot: 'actions' }, h("i", { key: '3e17ac98a2c08e33285d67d989928d5246d9cfde', class: "material-icons md-16 top-20 right-16 cursor-pointer p-8 !text-[18px]", onClick: this.handleClose, "data-name": "panel-close" }, "close"))))), h("div", { key: '520352e94f9a17ae292405a8a1a89326940d158d', class: 'flex w-full flex-1 flex-col' }, h("slot", { key: '9d19cd6f316d859b7502d83e48f91b952c8c0886' }))))));
    }
    get panelClasses() {
        return `${panelVariants.base} ${panelVariants.origin[this.origin]} ${this.isExpanded ? panelVariants.isExpanded : ''} 
        ${this.fixed ? panelVariants.fixed.true : panelVariants.fixed.false} ${!this.has_scrollbar ? panelVariants.noScrollbar : ''}`;
    }
    get sizeClasses() {
        return `${sizeVariants.base} ${sizeVariants.size[this.size]}`;
    }
    static get is() { return "at-side-panel"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-side-panel.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-side-panel.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "SidePanelSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
                    "references": {
                        "SidePanelSize": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-side-panel/at-side-panel.tsx",
                            "id": "src/components/at-side-panel/at-side-panel.tsx::SidePanelSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the size panel"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'xs'"
            },
            "panel_id": {
                "type": "string",
                "attribute": "panel_id",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "ID of the panel"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "panel_title": {
                "type": "string",
                "attribute": "panel_title",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Title displayed in the side panel"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "panel_subtitle": {
                "type": "string",
                "attribute": "panel_subtitle",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Subtitle displayed in the side panel"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "origin": {
                "type": "string",
                "attribute": "origin",
                "mutable": false,
                "complexType": {
                    "original": "SidePanelDirection",
                    "resolved": "\"left\" | \"right\"",
                    "references": {
                        "SidePanelDirection": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-side-panel/at-side-panel.tsx",
                            "id": "src/components/at-side-panel/at-side-panel.tsx::SidePanelDirection"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position of the side panel"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'right'"
            },
            "has_scrollbar": {
                "type": "boolean",
                "attribute": "has_scrollbar",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Puts a scrollbar on the sidepanel if set"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "has_close_button": {
                "type": "boolean",
                "attribute": "has_close_button",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Displays a close button if set"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "close_backdrop": {
                "type": "boolean",
                "attribute": "close_backdrop",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Will close the sidepanel if clicked off when set"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "fixed": {
                "type": "boolean",
                "attribute": "fixed",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If sidepanel should used fixed positioning (otherwise absolute)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "backdrop": {
                "type": "boolean",
                "attribute": "backdrop",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether to show a backdrop behind the panel"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "trigger_id": {
                "type": "string",
                "attribute": "trigger_id",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Data-id of an external element to use as the trigger. When provided, clicking the trigger will toggle the side panel."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isExpanded": {}
        };
    }
    static get methods() {
        return {
            "toggleSidePanel": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Toggles the side panel between open and closed states",
                    "tags": [{
                            "name": "returns",
                            "text": "Promise that resolves when the panel state is toggled"
                        }]
                }
            },
            "openSidePanel": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Opens the side panel",
                    "tags": [{
                            "name": "returns",
                            "text": "Promise that resolves when the panel is opened"
                        }]
                }
            },
            "closeSidePanel": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Closes the side panel",
                    "tags": [{
                            "name": "returns",
                            "text": "Promise that resolves when the panel is closed"
                        }]
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "mousedown",
                "method": "offClickHandler",
                "target": "document",
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=at-side-panel.js.map
