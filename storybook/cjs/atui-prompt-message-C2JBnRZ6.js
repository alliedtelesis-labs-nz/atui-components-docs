'use strict';

var index = require('./index-DSZ-ppzm.js');
var index$1 = require('./index-palgSxc9.js');
var translation = require('./translation-HqquF7bU.js');

// Add vote status enum to match Angular implementation
exports.VoteStatus = void 0;
(function (VoteStatus) {
    VoteStatus[VoteStatus["None"] = 0] = "None";
    VoteStatus[VoteStatus["Up"] = 1] = "Up";
    VoteStatus[VoteStatus["Down"] = -1] = "Down";
})(exports.VoteStatus || (exports.VoteStatus = {}));
const messageVariants = index$1.cva('text-base rounded-lg py-4', {
    variants: {
        role: {
            user: 'ml-auto inline-block bg-surface-2 p-8 text-dark',
            assistant: 'mr-auto text-dark',
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
});
const AtuiPromptMessage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiCopy = index.createEvent(this, "atuiCopy", 7);
        this.atuiVote = index.createEvent(this, "atuiVote", 7);
        this.atuiRetry = index.createEvent(this, "atuiRetry", 7);
        this.atuiEdit = index.createEvent(this, "atuiEdit", 7);
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
         * The current vote status of the message
         */
        this.vote_status = exports.VoteStatus.None;
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
        this.copyFeedbackVisible = false;
        this.handleCopy = async () => {
            try {
                await navigator.clipboard.writeText(this.content);
                this.copyFeedbackVisible = true;
                this.atuiCopy.emit(this.content);
                setTimeout(() => {
                    this.copyFeedbackVisible = false;
                }, 2000);
            }
            catch (err) {
                console.error('Failed to copy text:', err);
            }
        };
        this.handleRetry = () => {
            this.atuiRetry.emit();
        };
        this.handleEdit = () => {
            this.atuiEdit.emit(this.content);
        };
        this.handleVote = (score) => {
            const newScore = this.vote_status === score ? exports.VoteStatus.None : score;
            this.atuiVote.emit({ messageId: this.message_id, score: newScore });
        };
    }
    async componentWillLoad() {
        this.translations = await translation.fetchTranslations(this.el);
    }
    renderActions() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        if (this.loading)
            return null;
        return (index.h("div", { class: "mt-2 flex items-center justify-end gap-2", "data-name": "message-actions" }, this.role === 'user' && this.enable_edit && (index.h("atui-tooltip", { position: "top" }, index.h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", icon: "edit", class: "text-xs", onClick: this.handleEdit, "data-name": "edit-button" }), index.h("span", { slot: "tooltip-content" }, ((_c = (_b = (_a = this.translations) === null || _a === void 0 ? void 0 : _a.ATUI) === null || _b === void 0 ? void 0 : _b.PROMPT) === null || _c === void 0 ? void 0 : _c.EDIT) || 'Edit'))), this.role === 'assistant' && this.enable_vote && (index.h(index.Fragment, null, index.h("atui-tooltip", { position: "top" }, index.h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", onClick: () => this.handleVote(exports.VoteStatus.Up), "data-name": "vote-up-button" }, this.vote_status === exports.VoteStatus.Up ? (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "15px", viewBox: "0 -960 960 960", width: "15px", fill: "#000000" }, index.h("path", { d: "M720-144H264v-480l288-288 32 22q18 13 26.5 33t3.5 41l-38 192h264q30 0 51 21t21 51v57q0 8-1.5 14.5T906-467L787-188q-9 20-27 32t-40 12Z" }))) : (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "15px", viewBox: "0 -960 960 960", width: "15px", fill: "#adb5bd" // token-border-dark
        }, index.h("path", { d: "M720-144H264v-480l288-288 32 22q17 12 26 30.5t5 38.5l-1 5-38 192h264q30 0 51 21t21 51v57q0 8-1.5 14.5T906-467L786.93-187.8Q778-168 760-156t-40 12Zm-384-72h384l120-279v-57H488l49-243-201 201v378Zm0-378v378-378Z" })))), index.h("span", { slot: "tooltip-content" }, ((_f = (_e = (_d = this.translations) === null || _d === void 0 ? void 0 : _d.ATUI) === null || _e === void 0 ? void 0 : _e.PROMPT) === null || _f === void 0 ? void 0 : _f.HELPFUL) ||
            'Helpful')), index.h("atui-tooltip", { position: "top" }, index.h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", onClick: () => this.handleVote(exports.VoteStatus.Down), "data-name": "vote-down-button" }, this.vote_status === exports.VoteStatus.Down ? (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "15px", viewBox: "0 -960 960 960", width: "15px", fill: "#000000" }, index.h("path", { d: "M240-816h456v480L408-48l-32-22q-18-13-26.5-33t-3.5-41l38-192H120q-30 0-51-21t-21-51v-57q0-8 1.5-14.5T54-493l119-279q8-20 26.5-32t40.5-12Z" }))) : (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15px", viewBox: "0 -960 960 960", height: "15px", fill: "#adb5bd" // token-border-dark
        }, index.h("path", { d: "M240-816h456v480L408-48l-32-22q-17-12-26-30.5t-5-38.5l1-5 38-192H120q-30 0-51-21t-21-51v-57q0-8 1.5-14.5T54-493l119-279q8-20 26.5-32t40.5-12Zm384 72H240L120-465v57h352l-49 243 201-201v-378Zm0 378v-378 378Z" })))), index.h("span", { slot: "tooltip-content" }, ((_j = (_h = (_g = this.translations) === null || _g === void 0 ? void 0 : _g.ATUI) === null || _h === void 0 ? void 0 : _h.PROMPT) === null || _j === void 0 ? void 0 : _j.NOT_HELPFUL) ||
            'Not Helpful')))), this.role === 'assistant' && this.enable_copy && (index.h("atui-tooltip", { position: "top" }, index.h("atui-button", { slot: "tooltip-trigger", size: "sm", icon: this.copyFeedbackVisible
                ? 'check'
                : 'content_copy', type: "secondaryText", onClick: this.handleCopy, "data-name": "copy-button" }), index.h("span", { slot: "tooltip-content" }, this.copyFeedbackVisible
            ? ((_m = (_l = (_k = this.translations) === null || _k === void 0 ? void 0 : _k.ATUI) === null || _l === void 0 ? void 0 : _l.PROMPT) === null || _m === void 0 ? void 0 : _m.COPIED) ||
                'Copied'
            : ((_q = (_p = (_o = this.translations) === null || _o === void 0 ? void 0 : _o.ATUI) === null || _p === void 0 ? void 0 : _p.PROMPT) === null || _q === void 0 ? void 0 : _q.COPY) ||
                'Copy'))), this.role === 'assistant' && this.error && (index.h("atui-tooltip", { position: "top" }, index.h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", icon: "refresh", onClick: this.handleRetry, "data-name": "retry-button" }), index.h("span", { slot: "tooltip-content" }, ((_t = (_s = (_r = this.translations) === null || _r === void 0 ? void 0 : _r.ATUI) === null || _s === void 0 ? void 0 : _s.PROMPT) === null || _t === void 0 ? void 0 : _t.RETRY) || 'Retry')))));
    }
    renderContent() {
        var _a, _b, _c;
        if (this.loading) {
            return (index.h("div", { class: "py-8", "data-name": "loading-wrapper" }, index.h("atui-loading", { class: "flex items-center gap-4 py-8", "data-name": "loading-content", variant: "typing", size: "sm" })));
        }
        if (this.error) {
            return (index.h("div", { class: "space-y-2", ref: (el) => (this.errorEl = el), "data-name": "error-content" }, index.h("p", { class: "text-destructive-foreground" }, this.error_message ||
                ((_c = (_b = (_a = this.translations) === null || _a === void 0 ? void 0 : _a.ATUI) === null || _b === void 0 ? void 0 : _b.PROMPT) === null || _c === void 0 ? void 0 : _c.ERROR_GENERATING_RESPONSE) ||
                'Error generating response')));
        }
        return (index.h("div", { class: "prose prose-sm preserve-newlines max-w-none", "data-name": "message-content" }, index.h("slot", null), this.content));
    }
    render() {
        const messageClasses = messageVariants({
            role: this.role,
            loading: this.loading,
        });
        return (index.h(index.Host, { key: '72b46c749303325fcf53598a6bc3cad2b489a7ab', class: "flex w-full gap-8", "data-name": "message-container", "data-role": this.role }, index.h("div", { key: '86b25133b3d2847222e3d4ae4721495a5030cfef', class: "flex flex-1 flex-col" }, this.name && (index.h("span", { key: '6b707f76a474b3f743a1dd4a942b02f6e660301b', class: "self-start text-sm text-light", "data-name": "message-name" }, this.name)), index.h("div", { key: '8afefba823510d0925b174605a38b07d901f443c', class: messageClasses }, this.renderContent()), this.renderActions())));
    }
    get el() { return index.getElement(this); }
};

exports.AtuiPromptMessage = AtuiPromptMessage;
//# sourceMappingURL=atui-prompt-message-C2JBnRZ6.js.map

//# sourceMappingURL=atui-prompt-message-C2JBnRZ6.js.map