'use strict';

var index = require('./index-6KYrJiD1.js');
var translation = require('./translation-D3uILiF8.js');
var classlist = require('./classlist-BPb95vgj.js');
var prompt = require('./prompt-DoMXcdvl.js');

const promptInputContainerVariants = classlist.classlist('relative flex flex-col items-end gap-2 rounded-lg border border-solid p-8 transition-[background-color,color,box-shadow] duration-300 ease-in-out', {
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
const promptInputVariants = classlist.classlist('text-body text-foreground w-full resize-none border-none bg-transparent break-words whitespace-pre-wrap shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0', {
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
        index.registerInstance(this, hostRef);
        this.atChange = index.createEvent(this, "atChange", 7);
        this.atSubmit = index.createEvent(this, "atSubmit", 7);
        this.atStop = index.createEvent(this, "atStop", 7);
        this.atFocus = index.createEvent(this, "atFocus", 7);
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
    get el() { return index.getElement(this); }
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
        this.translations = await translation.fetchTranslations(this.el);
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
        return (index.h(index.Host, { key: '976755bd74254ac3df04262f5310cfc97753e7c4', id: this.inputId + '-container', class: "w-full px-16" }, index.h("div", { key: 'ab1047ed9977045990766fd0ab861685c4621e47', class: "flex flex-col empty:hidden" }, index.h("slot", { key: '741fa18073ff423cd4a92ee8bc2bc019440f65d0', name: "label" }), (this.label || this.info_text) && (index.h("at-form-label", { key: '4de698e153421ac2ab3bc500a3cbd5a2c4140d9e', label: this.label, for: this.inputId, info_text: this.info_text, "data-name": "prompt-input-label" })), this.hint_text && (index.h("span", { key: '18019c0f434ce5ab31b40b5de58567fc0a19716f', class: "text-muted mb-8 inline-block text-xs leading-tight", "data-name": "prompt-input-hint" }, this.hint_text))), index.h("div", { key: '2cc787daf01f1dbfaf9dba9f2c595a12d46493f9', class: containerClass }, index.h("textarea", { key: 'd90a972ca301eb8341afce7cd2b37c5b54064884', class: inputClass, disabled: this.disabled, id: this.inputId, placeholder: this.placeholder, onInput: (event) => this.handleInput(event), onKeyDown: (event) => this.handleKeyDown(event), value: this.value, ref: (el) => (this.textareaEl = el), style: {
                minHeight: '44px',
                maxHeight: this.max_height + 'px',
                overflow: 'auto',
            }, "data-name": "prompt-input" }), index.h("div", { key: '3fc9748a271c551fbf76acf15652ddb9687f5046', class: "flex w-full items-center justify-between gap-1" }, index.h("div", { key: '23e692772d5ee56324edd3c883c3707d1163514e', class: "flex items-center gap-4" }, index.h("slot", { key: '4e3e4ea13bedb8f6faf1c4388c086eef45809c1b', name: "actions-left" })), index.h("div", { key: 'a04a74516f3ef07cf13793ede4615453bc574f22', class: "flex items-center gap-4 self-end" }, index.h("slot", { key: 'b0049bc09579d226f6e5085b7b7da43d33a697fa', name: "actions-right" }), index.h("at-button", { key: '43f7e171b57450cda43a604a0fc21c65ebe5ae29', class: "rounded-lg", size: "sm", type: "primary", disabled: !canSend, onClick: () => this.sendMessage(), onKeyDown: (event) => {
                if (event.key === 'Enter' ||
                    event.key === ' ') {
                    this.sendMessage();
                }
            }, "data-name": "prompt-send-button" }, index.h("at-icon", { key: 'd82db227a9440d3f12dc776ac96ca3e7e50eaca4', slot: "icon", name: this.in_progress ? 'stop' : 'send' }))))), index.h("slot", { key: 'f3ed7656adbf99faee818d5b308a833f006e7080', name: "footer" }), this.invalid && (index.h("span", { key: '0f637c7de968cf6188e5362122375a2592541b07', class: "text-error-foreground text-xs", "data-name": "error-text" }, this.error_text
            ? this.error_text
            : this.translations.ATUI.PROMPT.ERROR_MESSAGE))));
    }
};

const AtPromptThread = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atThreadMessageCopy = index.createEvent(this, "atThreadMessageCopy", 7);
        this.atThreadMessageRetry = index.createEvent(this, "atThreadMessageRetry", 7);
        this.atThreadMessageEdit = index.createEvent(this, "atThreadMessageEdit", 7);
        this.atThreadMessageVote = index.createEvent(this, "atThreadMessageVote", 7);
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
        return (index.h("div", { class: "flex flex-col gap-16", "data-name": "loading-container" }, index.h("at-prompt-message", { role: 'assistant', content: "Typing...", name: this.chatbot_title, loading: true, "data-name": "loading-message" })));
    }
    renderMessage(message, index$1) {
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
        return (index.h("at-prompt-message", { role: role, content: message.content, name: name, loading: message.loading, error: message.error, error_message: message.error_message, score: message.score || prompt.AtPromptResponseScore.NONE, message_id: message.id, enable_vote: this.enable_vote, enable_copy: this.enable_copy, enable_edit: this.enable_edit, response_animation: animate, "data-name": `message-${index$1}`, "data-message-index": index$1 }));
    }
    renderMessages() {
        return this.messages.map((message, index) => this.renderMessage(message, index));
    }
    render() {
        const hasMessages = this.messages && this.messages.length > 0;
        return (index.h(index.Host, { key: '2daa77c641f655fc6e713a78b73154c7b867b68b', class: "block h-full", "data-name": "thread-container" }, index.h("div", { key: 'c9c1fc2fb7f9b139a7be8435cb79b4d465606550', class: "flex h-full flex-col gap-16 overflow-y-auto scroll-smooth", ref: (el) => (this.scrollContainer = el), "data-name": "scroll-container" }, !hasMessages ? (index.h("slot", { name: "thread-empty-state" })) : (index.h("div", { "data-name": "thread-messages-container", class: "flex flex-col gap-16" }, this.renderMessages(), this.renderLoadingIndicator())), index.h("slot", { key: '59eab9e05cd645a5683bca56e0480e3fa7895c68', name: "thread-messages" }))));
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

exports.at_prompt_input = AtPromptInputComponent;
exports.at_prompt_thread = AtPromptThread;
