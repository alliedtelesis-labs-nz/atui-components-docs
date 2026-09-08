'use strict';

var index = require('./index-Bc1nzv_X.js');

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
        return (index.h("div", { key: '9c5b3804b420a39b1f6d3e51072e8dd4e156a028', class: this.hostClasses, "data-name": "message-container" }, index.h("at-icon", { key: '1dd6af2b3e471fb20d45e9c5144f98ee05d1a5fd', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), index.h("div", { key: 'caf577e98f79c74897d7ae38b04df17b8c0d17f2', class: "flex w-full flex-row justify-between gap-4 text-sm" }, index.h("div", { key: '5ca912f10266e23f12cd94df3eceecca4ff3ecd2' }, this.message_title && (index.h("div", { key: '7ee101afaaab60f2c849e80d4a9e4f46309533f3', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: '33c4c29426dfcf7ebd290c6cba93b737512f5190', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: 'f83d42393296f03f27b126c0297ec41f919eb217' })), index.h("slot", { key: 'bf583a462a10879c27989a07575314f94ec165d9', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
