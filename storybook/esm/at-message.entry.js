import { r as registerInstance, h } from './index-BXUxu8jr.js';

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
        return (h("div", { key: 'c96fb7a395f7901c1726b2f190b19d8a09d6b9be', class: this.hostClasses, "data-name": "message-container" }, h("at-icon", { key: '7ca210532608efa9ac8b2c081d861184eb3eb03f', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), h("div", { key: '2fd888a195bb9585df53bc6f574d1c4a70d36fe0', class: "flex w-full flex-row justify-between gap-4 text-sm" }, h("div", { key: 'c1271e997e46063136ae13a704ddcbeff5134755' }, this.message_title && (h("div", { key: '36ac32e9d806b271bfb3558f28c8616bea707ca5', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: 'ad16cee15c81ca22369bd9ade08fa998e448bfdf', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: '5d5c4963a62a5073dd069098ba1d540e8b69c9f0' })), h("slot", { key: '5ad10566af2adcc93021552638766cc16f613e60', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

export { AtMessage as at_message };
