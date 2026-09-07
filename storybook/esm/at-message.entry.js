import { r as registerInstance, h } from './index-CGGSFxDu.js';

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
        return (h("div", { key: 'bfcebb97a62251bbf87e2a742423ed67cac9e732', class: this.hostClasses, "data-name": "message-container" }, h("at-icon", { key: 'a05ba7dfde2a579f9ded7eb1ccb626115e3d16bd', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), h("div", { key: '18218ab55f93f2005b9f4faa3ec56e30644afb45', class: "flex w-full flex-row justify-between gap-4 text-sm" }, h("div", { key: '409ee6bb64dd7db0adff26262db1027d45c31a25' }, this.message_title && (h("div", { key: '512c0cf4780e772c88807a390a9763c06db9b316', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: '4d56d60fc48277f99b5890e1463bf73ddd879e94', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: '973ae958eb6d2fc281b4be40cce8542ff2d9cb50' })), h("slot", { key: '12a60a17df9e05e41cf6e99a26179b15321bd445', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

export { AtMessage as at_message };
