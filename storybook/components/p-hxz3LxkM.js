import { p as proxyCustomElement, H, d as createEvent, h, F as Fragment, c as Host } from './p-BcFc6fJK.js';
import { c as classlist } from './p-COG8_R0C.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$3 } from './p-Dq-LpriF.js';
import { d as defineCustomElement$2 } from './p-CBwqQuQ7.js';
import { d as defineCustomElement$1 } from './p-BE5ysd7K.js';

var PromptResponseScore;
(function (PromptResponseScore) {
    PromptResponseScore[PromptResponseScore["NONE"] = 0] = "NONE";
    PromptResponseScore[PromptResponseScore["UP"] = 1] = "UP";
    PromptResponseScore[PromptResponseScore["DOWN"] = -1] = "DOWN";
})(PromptResponseScore || (PromptResponseScore = {}));

const atPromptMessageCss = "@keyframes atPromptFadeIn{from{opacity:0}to{opacity:1}}@keyframes atPromptTypingCursorBlink{0%,50%{opacity:1}51%,100%{opacity:0}}.at-prompt-fade-in{animation:atPromptFadeIn 0.6s ease-out}";

const messageVariantsConfig = {
    variants: {
        role: {
            user: 'bg-surface-2 text-dark ml-auto inline-block p-8',
            assistant: 'text-dark mr-auto',
            system: 'text-dark mr-auto',
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
const AtPromptMessage = /*@__PURE__*/ proxyCustomElement(class AtPromptMessage extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
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
    score = PromptResponseScore.NONE;
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
    get el() { return this; }
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
        const newScore = this.score === score ? PromptResponseScore.NONE : score;
        this.atVote.emit({ messageId: this.message_id, score: newScore });
    };
    renderActions() {
        if (this.loading)
            return null;
        return (h("div", { class: "mt-2 flex items-center justify-end gap-2", "data-name": "message-actions" }, this.role === 'user' && this.enable_edit && (h("at-tooltip", { position: "top" }, h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", icon: "edit", class: "text-xs", onClick: this.handleEdit, "data-name": "edit-button" }), h("span", null, this.translations?.ATUI?.PROMPT?.EDIT || 'Edit'))), this.role === 'assistant' && this.enable_vote && (h(Fragment, null, h("at-tooltip", { position: "top" }, h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", onClick: () => this.handleVote(PromptResponseScore.UP), "data-name": "vote-up-button" }, this.score === PromptResponseScore.UP ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "15px", viewBox: "0 -960 960 960", width: "15px", fill: "#000000" }, h("path", { d: "M720-144H264v-480l288-288 32 22q18 13 26.5 33t3.5 41l-38 192h264q30 0 51 21t21 51v57q0 8-1.5 14.5T906-467L787-188q-9 20-27 32t-40 12Z" }))) : (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "15px", viewBox: "0 -960 960 960", width: "15px", fill: "#adb5bd" }, h("path", { d: "M720-144H264v-480l288-288 32 22q17 12 26 30.5t5 38.5l-1 5-38 192h264q30 0 51 21t21 51v57q0 8-1.5 14.5T906-467L786.93-187.8Q778-168 760-156t-40 12Zm-384-72h384l120-279v-57H488l49-243-201 201v378Zm0-378v378-378Z" })))), h("span", null, this.translations?.ATUI?.PROMPT?.HELPFUL ||
            'Helpful')), h("at-tooltip", { position: "top" }, h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", onClick: () => this.handleVote(PromptResponseScore.DOWN), "data-name": "vote-down-button" }, this.score === PromptResponseScore.DOWN ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "15px", viewBox: "0 -960 960 960", width: "15px", fill: "#000000" }, h("path", { d: "M240-816h456v480L408-48l-32-22q-18-13-26.5-33t-3.5-41l38-192H120q-30 0-51-21t-21-51v-57q0-8 1.5-14.5T54-493l119-279q8-20 26.5-32t40.5-12Z" }))) : (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15px", viewBox: "0 -960 960 960", height: "15px", fill: "#adb5bd" // token-border-dark
        }, h("path", { d: "M240-816h456v480L408-48l-32-22q-17-12-26-30.5t-5-38.5l1-5 38-192H120q-30 0-51-21t-21-51v-57q0-8 1.5-14.5T54-493l119-279q8-20 26.5-32t40.5-12Zm384 72H240L120-465v57h352l-49 243 201-201v-378Zm0 378v-378 378Z" })))), h("span", null, this.translations?.ATUI?.PROMPT?.NOT_HELPFUL ||
            'Not Helpful')))), this.role === 'assistant' && this.enable_copy && (h("at-tooltip", { position: "top" }, h("at-button", { slot: "tooltip-trigger", size: "sm", icon: this.copyFeedbackVisible
                ? 'check'
                : 'content_copy', type: "secondaryText", onClick: this.handleCopy, "data-name": "copy-button" }), h("span", null, this.copyFeedbackVisible
            ? this.translations?.ATUI?.PROMPT?.COPIED ||
                'Copied'
            : this.translations?.ATUI?.PROMPT?.COPY ||
                'Copy'))), this.role === 'assistant' && this.error && (h("at-tooltip", { position: "top" }, h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", icon: "refresh", onClick: this.handleRetry, "data-name": "retry-button" }), h("span", null, this.translations?.ATUI?.PROMPT?.RETRY || 'Retry')))));
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
        return (h(Host, { key: '5d36fce78be47c281c454d8e3c4a5dbde4d47a98', class: "flex w-full gap-8", "data-name": "message-container", "data-role": this.role }, h("div", { key: '022c43ac8bee4f9547ce6a6694cdb6dd958e8d9a', class: "flex flex-1 flex-col" }, this.name && (h("span", { key: 'a8cb763b63a6cffba412f6226d2bbb28eb9bcc81', class: "text-light self-start text-sm", "data-name": "message-name" }, this.name)), h("div", { key: '4dfa5663e749fd7a9598c4254f6368746f4b8c81', class: messageClasses }, this.renderContent()), this.renderActions())));
    }
    static get watchers() { return {
        "content": ["watchContentChange"]
    }; }
    static get style() { return atPromptMessageCss; }
}, [260, "at-prompt-message", {
        "role": [1],
        "content": [1],
        "name": [1],
        "loading": [4],
        "error": [4],
        "error_message": [1],
        "score": [2],
        "enable_vote": [4],
        "enable_copy": [4],
        "enable_edit": [4],
        "message_id": [1],
        "response_animation": [1],
        "translations": [32],
        "copyFeedbackVisible": [32],
        "animatedContent": [32],
        "isAnimating": [32]
    }, undefined, {
        "content": ["watchContentChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-prompt-message", "at-button", "at-loading", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-prompt-message":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtPromptMessage);
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtPromptMessage as A, PromptResponseScore as P, defineCustomElement as d };
//# sourceMappingURL=p-hxz3LxkM.js.map

//# sourceMappingURL=p-hxz3LxkM.js.map