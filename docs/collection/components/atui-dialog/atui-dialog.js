import { h } from "@stencil/core";
/**
 * @category Overlays
 * @description A modal dialog component for displaying content that requires user interaction or attention. Features backdrop click handling, escape key support, and programmatic open/close control.
 *
 * @slot - Content placed inside of the dialog box
 */
export class AtuiDialogComponent {
    constructor() {
        /**
         * Role of the dialog element. Can be either 'dialog' or 'alertdialog'
         */
        this.role = 'dialog';
        /**
         * Internal state to track if dialog is open
         */
        this.isOpen = false;
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
     * Opens the dialog modal
     * @returns Promise that resolves when the dialog is opened
     */
    async openDialog() {
        const dialog = this.el.querySelector('dialog');
        if (dialog && !this.isOpen) {
            dialog.showModal();
            this.isOpen = true;
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
        }
    }
    render() {
        return (h("dialog", { key: 'd737bf3473fb6aaac60827f6eeaa9689a55303ca', class: "c-atui-dialog", id: this.dialog_id, "data-name": "dialog", role: this.role, "aria-modal": "true", onClose: this.handleDialogClose, onKeyDown: this.handleKeyDown }, h("div", { key: '2bea7064f764cd226f919f998cea6c338f0b207a', class: "backdrop-content" }, h("slot", { key: '21af482a740f2b23964556dced96795bfcaffb12' }))));
    }
    static get is() { return "atui-dialog"; }
    static get originalStyleUrls() {
        return {
            "$": ["atui-dialog.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["atui-dialog.css"]
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
//# sourceMappingURL=atui-dialog.js.map
