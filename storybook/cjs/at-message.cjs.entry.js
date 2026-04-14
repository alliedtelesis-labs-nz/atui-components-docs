'use strict';

var index = require('./index-BRms7T38.js');

const atMessageCss = () => `at-message [slot=actions]{align-self:start}`;

const messageVariants = {
    base: 'flex p-[14px] text-dark text-left rounded-[0.3rem]',
    icon: {
        error: 'error',
        warning: 'warning',
        success: 'check_circle',
        info: 'info',
        default: '',
    },
    iconColour: {
        error: 'text-destructive-foreground',
        warning: 'text-warning-foreground',
        success: 'text-success-foreground',
        info: 'text-info-foreground',
        default: 'text-dark',
    },
    background: {
        high: {
            error: 'bg-destructive',
            warning: 'bg-warning',
            success: 'bg-success',
            info: 'bg-info',
            default: 'bg-surface-2',
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
     * You can provide a custom value to replace the default icon.
     *
     * Must use material icon name.
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
        return (index.h("div", { key: '33c74a48e4df5d9ec28a07189e26039955e18d17', class: this.hostClasses, "data-name": "message-container" }, index.h("i", { key: '8c265ab2517483e3db745696f0b0c334a6c5b482', class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName), index.h("div", { key: '8bb34c730500e6c60af9acebdb62d67fe126f1ee', class: "flex w-full flex-row justify-between gap-4" }, index.h("div", { key: '203e831c0c37a31b4484e57ad830fa7517457b82' }, this.message_title && (index.h("div", { key: '25f763ba652265832c0ec01a1cfd08e213eaebf1', class: "text-h6 mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: '158fcf97961c02dbabf5d96f34f0a95d1e43ec6e', class: "!text-sm leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: '7c9c1a361de8dedacde21799a7a21a8b918d5131' })), index.h("slot", { key: 'df7123fb4f040e75098bc6d0dc023c01b218b96f', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
