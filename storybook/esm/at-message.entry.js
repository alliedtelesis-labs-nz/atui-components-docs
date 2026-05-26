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
        return (h("div", { key: '4fb17dfdbfda816537b415bdd5b6a28ca552cd87', class: this.hostClasses, "data-name": "message-container" }, h("at-icon", { key: '813113691eb55a78ba94c321a85e295de9d04b8d', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), h("div", { key: '6834f07d6e5f5df0488516e5b7d2535ff297c1b1', class: "flex w-full flex-row justify-between gap-4 text-sm" }, h("div", { key: '1633e12c6b4fe273985fc953557025be16492388' }, this.message_title && (h("div", { key: '361678fe0c4f3272d48caada4367bbff7544090d', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: '0fe7af5e68d55bf2bf2035084693a2d76e15d728', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: '1a7620a38b4c051709feb36c496e3ab413da2236' })), h("slot", { key: 'f33259783d2b3b83781bcaa31696e7c9f9c02743', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

export { AtMessage as at_message };
