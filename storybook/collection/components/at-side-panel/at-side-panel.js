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
        return (h(Host, { key: '7022fcf7fd9994a6626b37ae3b527439942e152e', "data-open": this.isOpen }, h("dialog", { key: '2177227e3323c245634d15751304f052f62d47b1', ref: (el) => (this.panelDialog = el), class: `${this.backdrop ? 'backdrop' : ''}`, onClose: this.handleDialogClose, onKeyDown: this.handleKeyDown }, h("div", { key: 'dad6b2ab4c422899cfe5042dbd055d8a02350c49', "data-scrollable": this.has_scrollbar, "data-open": this.isOpen, class: `container origin-${this.origin} width-${this.size} size-${this.size} position-${this.position}`, ref: (el) => (this.sidePanelWrapper = el), "data-name": "container" }, h("header", { key: 'cc715358bbb281bd064b4c8019c82dbfbb6bc4d5', class: "header", "data-name": "header" }, h("div", { key: '467293ad83f4f24b463a06693c3db5b1634ddfa5' }, h("slot", { key: '9dbed0e15d9e8c3ef2645cf8edfcfd2473dc7373', name: "title" }), this.panel_title && (h("h3", { key: '6cd4aa25f43e2625aa2e402d20ade4d2484789c9', class: "title" }, this.panel_title)), this.panel_subtitle && (h("p", { key: '5502c2dfb835be49c010545034bc5c398d85d0da', class: "subtitle" }, this.panel_subtitle))), h("div", { key: '71aeb3191498704fb852a292427a8126b38a05ec' }, h("slot", { key: '52a1a7a0686aedc96658323b99b44be321e0aaad', name: "actions" }), this.has_close_button && (h("at-button", { key: '4560fee786df65ac1eeabd036983de3dc6566845', size: "md", type: "secondaryText", "data-name": "panel-close", onClick: this.handleClose }, h("at-icon", { key: '6229469601ef6fe01caf332af3761b1ea2cb09fc', slot: "icon", name: "close" }))))), h("div", { key: '155063c6ff3868040d8bd8c05bb6a301da19a297', "data-name": "content", class: "content" }, h("slot", { key: '5dff5be7178c6bcab61e1c6c50879ce93aadeafc' }))))));
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
                    "original": "AtSidePanelSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
                    "references": {
                        "AtSidePanelSize": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-side-panel/at-side-panel.tsx",
                            "id": "src/components/at-side-panel/at-side-panel.tsx::AtSidePanelSize"
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
                    "original": "AtSidePanelDirection",
                    "resolved": "\"left\" | \"right\"",
                    "references": {
                        "AtSidePanelDirection": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-side-panel/at-side-panel.tsx",
                            "id": "src/components/at-side-panel/at-side-panel.tsx::AtSidePanelDirection"
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
                    "original": "AtSidePanelPosition",
                    "resolved": "\"absolute\" | \"fixed\"",
                    "references": {
                        "AtSidePanelPosition": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-side-panel/at-side-panel.tsx",
                            "id": "src/components/at-side-panel/at-side-panel.tsx::AtSidePanelPosition"
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
