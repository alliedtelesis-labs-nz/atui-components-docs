import { h } from "@stencil/core";
/**
 * @category Overlays
 * @description A toaster component for displaying messages to users. Supports toast types, positions, timeout and dismissible.
 */
export class AtToasterComponent {
    /**
     * Position of the toaster on the screen
     */
    position;
    toasts = [];
    /**
     * Adds a new toast to the toaster container
     * This method is called from ToasterService.show()
     * The toast will be automatically dismissed after timeout if it is dismissible
     *
     * @param toast The toast to add
     */
    async addToast(toast) {
        this.toasts = [...this.toasts, toast];
        if (toast.dismissible && toast.timeout > 0) {
            setTimeout(() => this.removeToast(toast.id), toast.timeout);
        }
    }
    /**
     * Removes a toast from the toaster container by its ID
     * This method is called by tapToast or clickCloseButton
     *
     * @param id The ID of the toast to remove
     */
    async removeToast(id) {
        const toastEl = document.querySelector(`.at-toast[data-id="${id}"]`);
        toastEl.classList.add('close');
        toastEl.addEventListener('animationend', () => {
            this.toasts = this.toasts.filter((toast) => toast.id !== id);
        });
    }
    /**
     * Removes a toast from the toaster container by tapping the toast
     *
     * @param toast The toast that was tapped
     */
    tapToast(toast) {
        if (toast.dismissible) {
            this.removeToast(toast.id);
        }
    }
    /**
     * Removes a toast from the toaster container by clicking the close button
     *
     * @param toast The toast to remove
     */
    clickCloseButton(toast) {
        this.removeToast(toast.id);
    }
    classSet(toast) {
        return `at-toast ${toast.dismissible ? '' : 'undismissible'}`;
    }
    /**
     * Renders the toaster container and all active toasts.
     * Each toast is wrapped with <at-message> for UI presentation.
     */
    render() {
        return (h("div", { key: '2a95481bd4df0b0d84e026e6706753d45a705f6e', class: `at-toaster ${this.position}` }, this.toasts.map((toast) => (h("div", { class: this.classSet(toast), key: toast.id, "data-id": toast.id, onClick: () => this.tapToast(toast) }, h("at-message", { type: toast.type, message_title: toast.title, content: toast.message }, toast.closeButton && (h("at-button", { slot: "actions", type: "secondaryText", size: "sm", icon: "close", onClick: (event) => {
                event.stopPropagation();
                this.clickCloseButton(toast);
            } }))))))));
    }
    static get is() { return "at-toaster"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-toaster.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-toaster.css"]
        };
    }
    static get properties() {
        return {
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ToastPosition",
                    "resolved": "\"bottom-center\" | \"bottom-left\" | \"bottom-right\" | \"top-center\" | \"top-left\" | \"top-right\"",
                    "references": {
                        "ToastPosition": {
                            "location": "import",
                            "path": "../../types/toast",
                            "id": "src/types/toast.ts::ToastPosition",
                            "referenceLocation": "ToastPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position of the toaster on the screen"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "position"
            }
        };
    }
    static get states() {
        return {
            "toasts": {}
        };
    }
    static get methods() {
        return {
            "addToast": {
                "complexType": {
                    "signature": "(toast: Toast) => Promise<void>",
                    "parameters": [{
                            "name": "toast",
                            "type": "Toast",
                            "docs": "The toast to add"
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "Toast": {
                            "location": "import",
                            "path": "../../types/toast",
                            "id": "src/types/toast.ts::Toast",
                            "referenceLocation": "Toast"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Adds a new toast to the toaster container\nThis method is called from ToasterService.show()\nThe toast will be automatically dismissed after timeout if it is dismissible",
                    "tags": [{
                            "name": "param",
                            "text": "toast The toast to add"
                        }]
                }
            },
            "removeToast": {
                "complexType": {
                    "signature": "(id: number) => Promise<void>",
                    "parameters": [{
                            "name": "id",
                            "type": "number",
                            "docs": "The ID of the toast to remove"
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Removes a toast from the toaster container by its ID\nThis method is called by tapToast or clickCloseButton",
                    "tags": [{
                            "name": "param",
                            "text": "id The ID of the toast to remove"
                        }]
                }
            }
        };
    }
}
