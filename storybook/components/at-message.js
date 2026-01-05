import { p as proxyCustomElement, H, h } from './p-89eupKrN.js';

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
        return (h("div", { key: '4504e0793d7d6c0b85145c5846213da1c8a9b5e9', class: this.hostClasses, "data-name": "message-container" }, h("i", { key: 'f149f8e94896662da87386a3de213f081e7d2df0', class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName), h("div", { key: '28c1f1a038f58888963b539f1e4d43140a775214', class: "w-full" }, this.message_title && (h("div", { key: '2422c81783e1a17258fec30539f181c57b40fa78', class: "text-h6 mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: 'd8c3c59b37e5833e3cb00d0795cdd2d24dc4e34c', class: "!text-sm leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: 'addf359a8f2bd220d8e53f365622698429e2eb3e' }))));
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