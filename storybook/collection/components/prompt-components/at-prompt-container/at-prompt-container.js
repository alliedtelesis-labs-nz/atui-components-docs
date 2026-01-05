import { Host, h, } from "@stencil/core";
import { fetchTranslations } from "../../../utils/translation";
/**
 * @category Prompt
 * @description A complete conversational interface container that combines a message thread, input field, and header. Provides a full-featured chat experience with message management, threading, and customizable UI elements.
 * @slot prompt-container-header - Custom content displayed above the message thread
 * @slot prompt-container-footer - Custom content displayed below the message input
 */
export class AtPromptContainer {
    el;
    /**
     * Array of messages to display in the conversation thread
     */
    messages = [];
    /**
     * Placeholder text for the input field
     */
    placeholder = 'Type your message here...';
    /**
     * Error text displayed when invalid is set via max length
     */
    error_text;
    /**
     * Shows loading state and disables input
     */
    loading = false;
    /**
     * Disables all interactions with the container
     */
    disabled = false;
    /**
     * Controls visibility of the "New Thread" button in the header
     */
    show_new_thread_button = true;
    /**
     * Maximum character length for input messages
     */
    max_message_length = 2000;
    /**
     * Display voting actions for assistant messages
     */
    enable_vote = true;
    /**
     * Display copy action for assistant messages
     */
    enable_copy = true;
    /**
     * Display edit action for user messages
     */
    enable_edit = false;
    /**
     * Enable streaming text animations for system/assistant messages
     * - 'none': No animation
     * - 'fade': Fade in the entire message
     * - 'words': Animate words appearing sequentially like ChatGPT
     */
    response_animation = 'words';
    currentInput = '';
    inputInvalid = false;
    inputError = '';
    isSendEnabled = true;
    translations = {};
    /**
     * Emits when a message should be sent
     */
    atSubmit;
    /**
     * Emits when the stop button is clicked
     */
    atStop;
    /**
     * Emitted when the "New Thread" button is clicked
     */
    atNewThread;
    /**
     * Emitted when a message copy action is requested
     */
    atMessageCopy;
    /**
     * Emitted when a message retry action is requested
     */
    atMessageRetry;
    /**
     * Emitted when a message edit action is requested
     */
    atMessageEdit;
    /**
     * Emitted when a message vote action is requested
     */
    atMessageVote;
    inputComponent;
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
        this.atMessageCopy.emit(event.detail);
    }
    handleMessageRetry(event) {
        this.atMessageRetry.emit(event.detail);
    }
    async handleMessageEdit(event) {
        this.atMessageEdit.emit(event.detail);
        if (this.inputComponent) {
            this.inputComponent.value = event.detail.content;
            await this.focusInput();
        }
    }
    handleMessageVote(event) {
        const messageIndex = this.messages.findIndex((msg) => msg.id === event.detail.messageId);
        if (messageIndex !== -1) {
            const updatedMessages = [...this.messages];
            updatedMessages[messageIndex] = {
                ...updatedMessages[messageIndex],
                score: event.detail.score,
            };
            this.messages = updatedMessages;
            this.atMessageVote.emit(event.detail);
        }
        this.atMessageVote.emit(event.detail);
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
        this.atNewThread.emit();
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
    handleSubmit = async (content) => {
        if (!content || this.disabled || this.loading || !this.isSendEnabled) {
            return;
        }
        this.isSendEnabled = false;
        await this.addMessage('user', content);
        this.atSubmit.emit(content);
    };
    handleStop = () => {
        this.atStop.emit();
    };
    handleNewThread = async () => {
        await this.newThread();
    };
    renderHeader() {
        if (!this.show_new_thread_button)
            return null;
        const newThreadText = this.translations?.ATUI?.PROMPT?.NEW_THREAD || 'New Thread';
        return (h("div", { class: "flex justify-end pb-16" }, h("at-button", { slot: "actions", size: "md", type: "primaryOutline", onClick: this.handleNewThread, disabled: this.loading, "data-name": "new-thread-button" }, newThreadText)));
    }
    renderFooter() {
        return (h("div", { class: "p-4" }, h("at-prompt-input", { ref: (el) => (this.inputComponent = el), placeholder: this.placeholder, in_progress: this.loading, max_length: this.max_message_length, error_text: this.error_text, "data-name": "prompt-container-input", onAtSubmit: (event) => this.handleSubmit(event.detail), onAtStop: () => this.handleStop() })));
    }
    render() {
        return (h(Host, { key: '4fcc3e3026e4effad6d5e6af3dfec03da0173550', class: "flex h-full w-full flex-col overflow-hidden", "data-name": "prompt-container" }, this.renderHeader(), h("slot", { key: '1f4223c5851e34d3ff27e80845187cc60fc20c3d', name: "prompt-container-header" }), h("div", { key: '95ba0892780d77ece9698a1fa550f070a2b27a0c', class: "min-h-0 flex-1", "data-name": "thread-wrapper" }, h("at-prompt-thread", { key: '22e3cd80b9ff190711bba48582c8e8581bf8afa4', messages: this.messages, loading: this.loading, auto_scroll: true, enable_vote: this.enable_vote, enable_copy: this.enable_copy, enable_edit: this.enable_edit, response_animation: this.response_animation, "data-name": "container-thread" })), h("div", { key: 'd42300bba20185146539ed88c7b8ff5668c459a9', class: "flex flex-col gap-4" }, this.renderFooter(), h("slot", { key: 'f4942de793feb7733485a59b5c3079eece3ce359', name: "prompt-container-footer" }))));
    }
    static get is() { return "at-prompt-container"; }
    static get properties() {
        return {
            "messages": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "PromptMessage[]",
                    "resolved": "PromptMessage[]",
                    "references": {
                        "PromptMessage": {
                            "location": "import",
                            "path": "../../../types",
                            "id": "src/types/index.ts::PromptMessage"
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
            "placeholder": {
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
                    "text": "Placeholder text for the input field"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder",
                "defaultValue": "'Type your message here...'"
            },
            "error_text": {
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
                    "text": "Error text displayed when invalid is set via max length"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error_text"
            },
            "loading": {
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
                    "text": "Shows loading state and disables input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "loading",
                "defaultValue": "false"
            },
            "disabled": {
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
                    "text": "Disables all interactions with the container"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "show_new_thread_button": {
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
                    "text": "Controls visibility of the \"New Thread\" button in the header"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show_new_thread_button",
                "defaultValue": "true"
            },
            "max_message_length": {
                "type": "number",
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
                "attribute": "max_message_length",
                "defaultValue": "2000"
            },
            "enable_vote": {
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
                    "text": "Display voting actions for assistant messages"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "enable_vote",
                "defaultValue": "true"
            },
            "enable_copy": {
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
                    "text": "Display copy action for assistant messages"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "enable_copy",
                "defaultValue": "true"
            },
            "enable_edit": {
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
                    "text": "Display edit action for user messages"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "enable_edit",
                "defaultValue": "false"
            },
            "response_animation": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "PromptResponseAnimation",
                    "resolved": "\"fade\" | \"none\" | \"words\"",
                    "references": {
                        "PromptResponseAnimation": {
                            "location": "import",
                            "path": "../../../types",
                            "id": "src/types/index.ts::PromptResponseAnimation"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Enable streaming text animations for system/assistant messages\n- 'none': No animation\n- 'fade': Fade in the entire message\n- 'words': Animate words appearing sequentially like ChatGPT"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "response_animation",
                "defaultValue": "'words'"
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
                "method": "atSubmit",
                "name": "atSubmit",
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
                "method": "atStop",
                "name": "atStop",
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
                "method": "atNewThread",
                "name": "atNewThread",
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
                "method": "atMessageCopy",
                "name": "atMessageCopy",
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
                "method": "atMessageRetry",
                "name": "atMessageRetry",
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
                "method": "atMessageEdit",
                "name": "atMessageEdit",
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
                "method": "atMessageVote",
                "name": "atMessageVote",
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
                    "signature": "(role: PromptUserRole, content: string) => Promise<void>",
                    "parameters": [{
                            "name": "role",
                            "type": "\"user\" | \"assistant\"",
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
                        "PromptUserRole": {
                            "location": "import",
                            "path": "../../../types",
                            "id": "src/types/index.ts::PromptUserRole"
                        },
                        "PromptMessage": {
                            "location": "import",
                            "path": "../../../types",
                            "id": "src/types/index.ts::PromptMessage"
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
                "name": "atSubmit",
                "method": "handleInputSubmit",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "atMessageCopy",
                "method": "handleMessageCopy",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "atMessageRetry",
                "method": "handleMessageRetry",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "atMessageEdit",
                "method": "handleMessageEdit",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "atMessageVote",
                "method": "handleMessageVote",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=at-prompt-container.js.map
