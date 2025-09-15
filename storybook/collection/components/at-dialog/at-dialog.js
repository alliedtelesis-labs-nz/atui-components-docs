import { h } from "@stencil/core";
/**
 * @category Overlays
 * @description A modal dialog component for displaying content that requires user interaction or attention. Features backdrop click handling, escape key support, and programmatic open/close control.
 *
 * @slot - Content placed inside of the dialog box
 */
export class AtDialogComponent {
    constructor() {
        /**
         * Role of the dialog element. Can be either 'dialog' or 'alertdialog'
         */
        this.role = 'dialog';
        /**
         * Whether to show a backdrop behind the dialog
         */
        this.backdrop = false;
        /**
         * Internal state to track if dialog is open
         */
        this.isOpen = false;
        this.triggerEls = [];
        this.externalTriggerListeners = [];
        this.handleDialogClose = (event) => {
            event.preventDefault();
            if (this.isOpen) {
                this.closeDialog();
            }
        };
        this.handleKeyDown = (event) => {
            if (event.key === 'Escape' && this.isOpen) {
                event.preventDefault();
                this.closeDialog();
            }
        };
    }
    /**
     * Toggles the dialog modal between open and closed states
     * @returns Promise that resolves when the dialog state is toggled
     */
    async toggleDialog() {
        if (this.isOpen) {
            await this.closeDialog();
        }
        else {
            await this.openDialog();
        }
    }
    /**
     * Opens the dialog modal
     * @returns Promise that resolves when the dialog is opened
     */
    async openDialog() {
        const dialog = this.el.querySelector('dialog');
        if (dialog && !this.isOpen) {
            dialog.showModal();
            this.isOpen = true;
            if (this.backdrop) {
                dialog.classList.add('backdrop');
            }
        }
    }
    /**
     * Closes the dialog modal
     * @returns Promise that resolves when the dialog is closed
     */
    async closeDialog() {
        const dialog = this.el.querySelector('dialog');
        if (dialog && this.isOpen) {
            dialog.close();
            this.isOpen = false;
            dialog.removeAttribute('open');
            dialog.classList.remove('backdrop');
        }
    }
    async componentDidLoad() {
        if (this.trigger_id) {
            this.triggerEls = Array.from(document.querySelectorAll(`[data-id="${this.trigger_id}"]`));
            if (this.triggerEls.length === 0) {
                console.warn(`atui-dialog: No elements found with data-id="${this.trigger_id}"`);
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
            await this.toggleDialog();
        };
        const keydownHandler = async (event) => {
            switch (event.key) {
                case 'Enter':
                case ' ':
                    event.preventDefault();
                    await this.toggleDialog();
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
        return (h("dialog", { key: 'e799c0a20d3cacb8ba28254bd3d893d34c86a7d3', class: `c-atui-dialog ${this.backdrop ? 'backdrop' : ''}`, id: this.dialog_id, "data-name": "dialog", role: this.role, "aria-modal": "true", onClose: this.handleDialogClose, onKeyDown: this.handleKeyDown }, h("div", { key: 'a04f3e29394f69e4764718dbd4658af3bf60188b', class: "backdrop-content" }, h("slot", { key: '592be5b5d21f4eeacde5a604699a901e735033b9' }))));
    }
    static get is() { return "at-dialog"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-dialog.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-dialog.css"]
        };
    }
    static get properties() {
        return {
            "dialog_id": {
                "type": "string",
                "attribute": "dialog_id",
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
                    "text": "ID of the dialog element (used to open and close the modal)"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "role": {
                "type": "string",
                "attribute": "role",
                "mutable": false,
                "complexType": {
                    "original": "'dialog' | 'alertdialog'",
                    "resolved": "\"alertdialog\" | \"dialog\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Role of the dialog element. Can be either 'dialog' or 'alertdialog'"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'dialog'"
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
                    "text": "Whether to show a backdrop behind the dialog"
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
                    "text": "Data-id of an external element to use as the trigger. When provided, clicking the trigger will toggle the dialog."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isOpen": {}
        };
    }
    static get methods() {
        return {
            "toggleDialog": {
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
                    "text": "Toggles the dialog modal between open and closed states",
                    "tags": [{
                            "name": "returns",
                            "text": "Promise that resolves when the dialog state is toggled"
                        }]
                }
            },
            "openDialog": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLDialogElement": {
                            "location": "global",
                            "id": "global::HTMLDialogElement"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Opens the dialog modal",
                    "tags": [{
                            "name": "returns",
                            "text": "Promise that resolves when the dialog is opened"
                        }]
                }
            },
            "closeDialog": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLDialogElement": {
                            "location": "global",
                            "id": "global::HTMLDialogElement"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Closes the dialog modal",
                    "tags": [{
                            "name": "returns",
                            "text": "Promise that resolves when the dialog is closed"
                        }]
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=at-dialog.js.map
