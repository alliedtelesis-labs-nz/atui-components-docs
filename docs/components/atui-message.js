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
        return (h("div", { key: '562c67f1563a823861f5ff70c0680e17c40341bc', class: this.hostClasses, "data-name": "message-container" }, h("i", { key: 'c3996dd670695814e59f9fc58da7fc936b7e8ce7', class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName), h("div", { key: '0cb8af3ebc059219e698b2c397ef020dc0d13347', class: "w-full" }, this.message_title && (h("div", { key: '9e0c2d6b7a9e70133ab2d654cc3f796cd2017db8', class: "mb-4 text-h6 font-medium leading-normal", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: '53b18c4c0d01006922cc0d85df0740b7d58f9f78', class: "!text-sm leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: '6e41b143cccdd5f963c98fff83a298431755649a' }))));
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