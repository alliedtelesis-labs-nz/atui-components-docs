'use strict';

var index = require('./index-Dzqi4iVM.js');

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
        return (index.h("div", { key: '04ac5820bb2600eb1ba47d2f9b5925211bc86a22', class: this.hostClasses, "data-name": "message-container" }, index.h("at-icon", { key: '3ca44eb2dae8b6123565fd900e750c5624028539', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), index.h("div", { key: 'cb3379347f95cc9f9e7d3c21f27347990fe8d96a', class: "flex w-full flex-row justify-between gap-4 text-sm" }, index.h("div", { key: '64e876de1388ae6cc8765f4c3f98ac4793549f64' }, this.message_title && (index.h("div", { key: '1c323c884e7f3071a774de89312c90a7e5480977', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: 'b342886785cfcc4ac66f02b3aa6f338b0c239795', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: '52d4200d6a3053ebcac3edd1633283e797c2b09e' })), index.h("slot", { key: 'e43f3c47f2a376f55e0186a7ba8e71b6391da0e8', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
