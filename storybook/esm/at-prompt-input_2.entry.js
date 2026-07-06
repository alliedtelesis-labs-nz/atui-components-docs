import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-BEGRcYEc.js';
import { f as fetchTranslations } from './translation-CxDdWBmt.js';
import { c as classlist } from './classlist-COG8_R0C.js';
import { A as AtPromptResponseScore } from './prompt-CQKUaTzD.js';

const promptInputContainerVariants = classlist('relative flex flex-col items-end gap-2 rounded-lg border border-solid p-8 transition-[background-color,color,box-shadow] duration-300 ease-in-out', {
    variants: {
        invalid: {
            true: 'border-destructive focus-within:border-destructive focus-within:ring-destructive/30 focus-within:ring',
            false: 'border-input focus-within:border-active-accent focus-within:ring-active-glow focus-within:ring',
        },
        disabled: {
            true: 'bg-surface-1 pointer-events-none',
            false: 'bg-input-background',
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
const promptInputVariants = classlist('text-body text-foreground w-full resize-none border-none bg-transparent break-words whitespace-pre-wrap shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0', {
    variants: {
        invalid: {
            true: 'border-destructive-foreground',
            false: 'border-input',
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
        return (h(Host, { key: 'fd71fadd4b21f833fd3c02e0501d4819a1bc8ff6', id: this.inputId + '-container', class: "w-full px-16" }, h("div", { key: '96a9443785fb363f01142aec009eb46c7fddc2b5', class: "flex flex-col empty:hidden" }, h("slot", { key: 'ba2ec8983759d886f2099ff469cc085ce0f76d01', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: '75adeffecb80ed81c09ec818999ac6c7f9ef2077', label: this.label, for: this.inputId, info_text: this.info_text, "data-name": "prompt-input-label" })), this.hint_text && (h("span", { key: '69a3b4b5ae8bed4ffd35ffa55c31cb5c676b1032', class: "text-muted mb-8 inline-block text-xs leading-tight", "data-name": "prompt-input-hint" }, this.hint_text))), h("div", { key: '332f99c58f20d9c33dc138045d1450b219ce6a31', class: containerClass }, h("textarea", { key: '70c23f7f24047379be0d7e4486bcf801d0c9c507', class: inputClass, disabled: this.disabled, id: this.inputId, placeholder: this.placeholder, onInput: (event) => this.handleInput(event), onKeyDown: (event) => this.handleKeyDown(event), value: this.value, ref: (el) => (this.textareaEl = el), style: {
                minHeight: '44px',
                maxHeight: this.max_height + 'px',
                overflow: 'auto',
            }, "data-name": "prompt-input" }), h("div", { key: '5104200160c8745216b2a0edcc1fafeeb5f2f9ea', class: "flex w-full items-center justify-between gap-1" }, h("div", { key: '454a92244bcef13237cd4322160072d097c17835', class: "flex items-center gap-4" }, h("slot", { key: '57f2ac0c756692f20b2fb616d4aa72d1e964b903', name: "actions-left" })), h("div", { key: '297e29453ac046f5e4e7730a59412d914ead4d53', class: "flex items-center gap-4 self-end" }, h("slot", { key: 'f29b72d8f55c33eebd6aad9254c666c8a187b004', name: "actions-right" }), h("at-button", { key: '884b490a8f4bc6f6507c8aff790852b216f48a3f', class: "rounded-lg", size: "sm", type: "primary", disabled: !canSend, onClick: () => this.sendMessage(), onKeyDown: (event) => {
                if (event.key === 'Enter' ||
                    event.key === ' ') {
                    this.sendMessage();
                }
            }, "data-name": "prompt-send-button" }, h("at-icon", { key: 'c626c3860808f09405dd223b8946690bb2ed5554', slot: "icon", name: this.in_progress ? 'stop' : 'send' }))))), h("slot", { key: 'a1ed27bbe414be455ff18eb0ba2c7fbcbf3324b9', name: "footer" }), this.invalid && (h("span", { key: '4c8a1332f19dba694c2cfd4fce4a230bdc8d1421', class: "text-error-foreground text-xs", "data-name": "error-text" }, this.error_text
            ? this.error_text
            : this.translations.ATUI.PROMPT.ERROR_MESSAGE))));
    }
};

const AtPromptThread = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atThreadMessageCopy = createEvent(this, "atThreadMessageCopy", 7);
        this.atThreadMessageRetry = createEvent(this, "atThreadMessageRetry", 7);
        this.atThreadMessageEdit = createEvent(this, "atThreadMessageEdit", 7);
        this.atThreadMessageVote = createEvent(this, "atThreadMessageVote", 7);
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
    atThreadMessageCopy;
    /**
     * Emitted when a message retry action is requested
     */
    atThreadMessageRetry;
    /**
     * Emitted when a message edit action is requested
     */
    atThreadMessageEdit;
    /**
     * Emitted when a message vote action is requested
     */
    atThreadMessageVote;
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
            this.atThreadMessageVote.emit(event.detail);
        }
    }
    handleMessageCopy(event) {
        const messageIndex = this.getMessageIndexFromEvent(event);
        if (messageIndex !== -1) {
            this.atThreadMessageCopy.emit({
                messageId: this.messages[messageIndex].id,
                content: event.detail,
            });
        }
    }
    handleMessageRetry(event) {
        const messageIndex = this.getMessageIndexFromEvent(event);
        if (messageIndex !== -1) {
            this.atThreadMessageRetry.emit({
                messageId: this.messages[messageIndex].id,
            });
        }
    }
    handleMessageEdit(event) {
        const messageIndex = this.getMessageIndexFromEvent(event);
        if (messageIndex !== -1) {
            this.atThreadMessageEdit.emit({
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
        return (h("at-prompt-message", { role: role, content: message.content, name: name, loading: message.loading, error: message.error, error_message: message.error_message, score: message.score || AtPromptResponseScore.NONE, message_id: message.id, enable_vote: this.enable_vote, enable_copy: this.enable_copy, enable_edit: this.enable_edit, response_animation: animate, "data-name": `message-${index}`, "data-message-index": index }));
    }
    renderMessages() {
        return this.messages.map((message, index) => this.renderMessage(message, index));
    }
    render() {
        const hasMessages = this.messages && this.messages.length > 0;
        return (h(Host, { key: '10bfbc36e2f7c1b0d9c0eb231ef261c7254c84c7', class: "block h-full", "data-name": "thread-container" }, h("div", { key: 'fc23f975711084f338f6b84d775453a9b5f69374', class: "flex h-full flex-col gap-16 overflow-y-auto scroll-smooth", ref: (el) => (this.scrollContainer = el), "data-name": "scroll-container" }, !hasMessages ? (h("slot", { name: "thread-empty-state" })) : (h("div", { "data-name": "thread-messages-container", class: "flex flex-col gap-16" }, this.renderMessages(), this.renderLoadingIndicator())), h("slot", { key: '325a4d6246415e1ddb3cb2694dadc35c451d92e8', name: "thread-messages" }))));
    }
};

export { AtPromptInputComponent as at_prompt_input, AtPromptThread as at_prompt_thread };
