import { h, Host, } from "@stencil/core";
/**
 * @category Overlays
 * @description A modal dialog component for displaying content that requires user interaction or attention. Features backdrop click handling, escape key support, and programmatic open/close control.
 *
 * @Event - atuiDialogChange: Emitted when dialog is opened/closed.
 * @Event - atuiDialogClose: Emitted once per close, carrying the reason the dialog closed.
 *
 * @slot - Display content within the dialog
 *
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
     * Whether pressing Escape dismisses the dialog. Set to `false` alongside
     * `close_backdrop={false}` for a flow that must confirm before closing, such
     * as an unsaved-changes guard — the host then closes it via `closeDialog()`.
     */
    close_esc = true;
    /**
     * Data-id of an external element to use as the trigger. When provided, clicking the trigger will toggle the dialog.
     */
    trigger_id;
    /**
     * Internal state to track if dialog is open
     */
    isOpen = false;
    /**
     * Emits an event when the dialog is toggled, with `event.detail` being true if the dialog is now open.
     * Emitted exactly once per open and once per close, whichever path caused it.
     */
    atuiDialogChange;
    /**
     * Emits once each time the dialog closes, with `event.detail.reason` describing
     * which path closed it. Always accompanies an `atuiDialogChange(false)`.
     */
    atuiDialogClose;
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
        if (this.dialog && !this.isOpen) {
            if (this.backdrop === true) {
                this.dialog.showModal();
            }
            else {
                this.dialog.show();
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
        this.dismiss('programmatic');
    }
    /**
     * The single path through which the dialog closes.
     *
     * Every caller routes through here, and `isOpen` is cleared *before*
     * `dialog.close()` runs, so the native `close` event — which the browser
     * queues as a task rather than dispatching synchronously — finds the dialog
     * already closed and returns without emitting again. That ordering is what
     * makes the exactly-once guarantee hold rather than depending on the event
     * being asynchronous.
     */
    dismiss(reason) {
        if (!this.dialog || !this.isOpen) {
            return;
        }
        this.isOpen = false;
        this.dialog.close();
        this.dialog.removeAttribute('open');
        this.atuiDialogChange.emit(false);
        this.atuiDialogClose.emit({ reason });
    }
    /**
     * Getter method for the open state of the dialog
     * @returns The current open state of the dialog
     */
    async getIsOpen() {
        return this.isOpen;
    }
    /**
     * The native `close` event. Reached only when something closed the `<dialog>`
     * without going through `dismiss()` — a `<form method="dialog">` submit in the
     * slot, say. Anything this component initiated has already cleared `isOpen`,
     * so `dismiss()` returns immediately and nothing is emitted twice.
     */
    handleDialogClose = () => {
        this.dismiss('close');
    };
    /**
     * Escape is handled here rather than left to the browser so the close carries
     * a reason and can be suppressed. `preventDefault()` runs on both branches:
     * without it the browser would close the dialog itself, which would either
     * bypass `close_esc={false}` or report the close as `'close'`.
     */
    handleKeyDown = (event) => {
        if (event.key !== 'Escape' || !this.isOpen) {
            return;
        }
        event.preventDefault();
        if (this.close_esc) {
            this.dismiss('esc');
        }
    };
    /**
     * The browser's own Escape handling surfaces as `cancel` and can reach the
     * dialog without a keydown this component sees. Suppress it too, so
     * `close_esc={false}` holds however Escape arrives.
     */
    handleCancel = (event) => {
        event.preventDefault();
        if (this.close_esc) {
            this.dismiss('esc');
        }
    };
    offClickHandler(event) {
        if (!this.close_backdrop || !this.dialog?.open)
            return;
        if (!this.dialogWrapper?.contains(event.target)) {
            this.dismiss('backdrop');
        }
    }
    async componentDidLoad() {
        if (this.trigger_id) {
            this.triggerEls = Array.from(document.querySelectorAll(`[data-dialog="${this.trigger_id}"]`));
            if (this.triggerEls.length === 0) {
                console.warn(`atui-dialog: No elements found with data-dialog="${this.trigger_id}"`);
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
        return (h(Host, { key: '323611b509e35e579f9968cd4ea929224f94f0fd', "data-open": this.isOpen }, h("dialog", { key: '0b0af0b22335a1f956b3d849a8f7b62c4fbaec6b', ref: (el) => (this.dialog = el), "data-name": "dialog", class: `${this.backdrop ? 'backdrop' : ''}`, role: this.role, "aria-modal": "true", onClose: this.handleDialogClose, onCancel: this.handleCancel, onKeyDown: this.handleKeyDown }, h("div", { key: 'd2f2264d5da3d8bfeb0f5e0dd443e034cce19d23', "data-name": "content", ref: (el) => (this.dialogWrapper = el) }, h("slot", { key: 'ba8f3482968ea354212dc79259fcb37c53d4b94e' })))));
    }
    static get is() { return "at-dialog"; }
    static get encapsulation() { return "scoped"; }
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
                "attribute": "role",
                "defaultValue": "'dialog'"
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
                "defaultValue": "true"
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
                    "text": "Will close the dialog if clicked"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "close_backdrop",
                "defaultValue": "false"
            },
            "close_esc": {
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
                    "text": "Whether pressing Escape dismisses the dialog. Set to `false` alongside\n`close_backdrop={false}` for a flow that must confirm before closing, such\nas an unsaved-changes guard \u2014 the host then closes it via `closeDialog()`."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "close_esc",
                "defaultValue": "true"
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
                    "text": "Data-id of an external element to use as the trigger. When provided, clicking the trigger will toggle the dialog."
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
                    "text": "Emits an event when the dialog is toggled, with `event.detail` being true if the dialog is now open.\nEmitted exactly once per open and once per close, whichever path caused it."
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }, {
                "method": "atuiDialogClose",
                "name": "atuiDialogClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits once each time the dialog closes, with `event.detail.reason` describing\nwhich path closed it. Always accompanies an `atuiDialogChange(false)`."
                },
                "complexType": {
                    "original": "{ reason: AtDialogCloseReason }",
                    "resolved": "{ reason: AtDialogCloseReason; }",
                    "references": {
                        "AtDialogCloseReason": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-dialog/at-dialog.tsx",
                            "id": "src/components/at-dialog/at-dialog.tsx::AtDialogCloseReason"
                        }
                    }
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
