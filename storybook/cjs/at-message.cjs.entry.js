'use strict';

var index = require('./index--r5sCsiV.js');

const atMessageCss = () => `at-message [slot=actions]{align-self:start}`;

const messageVariants = {
    base: 'flex p-[14px] text-foreground text-left rounded-[0.3rem]',
    icon: {
        error: 'error',
        warning: 'warning',
        success: 'success',
        info: 'info_filled',
        default: '',
    },
    iconFill: {
        error: 'fill-feedback-error-accent',
        warning: 'fill-feedback-warning-accent',
        success: 'fill-feedback-success-accent',
        info: 'fill-feedback-info-accent',
        default: 'text-feedback-foreground',
    },
    background: {
        high: {
            error: 'bg-feedback-error-background',
            warning: 'bg-feedback-warning-background',
            success: 'bg-feedback-success-background',
            info: 'bg-feedback-info-background',
            default: 'bg-feedback-background',
        },
        low: '',
    },
};
const AtMessage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Type of the message.
     */
    type = 'default';
    /**
     * Theme of the message, either "light" or "default".
     */
    impact = 'high';
    /**
     * Title of the app message.
     */
    message_title;
    /**
     * An icon is provided for success, warning, error, or info types.
     * Custom icon can be used by providing the carbon icon name.
     */
    icon;
    /**
     * Content of the message.
     */
    content;
    get iconName() {
        if (this.icon) {
            return this.icon;
        }
        else {
            return messageVariants.icon[this.type];
        }
    }
    get hostClasses() {
        return `${messageVariants.base} ${messageVariants.background[this.impact][this.type]}`;
    }
    render() {
        return (index.h("div", { key: '6871d7717c2b66252bf525f24be5e19cb0086d6d', class: this.hostClasses, "data-name": "message-container" }, index.h("at-icon", { key: '2623a697e6aeb9a3d8e3e2b047a64015afef71a6', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), index.h("div", { key: '5ed4cc7a9e76e6736317f87fe2f4df028e23b25e', class: "flex w-full flex-row justify-between gap-4 text-sm" }, index.h("div", { key: 'c0e1165e85dcbabe62892eb237b9bff0616bb28e' }, this.message_title && (index.h("div", { key: 'd2ceaac295ce25e0b3c22ff89da4862a94dc6b91', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: '4312cb97e704affe4be46070e2696238ea8108a9', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: '5e8c3cf18422f4aaf68d6704ce9203e2f15175d8' })), index.h("slot", { key: '852410c7ac1335add648f372f57944acc4f83fb5', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
