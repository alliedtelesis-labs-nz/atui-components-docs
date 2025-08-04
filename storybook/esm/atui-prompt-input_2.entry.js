import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-D3rwhcmG.js';
import { f as fetchTranslations } from './translation-DuLooPsr.js';
import { c as cva } from './index-CVoOBWGd.js';
import { V as VoteStatus } from './atui-prompt-message-DsHg5GtE.js';

const promptInputContainerVariants = cva('relative flex flex-col items-end gap-2 rounded-lg border border-solid p-8 transition-[background-color,color,box-shadow] duration-300 ease-in-out', {
    variants: {
        invalid: {
            true: 'border-destructive focus-within:border-destructive focus-within:ring-2 focus-within:ring-destructive/30',
            false: 'border-med focus-within:border-active-foreground focus-within:ring-2 focus-within:ring-active-foreground/30',
        },
        disabled: {
            true: 'pointer-events-none bg-surface-1',
            false: 'bg-white',
        },
    },
    compoundVariants: [
        {
            disabled: true,
            className: 'focus-within:ring-0',
        },
    ],
    defaultVariants: {
        invalid: false,
        disabled: false,
    },
});
const promptInputVariants = cva('w-full resize-none whitespace-pre-wrap break-words border-none bg-transparent text-body text-dark shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0', {
    variants: {
        invalid: {
            true: 'border-destructive-foreground',
            false: 'border-med',
        },
        disabled: {
            true: 'pointer-events-none bg-surface-1',
            false: 'bg-disableD-LIGHT',
        },
    },
    defaultVariants: {
        invalid: false,
        disabled: false,
    },
});
const AtuiPromptInputComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
        this.atuiSubmit = createEvent(this, "atuiSubmit", 7);
        this.atuiStop = createEvent(this, "atuiStop", 7);
        this.atuiFocus = createEvent(this, "atuiFocus", 7);
        /**
         * Placeholder text to be shown when no input is passed
         */
        this.placeholder = 'Enter your message...';
        /**
         * Maximum height in pixels for auto-resize
         */
        this.max_height = 240;
        /**
         * Maximum character length with counter display
         */
        this.max_length = 2000;
        /**
         * Controls whether the component is in progress (shows stop button) or ready to send (shows send button)
         */
        this.in_progress = false;
        /**
         * The value of the input
         */
        this.value = '';
        /**
         * Disable input interactions and apply visual indication
         */
        this.disabled = false;
        this.invalid = false;
        /**
         * @slot label - Custom label content (alternative to using the label prop)
         */
        this.inputId = `prompt-input-${Math.random().toString(36).substring(2, 11)}`;
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    focusInput() {
        if (this.textareaEl) {
            this.textareaEl.focus();
            this.atuiFocus.emit();
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
        this.atuiChange.emit(this.value);
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
            this.atuiStop.emit();
        }
        else if (this.value && this.value.trim() !== '' && !this.invalid) {
            this.atuiSubmit.emit(this.value.trim());
            this.value = '';
            this.invalid = false; // Reset invalid state when message is sent
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
        return (h(Host, { key: 'e54ed43826666c740d703ec3d1d4865369f086e5', tabindex: "-1", id: this.inputId + '-container', class: "w-full px-16" }, h("div", { key: '5e2256bae1571ad99113275872256b91f18f5dac', class: "flex flex-col" }, h("slot", { key: 'dc6fdfec65f2c270d3244159a206d5d0dbf79c22', name: "label" }), (this.label || this.info_text) && (h("atui-form-label", { key: '15ada6eccb75433b71a11a9e7036b23df4eb8a74', label: this.label, for: this.inputId, info_text: this.info_text, "data-name": "prompt-input-label" })), this.hint_text && (h("span", { key: '74c6e846501d488f4418f00f90dba0e2024ea37a', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "prompt-input-hint" }, this.hint_text))), h("div", { key: 'ba6c2ace5bae12a2cdb3318f8702c3f5b99aa6d2', class: containerClass }, h("textarea", { key: 'baa4bda2ac54d5662a99563586bdceebf7905077', class: inputClass, disabled: this.disabled, id: this.inputId, placeholder: this.placeholder, onInput: (event) => this.handleInput(event), onKeyDown: (event) => this.handleKeyDown(event), value: this.value, ref: (el) => (this.textareaEl = el), style: {
                minHeight: '44px',
                maxHeight: this.max_height + 'px',
                overflow: 'hidden',
            }, "data-name": "prompt-input" }), h("div", { key: 'c2984a8ae6fdfc7b21f1aec3691b8c7adb314cb1', class: "gap-1 flex w-full items-center justify-between" }, h("div", { key: '386dbe72a4f679ff042f4c871cf09e74aaadfc5d', class: "flex items-center gap-4" }, h("slot", { key: '00d4c8c41c61f663b44849199017b13e6437e5cc', name: "actions-left" })), h("div", { key: '7169b8dfd37574b4b48ad9b3f526307978063963', class: "flex items-center gap-4 self-end" }, h("slot", { key: 'b1d6cfd0d86ac0c41fb9f1284f9500cb7d4aaaa0', name: "actions-right" }), h("atui-button", { key: 'a5da2893a3ef7c500701d2eb5daed7a3ece9362d', class: "rounded-lg", size: "sm", type: "secondary", icon: this.in_progress ? 'stop' : 'arrow_upward', disabled: !canSend, onClick: () => this.sendMessage(), onKeyDown: (event) => {
                if (event.key === 'Enter' ||
                    event.key === ' ') {
                    this.sendMessage();
                }
            }, "data-name": "prompt-send-button" })))), h("slot", { key: 'a1852979197f8078ad043ad75b570d453356bdec', name: "footer" }), this.invalid && (h("span", { key: '19f61ee46cb85601a265b63adfb8db85afbc2783', class: "text-xs text-error-dark", "data-name": "error-text" }, this.error_text
            ? this.error_text
            : this.translations.ATUI.PROMPT.ERROR_MESSAGE))));
    }
    get el() { return getElement(this); }
};

const AtuiPromptThread = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiMessageCopy = createEvent(this, "atuiMessageCopy", 7);
        this.atuiMessageRetry = createEvent(this, "atuiMessageRetry", 7);
        this.atuiMessageEdit = createEvent(this, "atuiMessageEdit", 7);
        this.atuiMessageVote = createEvent(this, "atuiMessageVote", 7);
        /**
         * Array of messages to display in the conversation thread
         */
        this.messages = [];
        /**
         * Shows a loading indicator for incoming messages
         */
        this.loading = false;
        /**
         * Automatically scroll to the bottom when new messages are added
         */
        this.auto_scroll = true;
        /**
         * Display name for chatbot/assistant messages
         */
        this.chatbot_title = 'Assistant';
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
        event.stopPropagation();
        const messageIndex = this.messages.findIndex((msg) => msg.id === event.detail.messageId);
        if (messageIndex !== -1) {
            const updatedMessages = [...this.messages];
            updatedMessages[messageIndex] = Object.assign(Object.assign({}, updatedMessages[messageIndex]), { vote_status: event.detail.score });
            this.messages = updatedMessages;
            this.atuiMessageVote.emit(event.detail);
        }
    }
    handleMessageCopy(event) {
        const messageIndex = this.getMessageIndexFromEvent(event);
        if (messageIndex !== -1) {
            this.atuiMessageCopy.emit({
                messageId: this.messages[messageIndex].id,
                content: event.detail,
            });
        }
    }
    handleMessageRetry(event) {
        const messageIndex = this.getMessageIndexFromEvent(event);
        if (messageIndex !== -1) {
            this.atuiMessageRetry.emit({
                messageId: this.messages[messageIndex].id,
            });
        }
    }
    handleMessageEdit(event) {
        const messageIndex = this.getMessageIndexFromEvent(event);
        if (messageIndex !== -1) {
            this.atuiMessageEdit.emit({
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
        return (h("div", { class: "flex flex-col gap-16", "data-name": "loading-container" }, h("atui-prompt-message", { role: "assistant", content: "Typing...", name: this.chatbot_title, loading: true, "data-name": "loading-message" })));
    }
    renderMessage(message, index) {
        const role = message.role === 'system' ? 'assistant' : message.role;
        const name = message.role === 'user'
            ? message.name
            : message.name || this.chatbot_title;
        return (h("atui-prompt-message", { role: role, content: message.content, name: name, loading: message.loading, error: message.error, error_message: message.error_message, vote_status: message.vote_status || VoteStatus.None, message_id: message.id, enable_vote: this.enable_vote, enable_copy: this.enable_copy, enable_edit: this.enable_edit, "data-name": `message-${index}`, "data-message-index": index }));
    }
    renderMessages() {
        return this.messages.map((message, index) => this.renderMessage(message, index));
    }
    render() {
        const hasMessages = this.messages && this.messages.length > 0;
        return (h(Host, { key: 'a618e18bd706226b9df6d6ed7f822d31096e0d09', class: "block h-full", "data-name": "thread-container" }, h("div", { key: 'f8504349bb21927baecc1491d02905568d1240bd', class: "flex h-full flex-col gap-16 overflow-y-auto scroll-smooth", ref: (el) => (this.scrollContainer = el), "data-name": "scroll-container" }, !hasMessages ? (h("slot", { name: "thread-empty-state" })) : (h("div", { "data-name": "thread-messages-container", class: "flex flex-col gap-16" }, this.renderMessages(), this.renderLoadingIndicator())), h("slot", { key: '031206d22787e03e47dbe2cf81a1eee6e5ac986d', name: "thread-messages" }))));
    }
};

export { AtuiPromptInputComponent as atui_prompt_input, AtuiPromptThread as atui_prompt_thread };
//# sourceMappingURL=atui-prompt-input.atui-prompt-thread.entry.js.map

//# sourceMappingURL=atui-prompt-input_2.entry.js.map