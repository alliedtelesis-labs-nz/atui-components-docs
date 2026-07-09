'use strict';

var index = require('./index-DRsFs1GW.js');

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
        return (index.h("div", { key: 'cfe3e89009a34da5f2bf59f53f3cf99c5c9b3214', class: this.hostClasses, "data-name": "message-container" }, index.h("at-icon", { key: 'd611ab29b8d30c3e4ad459fd244ad7b54fef1abf', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), index.h("div", { key: 'd3ceb5d700d9d06a3cfbb0ea342f474e761df3bf', class: "flex w-full flex-row justify-between gap-4 text-sm" }, index.h("div", { key: '1b821e098957c9002c6a7ccf0d8fca15361a55d9' }, this.message_title && (index.h("div", { key: '55c89fd98a93a75cc16a533369570054ccc44ee1', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: 'effc6e74d0341313f5ee4b2971555864c6e81b5f', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: '26095d86a4df9fe3a0d2e1923e407aebc3c58068' })), index.h("slot", { key: 'a6ce95ac105965b30aee910c7cb271668fa632a4', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
