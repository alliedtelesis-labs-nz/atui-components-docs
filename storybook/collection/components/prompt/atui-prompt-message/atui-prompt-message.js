import { Host, h, Fragment, } from "@stencil/core";
import { cva } from "class-variance-authority";
import { fetchTranslations } from "../../../utils/translation";
const messageVariants = cva('text-base max-w-4xl rounded-lg px-8 py-4', {
    variants: {
        role: {
            user: 'ml-auto bg-surface-2 text-dark',
            assistant: 'mr-auto text-dark',
        },
        loading: {
            true: 'animate-pulse',
            false: '',
        },
    },
    defaultVariants: {
        role: 'user',
        loading: false,
    },
});
/**
 * @category Prompt
 * @description A message component for displaying individual chat messages with different roles (user, assistant). Supports optional avatars, loading states, error states, and interactive actions like copy, edit, and retry.
 */
export class AtuiPromptMessage {
    constructor() {
        /**
         * The role/type of the message sender (only 'user' and 'assistant' are supported)
         */
        this.role = 'user';
        /**
         * The message content text
         */
        this.content = '';
        /**
         * Shows loading state with animated placeholder content
         */
        this.loading = false;
        /**
         * Shows error state styling and enables retry action
         */
        this.error = false;
        this.handleCopy = () => {
            this.atuiCopy.emit(this.content);
        };
        this.handleRetry = () => {
            this.atuiRetry.emit();
        };
        this.handleEdit = () => {
            this.atuiEdit.emit(this.content);
        };
        this.handleFeedbackPositive = () => {
            this.atuiPositiveFeedback.emit();
        };
        this.handleFeedbackNegative = () => {
            this.atuiNegativeFeedback.emit();
        };
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.errorEl);
    }
    renderAvatar() {
        const variant = this.role === 'user' ? 'primary' : 'secondary';
        const initials = this.name
            ? this.name.charAt(0).toUpperCase()
            : this.role === 'user'
                ? 'U'
                : 'A';
        return (h("atui-avatar", { src: this.avatar, alt: this.name || this.role, initials: initials, variant: variant, size: "sm", "data-name": "message-avatar" }));
    }
    renderActions() {
        if (this.loading)
            return null;
        return (h("div", { class: "mt-2 flex items-center justify-end gap-2", "data-name": "message-actions" }, this.role === 'user' && (h("atui-tooltip", { position: "top" }, h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", icon: "edit", class: "text-xs", onClick: this.handleEdit, "data-name": "edit-button" }), h("span", { slot: "tooltip-content" }, "Edit"))), this.role === 'assistant' && (h(Fragment, null, h("atui-tooltip", { position: "top" }, h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", icon: "thumb_up", onClick: this.handleFeedbackPositive, "data-name": "feedback-positive-button" }), h("span", { slot: "tooltip-content" }, "Helpful")), h("atui-tooltip", { position: "top" }, h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", icon: "thumb_down", onClick: this.handleFeedbackNegative, "data-name": "feedback-negative-button" }), h("span", { slot: "tooltip-content" }, "Not helpful")), h("atui-tooltip", { position: "top" }, h("atui-button", { slot: "tooltip-trigger", size: "sm", icon: "content_copy", type: "secondaryText", onClick: this.handleCopy, "data-name": "copy-button" }), h("span", { slot: "tooltip-content" }, "Copy")))), this.role === 'assistant' && this.error && (h("atui-tooltip", { position: "top" }, h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", icon: "refresh", onClick: this.handleRetry, "data-name": "retry-button" }), h("span", { slot: "tooltip-content" }, "Retry")))));
    }
    renderContent() {
        if (this.loading) {
            return (h("div", { class: "py-8", "data-name": "loading-content" }, h("atui-loading", { variant: "typing", size: "sm" })));
        }
        if (this.error) {
            return (h("div", { class: "space-y-2", ref: (el) => (this.errorEl = el), "data-name": "error-content" }, h("p", { class: "text-destructive" }, this.error_message ||
                this.translations.ATUI.PROMPT
                    .ERROR_GENERATING_RESPONSE)));
        }
        return (h("div", { class: "prose prose-sm preserve-newlines max-w-none", "data-name": "message-content" }, h("slot", null), this.content));
    }
    render() {
        const messageClasses = messageVariants({
            role: this.role,
            loading: this.loading,
        });
        return (h(Host, { key: '1db966cab534c25d160b3a8dd514f5a1ce29284c', class: "flex w-full gap-8", "data-name": "message-container" }, this.avatar && this.renderAvatar(), h("div", { key: '11bb6ee96a61e622e28f2f91c57de9d1ab9907d1', class: "space-y-1 flex-1" }, h("div", { key: '686dd51e7808c12746cc0020247a83be5e89da9a', class: "flex items-center gap-8" }, this.name && (h("span", { key: 'c3b4c62fb5b05309aca02f4d9a28221af2368885', class: "text-sm text-light", "data-name": "message-name" }, this.name))), h("div", { key: 'ed3a8491ead700933e9700ace54e40b603c0c92f', class: messageClasses }, this.renderContent()), this.renderActions())));
    }
    static get is() { return "atui-prompt-message"; }
    static get properties() {
        return {
            "role": {
                "type": "string",
                "attribute": "role",
                "mutable": false,
                "complexType": {
                    "original": "Exclude<MessageRole, 'system'>",
                    "resolved": "\"assistant\" | \"user\"",
                    "references": {
                        "Exclude": {
                            "location": "global",
                            "id": "global::Exclude"
                        },
                        "MessageRole": {
                            "location": "import",
                            "path": "../../../types/prompt",
                            "id": "src/types/prompt.ts::MessageRole"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The role/type of the message sender (only 'user' and 'assistant' are supported)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'user'"
            },
            "content": {
                "type": "string",
                "attribute": "content",
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
                    "text": "The message content text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "avatar": {
                "type": "string",
                "attribute": "avatar",
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
                    "text": "URL for a custom avatar image"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "name": {
                "type": "string",
                "attribute": "name",
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
                    "text": "Display name for the message sender"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "loading": {
                "type": "boolean",
                "attribute": "loading",
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
                    "text": "Shows loading state with animated placeholder content"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "error": {
                "type": "boolean",
                "attribute": "error",
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
                    "text": "Shows error state styling and enables retry action"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "error_message": {
                "type": "string",
                "attribute": "error_message",
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
                    "text": "Custom error message text (defaults to generic error message)"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "translations": {}
        };
    }
    static get events() {
        return [{
                "method": "atuiCopy",
                "name": "atuiCopy",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the copy action is triggered"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "atuiPositiveFeedback",
                "name": "atuiPositiveFeedback",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when positive feedback action is triggered"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "atuiNegativeFeedback",
                "name": "atuiNegativeFeedback",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when negative feedback action is triggered"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "atuiRetry",
                "name": "atuiRetry",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the retry action is triggered (for assistant messages with errors)"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "atuiEdit",
                "name": "atuiEdit",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the edit action is triggered (for user messages)"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-prompt-message.js.map
