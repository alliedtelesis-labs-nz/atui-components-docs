'use strict';

var index = require('./index--r5sCsiV.js');
var classlist = require('./classlist-BPb95vgj.js');
var translation = require('./translation-D6fmqwsI.js');
var prompt = require('./prompt-DoMXcdvl.js');

const atPromptMessageCss = () => `@keyframes atPromptFadeIn{from{opacity:0}to{opacity:1}}@keyframes atPromptTypingCursorBlink{0%,50%{opacity:1}51%,100%{opacity:0}}.at-prompt-fade-in{animation:atPromptFadeIn 0.6s ease-out}`;

const messageVariantsConfig = {
    variants: {
        role: {
            user: 'bg-surface-2 text-foreground ml-auto inline-block p-8',
            assistant: 'text-foreground mr-auto',
            system: 'text-foreground mr-auto',
        },
        loading: {
            true: 'animate-pulse',
            false: '',
        },
    },
    defaultVariants: {
        role: 'user',
        loading: false,
    },
};
const getMessageClasses = classlist.classlist('rounded-lg py-4 text-base', messageVariantsConfig);
const AtPromptMessage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atCopy = index.createEvent(this, "atCopy", 7);
        this.atVote = index.createEvent(this, "atVote", 7);
        this.atRetry = index.createEvent(this, "atRetry", 7);
        this.atEdit = index.createEvent(this, "atEdit", 7);
    }
    /**
     * The role/type of the message sender (only 'user' and 'assistant' are supported)
     */
    role = 'user';
    /**
     * The message content text
     */
    content = '';
    /**
     * Display name for the message sender
     */
    name;
    /**
     * Shows loading state with animated placeholder content
     */
    loading = false;
    /**
     * Shows error state styling and enables retry action
     */
    error = false;
    /**
     * Custom error message text (defaults to generic error message)
     */
    error_message;
    /**
     * The current vote score of the message
     */
    score = prompt.AtPromptResponseScore.NONE;
    /**
     * Display voting actions for assistant messages
     */
    enable_vote = false;
    /**
     * Display copy action for assistant messages - copies message content to clipboard
     */
    enable_copy = false;
    /**
     * Display edit action for user messages
     */
    enable_edit = false;
    /**
     * Unique identifier for the message
     */
    message_id;
    /**
     * Animation type for text streaming effect
     * - 'none': No animation (default)
     * - 'fade': Fade in the entire message
     * - 'words': Animate words appearing sequentially
     */
    response_animation = 'words';
    /**
     * Emitted when the copy action is triggered
     */
    atCopy;
    /**
     * Emitted when a vote action is triggered
     */
    atVote;
    /**
     * Emitted when the retry action is triggered (for assistant messages with errors)
     */
    atRetry;
    /**
     * Emitted when the edit action is triggered (for user messages)
     */
    atEdit;
    translations;
    copyFeedbackVisible = false;
    animatedContent = '';
    isAnimating = false;
    errorEl;
    get el() { return index.getElement(this); }
    async componentWillLoad() {
        this.translations = await translation.fetchTranslations(this.el);
        this.initializeContent();
    }
    watchContentChange(newContent) {
        if (newContent &&
            this.response_animation === 'words' &&
            this.role === 'assistant') {
            this.startWordAnimation(newContent);
        }
        else {
            this.animatedContent = newContent;
        }
    }
    initializeContent() {
        if (this.content &&
            this.response_animation === 'words' &&
            this.role === 'assistant') {
            this.startWordAnimation(this.content);
        }
        else {
            this.animatedContent = this.content;
        }
    }
    startWordAnimation(content) {
        if (this.isAnimating)
            return;
        this.isAnimating = true;
        this.animatedContent = '';
        const words = content.split(' ');
        let currentWordIndex = 0;
        const animateNextWord = () => {
            if (currentWordIndex < words.length) {
                if (currentWordIndex === 0) {
                    this.animatedContent = words[currentWordIndex];
                }
                else {
                    this.animatedContent += ' ' + words[currentWordIndex];
                }
                currentWordIndex++;
                const delay = Math.random() * 30 + 30;
                setTimeout(animateNextWord, delay);
            }
            else {
                this.isAnimating = false;
            }
        };
        setTimeout(animateNextWord, 30);
    }
    handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(this.content);
            this.copyFeedbackVisible = true;
            this.atCopy.emit(this.content);
            setTimeout(() => {
                this.copyFeedbackVisible = false;
            }, 2000);
        }
        catch (err) {
            console.error('Failed to copy text:', err);
        }
    };
    handleRetry = () => {
        this.atRetry.emit();
    };
    handleEdit = () => {
        this.atEdit.emit(this.content);
    };
    handleVote = (score) => {
        const newScore = this.score === score ? prompt.AtPromptResponseScore.NONE : score;
        this.atVote.emit({ messageId: this.message_id, score: newScore });
    };
    renderActions() {
        if (this.loading)
            return null;
        return (index.h("div", { class: "mt-2 flex items-center justify-end gap-2", "data-name": "message-actions" }, this.role === 'user' && this.enable_edit && (index.h("at-tooltip", { position: "top" }, index.h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", class: "text-xs", onClick: this.handleEdit, "data-name": "edit-button" }, index.h("at-icon", { slot: "icon", name: "edit" })), index.h("span", null, this.translations?.ATUI?.PROMPT?.EDIT || 'Edit'))), this.role === 'assistant' && this.enable_vote && (index.h(index.Fragment, null, index.h("at-tooltip", { position: "top" }, index.h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", onClick: () => this.handleVote(prompt.AtPromptResponseScore.UP), "data-name": "vote-up-button" }, index.h("at-icon", { slot: "icon", name: this.score === prompt.AtPromptResponseScore.UP
                ? 'thumbs_up_filled'
                : 'thumbs_up' })), index.h("span", null, this.translations?.ATUI?.PROMPT?.HELPFUL ||
            'Helpful')), index.h("at-tooltip", { position: "top" }, index.h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", onClick: () => this.handleVote(prompt.AtPromptResponseScore.DOWN), "data-name": "vote-down-button" }, index.h("at-icon", { slot: "icon", name: this.score ===
                prompt.AtPromptResponseScore.DOWN
                ? 'thumbs_down_filled'
                : 'thumbs_down' })), index.h("span", null, this.translations?.ATUI?.PROMPT?.NOT_HELPFUL ||
            'Not Helpful')))), this.role === 'assistant' && this.enable_copy && (index.h("at-tooltip", { position: "top" }, index.h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", onClick: this.handleCopy, "data-name": "copy-button" }, index.h("at-icon", { slot: "icon", name: this.copyFeedbackVisible ? 'check' : 'copy' })), index.h("span", null, this.copyFeedbackVisible
            ? this.translations?.ATUI?.PROMPT?.COPIED ||
                'Copied'
            : this.translations?.ATUI?.PROMPT?.COPY ||
                'Copy'))), this.role === 'assistant' && this.error && (index.h("at-tooltip", { position: "top" }, index.h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", onClick: this.handleRetry, "data-name": "retry-button" }, index.h("at-icon", { slot: "icon", name: "retry" })), index.h("span", null, this.translations?.ATUI?.PROMPT?.RETRY || 'Retry')))));
    }
    renderContent() {
        if (this.loading) {
            return (index.h("div", { class: "py-8", "data-name": "loading-wrapper" }, index.h("at-loading", { class: "flex items-center gap-4 py-8", "data-name": "loading-content", variant: "typing", size: "sm" })));
        }
        if (this.error) {
            return (index.h("div", { class: "space-y-2", ref: (el) => (this.errorEl = el), "data-name": "error-content" }, index.h("p", { class: "text-destructive-foreground" }, this.error_message ||
                this.translations?.ATUI?.PROMPT
                    ?.ERROR_GENERATING_RESPONSE ||
                'Error generating response')));
        }
        const contentToDisplay = this.response_animation === 'words' && this.role === 'assistant'
            ? this.animatedContent
            : this.content;
        const animationClass = this.response_animation === 'fade' ||
            this.response_animation === 'words'
            ? 'at-prompt-fade-in'
            : '';
        return (index.h("div", { class: `prose prose-sm preserve-newlines max-w-none ${animationClass}`, "data-name": "message-content" }, index.h("slot", null), contentToDisplay));
    }
    render() {
        const messageClasses = getMessageClasses({
            role: this.role,
            loading: this.loading,
        });
        return (index.h(index.Host, { key: '710dfc5da6009c226c85818935bd2b80caee0d10', class: "flex w-full gap-8", "data-name": "message-container", "data-role": this.role }, index.h("div", { key: 'edbfb02d2994f304445571651dcba3f9cf4b0808', class: "flex flex-1 flex-col" }, this.name && (index.h("span", { key: '1f4655a7e929be226a90074833c043df6c10deb3', class: "text-muted self-start text-sm", "data-name": "message-name" }, this.name)), index.h("div", { key: '33f1c389a85d3de7533b3b63be621ceb720ee3a7', class: messageClasses }, this.renderContent()), this.renderActions())));
    }
    static get watchers() { return {
        "content": [{
                "watchContentChange": 0
            }]
    }; }
};
AtPromptMessage.style = atPromptMessageCss();

exports.at_prompt_message = AtPromptMessage;
