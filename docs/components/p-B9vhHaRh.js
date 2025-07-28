import { p as proxyCustomElement, H, d as createEvent, h, F as Fragment, c as Host } from './p-kcU6cSzl.js';
import { c as cva } from './p-CVoOBWGd.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$4 } from './p-ahrzBTL4.js';
import { d as defineCustomElement$3 } from './p-DRPzh5AP.js';
import { d as defineCustomElement$2 } from './p-CHkT-iof.js';
import { d as defineCustomElement$1 } from './p-B9oksuag.js';

const messageVariants = cva('text-base max-w-4xl rounded-lg px-8 py-4', {
    variants: {
        role: {
            user: 'ml-auto bg-surface-2 text-dark',
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
const AtuiPromptMessage = /*@__PURE__*/ proxyCustomElement(class AtuiPromptMessage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiCopy = createEvent(this, "atuiCopy", 7);
        this.atuiPositiveFeedback = createEvent(this, "atuiPositiveFeedback", 7);
        this.atuiNegativeFeedback = createEvent(this, "atuiNegativeFeedback", 7);
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
        this.handleCopy = () => {
            this.atuiCopy.emit(this.content);
        };
        this.handleRetry = () => {
            this.atuiRetry.emit();
        };
        this.handleEdit = () => {
            this.atuiEdit.emit(this.content);
        };
        this.handleFeedbackPositive = () => {
            this.atuiPositiveFeedback.emit();
        };
        this.handleFeedbackNegative = () => {
            this.atuiNegativeFeedback.emit();
        };
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.errorEl);
    }
    renderAvatar() {
        const variant = this.role === 'user' ? 'primary' : 'secondary';
        const initials = this.name
            ? this.name.charAt(0).toUpperCase()
            : this.role === 'user'
                ? 'U'
                : 'A';
        return (h("atui-avatar", { src: this.avatar, alt: this.name || this.role, initials: initials, variant: variant, size: "sm", "data-name": "message-avatar" }));
    }
    renderActions() {
        if (this.loading)
            return null;
        return (h("div", { class: "mt-2 flex items-center justify-end gap-2", "data-name": "message-actions" }, this.role === 'user' && (h("atui-tooltip", { position: "top" }, h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", icon: "edit", class: "text-xs", onClick: this.handleEdit, "data-name": "edit-button" }), h("span", { slot: "tooltip-content" }, "Edit"))), this.role === 'assistant' && (h(Fragment, null, h("atui-tooltip", { position: "top" }, h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", icon: "thumb_up", onClick: this.handleFeedbackPositive, "data-name": "feedback-positive-button" }), h("span", { slot: "tooltip-content" }, "Helpful")), h("atui-tooltip", { position: "top" }, h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", icon: "thumb_down", onClick: this.handleFeedbackNegative, "data-name": "feedback-negative-button" }), h("span", { slot: "tooltip-content" }, "Not helpful")), h("atui-tooltip", { position: "top" }, h("atui-button", { slot: "tooltip-trigger", size: "sm", icon: "content_copy", type: "secondaryText", onClick: this.handleCopy, "data-name": "copy-button" }), h("span", { slot: "tooltip-content" }, "Copy")))), this.role === 'assistant' && this.error && (h("atui-tooltip", { position: "top" }, h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", icon: "refresh", onClick: this.handleRetry, "data-name": "retry-button" }), h("span", { slot: "tooltip-content" }, "Retry")))));
    }
    renderContent() {
        if (this.loading) {
            return (h("div", { class: "py-8", "data-name": "loading-content" }, h("atui-loading", { variant: "typing", size: "sm" })));
        }
        if (this.error) {
            return (h("div", { class: "space-y-2", ref: (el) => (this.errorEl = el), "data-name": "error-content" }, h("p", { class: "text-destructive" }, this.error_message ||
                this.translations.ATUI.PROMPT
                    .ERROR_GENERATING_RESPONSE)));
        }
        return (h("div", { class: "prose prose-sm preserve-newlines max-w-none", "data-name": "message-content" }, h("slot", null), this.content));
    }
    render() {
        const messageClasses = messageVariants({
            role: this.role,
            loading: this.loading,
        });
        return (h(Host, { key: '1db966cab534c25d160b3a8dd514f5a1ce29284c', class: "flex w-full gap-8", "data-name": "message-container" }, this.avatar && this.renderAvatar(), h("div", { key: '11bb6ee96a61e622e28f2f91c57de9d1ab9907d1', class: "space-y-1 flex-1" }, h("div", { key: '686dd51e7808c12746cc0020247a83be5e89da9a', class: "flex items-center gap-8" }, this.name && (h("span", { key: 'c3b4c62fb5b05309aca02f4d9a28221af2368885', class: "text-sm text-light", "data-name": "message-name" }, this.name))), h("div", { key: 'ed3a8491ead700933e9700ace54e40b603c0c92f', class: messageClasses }, this.renderContent()), this.renderActions())));
    }
    get el() { return this; }
}, [260, "atui-prompt-message", {
        "role": [1],
        "content": [1],
        "avatar": [1],
        "name": [1],
        "loading": [4],
        "error": [4],
        "error_message": [1],
        "translations": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-prompt-message", "atui-avatar", "atui-button", "atui-loading", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-prompt-message":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiPromptMessage);
            }
            break;
        case "atui-avatar":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
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

export { AtuiPromptMessage as A, defineCustomElement as d };
//# sourceMappingURL=p-B9vhHaRh.js.map

//# sourceMappingURL=p-B9vhHaRh.js.map