import { r as registerInstance, c as createEvent, g as getElement, h, F as Fragment, H as Host } from './index-BAAX2Der.js';
import { c as classlist } from './classlist-COG8_R0C.js';
import { f as fetchTranslations } from './translation-B5XBUsvV.js';
import { A as AtPromptResponseScore } from './prompt-CQKUaTzD.js';

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
const getMessageClasses = classlist('rounded-lg py-4 text-base', messageVariantsConfig);
const AtPromptMessage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atCopy = createEvent(this, "atCopy", 7);
        this.atVote = createEvent(this, "atVote", 7);
        this.atRetry = createEvent(this, "atRetry", 7);
        this.atEdit = createEvent(this, "atEdit", 7);
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
    score = AtPromptResponseScore.NONE;
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
    get el() { return getElement(this); }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
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
        const newScore = this.score === score ? AtPromptResponseScore.NONE : score;
        this.atVote.emit({ messageId: this.message_id, score: newScore });
    };
    renderActions() {
        if (this.loading)
            return null;
        return (h("div", { class: "mt-2 flex items-center justify-end gap-2", "data-name": "message-actions" }, this.role === 'user' && this.enable_edit && (h("at-tooltip", { position: "top" }, h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", class: "text-xs", onClick: this.handleEdit, "data-name": "edit-button" }, h("at-icon", { slot: "icon", name: "edit" })), h("span", null, this.translations?.ATUI?.PROMPT?.EDIT || 'Edit'))), this.role === 'assistant' && this.enable_vote && (h(Fragment, null, h("at-tooltip", { position: "top" }, h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", onClick: () => this.handleVote(AtPromptResponseScore.UP), "data-name": "vote-up-button" }, h("at-icon", { slot: "icon", name: this.score === AtPromptResponseScore.UP
                ? 'thumbs_up_filled'
                : 'thumbs_up' })), h("span", null, this.translations?.ATUI?.PROMPT?.HELPFUL ||
            'Helpful')), h("at-tooltip", { position: "top" }, h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", onClick: () => this.handleVote(AtPromptResponseScore.DOWN), "data-name": "vote-down-button" }, h("at-icon", { slot: "icon", name: this.score ===
                AtPromptResponseScore.DOWN
                ? 'thumbs_down_filled'
                : 'thumbs_down' })), h("span", null, this.translations?.ATUI?.PROMPT?.NOT_HELPFUL ||
            'Not Helpful')))), this.role === 'assistant' && this.enable_copy && (h("at-tooltip", { position: "top" }, h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", onClick: this.handleCopy, "data-name": "copy-button" }, h("at-icon", { slot: "icon", name: this.copyFeedbackVisible ? 'check' : 'copy' })), h("span", null, this.copyFeedbackVisible
            ? this.translations?.ATUI?.PROMPT?.COPIED ||
                'Copied'
            : this.translations?.ATUI?.PROMPT?.COPY ||
                'Copy'))), this.role === 'assistant' && this.error && (h("at-tooltip", { position: "top" }, h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", onClick: this.handleRetry, "data-name": "retry-button" }, h("at-icon", { slot: "icon", name: "retry" })), h("span", null, this.translations?.ATUI?.PROMPT?.RETRY || 'Retry')))));
    }
    renderContent() {
        if (this.loading) {
            return (h("div", { class: "py-8", "data-name": "loading-wrapper" }, h("at-loading", { class: "flex items-center gap-4 py-8", "data-name": "loading-content", variant: "typing", size: "sm" })));
        }
        if (this.error) {
            return (h("div", { class: "space-y-2", ref: (el) => (this.errorEl = el), "data-name": "error-content" }, h("p", { class: "text-destructive-foreground" }, this.error_message ||
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
        return (h("div", { class: `prose prose-sm preserve-newlines max-w-none ${animationClass}`, "data-name": "message-content" }, h("slot", null), contentToDisplay));
    }
    render() {
        const messageClasses = getMessageClasses({
            role: this.role,
            loading: this.loading,
        });
        return (h(Host, { key: '16c0b67f8b8bebff56be28993619f547867eed35', class: "flex w-full gap-8", "data-name": "message-container", "data-role": this.role }, h("div", { key: 'e1396070bda9c2316b4c90860b1503aa0cf9da1d', class: "flex flex-1 flex-col" }, this.name && (h("span", { key: '90ecaac033e69054a37b632e0323a7a2ea0400b7', class: "text-muted self-start text-sm", "data-name": "message-name" }, this.name)), h("div", { key: 'ec8283fd0a4552e5eef5ef89538acb6a1ce56bd1', class: messageClasses }, this.renderContent()), this.renderActions())));
    }
    static get watchers() { return {
        "content": [{
                "watchContentChange": 0
            }]
    }; }
};
AtPromptMessage.style = atPromptMessageCss();

export { AtPromptMessage as at_prompt_message };
