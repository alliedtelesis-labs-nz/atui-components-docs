import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-BlNBm0E8.js';
import { f as fetchTranslations } from './translation-DuLooPsr.js';

const AtPromptContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atSubmit = createEvent(this, "atSubmit", 7);
        this.atStop = createEvent(this, "atStop", 7);
        this.atNewThread = createEvent(this, "atNewThread", 7);
        this.atMessageCopy = createEvent(this, "atMessageCopy", 7);
        this.atMessageRetry = createEvent(this, "atMessageRetry", 7);
        this.atMessageEdit = createEvent(this, "atMessageEdit", 7);
        this.atMessageVote = createEvent(this, "atMessageVote", 7);
        /**
         * Array of messages to display in the conversation thread
         */
        this.messages = [];
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
        /**
         * Enable streaming text animations for system/assistant messages
         * - 'none': No animation
         * - 'fade': Fade in the entire message
         * - 'words': Animate words appearing sequentially like ChatGPT
         */
        this.response_animation = 'words';
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
        event.stopPropagation();
        const messageIndex = this.messages.findIndex((msg) => msg.id === event.detail.messageId);
        if (messageIndex !== -1) {
            const updatedMessages = [...this.messages];
            updatedMessages[messageIndex] = Object.assign(Object.assign({}, updatedMessages[messageIndex]), { score: event.detail.score });
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
    renderHeader() {
        var _a, _b, _c;
        if (!this.show_new_thread_button)
            return null;
        const newThreadText = ((_c = (_b = (_a = this.translations) === null || _a === void 0 ? void 0 : _a.ATUI) === null || _b === void 0 ? void 0 : _b.PROMPT) === null || _c === void 0 ? void 0 : _c.NEW_THREAD) || 'New Thread';
        return (h("div", { class: "flex justify-end pb-16" }, h("at-button", { slot: "actions", size: "md", type: "primaryOutline", onClick: this.handleNewThread, disabled: this.loading, "data-name": "new-thread-button" }, newThreadText)));
    }
    renderFooter() {
        return (h("div", { class: "p-4" }, h("at-prompt-input", { ref: (el) => (this.inputComponent = el), placeholder: this.placeholder, in_progress: this.loading, max_length: this.max_message_length, error_text: this.error_text, "data-name": "prompt-container-input", onAtSubmit: (event) => this.handleSubmit(event.detail), onAtStop: () => this.handleStop() })));
    }
    render() {
        return (h(Host, { key: '7f04fb1fd822165bb693dc29f5ba114ebd3177fd', class: "flex h-full w-full flex-col overflow-hidden", "data-name": "prompt-container" }, this.renderHeader(), h("slot", { key: '0813d64868b4d2d1038a2be2fc75a99fe6569e27', name: "prompt-container-header" }), h("div", { key: 'a95bf8d7faf34c4054276cf458edec0c35a03970', class: "min-h-0 flex-1", "data-name": "thread-wrapper" }, h("at-prompt-thread", { key: 'e791acb3ef52bc241e7b3230533a6ee14504138f', messages: this.messages, loading: this.loading, auto_scroll: true, enable_vote: this.enable_vote, enable_copy: this.enable_copy, enable_edit: this.enable_edit, response_animation: this.response_animation, "data-name": "container-thread" })), h("div", { key: 'd70c7b033a83849e476197cb73372bd34d64f80b', class: "flex flex-col gap-4" }, this.renderFooter(), h("slot", { key: '9b2aa6a9ca02080fb846ad3ef44b2d09f8ee65af', name: "prompt-container-footer" }))));
    }
    get el() { return getElement(this); }
};

export { AtPromptContainer as at_prompt_container };
//# sourceMappingURL=at-prompt-container.entry.js.map
