import { Host, h, } from "@stencil/core";
/**
 * @category Prompt
 * @description A message thread component for displaying user and chatbot messages in a conversation format. Supports auto-scrolling, empty states, loading indicators, and message interaction events.
 */
export class AtuiPromptThread {
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
         * Title text displayed when no messages are present
         */
        this.empty_state_title = 'No messages yet';
        /**
         * Description text displayed when no messages are present
         */
        this.empty_state_description = 'Start a conversation by sending a message';
        /**
         * Automatically scroll to the bottom when new messages are added
         */
        this.auto_scroll = true;
        /**
         * Display name for chatbot/assistant messages
         */
        this.chatbot_title = 'Assistant';
    }
    componentDidUpdate() {
        if (this.auto_scroll && this.threadContainer) {
            this.scrollToBottom();
        }
    }
    scrollToBottom() {
        if (this.threadContainer) {
            this.threadContainer.scrollTop = this.threadContainer.scrollHeight;
        }
    }
    handleMessageCopy(event) {
        const messageIndex = this.getMessageIndexFromEvent(event);
        if (messageIndex !== -1) {
            this.atuiMessageCopy.emit({
                messageId: `msg-${messageIndex}`,
                content: event.detail,
            });
        }
    }
    handleMessageRetry(event) {
        const messageIndex = this.getMessageIndexFromEvent(event);
        if (messageIndex !== -1) {
            this.atuiMessageRetry.emit({
                messageId: `msg-${messageIndex}`,
            });
        }
    }
    handleMessageEdit(event) {
        const messageIndex = this.getMessageIndexFromEvent(event);
        if (messageIndex !== -1) {
            this.atuiMessageEdit.emit({
                messageId: `msg-${messageIndex}`,
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
        return (h("div", { class: "flex flex-col gap-16", "data-name": "loading-container" }, h("atui-prompt-message", { role: "assistant", content: "Typing...", name: this.chatbot_title, loading: true, "data-name": "loading-message" })));
    }
    renderEmptyState() {
        return (h("div", { class: "flex h-full flex-col items-center justify-center p-8 text-center", "data-name": "empty-state" }, h("div", { class: "text-muted-foreground text-4xl mb-4" }, "\uD83D\uDCAC"), h("h3", { class: "text-lg mb-2 font-semibold", "data-name": "empty-state-title" }, this.empty_state_title), h("p", { class: "text-muted-foreground text-sm", "data-name": "empty-state-description" }, this.empty_state_description)));
    }
    renderMessage(message, index) {
        const role = message.role === 'system' ? 'assistant' : message.role;
        const name = message.role === 'user'
            ? message.name
            : message.name || this.chatbot_title;
        return (h("div", { "data-message-index": index }, h("atui-prompt-message", { role: role, content: message.content, name: name, avatar: message.avatar, loading: message.loading, error: message.error, error_message: message.error_message, "data-name": `message-${index}` })));
    }
    renderMessages() {
        return this.messages.map((message, index) => (h("div", { key: index, class: "flex flex-col gap-16 p-16 pb-0", "data-name": "message-container" }, this.renderMessage(message, index))));
    }
    render() {
        const hasMessages = this.messages && this.messages.length > 0;
        return (h(Host, { key: 'c30e2b3ca68b1f6d6132630e9b3bf021aa7f9ffe', class: "block h-full overflow-y-auto scroll-smooth pb-32", ref: (el) => (this.threadContainer = el), "data-name": "thread-container" }, !hasMessages ? (this.renderEmptyState()) : (h("div", { "data-name": "messages-container" }, this.renderMessages(), this.renderLoadingIndicator())), h("slot", { key: 'dcbf13bca286be9b0be3072167ac013acaa93542', name: "messages" })));
    }
    static get is() { return "atui-prompt-thread"; }
    static get properties() {
        return {
            "messages": {
                "type": "unknown",
                "attribute": "messages",
                "mutable": false,
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
            "empty_state_title": {
                "type": "string",
                "attribute": "empty_state_title",
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
                    "text": "Title text displayed when no messages are present"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'No messages yet'"
            },
            "empty_state_description": {
                "type": "string",
                "attribute": "empty_state_description",
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
                    "text": "Description text displayed when no messages are present"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Start a conversation by sending a message'"
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
            }
        };
    }
    static get events() {
        return [{
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
            }];
    }
    static get listeners() {
        return [{
                "name": "atuiCopy",
                "method": "handleMessageCopy",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "atuiRetry",
                "method": "handleMessageRetry",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "atuiEdit",
                "method": "handleMessageEdit",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=atui-prompt-thread.js.map
