import { Host, h, } from "@stencil/core";
import { PromptResponseScore, } from "../../../types";
/**
 * @category Prompt
 * @description A message thread component for displaying user and chatbot messages in a conversation format. Supports auto-scrolling, empty states, loading indicators, and message interaction events.
 * @slot thread-empty-state - Content is placed within the empty state wrapper. Used for placing custom empty state content.
 * @slot thread-messages - Content is placed within the messages wrapper. Used for placing custom messages content.
 */
export class AtPromptThread {
    constructor() {
        /**
         * Array of messages to display in the conversation thread
         */
        this.messages = [];
        /**
         * Shows a loading indicator for incoming messages
         */
        this.loading = false;
        /**
         * Automatically scroll to the bottom when new messages are added
         */
        this.auto_scroll = true;
        /**
         * Display name for chatbot/assistant messages
         */
        this.chatbot_title = 'Assistant';
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
        /**
         * Enable streaming text animations for system/assistant messages
         * - 'none': No animation (default)
         * - 'fade': Fade in the entire message
         * - 'words': Animate words appearing sequentially like ChatGPT
         */
        this.response_animation = 'words';
    }
    componentDidUpdate() {
        if (this.auto_scroll && this.scrollContainer) {
            this.scrollToBottom();
        }
    }
    /**
     * Scrolls the thread to the bottom with smooth animation
     */
    async scrollToBottom() {
        return new Promise((resolve) => {
            requestAnimationFrame(() => {
                if (this.scrollContainer) {
                    this.scrollContainer.scrollTo({
                        top: this.scrollContainer.scrollHeight,
                        behavior: 'smooth',
                    });
                }
                resolve();
            });
        });
    }
    /**
     * Scrolls the last user message to the top of the viewport
     */
    async scrollLastMessageToTop() {
        return new Promise((resolve) => {
            requestAnimationFrame(() => {
                if (!this.scrollContainer) {
                    resolve();
                    return;
                }
                const userMessages = this.scrollContainer.querySelectorAll('[data-role="user"]');
                if (!userMessages.length) {
                    resolve();
                    return;
                }
                const lastUserMessage = userMessages[userMessages.length - 1];
                lastUserMessage.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
                resolve();
            });
        });
    }
    handleVote(event) {
        event.stopPropagation();
        const messageIndex = this.messages.findIndex((msg) => msg.id === event.detail.messageId);
        if (messageIndex !== -1) {
            const updatedMessages = [...this.messages];
            updatedMessages[messageIndex] = Object.assign(Object.assign({}, updatedMessages[messageIndex]), { score: event.detail.score });
            this.messages = updatedMessages;
            this.atMessageVote.emit(event.detail);
        }
    }
    handleMessageCopy(event) {
        const messageIndex = this.getMessageIndexFromEvent(event);
        if (messageIndex !== -1) {
            this.atMessageCopy.emit({
                messageId: this.messages[messageIndex].id,
                content: event.detail,
            });
        }
    }
    handleMessageRetry(event) {
        const messageIndex = this.getMessageIndexFromEvent(event);
        if (messageIndex !== -1) {
            this.atMessageRetry.emit({
                messageId: this.messages[messageIndex].id,
            });
        }
    }
    handleMessageEdit(event) {
        const messageIndex = this.getMessageIndexFromEvent(event);
        if (messageIndex !== -1) {
            this.atMessageEdit.emit({
                messageId: this.messages[messageIndex].id,
                content: event.detail,
            });
        }
    }
    getMessageIndexFromEvent(event) {
        const target = event.target;
        const messageContainer = target.closest('[data-message-index]');
        return messageContainer
            ? parseInt(messageContainer.dataset.messageIndex || '-1', 10)
            : -1;
    }
    renderLoadingIndicator() {
        if (!this.loading)
            return null;
        return (h("div", { class: "flex flex-col gap-16", "data-name": "loading-container" }, h("at-prompt-message", { role: 'assistant', content: "Typing...", name: this.chatbot_title, loading: true, "data-name": "loading-message" })));
    }
    renderMessage(message, index) {
        const role = message.role;
        const name = message.role === 'user'
            ? message.name
            : message.name || this.chatbot_title;
        const animate = message.role === 'assistant' ? this.response_animation : 'fade';
        return (h("at-prompt-message", { role: role, content: message.content, name: name, loading: message.loading, error: message.error, error_message: message.error_message, score: message.score || PromptResponseScore.NONE, message_id: message.id, enable_vote: this.enable_vote, enable_copy: this.enable_copy, enable_edit: this.enable_edit, response_animation: animate, "data-name": `message-${index}`, "data-message-index": index }));
    }
    renderMessages() {
        return this.messages.map((message, index) => this.renderMessage(message, index));
    }
    render() {
        const hasMessages = this.messages && this.messages.length > 0;
        return (h(Host, { key: 'de960d9a9b96e1a1af1a73bf7747cee906ef0ddc', class: "block h-full", "data-name": "thread-container" }, h("div", { key: '671ff981fa52e74b6587f851589188923184eeaf', class: "flex h-full flex-col gap-16 overflow-y-auto scroll-smooth", ref: (el) => (this.scrollContainer = el), "data-name": "scroll-container" }, !hasMessages ? (h("slot", { name: "thread-empty-state" })) : (h("div", { "data-name": "thread-messages-container", class: "flex flex-col gap-16" }, this.renderMessages(), this.renderLoadingIndicator())), h("slot", { key: 'cad587f5a9489907196f95505d7298151f4880b9', name: "thread-messages" }))));
    }
    static get is() { return "at-prompt-thread"; }
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
                    "text": "Shows a loading indicator for incoming messages"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "auto_scroll": {
                "type": "boolean",
                "attribute": "auto_scroll",
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
                    "text": "Automatically scroll to the bottom when new messages are added"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "chatbot_title": {
                "type": "string",
                "attribute": "chatbot_title",
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
                    "text": "Display name for chatbot/assistant messages"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Assistant'"
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
            },
            "response_animation": {
                "type": "string",
                "attribute": "response_animation",
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
                    "text": "Enable streaming text animations for system/assistant messages\n- 'none': No animation (default)\n- 'fade': Fade in the entire message\n- 'words': Animate words appearing sequentially like ChatGPT"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'words'"
            }
        };
    }
    static get events() {
        return [{
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
            "scrollToBottom": {
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
                    "text": "Scrolls the thread to the bottom with smooth animation",
                    "tags": []
                }
            },
            "scrollLastMessageToTop": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Scrolls the last user message to the top of the viewport",
                    "tags": []
                }
            }
        };
    }
    static get listeners() {
        return [{
                "name": "atVote",
                "method": "handleVote",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "atCopy",
                "method": "handleMessageCopy",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "atRetry",
                "method": "handleMessageRetry",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "atEdit",
                "method": "handleMessageEdit",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=at-prompt-thread.js.map
