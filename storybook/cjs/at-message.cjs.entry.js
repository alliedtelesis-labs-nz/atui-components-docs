'use strict';

var index = require('./index-DLWZuLsW.js');

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
        return (index.h("div", { key: '8906fe09ad410c3e88e3a6979889574e62c2ba78', class: this.hostClasses, "data-name": "message-container" }, index.h("at-icon", { key: '2024a6ed108d34ea98572c2103919890d24286bd', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), index.h("div", { key: '23bc34be359cd1a8371c5dc3de8ff031aecdb94f', class: "flex w-full flex-row justify-between gap-4 text-sm" }, index.h("div", { key: '961e01bdec28bf00b473f0ecbe95665eb7647ff3' }, this.message_title && (index.h("div", { key: 'b768a63bf7dfe583835cb21d2bb033047ea90ea3', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: '054a3b16313780bb156f992804a3c6ca96e1cb3c', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: '5a9b2169dd4ff90ca04fa25de040f180421846ea' })), index.h("slot", { key: '70def593bcfcd76aaf52edfa2efe828027e7265f', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
