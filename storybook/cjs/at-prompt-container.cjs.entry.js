'use strict';

var index = require('./index-i7hIKTeN.js');
var translation = require('./translation-HqquF7bU.js');

const AtPromptContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atSubmit = index.createEvent(this, "atSubmit", 7);
        this.atStop = index.createEvent(this, "atStop", 7);
        this.atNewThread = index.createEvent(this, "atNewThread", 7);
        this.atMessageCopy = index.createEvent(this, "atMessageCopy", 7);
        this.atMessageRetry = index.createEvent(this, "atMessageRetry", 7);
        this.atMessageEdit = index.createEvent(this, "atMessageEdit", 7);
        this.atMessageVote = index.createEvent(this, "atMessageVote", 7);
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
            this.atSubmit.emit(content);
        };
        this.handleStop = () => {
            this.atStop.emit();
        };
        this.handleNewThread = async () => {
            await this.newThread();
        };
    }
    async componentWillLoad() {
        this.translations = await translation.fetchTranslations(this.el);
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
    renderHeader() {
        var _a, _b, _c;
        if (!this.show_header)
            return null;
        const newThreadText = ((_c = (_b = (_a = this.translations) === null || _a === void 0 ? void 0 : _a.ATUI) === null || _b === void 0 ? void 0 : _b.PROMPT) === null || _c === void 0 ? void 0 : _c.NEW_THREAD) || 'New Thread';
        return (index.h("at-header", { size: "h3", header_title: this.header_title, subtitle: this.subtitle, border: true, "data-name": "prompt-container-header" }, this.show_new_thread_button && (index.h("at-button", { slot: "actions", size: "sm", type: "secondaryText", onClick: this.handleNewThread, disabled: this.loading, "data-name": "new-thread-button" }, newThreadText))));
    }
    renderFooter() {
        return (index.h("div", { class: "p-4" }, index.h("at-prompt-input", { ref: (el) => (this.inputComponent = el), placeholder: this.placeholder, in_progress: this.loading, max_length: this.max_message_length, error_text: this.error_text, "data-name": "prompt-container-input", onAtSubmit: (event) => this.handleSubmit(event.detail), onAtStop: () => this.handleStop() })));
    }
    render() {
        return (index.h(index.Host, { key: '3901dc5b26e561b776855a1bb408414dddfb257f', class: "flex h-full w-full flex-col overflow-hidden", "data-name": "prompt-container" }, this.renderHeader(), index.h("slot", { key: 'c8a36a4f584581bf8487257a0f80bbeef5252842', name: "prompt-container-header" }), index.h("div", { key: '135e7e62c498fe00357c3529a5a115784c399b06', class: "min-h-0 flex-1", "data-name": "thread-wrapper" }, index.h("at-prompt-thread", { key: '9bf80c9694fd575ed8cd168010ddf01a29ef7223', messages: this.messages, loading: this.loading, auto_scroll: true, enable_vote: this.enable_vote, enable_copy: this.enable_copy, enable_edit: this.enable_edit, "data-name": "container-thread" })), index.h("div", { key: '48327d43d3a871eedcc5949ae28bcd0ec6792235', class: "flex flex-col gap-4" }, this.renderFooter(), index.h("slot", { key: '9cf7058f2f32878d10cab95e3379b49c474c9190', name: "prompt-container-footer" }))));
    }
    get el() { return index.getElement(this); }
};

exports.at_prompt_container = AtPromptContainer;
//# sourceMappingURL=at-prompt-container.entry.cjs.js.map

//# sourceMappingURL=at-prompt-container.cjs.entry.js.map