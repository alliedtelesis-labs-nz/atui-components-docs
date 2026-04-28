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
        return (index.h("div", { key: '3b0ed7e451558a4259e89971cdf49c1d4876fa83', class: this.hostClasses, "data-name": "message-container" }, index.h("at-icon", { key: '1949d1855a86a9b839e8059f3da892a45f533630', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), index.h("div", { key: 'b9e840a7b8263b58d20fe58ac3186b891d8af4ef', class: "flex w-full flex-row justify-between gap-4 text-sm" }, index.h("div", { key: 'fd725d524ecbfbbd62565c82017ff7754e66e00c' }, this.message_title && (index.h("div", { key: 'fb29029c5c0abfc55ac4bd85d19aaca119fcac7f', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: '7deab6474c30d96bcf1929b23576abcbc7b12d8b', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: 'fffe420e6e4d6726714c172d1eb3bab9a795dab3' })), index.h("slot", { key: '5dd810b1ef5ff606174cba5199645e9d1c911be0', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
