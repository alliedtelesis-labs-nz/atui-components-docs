import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';
import { d as defineCustomElement$1 } from './p-BLBTk09G.js';

const AtuiTextIconCell = /*@__PURE__*/ proxyCustomElement(class AtuiTextIconCell extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    init(params) {
        this.params = params;
        this.value = params.value;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params);
        return true;
    }
    updateCell(params) {
        this.params.value = this.value = params.value;
    }
    getIconClick(icon) {
        return icon.iconClick && icon.iconClick(this.params);
    }
    getTextClick(cell) {
        return cell.click && cell.click(this.params);
    }
    get getIcons() {
        return this.params.value.icons.map((icon) => (h("span", { class: `material-icons text-icon-md ${icon.iconClass}`, onClick: this.getIconClick(icon) }, icon.iconName)));
    }
    render() {
        const iconPosition = this.params.icon_position || 'before';
        return (h(Host, { key: '68e1527dfd0cf868505363f458381b5567b5b168', class: "flex items-center overflow-hidden" }, h("atui-tooltip", { key: '9e9d05c7da834210a90f495c2f14b086d88a1b6a', position: "right", is_visible: !!this.params.generateTooltip }, h("div", { key: '38189bbc3871b4caefd6e44f764af231064c8c2b', class: "flex items-center gap-8", slot: "tooltip-trigger", onClick: this.getTextClick(this.params.value) }, iconPosition === 'before' && this.getIcons, h("span", { key: '03695510b14d3a4ff7886ec0191ead96adcc32cc', class: "truncate" }, this.value.text.textValue), iconPosition === 'after' && this.getIcons), this.params.generateTooltip && (h("span", { key: 'b1fb57e5ff3717eae96a6026ee91184a999b9291', slot: "tooltip-content", class: `leading-normal` }, this.params.generateTooltip(this.params))))));
    }
    get el() { return this; }
}, [0, "atui-text-icon-cell", {
        "value": [32],
        "params": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-text-icon-cell", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-text-icon-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTextIconCell);
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiTextIconCell as A, defineCustomElement as d };
//# sourceMappingURL=p-BQ52rSut.js.map

//# sourceMappingURL=p-BQ52rSut.js.map