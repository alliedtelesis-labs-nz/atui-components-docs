import { p as proxyCustomElement, H, h } from './p-kcU6cSzl.js';

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
        return (h("div", { key: '2abb59cb2e9008d2b90aca80e93d3b436f03d59d', class: this.hostClasses, "data-name": "message-container" }, h("i", { key: '1695ce01b31345f3858d4d0864e39093349b8041', class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName), h("div", { key: 'f806345faae75e11d882ab2b2474dfef2b58f797', class: "w-full" }, this.message_title && (h("div", { key: '0ab81f303ec83948cadfca7056aaff2d09fc3006', class: "mb-4 text-h6 font-medium leading-normal", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: '449e279f95b53abb6aa2d125beff03d24f8495ad', class: "!text-sm leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: '8ea88b27675af7d5f38f3e8b5895da65c0f149de' }))));
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