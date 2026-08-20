'use strict';

var index = require('./index-B7bW4GPk.js');

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
        return (index.h("div", { key: 'cfcb878b73adcd3230dc966f58efc08329a012fb', class: this.hostClasses, "data-name": "message-container" }, index.h("at-icon", { key: '9be7b5b2720f746c54c7e7f80434dbe250ffaa69', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), index.h("div", { key: 'f6a52cd43ceaab044614db59c53b05653d9a1bde', class: "flex w-full flex-row justify-between gap-4 text-sm" }, index.h("div", { key: '500092c4c551114b9215a5e698e283d418381f10' }, this.message_title && (index.h("div", { key: '4bea73a6de928bd5500e2e3d863ba52769662b21', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: 'bd39b383f7262596f043676185d43d2ccb619049', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: '4d4473f174ca7f822c5c7d74c0e700a146a879e4' })), index.h("slot", { key: 'd317b73288837f35b4ad1699e2050bc430015c37', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
