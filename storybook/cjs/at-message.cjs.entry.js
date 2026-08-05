'use strict';

var index = require('./index-D7uTOurQ.js');

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
        return (index.h("div", { key: '4f59ce8965981e85f1dc388c706338d3f38fda8d', class: this.hostClasses, "data-name": "message-container" }, index.h("at-icon", { key: '24335d142f47562338d869aa40ea6ae077cff33d', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), index.h("div", { key: '83bab16f8f6af2aaf2e4ce8076a2bf98882a6a6a', class: "flex w-full flex-row justify-between gap-4 text-sm" }, index.h("div", { key: 'bf1d515d07a5521da0ba6bf4ec11dfab0dc3e2b7' }, this.message_title && (index.h("div", { key: '3878cd4356af9e7f438868af6dbba1e4c21efbec', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: 'b6ee79a666884169927cb51e9e4feb01aa006f24', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: '9609866fa23167070d07532f53aa8390cdaa3286' })), index.h("slot", { key: '890f5c52be6dee144ddbed20d119b98398503d71', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
