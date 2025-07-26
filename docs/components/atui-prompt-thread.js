import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-kcU6cSzl.js';
import { d as defineCustomElement$6 } from './p-ahrzBTL4.js';
import { d as defineCustomElement$5 } from './p-DpoOUufO.js';
import { d as defineCustomElement$4 } from './p-CHkT-iof.js';
import { d as defineCustomElement$3 } from './p-DC4GG51k.js';
import { d as defineCustomElement$2 } from './p-CYjfaOKk.js';

const AtuiPromptThread$1 = /*@__PURE__*/ proxyCustomElement(class AtuiPromptThread extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiMessageCopy = createEvent(this, "atuiMessageCopy", 7);
        this.atuiMessageRetry = createEvent(this, "atuiMessageRetry", 7);
        this.atuiMessageEdit = createEvent(this, "atuiMessageEdit", 7);
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
        return (h(Host, { key: 'bef51dfdd678fe916e5193bce26a2a06498e917d', class: "block h-full overflow-y-auto scroll-smooth pb-32", ref: (el) => (this.threadContainer = el), "data-name": "thread-container" }, !hasMessages ? (this.renderEmptyState()) : (h("div", { "data-name": "messages-container" }, this.renderMessages(), this.renderLoadingIndicator())), h("slot", { key: '029a58b6904870bf5fe406b18cc0930f8a956670', name: "messages" })));
    }
}, [260, "atui-prompt-thread", {
        "messages": [16],
        "loading": [4],
        "empty_state_title": [1],
        "empty_state_description": [1],
        "auto_scroll": [4],
        "chatbot_title": [1]
    }, [[0, "atuiCopy", "handleMessageCopy"], [0, "atuiRetry", "handleMessageRetry"], [0, "atuiEdit", "handleMessageEdit"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-prompt-thread", "atui-avatar", "atui-button", "atui-loading", "atui-prompt-message", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-prompt-thread":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiPromptThread$1);
            }
            break;
        case "atui-avatar":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-prompt-message":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtuiPromptThread = AtuiPromptThread$1;
const defineCustomElement = defineCustomElement$1;

export { AtuiPromptThread, defineCustomElement };
//# sourceMappingURL=atui-prompt-thread.js.map

//# sourceMappingURL=atui-prompt-thread.js.map