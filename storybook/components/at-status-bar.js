import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';
import { d as defineCustomElement$2 } from './p-CJ4jwrx3.js';

const AtStatusBar$1 = /*@__PURE__*/ proxyCustomElement(class AtStatusBar extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    /**
     * List of segments that make up the status bar. Each segment implements the StatusBar interface.
     */
    status_bar = [];
    /**
     * Height of the status bar
     */
    size = 'sm';
    /**
     * Disables the tooltip when hovered
     */
    disable_tooltip;
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
        return (h(Host, { key: '144aa00f4eb0ca706c92ed1b4bfe25efd6f24135', class: this.statusBarClass }, h("div", { key: 'c7069d1108784bd888766a2b8d8c4796b57e6bec', class: "flex flex-1 items-stretch justify-start overflow-visible" }, this.segments)));
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