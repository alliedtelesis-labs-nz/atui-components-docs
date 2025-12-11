import { h, Host, } from "@stencil/core";
/**
 * @category Overlays
 * @description A sliding side panel component for displaying secondary content or forms. Features customizable positioning, backdrop, and animation options.
 *
 * @slot - Display content within the dialog
 *
 * @dependency at-button
 */
export class AtSidePanelComponent {
    el;
    /**
     * Size of the size panel
     */
    size = 'xs';
    /**
     * Title displayed in the side panel
     */
    panel_title;
    /**
     * Subtitle displayed in the side panel
     */
    panel_subtitle;
    /**
     *  Position of the side panel
     */
    origin = 'right';
    /**
     * Enables scroll overflow on the sidepanel container
     */
    has_scrollbar = true;
    /**
     * Displays a close button if set
     */
    has_close_button = true;
    /**
     * If sidepanel should use fixed positioning (will fallback to absolute)
     */
    position = 'fixed';
    /**
     * Whether to show a backdrop behind the panel, prevents any interaction with background UI.
     */
    backdrop = false;
    /**
     * Will close the sidepanel if clicked
     */
    close_backdrop = false;
    /**
     * Target an external element to use as the trigger. When provided, clicking an element wia matching data-sidepanel attribute value will toggle the side panel.
     */
    trigger_id;
    isExpanded = false;
    isOpen = false;
    /**
     * Emits an event when the side panel is toggled, with `event.detail` being true if the panel is now open
     */
    atuiSidepanelChange;
    sidePanelWrapper;
    panelDialog;
    triggerEls = [];
    externalTriggerListeners = [];
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
            if (this.backdrop === true) {
                this.panelDialog.showModal();
            }
            else {
                this.panelDialog.show();
            }
            if (this.backdrop) {
                this.panelDialog.classList.add('backdrop');
            }
            // Use requestAnimationFrame to delay the state change and apply css
            requestAnimationFrame(() => {
                this.isExpanded = true;
                this.isOpen = true;
                this.atuiSidepanelChange.emit(this.isOpen);
            });
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
            this.isOpen = false;
            this.atuiSidepanelChange.emit(this.isOpen);
            this.panelDialog.classList.remove('backdrop');
        }
    }
    /**
     * Getter method for the open state of the side panel
     * @returns The current open state of the side panel
     */
    async getIsOpen() {
        return this.isOpen;
    }
    handleClose = () => {
        this.closeSidePanel();
    };
    handleDialogClose = (event) => {
        event.preventDefault();
        if (this.isExpanded) {
            this.closeSidePanel();
        }
    };
    handleKeyDown = (event) => {
        if (event.key === 'Escape' && this.isExpanded) {
            event.preventDefault();
            this.closeSidePanel();
        }
    };
    offClickHandler(event) {
        if (!this.close_backdrop || !this.panelDialog?.open)
            return;
        if (!this.sidePanelWrapper?.contains(event.target)) {
            this.handleClose();
        }
    }
    async componentDidLoad() {
        if (this.trigger_id) {
            this.triggerEls = Array.from(document.querySelectorAll(`[data-sidepanel="${this.trigger_id}"]`));
            if (this.triggerEls.length === 0) {
                console.warn(`at-side-panel: No elements found with data-sidepanel="${this.trigger_id}"`);
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
        return (h(Host, { key: '1b648cac830f68b7d365667c02c0f032e41b64e4', "data-open": this.isOpen }, h("dialog", { key: '7b3bb3ca6f6f68c020e075d46d018fc73d59f380', ref: (el) => (this.panelDialog = el), class: `${this.backdrop ? 'backdrop' : ''}`, onClose: this.handleDialogClose, onKeyDown: this.handleKeyDown }, h("div", { key: 'a5027a63253baba4a924faf470103f3575abe9ec', "data-scrollable": this.has_scrollbar, "data-open": this.isOpen, class: `container origin-${this.origin} size-${this.size} size-${this.size} position-${this.position}`, ref: (el) => (this.sidePanelWrapper = el), "data-name": "container" }, h("header", { key: '67eadef3b6209801bc52486e5c43ae919dff76d8', class: "header", "data-name": "header" }, h("div", { key: 'ce6d608039d025cb70d85f3a303c1b8f87fda782' }, this.panel_title && (h("h3", { key: 'ca0aa0e73b205e2ec804eedc92147f9f286c5963', class: "title" }, this.panel_title)), this.panel_subtitle && (h("p", { key: '310afddb7db8fadfa947f24714b05ff14a900f2b', class: "subtitle" }, this.panel_subtitle))), this.has_close_button && (h("at-button", { key: '6e1e02abf55152555fbbcf26e32db918d4477eaa', size: "md", icon: "close", type: "secondaryText", "data-name": "panel-close", onClick: this.handleClose }))), h("div", { key: '75ead4601356ffcde0e645f235838bf85da273fe', "data-name": "content", class: "content" }, h("slot", { key: 'b02f67b39fa7104bae0bb7be3a16e39781624af9' }))))));
    }
    static get is() { return "at-side-panel"; }
    static get encapsulation() { return "scoped"; }
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
                "reflect": true,
                "attribute": "size",
                "defaultValue": "'xs'"
            },
            "panel_title": {
                "type": "string",
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
                "reflect": false,
                "attribute": "panel_title"
            },
            "panel_subtitle": {
                "type": "string",
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
                "reflect": false,
                "attribute": "panel_subtitle"
            },
            "origin": {
                "type": "string",
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
                "reflect": true,
                "attribute": "origin",
                "defaultValue": "'right'"
            },
            "has_scrollbar": {
                "type": "boolean",
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
                    "text": "Enables scroll overflow on the sidepanel container"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "has_scrollbar",
                "defaultValue": "true"
            },
            "has_close_button": {
                "type": "boolean",
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
                "attribute": "has_close_button",
                "defaultValue": "true"
            },
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "SidePanelPosition",
                    "resolved": "\"absolute\" | \"fixed\"",
                    "references": {
                        "SidePanelPosition": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-side-panel/at-side-panel.tsx",
                            "id": "src/components/at-side-panel/at-side-panel.tsx::SidePanelPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If sidepanel should use fixed positioning (will fallback to absolute)"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "position",
                "defaultValue": "'fixed'"
            },
            "backdrop": {
                "type": "boolean",
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
                    "text": "Whether to show a backdrop behind the panel, prevents any interaction with background UI."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "backdrop",
                "defaultValue": "false"
            },
            "close_backdrop": {
                "type": "boolean",
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
                    "text": "Will close the sidepanel if clicked"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "close_backdrop",
                "defaultValue": "false"
            },
            "trigger_id": {
                "type": "string",
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
                    "text": "Target an external element to use as the trigger. When provided, clicking an element wia matching data-sidepanel attribute value will toggle the side panel."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "trigger_id"
            }
        };
    }
    static get states() {
        return {
            "isExpanded": {},
            "isOpen": {}
        };
    }
    static get events() {
        return [{
                "method": "atuiSidepanelChange",
                "name": "atuiSidepanelChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits an event when the side panel is toggled, with `event.detail` being true if the panel is now open"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
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
            },
            "getIsOpen": {
                "complexType": {
                    "signature": "() => Promise<boolean>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "Getter method for the open state of the side panel",
                    "tags": [{
                            "name": "returns",
                            "text": "The current open state of the side panel"
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
