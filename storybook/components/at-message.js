import { p as proxyCustomElement, H, h } from './p-Cv5ME95Z.js';

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
        return (h("div", { key: 'e9ff8cfc2b62f49b1e104b3ccbe8b13937a0b0e6', class: this.hostClasses, "data-name": "message-container" }, h("i", { key: 'a8decadc95f63616b19a9d6c237d971bddeff0ac', class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName), h("div", { key: '08c6eede4a947115dfa983b0a431fdcbbec53cb6', class: "w-full" }, this.message_title && (h("div", { key: '95b6ce6895a0cca7e1372f180a8e9ede9664e75d', class: "text-h6 mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: '9967c40b92bd9d1c6b73a94abd16c3344f6f2a90', class: "!text-sm leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: '0ebae6e540c34c78317b253fb122519a4da4a51d' }))));
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