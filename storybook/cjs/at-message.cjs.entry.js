'use strict';

var index = require('./index-BRms7T38.js');

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
        index.registerInstance(this, hostRef);
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
        return (index.h("div", { key: '7a8e7a80f6d065ceaf0ef0e207545d462597d4e0', class: this.hostClasses, "data-name": "message-container" }, index.h("i", { key: 'fda061e2c75dd1e1a2e4e53a279751ae5679e905', class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName), index.h("div", { key: '2b3d51fdc7f0d11e1f7bd16dfff680f8d86d23f4', class: "flex w-full flex-row justify-between gap-4" }, index.h("div", { key: 'e7eec3d62e3126ad1319fcc394294c3400d8c75b' }, this.message_title && (index.h("div", { key: '26079753a16feb263504a8cf56fd309bb7c07030', class: "text-h6 mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (index.h("div", { key: '4d0d548da1a64ee37b9480434c5ccba3ee35f45a', class: "!text-sm leading-normal", "data-name": "message-content" }, this.content)), index.h("slot", { key: '3ad243d713eca0d202ea2c7abf3fbc501115a8f2' })), index.h("slot", { key: '312d4b2d4e140b437f8fc7375c7d405771bc9e57', name: "actions" }))));
    }
};
AtMessage.style = atMessageCss();

exports.at_message = AtMessage;
