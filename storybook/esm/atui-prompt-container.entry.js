import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-BvDeEv6o.js';
import { f as fetchTranslations } from './translation-DuLooPsr.js';

const AtuiPromptContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiSubmit = createEvent(this, "atuiSubmit", 7);
        this.atuiStop = createEvent(this, "atuiStop", 7);
        this.atuiNewThread = createEvent(this, "atuiNewThread", 7);
        this.atuiMessageCopy = createEvent(this, "atuiMessageCopy", 7);
        this.atuiMessageRetry = createEvent(this, "atuiMessageRetry", 7);
        this.atuiMessageEdit = createEvent(this, "atuiMessageEdit", 7);
        this.atuiMessageVote = createEvent(this, "atuiMessageVote", 7);
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
        return (h(Host, { key: '917e270cd63941ff59a50f8e1ff8c88763811ea0', class: "flex h-full w-full flex-col overflow-hidden", "data-name": "prompt-container" }, this.renderHeader(), h("slot", { key: '981c3c350f1ec08bf17b559ce4ffb691639d8971', name: "prompt-container-header" }), h("div", { key: '12e18d43113545c8a1f5de896d5cfe036ae3256a', class: "min-h-0 flex-1", "data-name": "thread-wrapper" }, h("atui-prompt-thread", { key: '2f22ce7bda58e229b1d3b177d703d977aa563a57', messages: this.messages, loading: this.loading, auto_scroll: true, enable_vote: this.enable_vote, enable_copy: this.enable_copy, enable_edit: this.enable_edit, "data-name": "container-thread" })), h("div", { key: '581fcdc1e8f3fbec2383a12d6365439a83b94340', class: "flex flex-col gap-4" }, this.renderFooter(), h("slot", { key: '31852c347b013a39f8560b3bc596e03411d80dd9', name: "prompt-container-footer" }))));
    }
    get el() { return getElement(this); }
};

export { AtuiPromptContainer as atui_prompt_container };
//# sourceMappingURL=atui-prompt-container.entry.js.map

//# sourceMappingURL=atui-prompt-container.entry.js.map