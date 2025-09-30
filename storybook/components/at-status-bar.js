import { p as proxyCustomElement, H, h, c as Host } from './p-BRRmBK9P.js';
import { d as defineCustomElement$2 } from './p-CB1W_yTO.js';

const AtStatusBar$1 = /*@__PURE__*/ proxyCustomElement(class AtStatusBar extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        /**
         * List of segments that make up the status bar. Each segment implements the StatusBar interface.
         */
        this.status_bar = [];
        /**
         * Height of the status bar
         */
        this.size = 'sm';
    }
    get statusBarClass() {
        return `${this.size === 'lg' ? 'h-[16px]' : 'h-8'} flex items-stretch rounded-sm`;
    }
    get segments() {
        return this.status_bar.map((segment) => (h("at-tooltip", { position: "bottom", class: "flex flex-grow items-stretch justify-center", disabled: this.disable_tooltip, style: {
                flexBasis: segment.percentage.toString() + '%',
            } }, h("div", { class: "flex flex-grow", slot: "tooltip-trigger", style: {
                background: segment.backgroundColor,
            } }), h("span", null, segment.tooltip))));
    }
    render() {
        return (h(Host, { key: '9e45065adb294d40bae5be4e2ca87526035bddcb', class: this.statusBarClass }, h("div", { key: '583ce6795b6f365680f3c4e02f77f01eb60615c5', class: "flex flex-1 items-stretch justify-start overflow-visible" }, this.segments)));
    }
}, [256, "at-status-bar", {
        "status_bar": [16],
        "size": [1],
        "disable_tooltip": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-status-bar", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-status-bar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtStatusBar$1);
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtStatusBar = AtStatusBar$1;
const defineCustomElement = defineCustomElement$1;

export { AtStatusBar, defineCustomElement };
//# sourceMappingURL=at-status-bar.js.map

//# sourceMappingURL=at-status-bar.js.map