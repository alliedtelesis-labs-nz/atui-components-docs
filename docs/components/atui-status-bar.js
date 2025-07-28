import { p as proxyCustomElement, H, h, c as Host } from './p-kcU6cSzl.js';
import { d as defineCustomElement$2 } from './p-B9oksuag.js';

const AtuiStatusBar$1 = /*@__PURE__*/ proxyCustomElement(class AtuiStatusBar extends H {
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
        return this.status_bar.map((segment) => (h("atui-tooltip", { position: "bottom", class: "flex flex-grow items-stretch justify-center", is_visible: !this.disable_tooltip, style: {
                flexBasis: segment.percentage.toString() + '%',
            } }, h("div", { class: "flex flex-grow", slot: "tooltip-trigger", style: {
                background: segment.backgroundColor,
            } }), h("span", { slot: "tooltip-content" }, segment.tooltip))));
    }
    render() {
        return (h(Host, { key: '82a2a7adf088ccfbf50a5c5181d2377f002e7e2d', class: this.statusBarClass }, h("div", { key: '753b0337ec004a2743b18c23beae25358aba4e36', class: "flex flex-1 items-stretch justify-start overflow-visible" }, this.segments)));
    }
}, [256, "atui-status-bar", {
        "status_bar": [16],
        "size": [1],
        "disable_tooltip": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-status-bar", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-status-bar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiStatusBar$1);
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtuiStatusBar = AtuiStatusBar$1;
const defineCustomElement = defineCustomElement$1;

export { AtuiStatusBar, defineCustomElement };
//# sourceMappingURL=atui-status-bar.js.map

//# sourceMappingURL=atui-status-bar.js.map