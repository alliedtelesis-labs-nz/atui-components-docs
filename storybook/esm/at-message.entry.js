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
        return (h("div", { key: '8287426bae368a48a816aec2b6c51223a89cc0fa', class: this.hostClasses, "data-name": "message-container" }, h("i", { key: '2924379cb7abf83a7b0fc18ff0b0380d06df1be3', class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName), h("div", { key: '1b60b9ab352de731192f0b1588fac834489c8d39', class: "flex w-full flex-row justify-between gap-4" }, h("div", { key: '2a288e154760ef42e45d58c8f6aaf8144b0258cb' }, this.message_title && (h("div", { key: '082fd2fac21a7b8682a2229f8254aaf3cc4a06a5', class: "text-h6 mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: 'e3647e475e54d41cecf24a3ce6532b1cf7066253', class: "!text-sm leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: 'c10c61096b2f6e80ef12fda74f384182e2f26166' })), h("slot", { key: '24ed4d56e7e0992e670c2500fca226e057d56571', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

export { AtMessage as at_message };
