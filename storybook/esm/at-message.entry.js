import { r as registerInstance, h } from './index-B7T1fCND.js';

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
        return (h("div", { key: '51625f3044fcd04c47a15138e8ab3a1e7b8a244d', class: this.hostClasses, "data-name": "message-container" }, h("at-icon", { key: 'b6f75edc7fe132523ac26ec51b475b6b472dc15a', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), h("div", { key: '462e22a17a20b20505b5e0a326c122c83273ac1d', class: "flex w-full flex-row justify-between gap-4 text-sm" }, h("div", { key: 'fb156f1a19f51dd8ff0e03fd443680e880506ce5' }, this.message_title && (h("div", { key: '85c6fd68a96b945159ce514c761652958c3170b1', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: 'e542c44d9505687e8aa0dda9e859097f44678c4e', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: 'fec5e7352b1bf31da516d2b8429eaf65c7d811b3' })), h("slot", { key: '9b656a361aa9dc624210b5ede5194325f1228134', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

export { AtMessage as at_message };
