import { p as proxyCustomElement, H, d as createEvent, h, F as Fragment, c as Host } from './p-Cv5ME95Z.js';
import { c as classlist } from './p-Bfa-pAao.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$3 } from './p-CSzRt9NY.js';
import { d as defineCustomElement$2 } from './p-DBWEgk0R.js';
import { d as defineCustomElement$1 } from './p-BtsG-JMI.js';

// Add vote status enum to match Angular implementation
var VoteStatus;
(function (VoteStatus) {
    VoteStatus[VoteStatus["None"] = 0] = "None";
    VoteStatus[VoteStatus["Up"] = 1] = "Up";
    VoteStatus[VoteStatus["Down"] = -1] = "Down";
})(VoteStatus || (VoteStatus = {}));
const messageVariantsConfig = {
    variants: {
        role: {
            user: 'bg-surface-2 text-dark ml-auto inline-block p-8',
            assistant: 'text-dark mr-auto',
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
const AtuiPromptMessage = /*@__PURE__*/ proxyCustomElement(class AtuiPromptMessage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiCopy = createEvent(this, "atuiCopy", 7);
        this.atuiVote = createEvent(this, "atuiVote", 7);
        this.atuiRetry = createEvent(this, "atuiRetry", 7);
        this.atuiEdit = createEvent(this, "atuiEdit", 7);
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
        this.vote_status = VoteStatus.None;
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
            const newScore = this.vote_status === score ? VoteStatus.None : score;
            this.atuiVote.emit({ messageId: this.message_id, score: newScore });
        };
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    renderActions() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        if (this.loading)
            return null;
        return (h("div", { class: "mt-2 flex items-center justify-end gap-2", "data-name": "message-actions" }, this.role === 'user' && this.enable_edit && (h("atui-tooltip", { position: "top" }, h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", icon: "edit", class: "text-xs", onClick: this.handleEdit, "data-name": "edit-button" }), h("span", null, ((_c = (_b = (_a = this.translations) === null || _a === void 0 ? void 0 : _a.ATUI) === null || _b === void 0 ? void 0 : _b.PROMPT) === null || _c === void 0 ? void 0 : _c.EDIT) || 'Edit'))), this.role === 'assistant' && this.enable_vote && (h(Fragment, null, h("atui-tooltip", { position: "top" }, h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", onClick: () => this.handleVote(VoteStatus.Up), "data-name": "vote-up-button" }, this.vote_status === VoteStatus.Up ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "15px", viewBox: "0 -960 960 960", width: "15px", fill: "#000000" }, h("path", { d: "M720-144H264v-480l288-288 32 22q18 13 26.5 33t3.5 41l-38 192h264q30 0 51 21t21 51v57q0 8-1.5 14.5T906-467L787-188q-9 20-27 32t-40 12Z" }))) : (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "15px", viewBox: "0 -960 960 960", width: "15px", fill: "#adb5bd" // token-border-dark
        }, h("path", { d: "M720-144H264v-480l288-288 32 22q17 12 26 30.5t5 38.5l-1 5-38 192h264q30 0 51 21t21 51v57q0 8-1.5 14.5T906-467L786.93-187.8Q778-168 760-156t-40 12Zm-384-72h384l120-279v-57H488l49-243-201 201v378Zm0-378v378-378Z" })))), h("span", null, ((_f = (_e = (_d = this.translations) === null || _d === void 0 ? void 0 : _d.ATUI) === null || _e === void 0 ? void 0 : _e.PROMPT) === null || _f === void 0 ? void 0 : _f.HELPFUL) ||
            'Helpful')), h("atui-tooltip", { position: "top" }, h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", onClick: () => this.handleVote(VoteStatus.Down), "data-name": "vote-down-button" }, this.vote_status === VoteStatus.Down ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "15px", viewBox: "0 -960 960 960", width: "15px", fill: "#000000" }, h("path", { d: "M240-816h456v480L408-48l-32-22q-18-13-26.5-33t-3.5-41l38-192H120q-30 0-51-21t-21-51v-57q0-8 1.5-14.5T54-493l119-279q8-20 26.5-32t40.5-12Z" }))) : (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15px", viewBox: "0 -960 960 960", height: "15px", fill: "#adb5bd" // token-border-dark
        }, h("path", { d: "M240-816h456v480L408-48l-32-22q-17-12-26-30.5t-5-38.5l1-5 38-192H120q-30 0-51-21t-21-51v-57q0-8 1.5-14.5T54-493l119-279q8-20 26.5-32t40.5-12Zm384 72H240L120-465v57h352l-49 243 201-201v-378Zm0 378v-378 378Z" })))), h("span", null, ((_j = (_h = (_g = this.translations) === null || _g === void 0 ? void 0 : _g.ATUI) === null || _h === void 0 ? void 0 : _h.PROMPT) === null || _j === void 0 ? void 0 : _j.NOT_HELPFUL) ||
            'Not Helpful')))), this.role === 'assistant' && this.enable_copy && (h("atui-tooltip", { position: "top" }, h("atui-button", { slot: "tooltip-trigger", size: "sm", icon: this.copyFeedbackVisible
                ? 'check'
                : 'content_copy', type: "secondaryText", onClick: this.handleCopy, "data-name": "copy-button" }), h("span", null, this.copyFeedbackVisible
            ? ((_m = (_l = (_k = this.translations) === null || _k === void 0 ? void 0 : _k.ATUI) === null || _l === void 0 ? void 0 : _l.PROMPT) === null || _m === void 0 ? void 0 : _m.COPIED) ||
                'Copied'
            : ((_q = (_p = (_o = this.translations) === null || _o === void 0 ? void 0 : _o.ATUI) === null || _p === void 0 ? void 0 : _p.PROMPT) === null || _q === void 0 ? void 0 : _q.COPY) ||
                'Copy'))), this.role === 'assistant' && this.error && (h("atui-tooltip", { position: "top" }, h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", icon: "refresh", onClick: this.handleRetry, "data-name": "retry-button" }), h("span", null, ((_t = (_s = (_r = this.translations) === null || _r === void 0 ? void 0 : _r.ATUI) === null || _s === void 0 ? void 0 : _s.PROMPT) === null || _t === void 0 ? void 0 : _t.RETRY) || 'Retry')))));
    }
    renderContent() {
        var _a, _b, _c;
        if (this.loading) {
            return (h("div", { class: "py-8", "data-name": "loading-wrapper" }, h("atui-loading", { class: "flex items-center gap-4 py-8", "data-name": "loading-content", variant: "typing", size: "sm" })));
        }
        if (this.error) {
            return (h("div", { class: "space-y-2", ref: (el) => (this.errorEl = el), "data-name": "error-content" }, h("p", { class: "text-destructive-foreground" }, this.error_message ||
                ((_c = (_b = (_a = this.translations) === null || _a === void 0 ? void 0 : _a.ATUI) === null || _b === void 0 ? void 0 : _b.PROMPT) === null || _c === void 0 ? void 0 : _c.ERROR_GENERATING_RESPONSE) ||
                'Error generating response')));
        }
        return (h("div", { class: "prose prose-sm preserve-newlines max-w-none", "data-name": "message-content" }, h("slot", null), this.content));
    }
    render() {
        const messageClasses = getMessageClasses({
            role: this.role,
            loading: this.loading,
        });
        return (h(Host, { key: '6305bcb6d213e0128871996d4121197fef451fc4', class: "flex w-full gap-8", "data-name": "message-container", "data-role": this.role }, h("div", { key: 'c19dbd8e715f7bea556f25ce1e168479563ff130', class: "flex flex-1 flex-col" }, this.name && (h("span", { key: 'f87aafa5831d5ccf10c9fdc24c3aa8d54fb7f4f5', class: "text-light self-start text-sm", "data-name": "message-name" }, this.name)), h("div", { key: '5b8280212b929360fc2b00b8470326ab8cf72d8e', class: messageClasses }, this.renderContent()), this.renderActions())));
    }
    get el() { return this; }
}, [260, "atui-prompt-message", {
        "role": [1],
        "content": [1],
        "name": [1],
        "loading": [4],
        "error": [4],
        "error_message": [1],
        "vote_status": [2],
        "enable_vote": [4],
        "enable_copy": [4],
        "enable_edit": [4],
        "message_id": [1],
        "translations": [32],
        "copyFeedbackVisible": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-prompt-message", "atui-button", "atui-loading", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-prompt-message":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiPromptMessage);
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiPromptMessage as A, VoteStatus as V, defineCustomElement as d };
//# sourceMappingURL=p-CBsuAcQ_.js.map

//# sourceMappingURL=p-CBsuAcQ_.js.map