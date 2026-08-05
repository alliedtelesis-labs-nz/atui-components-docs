import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DVWT6VvQ.js';
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
        return (h(Host, { key: 'c61fa8d71c00aec9316dd41a0e4801947e42c588', id: this.inputId + '-container', class: "w-full px-16" }, h("div", { key: 'f9d8dc30f45ee01d35e08aa0da662c676f53177d', class: "flex flex-col empty:hidden" }, h("slot", { key: '4771f2c274dabdc1e42893777d7549cc263269a5', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: '899303e75418f9ae0afafc2c4916051dc0c1ffe4', label: this.label, for: this.inputId, info_text: this.info_text, "data-name": "prompt-input-label" })), this.hint_text && (h("span", { key: 'd120e9eb0b8b50262cfcfec29c62992a535cf948', class: "text-muted mb-8 inline-block text-xs leading-tight", "data-name": "prompt-input-hint" }, this.hint_text))), h("div", { key: 'dfa4d5aa41f558364236fab63d51e9eabcc45a78', class: containerClass }, h("textarea", { key: 'ddd44e901dbc72c665095b553f1c20db5de38519', class: inputClass, disabled: this.disabled, id: this.inputId, placeholder: this.placeholder, onInput: (event) => this.handleInput(event), onKeyDown: (event) => this.handleKeyDown(event), value: this.value, ref: (el) => (this.textareaEl = el), style: {
                minHeight: '44px',
                maxHeight: this.max_height + 'px',
                overflow: 'auto',
            }, "data-name": "prompt-input" }), h("div", { key: '4e2f251eaf59c58d1cee735139afd38fe2c230f2', class: "flex w-full items-center justify-between gap-1" }, h("div", { key: '82d3aa46a690eab71fff2f5029758a63a9e14477', class: "flex items-center gap-4" }, h("slot", { key: '25e87d6b88bd1cb1bfc0d657a54b4216bdf93f8d', name: "actions-left" })), h("div", { key: '26b0e2b013f58c757cba8f97e220bde38793900c', class: "flex items-center gap-4 self-end" }, h("slot", { key: 'b4765a6fec0cdedbc902f29d60b6e63bee6c235c', name: "actions-right" }), h("at-button", { key: 'e6d827762aa70665f9868285dec7460b78283322', class: "rounded-lg", size: "sm", type: "primary", disabled: !canSend, onClick: () => this.sendMessage(), onKeyDown: (event) => {
                if (event.key === 'Enter' ||
                    event.key === ' ') {
                    this.sendMessage();
                }
            }, "data-name": "prompt-send-button" }, h("at-icon", { key: 'daad91f1f49eda624e0a9d719d184dc68b86a97e', slot: "icon", name: this.in_progress ? 'stop' : 'send' }))))), h("slot", { key: 'c1960467e163270a49f0e29d6f426c002712d539', name: "footer" }), this.invalid && (h("span", { key: '1f6bcaffd1a2c6a043f54f44f9db2f99d809a623', class: "text-error-foreground text-xs", "data-name": "error-text" }, this.error_text
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
     * Identifies the current conversation. Change this when the consumer
     * switches to a different saved conversation while this thread stays
     * mounted (e.g. picking another chat from a history sidebar) so its
     * messages are treated as history rather than live/new — otherwise
     * every message in that conversation's history would incorrectly
     * replay the intro animation on load, same as the very first mount.
     */
    conversation_id;
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
    /** IDs present when the current conversation's history was loaded — these never animate. */
    initialMessageIds = new Set();
    /**
     * IDs that are allowed to play the intro animation, sticky for the
     * component's lifetime once granted. A message keeps streaming in
     * across several `messages` updates (same id, growing content) — if
     * "new" were re-evaluated as "not in initialMessageIds" on every
     * update instead of recorded once, only the first chunk would animate
     * and every later chunk of the same message would flip back to 'fade'.
     */
    animatableMessageIds = new Set();
    /**
     * Starts `true`: the first `messages` this component ever sees should
     * be treated as history, not just whatever `componentWillLoad` finds.
     * In practice `messages` is populated via a property set *after* mount
     * (an Angular binding, a $eval in tests, etc.), not as an HTML
     * attribute present before the component upgrades — so by the time
     * componentWillLoad runs, `this.messages` is almost always still the
     * default `[]`. Consumed by the first `handleMessagesChange` firing;
     * re-armed by handleConversationIdChange when the consumer switches to
     * a different saved conversation while this thread stays mounted.
     */
    pendingHistoryReset = true;
    componentWillLoad() {
        // Covers the less common case where `messages` is already populated
        // by the time this runs (e.g. set synchronously before the element
        // connects). If it's still empty here (the common case), leave
        // pendingHistoryReset armed for handleMessagesChange to consume
        // whenever the real history actually arrives.
        if (this.messages.length > 0) {
            this.pendingHistoryReset = false;
            this.initialMessageIds = new Set(this.messages.map((m) => m.id));
        }
    }
    handleConversationIdChange() {
        this.pendingHistoryReset = true;
    }
    handleMessagesChange(newMessages) {
        if (this.pendingHistoryReset) {
            this.pendingHistoryReset = false;
            this.animatableMessageIds.clear();
            this.initialMessageIds = new Set(newMessages.map((m) => m.id));
            return;
        }
        newMessages.forEach((message) => {
            if (!this.initialMessageIds.has(message.id)) {
                this.animatableMessageIds.add(message.id);
            }
        });
    }
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
        // Only messages that arrived after the conversation's history was
        // loaded (see handleMessagesChange) get the intro animation — a
        // history load should render in immediately, not replay word-by-word.
        const animate = message.role === 'assistant' &&
            this.animatableMessageIds.has(message.id)
            ? this.response_animation
            : 'fade';
        return (h("at-prompt-message", { role: role, content: message.content, name: name, loading: message.loading, error: message.error, error_message: message.error_message, score: message.score || AtPromptResponseScore.NONE, message_id: message.id, enable_vote: this.enable_vote, enable_copy: this.enable_copy, enable_edit: this.enable_edit, response_animation: animate, "data-name": `message-${index}`, "data-message-index": index }));
    }
    renderMessages() {
        return this.messages.map((message, index) => this.renderMessage(message, index));
    }
    render() {
        const hasMessages = this.messages && this.messages.length > 0;
        return (h(Host, { key: 'a754744c00ca3d58f49d42a8e2ed5f8eb67343a9', class: "block h-full", "data-name": "thread-container" }, h("div", { key: 'bb20eb9689c62279a4a21dde2c3d8c0c261aba23', class: "flex h-full flex-col gap-16 overflow-y-auto scroll-smooth", ref: (el) => (this.scrollContainer = el), "data-name": "scroll-container" }, !hasMessages ? (h("slot", { name: "thread-empty-state" })) : (h("div", { "data-name": "thread-messages-container", class: "flex flex-col gap-16" }, this.renderMessages(), this.renderLoadingIndicator())), h("slot", { key: 'd840db509bc14b594ca09189a355fb81d429617b', name: "thread-messages" }))));
    }
    static get watchers() { return {
        "conversation_id": [{
                "handleConversationIdChange": 0
            }],
        "messages": [{
                "handleMessagesChange": 0
            }]
    }; }
};

export { AtPromptInputComponent as at_prompt_input, AtPromptThread as at_prompt_thread };
