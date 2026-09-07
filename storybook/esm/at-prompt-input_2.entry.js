import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-CGGSFxDu.js';
import { f as fetchTranslations } from './translation-TgeIMQBw.js';
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
        return (h(Host, { key: '59c2076523a3c12c9e1344e48814f2d7a35cc3df', id: this.inputId + '-container', class: "w-full px-16" }, h("div", { key: '9987c29ceea3b697fea0b03e7bf989bfdec3f808', class: "flex flex-col empty:hidden" }, h("slot", { key: 'a3c2262770e717a1e860fc35947347907fcad08f', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: '1a3d9aac69258caa8b8fd2d90dbe1c4ac760f052', label: this.label, for: this.inputId, info_text: this.info_text, "data-name": "prompt-input-label" })), this.hint_text && (h("span", { key: '7a0f04fa2cef61cf62b4dbcb1c33c93c3fd91f76', class: "text-muted mb-8 inline-block text-xs leading-tight", "data-name": "prompt-input-hint" }, this.hint_text))), h("div", { key: '7ce70bccb243c75e1b04dbc29313c9cb6695753c', class: containerClass }, h("textarea", { key: '4ebd1935e47512c9a81681736bc40c8de2542472', class: inputClass, disabled: this.disabled, id: this.inputId, placeholder: this.placeholder, onInput: (event) => this.handleInput(event), onKeyDown: (event) => this.handleKeyDown(event), value: this.value, ref: (el) => (this.textareaEl = el), style: {
                minHeight: '44px',
                maxHeight: this.max_height + 'px',
                overflow: 'auto',
            }, "data-name": "prompt-input" }), h("div", { key: '7f59bb4e49d8f11356b0c71589b052204dbc9441', class: "flex w-full items-center justify-between gap-1" }, h("div", { key: 'eef11056c1ebdf42d40c91b43afd2b2bc6db9e64', class: "flex items-center gap-4" }, h("slot", { key: '6fbc33611013ab9632d107c765a9753f3207dd0a', name: "actions-left" })), h("div", { key: '2cb3f099cc4a55776d22e819e5b23bffa730d8e6', class: "flex items-center gap-4 self-end" }, h("slot", { key: '27e9be5dbfbdbce9a17259661a8d94f2442ac000', name: "actions-right" }), h("at-button", { key: 'ea6bc4fd5cf09b103be933a13bd1a54848d31e43', class: "rounded-lg", size: "sm", type: "primary", disabled: !canSend, onClick: () => this.sendMessage(), onKeyDown: (event) => {
                if (event.key === 'Enter' ||
                    event.key === ' ') {
                    this.sendMessage();
                }
            }, "data-name": "prompt-send-button" }, h("at-icon", { key: 'bd0d5e06f3062a51008a7f9baea83669986e59f4', slot: "icon", name: this.in_progress ? 'stop' : 'send' }))))), h("slot", { key: 'b363f8f50a6ec094efa3d905bff9bcfbb089dc19', name: "footer" }), this.invalid && (h("span", { key: '01f16382ea90fef369492908febeb7030b132dd6', class: "text-error-foreground text-xs", "data-name": "error-text" }, this.error_text
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
        return (h(Host, { key: '130cc70650dda478766580990083c228bb5c4d34', class: "block h-full", "data-name": "thread-container" }, h("div", { key: 'baf30e0e1e7cc6f7071d8339c0ac02ede19ddea3', class: "flex h-full flex-col gap-16 overflow-y-auto scroll-smooth", ref: (el) => (this.scrollContainer = el), "data-name": "scroll-container" }, !hasMessages ? (h("slot", { name: "thread-empty-state" })) : (h("div", { "data-name": "thread-messages-container", class: "flex flex-col gap-16" }, this.renderMessages(), this.renderLoadingIndicator())), h("slot", { key: 'cf19923aca9e85288a9214d3d30dac0df7fe5a5f', name: "thread-messages" }))));
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
