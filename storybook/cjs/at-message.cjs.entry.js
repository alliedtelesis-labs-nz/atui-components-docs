'use strict';

var index = require('./index-D0lZ3Nn_.js');

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
        return (index.h("div", { key: '37dca7eb0eb9cb66905085aa66d6c7f8be701154', class: this.hostClasses, "data-name": "message-container" }, index.h("at-icon", { key: 'ae92623fdcb9c754d6e379d2f8743aa87ee5f485', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), index.h("div", { key: '8fa9e08086d387ea2959821d2b6abba3f28baa0d', class: "flex w-full flex-row justify-between gap-4 text-sm" }, index.h("div", { key: '9adfa0c5705758c23a5c0c11ccbda23edd303b9b' }, this.message_title && (index.h("div", { key: '1ce499d58f9ea0acdef9065b8e16d001f09d0171', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: 'dc03c8a7edafc8983cad2293e2c93ed83639dcec', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: '75c659954a59ad10802821b7f9d0781ec8a51ed2' })), index.h("slot", { key: '68127d1abba124a08605d4c6c363d292d19538e7', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
