import { r as registerInstance, h } from './index-H8lgnoYZ.js';

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
        return (h("div", { key: '1aaa316941e29e407abe5863455e8b68b6bae003', class: this.hostClasses, "data-name": "message-container" }, h("at-icon", { key: '8097648ed5b3ef7c6937730f06dd76c4ad4b661f', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), h("div", { key: '089a5bb184f85342b755244634f47308cf9af034', class: "flex w-full flex-row justify-between gap-4 text-sm" }, h("div", { key: 'e695d2927a9fbe91fb809f23a81a2f6457590f17' }, this.message_title && (h("div", { key: '019b3c16263461178e0aaae1a47162387a2b929f', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: '56a67771b8f8c2386a63879fb0a2da98d838b922', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: '01d1e1d7f34644f1fc90bc7127bfadc5e5338e48' })), h("slot", { key: 'a2fba462543591351659afd5efacf83d597ad891', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

export { AtMessage as at_message };
