import { r as registerInstance, h } from './index-B_iXjeZH.js';

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
        return (h("div", { key: '03c8989466d7c24a03ea9185929055381a5154fd', class: this.hostClasses, "data-name": "message-container" }, h("at-icon", { key: '1073e7b055e0097e5a499a52f4580f4a15cbfdd7', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), h("div", { key: 'e314174ed57cb70dd84802a36503eea88bd6a2b3', class: "flex w-full flex-row justify-between gap-4 text-sm" }, h("div", { key: '96385ed699221e8517f5b326f66f6201b9db58b4' }, this.message_title && (h("div", { key: 'f9e33535e0c50928e00af0525db6c4b5accf8998', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: '34ec42ec16887d367bdd7eea00a286ddb2a2bfe7', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: '08a86e76000b050ce653ac09ba149d4278054232' })), h("slot", { key: '97d23192d64943455ef19710245b4dc7b590a83a', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

export { AtMessage as at_message };
