'use strict';

var index = require('./index--r5sCsiV.js');

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
        return (index.h("div", { key: 'a031b80e73fe04184e8bea9955875fb52ae9f7bc', class: this.hostClasses, "data-name": "message-container" }, index.h("at-icon", { key: '3443a63a33b8c3ca30a8df3bb7ad94f85cdced39', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), index.h("div", { key: '5015da2a294275b13f9d7a5e95024d075ff8a964', class: "flex w-full flex-row justify-between gap-4 text-sm" }, index.h("div", { key: '5c6f175fa723d05d0535b6ad995a120d45449319' }, this.message_title && (index.h("div", { key: '60c5814059c3907fd3afc3f866451070c2dc273f', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: '44e125311108477cf2a8d59e3d79bd1c617adc3f', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: 'f58f276c85bc35564c771558142310de190622a0' })), index.h("slot", { key: '8ef2d6b9db1df939af1ec118a67a996ab2416a5a', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
