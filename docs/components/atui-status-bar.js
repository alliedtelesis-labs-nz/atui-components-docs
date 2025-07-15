import { p as proxyCustomElement, H, h, c as Host } from './p-DDLUhBkV.js';
import { d as defineCustomElement$2 } from './p-IMVeGR0G.js';

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
        return (h(Host, { key: '656401c7c18872d74e095ddbed9ec386722fd370', class: this.statusBarClass }, h("div", { key: 'b4d30684d8582a6535bf99e7d1372add5b651a1c', class: "flex flex-1 items-stretch justify-start overflow-visible" }, this.segments)));
    }
}, [0, "atui-status-bar", {
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