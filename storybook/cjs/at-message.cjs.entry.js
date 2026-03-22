'use strict';

var index = require('./index-CzDB71Wy.js');

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
        return (index.h("div", { key: '49aadea71e5d334f5e6129627385e10d18137bed', class: this.hostClasses, "data-name": "message-container" }, index.h("i", { key: '10b47a18cf62208295e5a47b01cc981be8982cb7', class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName), index.h("div", { key: '69c82327eb4f1e6b420900ef4d4a0c0d8d7b2f79', class: "flex w-full flex-row justify-between gap-4" }, index.h("div", { key: '03f02a9ecafe9e333cca6f4de54fa118ba777757' }, this.message_title && (index.h("div", { key: '8545fea68e64e59832b07da964ba68d93de9b23f', class: "text-h6 mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: '3fb3419f2cf2bbb9c8b07d2d2273e674f9232e94', class: "!text-sm leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: 'a85ed72555e5c2291a1946bb988926c3163f8f4c' })), index.h("slot", { key: '81eb139f734b489c5322529d05502fd39e1a96a5', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
