import { r as registerInstance, c as createEvent, h, H as Host } from './index-Cd7WF2gX.js';

const AtuiPromptThread = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'c30e2b3ca68b1f6d6132630e9b3bf021aa7f9ffe', class: "block h-full overflow-y-auto scroll-smooth pb-32", ref: (el) => (this.threadContainer = el), "data-name": "thread-container" }, !hasMessages ? (this.renderEmptyState()) : (h("div", { "data-name": "messages-container" }, this.renderMessages(), this.renderLoadingIndicator())), h("slot", { key: 'dcbf13bca286be9b0be3072167ac013acaa93542', name: "messages" })));
    }
};

export { AtuiPromptThread as atui_prompt_thread };
//# sourceMappingURL=atui-prompt-thread.entry.js.map

//# sourceMappingURL=atui-prompt-thread.entry.js.map