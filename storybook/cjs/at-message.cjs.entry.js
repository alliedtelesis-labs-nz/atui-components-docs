'use strict';

var index = require('./index-BRms7T38.js');

const atMessageCss = () => `at-message [slot=actions]{align-self:start}`;

const messageVariants = {
    base: 'flex p-[14px] text-dark text-left rounded-[0.3rem]',
    icon: {
        error: 'error',
        warning: 'warning',
        success: 'success',
        info: 'info_filled',
        default: '',
    },
    iconColour: {
        error: 'text-destructive-foreground',
        warning: 'text-warning-foreground',
        success: 'text-success-foreground',
        info: 'text-info-foreground',
        default: 'text-dark',
    },
    iconFill: {
        error: 'fill-destructive-foreground',
        warning: 'fill-warning-foreground',
        success: 'fill-success-foreground',
        info: 'fill-info-foreground',
        default: 'fill-dark',
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
        return (index.h("div", { key: '74065bf2cb496956a9b5d8269e85b381d57a1a1b', class: this.hostClasses, "data-name": "message-container" }, this.icon ? (index.h("i", { class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName)) : (index.h("at-icon", { class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName })), index.h("div", { key: 'f8c1c942e8bb80ada037212896b23e3ba88bd686', class: "flex w-full flex-row justify-between gap-4" }, index.h("div", { key: '07cf813284ce17612c4f35c9f22c1baf71b83dbc' }, this.message_title && (index.h("div", { key: 'b1c5bfc11723f3405eb1cc744b1a024168f39371', class: "text-h6 mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: 'c269545e04018a5ef67853332ea306c1dadb9f69', class: "!text-sm leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: '8a530a0907bbd85fa5394fcefe178971aaa3af2e' })), index.h("slot", { key: '38b441cff40c5b5d16293a4ca62f1b47b4f439e1', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
