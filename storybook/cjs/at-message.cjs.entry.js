'use strict';

var index = require('./index-BzjIU9ss.js');

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
        /**
         * Theme of the message, either "light" or "default".
         */
        this.impact = 'high';
    }
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
        return (index.h("div", { key: 'f0d4c55c22c724cdc75c1d882fad5e2d64fc236a', class: this.hostClasses, "data-name": "message-container" }, index.h("i", { key: 'deacdcfc564ca148d4c19bf173d096b51d12b84b', class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName), index.h("div", { key: '108020ec6936bc548939d2cb296adcf0eff48343', class: "w-full" }, this.message_title && (index.h("div", { key: '8f0515778dff6518543bf51631af89aee9c08cfc', class: "text-h6 mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: 'ed641159388fd903811f93c577fea1247310ef68', class: "!text-sm leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: '8abe3341b5ecc4cc43c70084a8105be5537ee587' }))));
    }
};

exports.at_message = AtMessage;
//# sourceMappingURL=at-message.entry.cjs.js.map
