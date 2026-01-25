'use strict';

var index = require('./index-CzDB71Wy.js');

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
        return (index.h("div", { key: 'a3b327972a1a1c6080ab6f479a56ee8c6cf010f7', class: this.hostClasses, "data-name": "message-container" }, index.h("i", { key: '3ffd345e85dee2fb5e6981302995a82f87daf84a', class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName), index.h("div", { key: 'eb5ab93a237c85adf5b2ea973767e898f6fef069', class: "w-full" }, this.message_title && (index.h("div", { key: '83ad40f54527ef6cbb81cef99cf4282e03b20df1', class: "text-h6 mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: '5dc49a4a5e6a8f523a70c2f9da975ca001393e65', class: "!text-sm leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: '0334eee2d80dc12c0936e3efe08b33c65cab827d' }))));
    }
};

exports.at_message = AtMessage;
