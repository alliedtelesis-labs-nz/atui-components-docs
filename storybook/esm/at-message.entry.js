import { r as registerInstance, h } from './index-BAAX2Der.js';

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
        return (h("div", { key: '168589c85cd67218c386acb6050d8a32ab87c581', class: this.hostClasses, "data-name": "message-container" }, h("at-icon", { key: '364e93b89c9ba0671202323bd70fb151aace1882', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), h("div", { key: '134ebd1a16ea61e3875e14903599be8727f5d43e', class: "flex w-full flex-row justify-between gap-4 text-sm" }, h("div", { key: '6d6d6a2cc1090a25e30cd3c3e92dad4c3e6c4bd6' }, this.message_title && (h("div", { key: '8118307d89a2793d8342df5117c1bd6607ca0bc2', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: 'cea22e2eaa8fdc6910849ccbc3a7db9f086a1493', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: '0243491f6a1e54499a50b17e9ba3116397042eee' })), h("slot", { key: '94c71b6c4a56acdb4c7d8f700f8beaf80d2e5cd7', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

export { AtMessage as at_message };
