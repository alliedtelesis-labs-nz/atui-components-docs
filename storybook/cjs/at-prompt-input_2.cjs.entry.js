'use strict';

var index = require('./index--r5sCsiV.js');
var translation = require('./translation-D6fmqwsI.js');
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
        return (index.h(index.Host, { key: '1e1caf0937ad2abd8e10a6721739a35c5ef73a94', id: this.inputId + '-container', class: "w-full px-16" }, index.h("div", { key: 'b311b502578e08e7fe2b631765186577dd270802', class: "flex flex-col" }, index.h("slot", { key: '786092c3d9a3a9cbafe0eeb0acb9f9d6c4f2f8f3', name: "label" }), (this.label || this.info_text) && (index.h("at-form-label", { key: '84ae433502dc1d3e4495b47d3f9c43e3025d715f', label: this.label, for: this.inputId, info_text: this.info_text, "data-name": "prompt-input-label" })), this.hint_text && (index.h("span", { key: '1496d20a26bd1ea34ffbe737c84aaba616bb9f69', class: "text-muted mb-8 inline-block text-xs leading-tight", "data-name": "prompt-input-hint" }, this.hint_text))), index.h("div", { key: 'dd99b3bb3b6158adaa03d67dcfe476bb0ac7d962', class: containerClass }, index.h("textarea", { key: '21edf8bdb9023393c8df6e7cedda3655a7319b28', class: inputClass, disabled: this.disabled, id: this.inputId, placeholder: this.placeholder, onInput: (event) => this.handleInput(event), onKeyDown: (event) => this.handleKeyDown(event), value: this.value, ref: (el) => (this.textareaEl = el), style: {
                minHeight: '44px',
                maxHeight: this.max_height + 'px',
                overflow: 'auto',
            }, "data-name": "prompt-input" }), index.h("div", { key: 'd4f20ec7663d12909d09939f7f5936f6020a5513', class: "flex w-full items-center justify-between gap-1" }, index.h("div", { key: '636c81dfe93080c6044fc852c461ed82b5c4d1b4', class: "flex items-center gap-4" }, index.h("slot", { key: 'fea5aeeed3083928fe08008bd46a905e522aa824', name: "actions-left" })), index.h("div", { key: '36bf9d536fb8d2c0ac7c1b220973886cd6bcb683', class: "flex items-center gap-4 self-end" }, index.h("slot", { key: '6ca92f9d659af51cf5033c1b1be127c3e688727b', name: "actions-right" }), index.h("at-button", { key: '6a8cea7d936fa6f792e375f91c0c22e6acf1b74c', class: "rounded-lg", size: "sm", type: "primary", disabled: !canSend, onClick: () => this.sendMessage(), onKeyDown: (event) => {
                if (event.key === 'Enter' ||
                    event.key === ' ') {
                    this.sendMessage();
                }
            }, "data-name": "prompt-send-button" }, index.h("at-icon", { key: '3bbdedd990774eeb2c6433a1adacec4e7b5cfd41', slot: "icon", name: this.in_progress ? 'stop' : 'send' }))))), index.h("slot", { key: '210f343177e248a7bc353e2367029530c60526bf', name: "footer" }), this.invalid && (index.h("span", { key: 'e0c1e785c40156f1012646f8deda18b4ec52a2c9', class: "text-error-foreground text-xs", "data-name": "error-text" }, this.error_text
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
        return (index.h("div", { class: "flex flex-col gap-16", "data-name": "loading-container" }, index.h("at-prompt-message", { role: 'assistant', content: "Typing...", name: this.chatbot_title, loading: true, "data-name": "loading-message" })));
    }
    renderMessage(message, index$1) {
        const role = message.role;
        const name = message.role === 'user'
            ? message.name
            : message.name || this.chatbot_title;
        const animate = message.role === 'assistant' ? this.response_animation : 'fade';
        return (index.h("at-prompt-message", { role: role, content: message.content, name: name, loading: message.loading, error: message.error, error_message: message.error_message, score: message.score || prompt.AtPromptResponseScore.NONE, message_id: message.id, enable_vote: this.enable_vote, enable_copy: this.enable_copy, enable_edit: this.enable_edit, response_animation: animate, "data-name": `message-${index$1}`, "data-message-index": index$1 }));
    }
    renderMessages() {
        return this.messages.map((message, index) => this.renderMessage(message, index));
    }
    render() {
        const hasMessages = this.messages && this.messages.length > 0;
        return (index.h(index.Host, { key: '79af1df51a1ab8cf2ba714c711785cd801174624', class: "block h-full", "data-name": "thread-container" }, index.h("div", { key: '55dd59707dd9d049831ef70d41dbec5145184494', class: "flex h-full flex-col gap-16 overflow-y-auto scroll-smooth", ref: (el) => (this.scrollContainer = el), "data-name": "scroll-container" }, !hasMessages ? (index.h("slot", { name: "thread-empty-state" })) : (index.h("div", { "data-name": "thread-messages-container", class: "flex flex-col gap-16" }, this.renderMessages(), this.renderLoadingIndicator())), index.h("slot", { key: '5860abf8f8842c0571df765bbfce5d2423120764', name: "thread-messages" }))));
    }
};

exports.at_prompt_input = AtPromptInputComponent;
exports.at_prompt_thread = AtPromptThread;
