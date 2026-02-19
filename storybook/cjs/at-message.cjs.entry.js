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
        return (index.h("div", { key: 'c6de5faa658ad76819573e2f3902e2ceed8580fe', class: this.hostClasses, "data-name": "message-container" }, index.h("i", { key: '8c7bdcca89edbf5573ebec4deda435f38b16d851', class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName), index.h("div", { key: '092427e0967321b64110aecc60834fd341059cf9', class: "flex w-full flex-row justify-between gap-4" }, index.h("div", { key: '8c4c0ee25be6daf8a9c7cc1d86105eae9a89f0c1' }, this.message_title && (index.h("div", { key: 'a32a4cb1d358eead82dd1f650101594ca2345254', class: "text-h6 mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: 'f1cd85933f0808f2833c440a2bca3cbe904b6fdc', class: "!text-sm leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: '87734d74725ba2aeb0f64ce20d6a504bb905b9a9' })), index.h("slot", { key: '7912bf4ec3e18204f10e92f85c22f3e26bf3ffcd', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
