'use strict';

var index = require('./index-i7hIKTeN.js');
var translation = require('./translation-HqquF7bU.js');
var classlist = require('./classlist-BddvonaD.js');
var atuiPromptMessage_entry = require('./atui-prompt-message-DK82d2S_.js');

const promptInputContainerVariants = classlist.classlist('relative flex flex-col items-end gap-2 rounded-lg border border-solid p-8 transition-[background-color,color,box-shadow] duration-300 ease-in-out', {
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
const promptInputVariants = classlist.classlist('text-body text-dark w-full resize-none border-none bg-transparent break-words whitespace-pre-wrap shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0', {
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
const AtuiPromptInputComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
        this.atuiSubmit = index.createEvent(this, "atuiSubmit", 7);
        this.atuiStop = index.createEvent(this, "atuiStop", 7);
        this.atuiFocus = index.createEvent(this, "atuiFocus", 7);
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
        this.translations = await translation.fetchTranslations(this.el);
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
        return (index.h(index.Host, { key: '1592ab4d84c1d42627897aaaffec2e224b491fd2', tabindex: "-1", id: this.inputId + '-container', class: "w-full px-16" }, index.h("div", { key: '8f6568cd35daef210b7822024e911a1c1a823194', class: "flex flex-col" }, index.h("slot", { key: '1ae9a4d2eb186f352fbade9eefa32a754ea5911d', name: "label" }), (this.label || this.info_text) && (index.h("atui-form-label", { key: 'aebf43494069bcffbf9bd218c2281fb7debe1ede', label: this.label, for: this.inputId, info_text: this.info_text, "data-name": "prompt-input-label" })), this.hint_text && (index.h("span", { key: 'ef7d2889e4876348aa53fbb9354e32b0553b599e', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "prompt-input-hint" }, this.hint_text))), index.h("div", { key: '1d8011a3f55cfdef71e9e752d9e5b92f93a07481', class: containerClass }, index.h("textarea", { key: '8a35b0ad2d385d63595de1552cf5758e681a9455', class: inputClass, disabled: this.disabled, id: this.inputId, placeholder: this.placeholder, onInput: (event) => this.handleInput(event), onKeyDown: (event) => this.handleKeyDown(event), value: this.value, ref: (el) => (this.textareaEl = el), style: {
                minHeight: '44px',
                maxHeight: this.max_height + 'px',
                overflow: 'hidden',
            }, "data-name": "prompt-input" }), index.h("div", { key: 'c621ac97fa67fcfe0ef777c1b8260048c9431950', class: "flex w-full items-center justify-between gap-1" }, index.h("div", { key: '862c38467b207d6472d198d127fe11998f806cb4', class: "flex items-center gap-4" }, index.h("slot", { key: '67e3cb04461d25f7015abcb062e6a49000560f00', name: "actions-left" })), index.h("div", { key: '762b3352dccca14e6ecea89d1aa5666ed14f3e57', class: "flex items-center gap-4 self-end" }, index.h("slot", { key: '2ec9c2bd1233deec40759abf6e4b2dc3d38d9b05', name: "actions-right" }), index.h("atui-button", { key: '75dbccf3ffaa1bb5a4104f3aeda952cb60cb7712', class: "rounded-lg", size: "sm", type: "secondary", icon: this.in_progress ? 'stop' : 'arrow_upward', disabled: !canSend, onClick: () => this.sendMessage(), onKeyDown: (event) => {
                if (event.key === 'Enter' ||
                    event.key === ' ') {
                    this.sendMessage();
                }
            }, "data-name": "prompt-send-button" })))), index.h("slot", { key: 'dde3f7a1d572672a46cfc7988185da9cbd102973', name: "footer" }), this.invalid && (index.h("span", { key: '048cb5b08c8aa5652b1a452310831713b4158929', class: "text-error-dark text-xs", "data-name": "error-text" }, this.error_text
            ? this.error_text
            : this.translations.ATUI.PROMPT.ERROR_MESSAGE))));
    }
    get el() { return index.getElement(this); }
};

const AtuiPromptThread = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiMessageCopy = index.createEvent(this, "atuiMessageCopy", 7);
        this.atuiMessageRetry = index.createEvent(this, "atuiMessageRetry", 7);
        this.atuiMessageEdit = index.createEvent(this, "atuiMessageEdit", 7);
        this.atuiMessageVote = index.createEvent(this, "atuiMessageVote", 7);
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
        return (index.h("div", { class: "flex flex-col gap-16", "data-name": "loading-container" }, index.h("atui-prompt-message", { role: "assistant", content: "Typing...", name: this.chatbot_title, loading: true, "data-name": "loading-message" })));
    }
    renderMessage(message, index$1) {
        const role = message.role === 'system' ? 'assistant' : message.role;
        const name = message.role === 'user'
            ? message.name
            : message.name || this.chatbot_title;
        return (index.h("atui-prompt-message", { role: role, content: message.content, name: name, loading: message.loading, error: message.error, error_message: message.error_message, vote_status: message.vote_status || atuiPromptMessage_entry.VoteStatus.None, message_id: message.id, enable_vote: this.enable_vote, enable_copy: this.enable_copy, enable_edit: this.enable_edit, "data-name": `message-${index$1}`, "data-message-index": index$1 }));
    }
    renderMessages() {
        return this.messages.map((message, index) => this.renderMessage(message, index));
    }
    render() {
        const hasMessages = this.messages && this.messages.length > 0;
        return (index.h(index.Host, { key: '9baf993b641b3a23e8c604920bd585a313d85eb5', class: "block h-full", "data-name": "thread-container" }, index.h("div", { key: 'd2dd756860dcc9d000ba1f6f4789ac639afa5ebe', class: "flex h-full flex-col gap-16 overflow-y-auto scroll-smooth", ref: (el) => (this.scrollContainer = el), "data-name": "scroll-container" }, !hasMessages ? (index.h("slot", { name: "thread-empty-state" })) : (index.h("div", { "data-name": "thread-messages-container", class: "flex flex-col gap-16" }, this.renderMessages(), this.renderLoadingIndicator())), index.h("slot", { key: 'bfdfaf6365c481acc6070e8b494f565adcee2179', name: "thread-messages" }))));
    }
};

exports.atui_prompt_input = AtuiPromptInputComponent;
exports.atui_prompt_thread = AtuiPromptThread;
//# sourceMappingURL=atui-prompt-input.atui-prompt-thread.entry.cjs.js.map

//# sourceMappingURL=atui-prompt-input_2.cjs.entry.js.map