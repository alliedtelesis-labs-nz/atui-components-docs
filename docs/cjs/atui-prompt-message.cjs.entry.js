'use strict';

var index = require('./index-BAt2i-T2.js');
var index$1 = require('./index-palgSxc9.js');
var translation = require('./translation-HqquF7bU.js');

const messageVariants = index$1.cva('text-base max-w-4xl rounded-lg px-8 py-4', {
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
        index.registerInstance(this, hostRef);
        this.atuiCopy = index.createEvent(this, "atuiCopy", 7);
        this.atuiPositiveFeedback = index.createEvent(this, "atuiPositiveFeedback", 7);
        this.atuiNegativeFeedback = index.createEvent(this, "atuiNegativeFeedback", 7);
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
        this.translations = await translation.fetchTranslations(this.errorEl);
    }
    renderAvatar() {
        const variant = this.role === 'user' ? 'primary' : 'secondary';
        const initials = this.name
            ? this.name.charAt(0).toUpperCase()
            : this.role === 'user'
                ? 'U'
                : 'A';
        return (index.h("atui-avatar", { src: this.avatar, alt: this.name || this.role, initials: initials, variant: variant, size: "sm", "data-name": "message-avatar" }));
    }
    renderActions() {
        if (this.loading)
            return null;
        return (index.h("div", { class: "mt-2 flex items-center justify-end gap-2", "data-name": "message-actions" }, this.role === 'user' && (index.h("atui-tooltip", { position: "top" }, index.h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", icon: "edit", class: "text-xs", onClick: this.handleEdit, "data-name": "edit-button" }), index.h("span", { slot: "tooltip-content" }, "Edit"))), this.role === 'assistant' && (index.h(index.Fragment, null, index.h("atui-tooltip", { position: "top" }, index.h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", icon: "thumb_up", onClick: this.handleFeedbackPositive, "data-name": "feedback-positive-button" }), index.h("span", { slot: "tooltip-content" }, "Helpful")), index.h("atui-tooltip", { position: "top" }, index.h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", icon: "thumb_down", onClick: this.handleFeedbackNegative, "data-name": "feedback-negative-button" }), index.h("span", { slot: "tooltip-content" }, "Not helpful")), index.h("atui-tooltip", { position: "top" }, index.h("atui-button", { slot: "tooltip-trigger", size: "sm", icon: "content_copy", type: "secondaryText", onClick: this.handleCopy, "data-name": "copy-button" }), index.h("span", { slot: "tooltip-content" }, "Copy")))), this.role === 'assistant' && this.error && (index.h("atui-tooltip", { position: "top" }, index.h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", icon: "refresh", onClick: this.handleRetry, "data-name": "retry-button" }), index.h("span", { slot: "tooltip-content" }, "Retry")))));
    }
    renderContent() {
        if (this.loading) {
            return (index.h("div", { class: "py-8", "data-name": "loading-content" }, index.h("atui-loading", { variant: "typing", size: "sm" })));
        }
        if (this.error) {
            return (index.h("div", { class: "space-y-2", ref: (el) => (this.errorEl = el), "data-name": "error-content" }, index.h("p", { class: "text-destructive" }, this.error_message ||
                this.translations.ATUI.PROMPT
                    .ERROR_GENERATING_RESPONSE)));
        }
        return (index.h("div", { class: "prose prose-sm preserve-newlines max-w-none", "data-name": "message-content" }, index.h("slot", null), this.content));
    }
    render() {
        const messageClasses = messageVariants({
            role: this.role,
            loading: this.loading,
        });
        return (index.h(index.Host, { key: 'b74c42f66318328008f024a4cb5416d40d3ef73c', class: "flex w-full gap-8", "data-name": "message-container" }, this.avatar && this.renderAvatar(), index.h("div", { key: 'f922b3374f1c18dc78a6550bfde7c91760ed5e9d', class: "space-y-1 flex-1" }, index.h("div", { key: '8673d9983e2e0bfa95cc71d154aa71a0cca3ca26', class: "flex items-center gap-8" }, this.name && (index.h("span", { key: '6e54e979f8e9cf7189141473487e293f0d48eda1', class: "text-sm text-light", "data-name": "message-name" }, this.name))), index.h("div", { key: '32eeab70fa042c67c40f81e7ad3bdb78b5316223', class: messageClasses }, this.renderContent()), this.renderActions())));
    }
    get el() { return index.getElement(this); }
};

exports.atui_prompt_message = AtuiPromptMessage;
//# sourceMappingURL=atui-prompt-message.entry.cjs.js.map

//# sourceMappingURL=atui-prompt-message.cjs.entry.js.map