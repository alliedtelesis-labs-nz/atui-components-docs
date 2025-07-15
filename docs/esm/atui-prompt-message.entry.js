import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from './index-8kq1vl9Q.js';
import { c as cva } from './index-CVoOBWGd.js';
import { f as fetchTranslations } from './translation-DuLooPsr.js';

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
const AtuiPromptMessage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiCopy = createEvent(this, "atuiCopy", 7);
        this.atuiFeedbackPositive = createEvent(this, "atuiFeedbackPositive", 7);
        this.atuiFeedbackNegative = createEvent(this, "atuiFeedbackNegative", 7);
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
            this.atuiFeedbackPositive.emit();
        };
        this.handleFeedbackNegative = () => {
            this.atuiFeedbackNegative.emit();
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
        return (h(Host, { key: '5d6350c3769d8267a395dd0996988fae8dc3e0d4', class: "flex w-full gap-8", "data-name": "message-container" }, this.avatar && this.renderAvatar(), h("div", { key: 'f81b84174d1080815a5d379880b026b9c142374a', class: "space-y-1 flex-1" }, h("div", { key: 'a14343473c394c9996e74570ff18080e0d5477b0', class: "flex items-center gap-8" }, this.name && (h("span", { key: '46ff5e1844cde5f52237664ba4398d5b42675076', class: "text-sm text-light", "data-name": "message-name" }, this.name))), h("div", { key: 'b37738fbc7db545474144549eac13eeafe8a8855', class: messageClasses }, this.renderContent()), this.renderActions())));
    }
    get el() { return getElement(this); }
};

export { AtuiPromptMessage as atui_prompt_message };
//# sourceMappingURL=atui-prompt-message.entry.js.map

//# sourceMappingURL=atui-prompt-message.entry.js.map