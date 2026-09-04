import { r as registerInstance, h } from './index-CT99rxub.js';

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
        return (h("div", { key: '17963a369f8cb6cc0a2daec24ca3a9e56c45502a', class: this.hostClasses, "data-name": "message-container" }, h("at-icon", { key: '71f4e2728c0b9e04efeac6356986319663b86542', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), h("div", { key: '6d2a3c65528923dfb596d8e6167e7e98e5701a85', class: "flex w-full flex-row justify-between gap-4 text-sm" }, h("div", { key: '5a6f90f3eefdcc49f4d2b33e5f72a45846b0aa28' }, this.message_title && (h("div", { key: '5907286c6e17a4c497d4f38b69c3da7a3fbba1ed', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: '802e7a8698cbae3712459333036b6cacbccf3814', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: '12f6528d8ff0d94086d4e3fa9a1d0e3ac3f776a0' })), h("slot", { key: '4440c696375cf58755d8b956387de49c81d0b5dc', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

export { AtMessage as at_message };
