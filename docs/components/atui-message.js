import { p as proxyCustomElement, H, h } from './p-DJD-7SVX.js';

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
        return (h("div", { key: '85bb7def928297973cb778eb49769dab2a322b1b', class: this.hostClasses, "data-name": "message-container" }, h("i", { key: 'e9e174581a39aa923efa9a31ef1de53a91d1a8e9', class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName), h("div", { key: '0e1bbb586ee3cab0aa7f87912810840e6623ddaf', class: "w-full" }, this.message_title && (h("div", { key: '530b41f3befa735e50bee2614edad99a2d787380', class: "mb-4 text-h6 font-medium leading-normal", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: '11f17e3b209a9f11b203ddbb377a7abb7259aed1', class: "!text-sm leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: '9455e22115167c2142247c0854bf2e4792d16943' }))));
    }
}, [4, "atui-message", {
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