import { p as proxyCustomElement, H, h } from './p-_-xuBOrs.js';

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
const AtMessage$1 = /*@__PURE__*/ proxyCustomElement(class AtMessage extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
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
        return (h("div", { key: 'f0d4c55c22c724cdc75c1d882fad5e2d64fc236a', class: this.hostClasses, "data-name": "message-container" }, h("i", { key: 'deacdcfc564ca148d4c19bf173d096b51d12b84b', class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName), h("div", { key: '108020ec6936bc548939d2cb296adcf0eff48343', class: "w-full" }, this.message_title && (h("div", { key: '8f0515778dff6518543bf51631af89aee9c08cfc', class: "text-h6 mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: 'ed641159388fd903811f93c577fea1247310ef68', class: "!text-sm leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: '8abe3341b5ecc4cc43c70084a8105be5537ee587' }))));
    }
}, [260, "at-message", {
        "type": [1],
        "impact": [1],
        "message_title": [1],
        "icon": [1],
        "content": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-message"];
    components.forEach(tagName => { switch (tagName) {
        case "at-message":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtMessage$1);
            }
            break;
    } });
}

const AtMessage = AtMessage$1;
const defineCustomElement = defineCustomElement$1;

export { AtMessage, defineCustomElement };
//# sourceMappingURL=at-message.js.map

//# sourceMappingURL=at-message.js.map