'use strict';

var index = require('./index-43B6Ydvl.js');
var translation = require('./translation-HqquF7bU.js');

const AtuiPromptContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiSubmit = index.createEvent(this, "atuiSubmit", 7);
        this.atuiStop = index.createEvent(this, "atuiStop", 7);
        this.atuiNewThread = index.createEvent(this, "atuiNewThread", 7);
        this.atuiMessageCopy = index.createEvent(this, "atuiMessageCopy", 7);
        this.atuiMessageRetry = index.createEvent(this, "atuiMessageRetry", 7);
        this.atuiMessageEdit = index.createEvent(this, "atuiMessageEdit", 7);
        this.atuiMessageVote = index.createEvent(this, "atuiMessageVote", 7);
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
        this.translations = await translation.fetchTranslations(this.el);
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
        return (index.h("atui-header", { size: "h3", header_title: this.header_title, subtitle: this.subtitle, border: true, "data-name": "prompt-container-header" }, this.show_new_thread_button && (index.h("atui-button", { slot: "actions", size: "sm", type: "secondaryText", onClick: this.handleNewThread, disabled: this.loading, "data-name": "new-thread-button" }, newThreadText))));
    }
    renderFooter() {
        return (index.h("div", { class: "p-4" }, index.h("atui-prompt-input", { ref: (el) => (this.inputComponent = el), placeholder: this.placeholder, in_progress: this.loading, max_length: this.max_message_length, error_text: this.error_text, "data-name": "prompt-container-input", onAtuiSubmit: (event) => this.handleSubmit(event.detail), onAtuiStop: () => this.handleStop() })));
    }
    render() {
        return (index.h(index.Host, { key: 'efba6f3acfaf494d77c54e6578ce4f671eb7105c', class: "flex h-full w-full flex-col overflow-hidden", "data-name": "prompt-container" }, this.renderHeader(), index.h("slot", { key: '7d55b37305d257f0747ddd22507aed206115c47a', name: "prompt-container-header" }), index.h("div", { key: 'a93ef2180c1de83f5b6121979a35a13d29b7e8b4', class: "min-h-0 flex-1", "data-name": "thread-wrapper" }, index.h("atui-prompt-thread", { key: 'af4f0c3da0d64de6c6515ee8ae29ecaeeba1d298', messages: this.messages, loading: this.loading, auto_scroll: true, enable_vote: this.enable_vote, enable_copy: this.enable_copy, enable_edit: this.enable_edit, "data-name": "container-thread" })), index.h("div", { key: '46c84f273ac1babeca06cb49ffb1b32a125892cd', class: "flex flex-col gap-4" }, this.renderFooter(), index.h("slot", { key: '39deaa3d37dcd14f9928e8b249c62586402f9235', name: "prompt-container-footer" }))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_prompt_container = AtuiPromptContainer;
//# sourceMappingURL=atui-prompt-container.entry.cjs.js.map

//# sourceMappingURL=atui-prompt-container.cjs.entry.js.map