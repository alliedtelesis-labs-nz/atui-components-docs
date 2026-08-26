'use strict';

var index = require('./index-Dk6I1ku2.js');

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
        return (index.h("div", { key: 'fe9f753812539c646d93c0605291e51a8bc12b6e', class: this.hostClasses, "data-name": "message-container" }, index.h("at-icon", { key: '63fb74f874e867bb1871a2584189ba0ac488d37a', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), index.h("div", { key: '8c1f691027a17bf8d2ab0f58c915e088f23f3010', class: "flex w-full flex-row justify-between gap-4 text-sm" }, index.h("div", { key: '23f74680c6e2fe6ae0731c3493e9500ea80fbcb3' }, this.message_title && (index.h("div", { key: '098b62dbe0af5bc6583037c0b737bd8ad2e1132d', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: '0b8849fcb053b513f0c4b94c4d45e41b186aa745', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: '0b0552e459b7f07a26a816c424813406171f4d21' })), index.h("slot", { key: '5182899baaf76a907d682865916f29d237c0878e', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
