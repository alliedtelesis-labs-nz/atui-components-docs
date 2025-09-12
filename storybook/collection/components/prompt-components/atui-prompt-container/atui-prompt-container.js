import { Host, h, } from "@stencil/core";
import { fetchTranslations } from "../../../utils/translation";
/**
 * @category Prompt
 * @description A complete conversational interface container that combines a message thread, input field, and header. Provides a full-featured chat experience with message management, threading, and customizable UI elements.
 * @slot prompt-container-header - Custom content displayed above the message thread
 * @slot prompt-container-footer - Custom content displayed below the message input
 */
export class AtuiPromptContainer {
    constructor() {
        /**
         * Array of messages to display in the conversation thread
         */
        this.messages = [];
        /**
         * Title displayed in the header section
         */
        this.header_title = 'AI Assistant';
        /**
         * Placeholder text for the input field
         */
        this.placeholder = 'Type your message here...';
        /**
         * Shows loading state and disables input
         */
        this.loading = false;
        /**
         * Disables all interactions with the container
         */
        this.disabled = false;
        /**
         * Controls visibility of the header section
         */
        this.show_header = true;
        /**
         * Controls visibility of the "New Thread" button in the header
         */
        this.show_new_thread_button = true;
        /**
         * Maximum character length for input messages
         */
        this.max_message_length = 2000;
        /**
         * Display voting actions for assistant messages
         */
        this.enable_vote = true;
        /**
         * Display copy action for assistant messages
         */
        this.enable_copy = true;
        /**
         * Display edit action for user messages
         */
        this.enable_edit = false;
        this.currentInput = '';
        this.inputInvalid = false;
        this.inputError = '';
        this.isSendEnabled = true;
        this.translations = {};
        this.handleSubmit = async (content) => {
            if (!content || this.disabled || this.loading || !this.isSendEnabled) {
                return;
            }
            this.isSendEnabled = false;
            await this.addMessage('user', content);
            this.atuiSubmit.emit(content);
        };
        this.handleStop = () => {
            this.atuiStop.emit();
        };
        this.handleNewThread = async () => {
            await this.newThread();
        };
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    handleInputSubmit(event) {
        const content = event.detail.trim();
        if (content && this.isSendEnabled && !this.disabled && !this.loading) {
            this.handleSubmit(content);
        }
    }
    handleMessageCopy(event) {
        this.atuiMessageCopy.emit(event.detail);
    }
    handleMessageRetry(event) {
        this.atuiMessageRetry.emit(event.detail);
    }
    async handleMessageEdit(event) {
        this.atuiMessageEdit.emit(event.detail);
        if (this.inputComponent) {
            this.inputComponent.value = event.detail.content;
            await this.focusInput();
        }
    }
    handleMessageVote(event) {
        event.stopPropagation();
        const messageIndex = this.messages.findIndex((msg) => msg.id === event.detail.messageId);
        if (messageIndex !== -1) {
            const updatedMessages = [...this.messages];
            updatedMessages[messageIndex] = Object.assign(Object.assign({}, updatedMessages[messageIndex]), { vote_status: event.detail.score });
            this.messages = updatedMessages;
        }
    }
    /**
     * Programmatically add a message to the conversation thread
     * @param role - The message role
     * @param content - The message content
     */
    async addMessage(role, content) {
        const message = {
            id: Date.now().toString(),
            role,
            content,
        };
        this.messages = [...this.messages, message];
    }
    /**
     * Append content to the last message in the thread (useful for streaming responses)
     * @param content - The content to append
     * @returns Promise<boolean> - Returns true if successful, false if no messages exist or last message is not from assistant
     */
    async appendToLastMessage(content) {
        if (this.messages.length === 0)
            return false;
        const lastMessage = this.messages[this.messages.length - 1];
        if (lastMessage.role !== 'assistant')
            return false;
        lastMessage.content += content;
        this.messages = [...this.messages];
        return true;
    }
    /**
     * Start a new conversation thread by clearing all messages and resetting state
     */
    async newThread() {
        this.messages = [];
        this.currentInput = '';
        this.isSendEnabled = true;
        this.atuiNewThread.emit();
        setTimeout(() => this.focusInput(), 100);
    }
    /**
     * Control the send button state programmatically
     * @param enabled - Whether the send functionality should be enabled
     */
    async setSendEnabled(enabled) {
        this.isSendEnabled = enabled;
    }
    /**
     * Programmatically focus the input field
     */
    async focusInput() {
        if (this.inputComponent) {
            setTimeout(() => {
                this.inputComponent.focus();
            }, 0);
        }
    }
    renderHeader() {
        var _a, _b, _c;
        if (!this.show_header)
            return null;
        const newThreadText = ((_c = (_b = (_a = this.translations) === null || _a === void 0 ? void 0 : _a.ATUI) === null || _b === void 0 ? void 0 : _b.PROMPT) === null || _c === void 0 ? void 0 : _c.NEW_THREAD) || 'New Thread';
        return (h("atui-header", { size: "h3", header_title: this.header_title, subtitle: this.subtitle, border: true, "data-name": "prompt-container-header" }, this.show_new_thread_button && (h("atui-button", { slot: "actions", size: "sm", type: "secondaryText", onClick: this.handleNewThread, disabled: this.loading, "data-name": "new-thread-button" }, newThreadText))));
    }
    renderFooter() {
        return (h("div", { class: "p-4" }, h("atui-prompt-input", { ref: (el) => (this.inputComponent = el), placeholder: this.placeholder, in_progress: this.loading, max_length: this.max_message_length, error_text: this.error_text, "data-name": "prompt-container-input", onAtuiSubmit: (event) => this.handleSubmit(event.detail), onAtuiStop: () => this.handleStop() })));
    }
    render() {
        return (h(Host, { key: 'ebb9b82721b0812c9f21139df13808478a03e8ac', class: "flex h-full w-full flex-col overflow-hidden", "data-name": "prompt-container" }, this.renderHeader(), h("slot", { key: '2124122c3fdb640825e351355d5535f74ce0de4b', name: "prompt-container-header" }), h("div", { key: 'fb818dffdebc5d911e97b115ba3110980816f434', class: "min-h-0 flex-1", "data-name": "thread-wrapper" }, h("atui-prompt-thread", { key: '424ef20d956e1e667ed3ee97c15b5e4f1ae53e7e', messages: this.messages, loading: this.loading, auto_scroll: true, enable_vote: this.enable_vote, enable_copy: this.enable_copy, enable_edit: this.enable_edit, "data-name": "container-thread" })), h("div", { key: 'f4ad7650d32a04fef7a811209bfffca5ab6643e7', class: "flex flex-col gap-4" }, this.renderFooter(), h("slot", { key: '0af32a02bdd958258e1250c3c58b6af2de545099', name: "prompt-container-footer" }))));
    }
    static get is() { return "atui-prompt-container"; }
    static get properties() {
        return {
            "messages": {
                "type": "unknown",
                "attribute": "messages",
                "mutable": true,
                "complexType": {
                    "original": "PromptMessage[]",
                    "resolved": "PromptMessage[]",
                    "references": {
                        "PromptMessage": {
                            "location": "import",
                            "path": "../../../types/prompt",
                            "id": "src/types/prompt.ts::PromptMessage"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Array of messages to display in the conversation thread"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "header_title": {
                "type": "string",
                "attribute": "header_title",
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
                    "text": "Title displayed in the header section"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'AI Assistant'"
            },
            "subtitle": {
                "type": "string",
                "attribute": "subtitle",
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
                    "text": "Subtitle displayed below the title in the header"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "placeholder": {
                "type": "string",
                "attribute": "placeholder",
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
                    "text": "Placeholder text for the input field"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Type your message here...'"
            },
            "error_text": {
                "type": "string",
                "attribute": "error_text",
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
                    "text": "Error text displayed when invalid is set via max length"
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
                    "text": "Shows loading state and disables input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                    "text": "Disables all interactions with the container"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "show_header": {
                "type": "boolean",
                "attribute": "show_header",
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
                    "text": "Controls visibility of the header section"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "show_new_thread_button": {
                "type": "boolean",
                "attribute": "show_new_thread_button",
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
                    "text": "Controls visibility of the \"New Thread\" button in the header"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "max_message_length": {
                "type": "number",
                "attribute": "max_message_length",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maximum character length for input messages"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "2000"
            },
            "enable_vote": {
                "type": "boolean",
                "attribute": "enable_vote",
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
                    "text": "Display voting actions for assistant messages"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "enable_copy": {
                "type": "boolean",
                "attribute": "enable_copy",
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
                    "text": "Display copy action for assistant messages"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "enable_edit": {
                "type": "boolean",
                "attribute": "enable_edit",
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
                    "text": "Display edit action for user messages"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "currentInput": {},
            "inputInvalid": {},
            "inputError": {},
            "isSendEnabled": {},
            "translations": {}
        };
    }
    static get events() {
        return [{
                "method": "atuiSubmit",
                "name": "atuiSubmit",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits when a message should be sent"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "atuiStop",
                "name": "atuiStop",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits when the stop button is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "atuiNewThread",
                "name": "atuiNewThread",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the \"New Thread\" button is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "atuiMessageCopy",
                "name": "atuiMessageCopy",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a message copy action is requested"
                },
                "complexType": {
                    "original": "{\n        messageId: string;\n        content: string;\n    }",
                    "resolved": "{ messageId: string; content: string; }",
                    "references": {}
                }
            }, {
                "method": "atuiMessageRetry",
                "name": "atuiMessageRetry",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a message retry action is requested"
                },
                "complexType": {
                    "original": "{ messageId: string }",
                    "resolved": "{ messageId: string; }",
                    "references": {}
                }
            }, {
                "method": "atuiMessageEdit",
                "name": "atuiMessageEdit",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a message edit action is requested"
                },
                "complexType": {
                    "original": "{\n        messageId: string;\n        content: string;\n    }",
                    "resolved": "{ messageId: string; content: string; }",
                    "references": {}
                }
            }, {
                "method": "atuiMessageVote",
                "name": "atuiMessageVote",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a message vote action is requested"
                },
                "complexType": {
                    "original": "{\n        messageId: string;\n        score: number;\n    }",
                    "resolved": "{ messageId: string; score: number; }",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "addMessage": {
                "complexType": {
                    "signature": "(role: MessageRole, content: string) => Promise<void>",
                    "parameters": [{
                            "name": "role",
                            "type": "\"user\" | \"assistant\" | \"system\"",
                            "docs": "- The message role"
                        }, {
                            "name": "content",
                            "type": "string",
                            "docs": "- The message content"
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "MessageRole": {
                            "location": "import",
                            "path": "../../../types/prompt",
                            "id": "src/types/prompt.ts::MessageRole"
                        },
                        "PromptMessage": {
                            "location": "import",
                            "path": "../../../types/prompt",
                            "id": "src/types/prompt.ts::PromptMessage"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Programmatically add a message to the conversation thread",
                    "tags": [{
                            "name": "param",
                            "text": "role - The message role"
                        }, {
                            "name": "param",
                            "text": "content - The message content"
                        }]
                }
            },
            "appendToLastMessage": {
                "complexType": {
                    "signature": "(content: string) => Promise<boolean>",
                    "parameters": [{
                            "name": "content",
                            "type": "string",
                            "docs": "- The content to append"
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "Append content to the last message in the thread (useful for streaming responses)",
                    "tags": [{
                            "name": "param",
                            "text": "content - The content to append"
                        }, {
                            "name": "returns",
                            "text": "Promise<boolean> - Returns true if successful, false if no messages exist or last message is not from assistant"
                        }]
                }
            },
            "newThread": {
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
                    "text": "Start a new conversation thread by clearing all messages and resetting state",
                    "tags": []
                }
            },
            "setSendEnabled": {
                "complexType": {
                    "signature": "(enabled: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "enabled",
                            "type": "boolean",
                            "docs": "- Whether the send functionality should be enabled"
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
                    "text": "Control the send button state programmatically",
                    "tags": [{
                            "name": "param",
                            "text": "enabled - Whether the send functionality should be enabled"
                        }]
                }
            },
            "focusInput": {
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
                    "text": "Programmatically focus the input field",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "atuiSubmit",
                "method": "handleInputSubmit",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "atuiMessageCopy",
                "method": "handleMessageCopy",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "atuiMessageRetry",
                "method": "handleMessageRetry",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "atuiMessageEdit",
                "method": "handleMessageEdit",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "atuiMessageVote",
                "method": "handleMessageVote",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=atui-prompt-container.js.map
