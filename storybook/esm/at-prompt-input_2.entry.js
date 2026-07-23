import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-CFoMekA-.js';
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
        return (h(Host, { key: '983e2cf5b94c6be08e66916d8e64ab6098473ed3', id: this.inputId + '-container', class: "w-full px-16" }, h("div", { key: 'b6ec0d379c9da81a193ed5ef32ba09ac549ccc7a', class: "flex flex-col empty:hidden" }, h("slot", { key: 'b64769ebe983385563457f517d8e57e6e04f8ca8', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: '48fb71ef622a36da587c8eab90396e46aca017d2', label: this.label, for: this.inputId, info_text: this.info_text, "data-name": "prompt-input-label" })), this.hint_text && (h("span", { key: '58fdffe89eef1a32d175216c1657d6936ebb98f3', class: "text-muted mb-8 inline-block text-xs leading-tight", "data-name": "prompt-input-hint" }, this.hint_text))), h("div", { key: '724cbc5064d31ab408d1da5f873806594db96f4c', class: containerClass }, h("textarea", { key: 'ce728eb41594f9c7a62414636e764cd41dba85eb', class: inputClass, disabled: this.disabled, id: this.inputId, placeholder: this.placeholder, onInput: (event) => this.handleInput(event), onKeyDown: (event) => this.handleKeyDown(event), value: this.value, ref: (el) => (this.textareaEl = el), style: {
                minHeight: '44px',
                maxHeight: this.max_height + 'px',
                overflow: 'auto',
            }, "data-name": "prompt-input" }), h("div", { key: 'cd7a2d6d379f914d041a7a7b625cf977581603ef', class: "flex w-full items-center justify-between gap-1" }, h("div", { key: '48b4f2d93503ef77dea9908fe6a58d1468522c14', class: "flex items-center gap-4" }, h("slot", { key: 'e1a8a2d4e4cf019353df99e348cbe1989177c54d', name: "actions-left" })), h("div", { key: '4c08f1df8bd1ffb17bb5289350717a8ec5a35cfd', class: "flex items-center gap-4 self-end" }, h("slot", { key: '06eb0ac0c57b26455a9d680335efeb42ddc0bb64', name: "actions-right" }), h("at-button", { key: '45ba9c75d0dad77f866f70f109f823d8f3fa55e8', class: "rounded-lg", size: "sm", type: "primary", disabled: !canSend, onClick: () => this.sendMessage(), onKeyDown: (event) => {
                if (event.key === 'Enter' ||
                    event.key === ' ') {
                    this.sendMessage();
                }
            }, "data-name": "prompt-send-button" }, h("at-icon", { key: '167bc1a1b94f3ceea3f9e1d8aa2e98c87a214eaa', slot: "icon", name: this.in_progress ? 'stop' : 'send' }))))), h("slot", { key: 'ad39924b92dd3574713c6f8901381496baebe58b', name: "footer" }), this.invalid && (h("span", { key: '24a136c724bcf34ac3423ac2e0d63e4fc89e3889', class: "text-error-foreground text-xs", "data-name": "error-text" }, this.error_text
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
        return (h(Host, { key: '7b47a2c564b3952f261c060be33e6d00e2a855da', class: "block h-full", "data-name": "thread-container" }, h("div", { key: 'fb3f6e1dd6b9e60e361782c5e83ff6b8b69344f4', class: "flex h-full flex-col gap-16 overflow-y-auto scroll-smooth", ref: (el) => (this.scrollContainer = el), "data-name": "scroll-container" }, !hasMessages ? (h("slot", { name: "thread-empty-state" })) : (h("div", { "data-name": "thread-messages-container", class: "flex flex-col gap-16" }, this.renderMessages(), this.renderLoadingIndicator())), h("slot", { key: '22a2103aa616fa8fa42146955cefeb99da0563c4', name: "thread-messages" }))));
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
