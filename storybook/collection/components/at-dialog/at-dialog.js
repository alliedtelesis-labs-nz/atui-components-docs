import { h, Host, } from "@stencil/core";
/**
 * @category Overlays
 * @description A modal dialog component for displaying content that requires user interaction or attention. Features backdrop click handling, escape key support, and programmatic open/close control.
 *
 * @slot - Display content within the dialog
 */
export class AtDialogComponent {
    el;
    /**
     * Role of the dialog element. Can be either 'dialog' or 'alertdialog'
     */
    role = 'dialog';
    /**
     * Whether to show a backdrop behind the panel, prevents any interaction with background UI.
     */
    backdrop = true;
    /**
     * Will close the dialog if clicked
     */
    close_backdrop = false;
    /**
     * Data-id of an external element to use as the trigger. When provided, clicking the trigger will toggle the dialog.
     */
    trigger_id;
    /**
     * Internal state to track if dialog is open
     */
    isOpen = false;
    /**
     * Emits an event when the dialog is toggled, with `event.detail` being true if the dialog is now open
     */
    atuiDialogChange;
    dialog;
    dialogWrapper;
    triggerEls = [];
    externalTriggerListeners = [];
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
            if (this.backdrop === true) {
                dialog.showModal();
            }
            else {
                dialog.show();
            }
            this.isOpen = true;
            this.atuiDialogChange.emit(this.isOpen);
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
            this.atuiDialogChange.emit(this.isOpen);
            dialog.removeAttribute('open');
        }
    }
    /**
     * Getter method for the open state of the dialog
     * @returns The current open state of the dialog
     */
    async getIsOpen() {
        return this.isOpen;
    }
    handleDialogClose = () => {
        if (this.isOpen) {
            this.closeDialog();
        }
    };
    handleKeyDown = (event) => {
        if (event.key === 'Escape' && this.isOpen) {
            event.preventDefault();
            this.closeDialog();
        }
    };
    offClickHandler(event) {
        if (!this.close_backdrop || !this.dialog?.open)
            return;
        if (!this.dialogWrapper?.contains(event.target)) {
            console.log('asdasd');
            this.handleDialogClose();
        }
    }
    async componentDidLoad() {
        this.dialog = this.el.querySelector('dialog');
        if (this.trigger_id) {
            this.triggerEls = Array.from(document.querySelectorAll(`[data-id="${this.trigger_id}"]`));
            if (this.triggerEls.length === 0) {
                console.warn(`atui-dialog: No elements found with data-id="${this.trigger_id}"`);
                return;
            }
            this.setupExternalTriggerListeners();
        }
        if (this.backdrop) {
            this.dialog.classList.add('backdrop');
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
        return (h(Host, { key: '4f36bfbda3e8ee3d0343e831b25d44804fd3412f' }, h("dialog", { key: '717cdffc2f07266019a66c4f3aa944a07aa6a044', part: "dialog", id: "dialog", class: `${this.backdrop ? 'backdrop' : ''}`, "data-name": "dialog", role: this.role, "aria-modal": "true", onClose: this.handleDialogClose, onKeyDown: this.handleKeyDown }, h("div", { key: '568e3107f7a9c285c3f3b972b0ff110b2ced0fea', part: "backdrop", id: "backdrop", class: "backdrop-content", ref: (el) => (this.dialogWrapper = el) }, h("slot", { key: 'ce160d14d4e683333f3fe4d0806ef98ae810dcbe' })))));
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
                    "text": "Whether to show a backdrop behind the panel, prevents any interaction with background UI."
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
                    "text": "Will close the dialog if clicked"
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
    static get events() {
        return [{
                "method": "atuiDialogChange",
                "name": "atuiDialogChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits an event when the dialog is toggled, with `event.detail` being true if the dialog is now open"
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
                    "text": "Getter method for the open state of the dialog",
                    "tags": [{
                            "name": "returns",
                            "text": "The current open state of the dialog"
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
//# sourceMappingURL=at-dialog.js.map
