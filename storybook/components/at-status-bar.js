import { p as proxyCustomElement, H, h, c as Host } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$2 } from './p-BUjvE2eq.js';

const AtStatusBar$1 = /*@__PURE__*/ proxyCustomElement(class AtStatusBar extends H {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, { key: '45c94e5437af5c853669a9d64c70c7ce49a20eea', class: this.statusBarClass }, h("div", { key: '923b55f4d7ee5a2a43b5f7754666c037b469d529', class: "flex flex-1 items-stretch justify-start overflow-visible" }, this.segments)));
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