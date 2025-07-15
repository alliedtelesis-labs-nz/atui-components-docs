import { p as proxyCustomElement, H, h, c as Host } from './p-DDLUhBkV.js';
import { d as defineCustomElement$1 } from './p-IMVeGR0G.js';

const AtuiIconCell = /*@__PURE__*/ proxyCustomElement(class AtuiIconCell extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    init(params) {
        this.params = params;
        this.icons = params.value;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params.value);
        return true;
    }
    updateCell(newValue) {
        this.params.value = newValue;
        this.icons = this.params.value;
    }
    get getIcons() {
        return this.params.value.map((icon) => (h("atui-tooltip", { position: "right", is_visible: !!this.params.generateTooltip }, h("div", { class: "flex items-center", slot: "tooltip-trigger" }, h("span", { class: `material-icons text-icon-md ${icon.iconClass}` }, icon.iconName)), this.params.generateTooltip && (h("span", { slot: "tooltip-content", class: `leading-normal` }, this.params.generateTooltip(icon.tooltipText))))));
    }
    render() {
        return (h(Host, { key: 'df276223020126e1e8999e283434626d2aa57759', class: "flex h-full items-center overflow-hidden leading-[100%]" }, this.getIcons));
    }
    get el() { return this; }
}, [0, "atui-icon-cell", {
        "params": [32],
        "icons": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-icon-cell", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-icon-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiIconCell);
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiIconCell as A, defineCustomElement as d };
//# sourceMappingURL=p-CgWHj2Ch.js.map

//# sourceMappingURL=p-CgWHj2Ch.js.map