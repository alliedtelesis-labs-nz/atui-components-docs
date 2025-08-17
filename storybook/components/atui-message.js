import { p as proxyCustomElement, H, h } from './p-CaGsJoRH.js';

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
const AtuiMessage$1 = /*@__PURE__*/ proxyCustomElement(class AtuiMessage extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Theme of the message, either "light" or "default".
         */
        this.impact = 'high';
    }
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
        return (h("div", { key: 'e1cef466b3d26e85e4ed80f4c2ddf531caadaee8', class: this.hostClasses, "data-name": "message-container" }, h("i", { key: '004adcdac6dbe7468a1b0ee3171a0a4bd964b6b1', class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName), h("div", { key: '4c5b1bbbdf4e9577862f292f930fd916fab981e5', class: "w-full" }, this.message_title && (h("div", { key: '37a9d15bc1d5234a428a29b3d804fbafec02bd97', class: "mb-4 text-h6 font-medium leading-normal", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: 'd3be04a0966d54e896ebccad1ad933ed3d84ff57', class: "!text-sm leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: 'a9599eb4df70121dcfcea07c1b4e3702f908abb5' }))));
    }
}, [260, "atui-message", {
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
    const components = ["atui-message"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-message":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiMessage$1);
            }
            break;
    } });
}

const AtuiMessage = AtuiMessage$1;
const defineCustomElement = defineCustomElement$1;

export { AtuiMessage, defineCustomElement };
//# sourceMappingURL=atui-message.js.map

//# sourceMappingURL=atui-message.js.map