import { r as registerInstance, h } from './index-_QbJz5mf.js';

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
        registerInstance(this, hostRef);
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
        return (h("div", { key: '52d7143c2a529f9bdb826fc1337cabbc457a606a', class: this.hostClasses, "data-name": "message-container" }, h("at-icon", { key: '53ddf21e25021af089b7da76ead3b635ad8343c3', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), h("div", { key: 'fb1e0182244b4d4588044f04da3b70789cdbe0f3', class: "flex w-full flex-row justify-between gap-4 text-sm" }, h("div", { key: '2b68101cc6142d425109a96cd82354bbc2eb269b' }, this.message_title && (h("div", { key: 'c7aac7f5b38bb6ec3e087dcc9983f47d4f7550c6', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: '5d1761df9a14cd4d093a3e72ac1e1782429450eb', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: 'dee5b8a99dc40a041b5e2852b1e6e466baa7f403' })), h("slot", { key: '3f587c4158592f9a7ab9572defc6aee3c8bcfeef', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

export { AtMessage as at_message };
