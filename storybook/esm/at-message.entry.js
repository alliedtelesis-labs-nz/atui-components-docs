import { r as registerInstance, h } from './index-EP34iaAr.js';

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
    type;
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
        return (h("div", { key: 'e93ca2485ca3e15a085f0a687aee44420b68bf4d', class: this.hostClasses, "data-name": "message-container" }, h("i", { key: '5172b29e1897fd55f40996278b5d8899d0b3cb20', class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName), h("div", { key: '5c2ef4d9d5891f6230f73310b6d14dcf87aa02df', class: "w-full" }, this.message_title && (h("div", { key: 'b05143ac2ab1add59402172229ac648b9a8ef8cc', class: "text-h6 mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: '54cd5dfba425ed6c5fdb9518a2d594ea963892c7', class: "!text-sm leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: 'fbb3570e658c6b7cf9425b62350c78e4bac5abcc' }))));
    }
};

export { AtMessage as at_message };
//# sourceMappingURL=at-message.entry.js.map
