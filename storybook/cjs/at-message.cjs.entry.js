'use strict';

var index = require('./index-GH7gxrjy.js');

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
        return (index.h("div", { key: '999a9e6aa5851461423c3dd19122941e13b59825', class: this.hostClasses, "data-name": "message-container" }, index.h("at-icon", { key: 'd07075838533930d509659315c27223719d02241', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), index.h("div", { key: '9fdeda54f1ec1c09d6936dd1bbcbee3dd8de9f69', class: "flex w-full flex-row justify-between gap-4 text-sm" }, index.h("div", { key: '07e977e72623d353c04f9dd18db47e23d2fd1b68' }, this.message_title && (index.h("div", { key: '0a2f7d63240c4ae2700f700b53a5e3c689cfb521', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: 'c1c0cce40430e8e731340d58f173e87a3d9e6320', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: '35ce333b22e50d41e00c3350c86c178e37bffc8b' })), index.h("slot", { key: 'f24cf118f563b916830ab4b87cb7bb13921b8922', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
