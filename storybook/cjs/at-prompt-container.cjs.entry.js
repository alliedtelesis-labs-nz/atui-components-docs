'use strict';

var index = require('./index-w3vomLqM.js');
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
    }
    get el() { return index.getElement(this); }
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
        return (index.h("div", { class: "flex justify-end pb-16" }, index.h("at-button", { slot: "actions", size: "md", type: "primaryOutline", onClick: this.handleNewThread, disabled: this.loading, "data-name": "new-thread-button" }, newThreadText)));
    }
    renderFooter() {
        return (index.h("div", { class: "p-4" }, index.h("at-prompt-input", { ref: (el) => (this.inputComponent = el), placeholder: this.placeholder, in_progress: this.loading, max_length: this.max_message_length, error_text: this.error_text, "data-name": "prompt-container-input", onAtSubmit: (event) => this.handleSubmit(event.detail), onAtStop: () => this.handleStop() })));
    }
    render() {
        return (index.h(index.Host, { key: 'd723d20980d87530b973e118a335decc1ec8a4ff', class: "flex h-full w-full flex-col overflow-hidden", "data-name": "prompt-container" }, this.renderHeader(), index.h("slot", { key: '26866db7edbc4a99c2de4f788724d4bee15aeeac', name: "prompt-container-header" }), index.h("div", { key: '2a2d83951340ec78ca7aa11a77f7cc5c52ce3f5f', class: "min-h-0 flex-1", "data-name": "thread-wrapper" }, index.h("at-prompt-thread", { key: '0871b3e66e5a762afe986af0f2eb7a48ef59ea50', messages: this.messages, loading: this.loading, auto_scroll: true, enable_vote: this.enable_vote, enable_copy: this.enable_copy, enable_edit: this.enable_edit, response_animation: this.response_animation, "data-name": "container-thread" })), index.h("div", { key: '7b90551a657a9e5dd7f07ebbe75318e92a48d911', class: "flex flex-col gap-4" }, this.renderFooter(), index.h("slot", { key: 'd6aee853d1ff8c84a6cd0749689d44683c692a86', name: "prompt-container-footer" }))));
    }
};

exports.at_prompt_container = AtPromptContainer;
//# sourceMappingURL=at-prompt-container.entry.cjs.js.map
