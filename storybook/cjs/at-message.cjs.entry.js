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
        return (index.h("div", { key: '351b76d52166924b5b15de83526690cb82062e0a', class: this.hostClasses, "data-name": "message-container" }, index.h("at-icon", { key: 'c0c6743bb1d4277e7b83e3fd9de279cd7abce4a8', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), index.h("div", { key: 'ac895d33591295e7aeb5c93765c3566d25076974', class: "flex w-full flex-row justify-between gap-4 text-sm" }, index.h("div", { key: 'a1471729b95f09ee5bf7701a8c28a5a3dbd60ef0' }, this.message_title && (index.h("div", { key: '1ff5f7313d2d3e61eae8c1f39d5cfaf568fc9eac', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: 'af73652967cbf53d8b7f5f61f1d051c50a6af5d0', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: '62bd63f9b82fd5301f8067d591e1b3f243ec6dcc' })), index.h("slot", { key: 'f3d946125c0b3e60c849988700622fc32bc9ecbb', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
