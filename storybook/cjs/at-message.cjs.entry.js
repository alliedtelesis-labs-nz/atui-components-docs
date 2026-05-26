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
        return (index.h("div", { key: '1b4f6951c8079dc38c0b83fb3bfba73ea951bed9', class: this.hostClasses, "data-name": "message-container" }, index.h("at-icon", { key: 'da96d42da96e1a4dc16152809044b585d8faa8a4', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), index.h("div", { key: 'd035b0ce57838157f55e560e15ee3a3d918cf64b', class: "flex w-full flex-row justify-between gap-4 text-sm" }, index.h("div", { key: '54b72646b26feb85c3149f62747040052d695883' }, this.message_title && (index.h("div", { key: 'b081bbd2554c1647a9faf29a461bf9c9727a80c0', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: 'c48652600b49959b9b466a159c141c1dc9f655fc', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: '825aae4ad45f42d59119844c63c6f93d4700a5d2' })), index.h("slot", { key: '510d313250355f4e2afc6b0f4f7d87b7fd05aee2', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
