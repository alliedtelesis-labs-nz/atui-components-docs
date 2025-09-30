import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from './index-BlNBm0E8.js';
import { c as classlist } from './classlist-DowIpD9s.js';
import { f as fetchTranslations } from './translation-DuLooPsr.js';
import { PromptResponseScore } from './index.js';

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
const AtPromptMessage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atCopy = createEvent(this, "atCopy", 7);
        this.atVote = createEvent(this, "atVote", 7);
        this.atRetry = createEvent(this, "atRetry", 7);
        this.atEdit = createEvent(this, "atEdit", 7);
        /**
         * The role/type of the message sender (only 'user' and 'assistant' are supported)
         */
        this.role = 'user';
        /**
         * The message content text
         */
        this.content = '';
        /**
         * Shows loading state with animated placeholder content
         */
        this.loading = false;
        /**
         * Shows error state styling and enables retry action
         */
        this.error = false;
        /**
         * The current vote score of the message
         */
        this.score = PromptResponseScore.NONE;
        /**
         * Display voting actions for assistant messages
         */
        this.enable_vote = false;
        /**
         * Display copy action for assistant messages - copies message content to clipboard
         */
        this.enable_copy = false;
        /**
         * Display edit action for user messages
         */
        this.enable_edit = false;
        /**
         * Animation type for text streaming effect
         * - 'none': No animation (default)
         * - 'fade': Fade in the entire message
         * - 'words': Animate words appearing sequentially
         */
        this.response_animation = 'words';
        this.copyFeedbackVisible = false;
        this.animatedContent = '';
        this.isAnimating = false;
        this.handleCopy = async () => {
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
        this.handleRetry = () => {
            this.atRetry.emit();
        };
        this.handleEdit = () => {
            this.atEdit.emit(this.content);
        };
        this.handleVote = (score) => {
            const newScore = this.score === score ? PromptResponseScore.NONE : score;
            this.atVote.emit({ messageId: this.message_id, score: newScore });
        };
    }
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
    renderActions() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        if (this.loading)
            return null;
        return (h("div", { class: "mt-2 flex items-center justify-end gap-2", "data-name": "message-actions" }, this.role === 'user' && this.enable_edit && (h("at-tooltip", { position: "top" }, h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", icon: "edit", class: "text-xs", onClick: this.handleEdit, "data-name": "edit-button" }), h("span", null, ((_c = (_b = (_a = this.translations) === null || _a === void 0 ? void 0 : _a.ATUI) === null || _b === void 0 ? void 0 : _b.PROMPT) === null || _c === void 0 ? void 0 : _c.EDIT) || 'Edit'))), this.role === 'assistant' && this.enable_vote && (h(Fragment, null, h("at-tooltip", { position: "top" }, h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", onClick: () => this.handleVote(PromptResponseScore.UP), "data-name": "vote-up-button" }, this.score === PromptResponseScore.UP ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "15px", viewBox: "0 -960 960 960", width: "15px", fill: "#000000" }, h("path", { d: "M720-144H264v-480l288-288 32 22q18 13 26.5 33t3.5 41l-38 192h264q30 0 51 21t21 51v57q0 8-1.5 14.5T906-467L787-188q-9 20-27 32t-40 12Z" }))) : (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "15px", viewBox: "0 -960 960 960", width: "15px", fill: "#adb5bd" }, h("path", { d: "M720-144H264v-480l288-288 32 22q17 12 26 30.5t5 38.5l-1 5-38 192h264q30 0 51 21t21 51v57q0 8-1.5 14.5T906-467L786.93-187.8Q778-168 760-156t-40 12Zm-384-72h384l120-279v-57H488l49-243-201 201v378Zm0-378v378-378Z" })))), h("span", null, ((_f = (_e = (_d = this.translations) === null || _d === void 0 ? void 0 : _d.ATUI) === null || _e === void 0 ? void 0 : _e.PROMPT) === null || _f === void 0 ? void 0 : _f.HELPFUL) ||
            'Helpful')), h("at-tooltip", { position: "top" }, h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", onClick: () => this.handleVote(PromptResponseScore.DOWN), "data-name": "vote-down-button" }, this.score === PromptResponseScore.DOWN ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "15px", viewBox: "0 -960 960 960", width: "15px", fill: "#000000" }, h("path", { d: "M240-816h456v480L408-48l-32-22q-18-13-26.5-33t-3.5-41l38-192H120q-30 0-51-21t-21-51v-57q0-8 1.5-14.5T54-493l119-279q8-20 26.5-32t40.5-12Z" }))) : (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15px", viewBox: "0 -960 960 960", height: "15px", fill: "#adb5bd" // token-border-dark
        }, h("path", { d: "M240-816h456v480L408-48l-32-22q-17-12-26-30.5t-5-38.5l1-5 38-192H120q-30 0-51-21t-21-51v-57q0-8 1.5-14.5T54-493l119-279q8-20 26.5-32t40.5-12Zm384 72H240L120-465v57h352l-49 243 201-201v-378Zm0 378v-378 378Z" })))), h("span", null, ((_j = (_h = (_g = this.translations) === null || _g === void 0 ? void 0 : _g.ATUI) === null || _h === void 0 ? void 0 : _h.PROMPT) === null || _j === void 0 ? void 0 : _j.NOT_HELPFUL) ||
            'Not Helpful')))), this.role === 'assistant' && this.enable_copy && (h("at-tooltip", { position: "top" }, h("at-button", { slot: "tooltip-trigger", size: "sm", icon: this.copyFeedbackVisible
                ? 'check'
                : 'content_copy', type: "secondaryText", onClick: this.handleCopy, "data-name": "copy-button" }), h("span", null, this.copyFeedbackVisible
            ? ((_m = (_l = (_k = this.translations) === null || _k === void 0 ? void 0 : _k.ATUI) === null || _l === void 0 ? void 0 : _l.PROMPT) === null || _m === void 0 ? void 0 : _m.COPIED) ||
                'Copied'
            : ((_q = (_p = (_o = this.translations) === null || _o === void 0 ? void 0 : _o.ATUI) === null || _p === void 0 ? void 0 : _p.PROMPT) === null || _q === void 0 ? void 0 : _q.COPY) ||
                'Copy'))), this.role === 'assistant' && this.error && (h("at-tooltip", { position: "top" }, h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", icon: "refresh", onClick: this.handleRetry, "data-name": "retry-button" }), h("span", null, ((_t = (_s = (_r = this.translations) === null || _r === void 0 ? void 0 : _r.ATUI) === null || _s === void 0 ? void 0 : _s.PROMPT) === null || _t === void 0 ? void 0 : _t.RETRY) || 'Retry')))));
    }
    renderContent() {
        var _a, _b, _c;
        if (this.loading) {
            return (h("div", { class: "py-8", "data-name": "loading-wrapper" }, h("at-loading", { class: "flex items-center gap-4 py-8", "data-name": "loading-content", variant: "typing", size: "sm" })));
        }
        if (this.error) {
            return (h("div", { class: "space-y-2", ref: (el) => (this.errorEl = el), "data-name": "error-content" }, h("p", { class: "text-destructive-foreground" }, this.error_message ||
                ((_c = (_b = (_a = this.translations) === null || _a === void 0 ? void 0 : _a.ATUI) === null || _b === void 0 ? void 0 : _b.PROMPT) === null || _c === void 0 ? void 0 : _c.ERROR_GENERATING_RESPONSE) ||
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
        return (h(Host, { key: '9e579022438b40826131934dbbfda1d9be26d271', class: "flex w-full gap-8", "data-name": "message-container", "data-role": this.role }, h("div", { key: '8b9b839b9a8a66f910f19835a8a2ba0a8e259695', class: "flex flex-1 flex-col" }, this.name && (h("span", { key: '4f0746ffc78489117f29a56bc6c175be545724bb', class: "text-light self-start text-sm", "data-name": "message-name" }, this.name)), h("div", { key: '98bbbc20ab0c52e7053fc953f87a0fe4995c8cd7', class: messageClasses }, this.renderContent()), this.renderActions())));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "content": ["watchContentChange"]
    }; }
};
AtPromptMessage.style = atPromptMessageCss;

export { AtPromptMessage as at_prompt_message };
//# sourceMappingURL=at-prompt-message.entry.js.map
