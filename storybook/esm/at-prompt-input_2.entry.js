import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-B5bw8iR3.js';
import { f as fetchTranslations } from './translation-DuLooPsr.js';
import { c as classlist } from './classlist-COG8_R0C.js';
import { PromptResponseScore } from './index.js';

const promptInputContainerVariants = classlist('relative flex flex-col items-end gap-2 rounded-lg border border-solid p-8 transition-[background-color,color,box-shadow] duration-300 ease-in-out', {
    variants: {
        invalid: {
            true: 'border-destructive focus-within:border-destructive focus-within:ring-destructive/30 focus-within:ring-2',
            false: 'border-med focus-within:border-active-foreground focus-within:ring-active-foreground/30 focus-within:ring-2',
        },
        disabled: {
            true: 'bg-surface-1 pointer-events-none',
            false: 'bg-white',
        },
    },
    compoundVariants: [
        {
            disabled: true,
            class: 'focus-within:ring-0',
        },
    ],
    defaultVariants: {
        invalid: false,
        disabled: false,
    },
});
const promptInputVariants = classlist('text-body text-dark w-full resize-none border-none bg-transparent break-words whitespace-pre-wrap shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0', {
    variants: {
        invalid: {
            true: 'border-destructive-foreground',
            false: 'border-med',
        },
        disabled: {
            true: 'bg-surface-1 pointer-events-none',
            false: 'bg-disableD-LIGHT',
        },
    },
    defaultVariants: {
        invalid: false,
        disabled: false,
    },
});
const AtPromptInputComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atChange = createEvent(this, "atChange", 7);
        this.atSubmit = createEvent(this, "atSubmit", 7);
        this.atStop = createEvent(this, "atStop", 7);
        this.atFocus = createEvent(this, "atFocus", 7);
    }
    /**
     * Label above the input container
     */
    label;
    /**
     * Short description or validation hint if required
     */
    hint_text;
    /**
     * Optional info icon with detailed tooltip description
     */
    info_text;
    /**
     * Error text displayed when invalid is set via max length
     */
    error_text;
    /**
     * Placeholder text to be shown when no input is passed
     */
    placeholder = 'Enter your message...';
    /**
     * Maximum height in pixels for auto-resize
     */
    max_height = 240;
    /**
     * Maximum character length with counter display
     */
    max_length = 2000;
    /**
     * Controls whether the component is in progress (shows stop button) or ready to send (shows send button)
     */
    in_progress = false;
    /**
     * The value of the input
     */
    value = '';
    /**
     * Disable input interactions and apply visual indication
     */
    disabled = false;
    textareaEl;
    translations;
    invalid = false;
    get el() { return getElement(this); }
    /**
     * Emits when the value changes
     */
    atChange;
    /**
     * Emits when a message should be sent
     */
    atSubmit;
    /**
     * Emits when the stop button is clicked
     */
    atStop;
    /**
     * Emits when the input receives focus
     */
    atFocus;
    /**
     * @slot label - Custom label content (alternative to using the label prop)
     */
    inputId = `prompt-input-${Math.random().toString(36).substring(2, 11)}`;
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    focusInput() {
        if (this.textareaEl) {
            this.textareaEl.focus();
            this.atFocus.emit();
        }
    }
    handleInput(event) {
        event.stopPropagation();
        this.value = event.target.value;
        if (this.max_length && this.value.length > this.max_length) {
            this.invalid = true;
        }
        else {
            this.invalid = false;
        }
        this.atChange.emit(this.value);
        this.autoResize();
    }
    autoResize() {
        if (this.textareaEl) {
            this.textareaEl.style.height = 'auto';
            const scrollHeight = this.textareaEl.scrollHeight;
            const newHeight = Math.max(44, Math.min(scrollHeight, this.max_height));
            this.textareaEl.style.height = `${newHeight}px`;
        }
    }
    componentDidLoad() {
        setTimeout(() => {
            this.autoResize();
        }, 0);
    }
    handleKeyDown(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            this.sendMessage();
        }
    }
    sendMessage() {
        if (this.in_progress) {
            this.atStop.emit();
        }
        else if (this.value && this.value.trim() !== '' && !this.invalid) {
            this.atSubmit.emit(this.value.trim());
            this.value = '';
            this.invalid = false;
            setTimeout(() => {
                this.autoResize();
                this.focusInput();
            }, 0);
        }
    }
    render() {
        const canSend = !this.disabled &&
            !this.invalid &&
            (this.in_progress || (this.value && this.value.trim() !== ''));
        const containerClass = promptInputContainerVariants({
            invalid: this.invalid,
            disabled: this.disabled,
        });
        const inputClass = promptInputVariants({
            invalid: this.invalid,
            disabled: this.disabled,
        });
        return (h(Host, { key: 'a92be3a1e39b1a3f580005fe56c85fb82f99759a', id: this.inputId + '-container', class: "w-full px-16" }, h("div", { key: '7a9730762c4e6fb6d84055c3b1b516e8da0a8ef9', class: "flex flex-col" }, h("slot", { key: 'ac089935dd15bd31c11820fea52ad57213e7e199', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: '7bf097ab0c155c85203d1bef5158c51d4bb9bebe', label: this.label, for: this.inputId, info_text: this.info_text, "data-name": "prompt-input-label" })), this.hint_text && (h("span", { key: '13c4791e1680faf088fd8709eeca48e7aa3fe0e5', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "prompt-input-hint" }, this.hint_text))), h("div", { key: '2bb81de1389c0112b650cddab44d82aeb965deea', class: containerClass }, h("textarea", { key: 'b4095a42fd7e1056d132048bda7baa7f4dd77d8e', class: inputClass, disabled: this.disabled, id: this.inputId, placeholder: this.placeholder, onInput: (event) => this.handleInput(event), onKeyDown: (event) => this.handleKeyDown(event), value: this.value, ref: (el) => (this.textareaEl = el), style: {
                minHeight: '44px',
                maxHeight: this.max_height + 'px',
                overflow: 'auto',
            }, "data-name": "prompt-input" }), h("div", { key: '4e883c44e4507137e46860dfed5c2a2b005f4352', class: "flex w-full items-center justify-between gap-1" }, h("div", { key: 'a768d3db3aaedf2ab809df3f9a9f55f86d5d735d', class: "flex items-center gap-4" }, h("slot", { key: 'a4f449ac9df8d689e06cc46ed46ace44d5667565', name: "actions-left" })), h("div", { key: '4a15694bfabbfdd03db0a01e6458936d98ed0ad6', class: "flex items-center gap-4 self-end" }, h("slot", { key: '473664a212b9004f257f2f3a029634d17ab19728', name: "actions-right" }), h("at-button", { key: '63b60b6982ec32c0e20515d8f98900301674311a', class: "rounded-lg", size: "sm", type: "secondary", icon: this.in_progress ? 'stop' : 'arrow_upward', disabled: !canSend, onClick: () => this.sendMessage(), onKeyDown: (event) => {
                if (event.key === 'Enter' ||
                    event.key === ' ') {
                    this.sendMessage();
                }
            }, "data-name": "prompt-send-button" })))), h("slot", { key: '82ef1305581236e017705a964b5f39766e5fcfcd', name: "footer" }), this.invalid && (h("span", { key: '10af5faad97d220caa699afa273e4f4f6c1b8c05', class: "text-error-dark text-xs", "data-name": "error-text" }, this.error_text
            ? this.error_text
            : this.translations.ATUI.PROMPT.ERROR_MESSAGE))));
    }
};

const AtPromptThread = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atMessageCopy = createEvent(this, "atMessageCopy", 7);
        this.atMessageRetry = createEvent(this, "atMessageRetry", 7);
        this.atMessageEdit = createEvent(this, "atMessageEdit", 7);
        this.atMessageVote = createEvent(this, "atMessageVote", 7);
    }
    /**
     * Array of messages to display in the conversation thread
     */
    messages = [];
    /**
     * Shows a loading indicator for incoming messages
     */
    loading = false;
    /**
     * Automatically scroll to the bottom when new messages are added
     */
    auto_scroll = true;
    /**
     * Display name for chatbot/assistant messages
     */
    chatbot_title = 'Assistant';
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
     * - 'none': No animation (default)
     * - 'fade': Fade in the entire message
     * - 'words': Animate words appearing sequentially like ChatGPT
     */
    response_animation = 'words';
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
    /**
     * @slot messages - Custom message content (alternative to using the messages prop)
     */
    scrollContainer;
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
        return (h(Host, { key: '81f8c935bab8099dfaf735c9293259d284648e4f', class: "block h-full", "data-name": "thread-container" }, h("div", { key: '7a6613c8c275963ebf1f12e8179f10808a278fd3', class: "flex h-full flex-col gap-16 overflow-y-auto scroll-smooth", ref: (el) => (this.scrollContainer = el), "data-name": "scroll-container" }, !hasMessages ? (h("slot", { name: "thread-empty-state" })) : (h("div", { "data-name": "thread-messages-container", class: "flex flex-col gap-16" }, this.renderMessages(), this.renderLoadingIndicator())), h("slot", { key: '17483cf7ee881e3beaef4f172196c9f93950997f', name: "thread-messages" }))));
    }
};

export { AtPromptInputComponent as at_prompt_input, AtPromptThread as at_prompt_thread };
//# sourceMappingURL=at-prompt-input.at-prompt-thread.entry.js.map
