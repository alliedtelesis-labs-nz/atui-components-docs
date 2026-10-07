'use strict';

var index = require('./index-D62KzS1q.js');

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
        return (index.h("div", { key: '446a995c7cf75fb109d3130f1edd319f5c1c99f5', class: this.hostClasses, "data-name": "message-container" }, index.h("at-icon", { key: '7f2f666a247f2bc881b7e688d2f58cba5c01038a', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), index.h("div", { key: '01251fdd2267885dd33b2823d3c2888fd33a06cf', class: "flex w-full flex-row justify-between gap-4 text-sm" }, index.h("div", { key: 'b6ee3732284b251a1ceebf9756c2a7e803f2fb9c' }, this.message_title && (index.h("div", { key: '02a541c22bd062a54feb32a061d054422b18890d', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: 'c2eb5fc2ed504eaeb4ad966a8c5ecc3b9d0a8084', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: 'e3e73d500db8d685d678866f41430919822b6392' })), index.h("slot", { key: 'c7f4900c8b49bd8409e9c09b4f6018b10b3667ad', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
