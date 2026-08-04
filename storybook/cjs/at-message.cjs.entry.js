'use strict';

var index = require('./index-EXiXggWw.js');

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
        return (index.h("div", { key: 'a1460edee0cd96e3b823b1ac7687979aaf3dea9f', class: this.hostClasses, "data-name": "message-container" }, index.h("at-icon", { key: '4b6970601da5688fc143fbbbc9821c692662c4d4', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), index.h("div", { key: '18d909bfe644b44a4831a7d750695e80bb432046', class: "flex w-full flex-row justify-between gap-4 text-sm" }, index.h("div", { key: 'bf86c89dfce5894895617ec4226edb63eceb0181' }, this.message_title && (index.h("div", { key: '16da7f853819f59a7ac69d377ec83469690716f0', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: '3f6239efa2345872403d303a725d9508e44fa033', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: 'a673760a330b9ec23062a06eac3cf6acadc7c4b2' })), index.h("slot", { key: '7cc439ab4dd0b02169cb5004d9c7ec5b32f9f02e', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
