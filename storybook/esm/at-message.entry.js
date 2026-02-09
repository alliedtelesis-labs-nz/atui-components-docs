import { r as registerInstance, h } from './index-jvbUuQtg.js';

const atMessageCss = () => `at-message [slot=actions]{align-self:start}`;

const messageVariants = {
    base: 'flex p-[14px] text-dark text-left rounded-[0.3rem]',
    icon: {
        error: 'error',
        warning: 'warning',
        success: 'check_circle',
        info: 'info',
        default: '',
    },
    iconColour: {
        error: 'text-destructive-foreground',
        warning: 'text-warning-foreground',
        success: 'text-success-foreground',
        info: 'text-info-foreground',
        default: 'text-dark',
    },
    background: {
        high: {
            error: 'bg-destructive',
            warning: 'bg-warning',
            success: 'bg-success',
            info: 'bg-info',
            default: 'bg-surface-2',
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
        return (h("div", { key: '7d166798d368cb019b16995c5dd21fff3bb55541', class: this.hostClasses, "data-name": "message-container" }, h("i", { key: '65d267ac1508198c93d4b7a7a0ada4b935e3dd8b', class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName), h("div", { key: 'c04fb6fb6f085dfa2cafd355099f57bd78e7477c', class: "flex w-full flex-row justify-between gap-4" }, h("div", { key: 'c273abfea04a41f0381c6bdd9d6e3604aa8d3504' }, this.message_title && (h("div", { key: 'fcec635f9b4ffff3e0a46c84640769124567e3f8', class: "text-h6 mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: '794c41c6998de80295f5632d09eda529d90b9c05', class: "!text-sm leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: '6aa3c649daafab287b50a1bd93b9a9bb6f6e90fe' })), h("slot", { key: 'f5c88dcdbdf47c1e5e928e6625c8ed668cabefdc', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

export { AtMessage as at_message };
