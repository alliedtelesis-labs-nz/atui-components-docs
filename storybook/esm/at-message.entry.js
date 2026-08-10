import { r as registerInstance, h } from './index-HD-uhvb8.js';

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
        return (h("div", { key: '0c426cf2872b9e9f930f9e4f3b848824fc2fe614', class: this.hostClasses, "data-name": "message-container" }, h("at-icon", { key: '5a5fd717aa0460fc1f9190cd1c02015d6085ddb2', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), h("div", { key: 'bba3ad9e094afcc7e163054fc88018661094fb5f', class: "flex w-full flex-row justify-between gap-4 text-sm" }, h("div", { key: '46a6cfea00725b6a2ae48db11ab2cb0d09ebcd40' }, this.message_title && (h("div", { key: '496d5786bb71008d9f69614d7b418f614143390a', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: '04af12d008dd25a93d4527104c601c11b8ab0680', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: '389f6e219dde0ce96e0824fe51514c3d55d46469' })), h("slot", { key: 'a0cafdc4cd39715cf1b33606de1e8850eade3750', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

export { AtMessage as at_message };
