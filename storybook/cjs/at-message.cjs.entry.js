'use strict';

var index = require('./index-DE68Mlxo.js');

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
        return (index.h("div", { key: '7216645150cf7158370be3161da78d9f19618533', class: this.hostClasses, "data-name": "message-container" }, index.h("at-icon", { key: 'ef3daa4465c79d4faee2a0e169ed419cb412df16', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), index.h("div", { key: '335e533ea05238a083a8d9bfe3ba89754a13b167', class: "flex w-full flex-row justify-between gap-4 text-sm" }, index.h("div", { key: 'aaf3ad29f629ac5087633e134b0b2ed7fe05a5c9' }, this.message_title && (index.h("div", { key: 'aafd0d52567961324e684c7980b43ef4f2d64587', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: 'e641f351becfd7db297c6c8feadb6acb6c25d39e', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: '608c2da5c595d2ddf4c831f41af169d6658b7f35' })), index.h("slot", { key: 'cf448d45cd1dc2a22acb75e550e23b1bfe567ed6', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
