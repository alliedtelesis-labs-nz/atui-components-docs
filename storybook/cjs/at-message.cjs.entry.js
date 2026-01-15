'use strict';

var index = require('./index-ChzPazsa.js');

const atMessageCss = () => `[slot=actions]{align-self:start}`;

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
    type;
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
        return (index.h("div", { key: '5da3c769c31bf2b626804e0cc8b8f85f727f7bd2', class: this.hostClasses, "data-name": "message-container" }, index.h("i", { key: '706e2c485b73f9f49edaa398d2308330e04b4bd9', class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName), index.h("div", { key: 'c3e9e242ca09e3ea62342a56fcebdb05008dfa2c', class: "flex w-full flex-row gap-4" }, index.h("div", { key: '73e334fe663d9eee6dea26e7cf066326fa163fa7' }, this.message_title && (index.h("div", { key: 'be1251032cbba4a617e02558426066237b24b592', class: "text-h6 mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: '0d8921cb9d0c42cd43eca3b69fb29f5f88d9fa80', class: "!text-sm leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: 'efd6e2b17f0694824e6fa444bcf382648cb52e5a' })), index.h("slot", { key: '5cae7ad9c52d628ccb903b497b6e52bcb570706d', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
