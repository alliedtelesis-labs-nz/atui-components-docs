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
        return (index.h("div", { key: '9e17f3d937e4ce057b29a9f71e35453d935aa245', class: this.hostClasses, "data-name": "message-container" }, index.h("at-icon", { key: 'a01631ec27daaab50be38f5cef16a55d0ce502fa', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), index.h("div", { key: 'd8e7ede702846ee3676ef86fd73c2b6260605dbe', class: "flex w-full flex-row justify-between gap-4 text-sm" }, index.h("div", { key: '12c7d0854aeda14f7d50b77a9148778fc1cc3842' }, this.message_title && (index.h("div", { key: 'afcf58221de61fefe0db720b8312e12580a46804', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: '83b82d59c36fa7908c4848345ab1c2f10147d304', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: 'b8e20a7ebe1760014dd27f68a4dce29147624b56' })), index.h("slot", { key: 'bbe0387a04962a3cd80cc9d083ba5999d10022bd', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
