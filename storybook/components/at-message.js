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
        return (h("div", { key: '1a33004118e3d7d2d4468adad4c854db53bae79b', class: this.hostClasses, "data-name": "message-container" }, h("i", { key: '2554118c7fdae2edc6175436220ee82b7bf1d915', class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName), h("div", { key: 'e5b4e58675413c4d7dc30108817373048b1039fd', class: "w-full" }, this.message_title && (h("div", { key: 'eb0cd77c661c939a7637ef4479b9843f9bf0d4ee', class: "text-h6 mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: '5fba52f609fbe2e61d6cb63ae34a5945d93da908', class: "!text-sm leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: 'b3e481859c98f62448ccb4e849b0d9711a137df5' }))));
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