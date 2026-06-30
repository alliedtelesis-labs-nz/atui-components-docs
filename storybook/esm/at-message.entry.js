import { r as registerInstance, h } from './index-CBaYZWr2.js';

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
        return (h("div", { key: '2ec1ef0dfbcfc8b9ac2948ba2f9533f77db08f98', class: this.hostClasses, "data-name": "message-container" }, h("at-icon", { key: '21c5cbacbae49f38aad8de4cdf18b420ceb2dcc9', class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName }), h("div", { key: '59c2d718697c7774bed38fad632c19291264854c', class: "flex w-full flex-row justify-between gap-4 text-sm" }, h("div", { key: 'a25b06d6de47b5210e40d025c8602df6440236ca' }, this.message_title && (h("div", { key: '1670dc2062d6bedbc159ea990f3fbfe334c33761', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: '735429832bb25c09980f3f67d1546906a5637c65', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: '8ffcf5d0bc7d54958ba735d9fc2a46344bae0421' })), h("slot", { key: '1453507caeb7f8e89e2ff2c2dcec1563c963a9fd', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

export { AtMessage as at_message };
