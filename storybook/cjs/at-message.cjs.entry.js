'use strict';

var index = require('./index-DnmjgnzG.js');

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
        return (index.h("div", { key: '435a1537bb08d8604e9b4ea473e82e546a296cdf', class: this.hostClasses, "data-name": "message-container" }, index.h("at-icon", { key: 'ba2234cafc0e6d3d6f185472ee2d17ca504105b5', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), index.h("div", { key: '173743d69a881b0d79ed7e8ff101910648c32161', class: "flex w-full flex-row justify-between gap-4 text-sm" }, index.h("div", { key: 'd30a8d5cb253d09a03b36ceb90315f58f12b17b1' }, this.message_title && (index.h("div", { key: '4341b338c0f50818d0dc253fa1f1156fc7cb708e', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: '6fb5e65de5579eabc2917102f1c77fe119ab838c', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: 'd8d4a58bcb5ae7696a446006fa1560d007d1f5b3' })), index.h("slot", { key: '0ce5a1e8fd0c769ce15ae8ae092d361c4c109b0f', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
