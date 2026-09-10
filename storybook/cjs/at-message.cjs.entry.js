'use strict';

var index = require('./index-zRWHCAJe.js');

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
        return (index.h("div", { key: '5b34669e07328dcfbc9463c34f03889519bce66a', class: this.hostClasses, "data-name": "message-container" }, index.h("at-icon", { key: '7bf2f47a66d48204a962fd9aa69bd59a1b5c0584', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), index.h("div", { key: 'f1931daa319db495890e574e6f57a68916b8df2f', class: "flex w-full flex-row justify-between gap-4 text-sm" }, index.h("div", { key: '9d24be4108eb9e7bcb1e377caf4d09f6d5cb9738' }, this.message_title && (index.h("div", { key: '5c53d2a08d2aa95a22e8e2ef24107869b81f86c8', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: 'e0f846187aaa38426ae2495d9cbe0a07ec4ea493', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: '0857df46dcc77ae9fe6c8914416656cccd39a279' })), index.h("slot", { key: '5c4c108b0735f757fecbaa01b965203b6b19b079', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
