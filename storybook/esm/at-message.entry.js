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
    iconColour: {
        error: 'text-feedback-error-accent',
        warning: 'text-feedback-warning-accent',
        success: 'text-feedback-success-accent',
        info: 'text-feedback-info-accent',
        default: 'text-feedback-foreground',
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
     * You can provide a custom value to replace the default icon.
     *
     * Must use material icon name.
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
        return (h("div", { key: '68760b6b2fa30f247c9e8027bd76910b56451bdb', class: this.hostClasses, "data-name": "message-container" }, this.icon ? (h("i", { class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName)) : (h("at-icon", { class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName })), h("div", { key: '8dcc8f888f50aa4f30ae7a5ee60b76c0924cb8fe', class: "flex w-full flex-row justify-between gap-4 text-sm" }, h("div", { key: 'c3f7f05356c0c9127af217ecf4ec648ef996c75f' }, this.message_title && (h("div", { key: 'e6680ae0d1ee047f13c1d23c2d964014d02f7610', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: 'f3869e55823cd69a6ef71f06a8ae2a6222e40eef', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: '3aba182ff028120b049aecfe49e663124c90795d' })), h("slot", { key: 'bd89213004ebbf63161a71d009c3d46ae457606c', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

export { AtMessage as at_message };
