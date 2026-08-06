import { r as registerInstance, h } from './index-DTnhfVT-.js';

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
        return (h("div", { key: 'b1f7cb6e76843f1ac767642b1f212b7afa848984', class: this.hostClasses, "data-name": "message-container" }, h("at-icon", { key: '0ddc93360e6232dde16ba3891239ac43238b4fe1', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), h("div", { key: '19b850fc048227a6d0db22d3a46207048508ee7e', class: "flex w-full flex-row justify-between gap-4 text-sm" }, h("div", { key: '3eac5d7dff49cc5f2d761606c7f2837e7aff2b3d' }, this.message_title && (h("div", { key: '351f79db1eb6a22c8bed2caa5d787aaa8182fe85', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: 'e4f712ffa8f038d0838e572b889ae8c63d8664f9', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: '844bd23a62a1a0056ce3dd2c847ef990ecea327b' })), h("slot", { key: '78ef7f905a46fa2d46fead06b0396aece79b946f', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

export { AtMessage as at_message };
