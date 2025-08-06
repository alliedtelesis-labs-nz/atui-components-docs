'use strict';

var index = require('./index-DGivrgtr.js');

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
const AtuiMessage = class {
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
        return (index.h("div", { key: '562c67f1563a823861f5ff70c0680e17c40341bc', class: this.hostClasses, "data-name": "message-container" }, index.h("i", { key: 'c3996dd670695814e59f9fc58da7fc936b7e8ce7', class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName), index.h("div", { key: '0cb8af3ebc059219e698b2c397ef020dc0d13347', class: "w-full" }, this.message_title && (index.h("div", { key: '9e0c2d6b7a9e70133ab2d654cc3f796cd2017db8', class: "mb-4 text-h6 font-medium leading-normal", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: '53b18c4c0d01006922cc0d85df0740b7d58f9f78', class: "!text-sm leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: '6e41b143cccdd5f963c98fff83a298431755649a' }))));
    }
};

exports.atui_message = AtuiMessage;
//# sourceMappingURL=atui-message.entry.cjs.js.map

//# sourceMappingURL=atui-message.cjs.entry.js.map