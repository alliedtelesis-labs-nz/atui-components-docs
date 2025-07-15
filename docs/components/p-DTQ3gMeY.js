import { p as proxyCustomElement, H, h, c as Host } from './p-DDLUhBkV.js';
import { d as defineCustomElement$1 } from './p-IMVeGR0G.js';

const AtuiColorStatusCell = /*@__PURE__*/ proxyCustomElement(class AtuiColorStatusCell extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    init(params) {
        const { color, dataPresent, containerStyles } = params;
        this.dataPresent = dataPresent;
        this.params = params;
        this.containerStyles = Object.assign({ 'background-color': color, 'height': '100%', 'width': '100%', 'cursor': 'pointer' }, containerStyles);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params.color);
        return true;
    }
    updateCell(newValue) {
        this.params.color = newValue;
    }
    render() {
        return (h(Host, { key: 'f86e7195306ac6cd987bf286e3d6bccf71c8be13', class: "flex h-full items-center leading-[100%]" }, h("atui-tooltip", { key: '474fafe6157fabc1cf119f32097fe7f970c75ad2', position: "right", is_visible: !!this.params.generateTooltip }, h("div", { key: '4c55bbefea4bb32245c44f3904086d6ba08d4fb4', slot: "tooltip-trigger", style: this.containerStyles, onClick: () => this.params.click(this.params), "data-present": this.dataPresent }), this.params.generateTooltip && (h("span", { key: '330dbb3be781145a3614f17aa98789ed90e89d3e', slot: "tooltip-content" }, this.params.generateTooltip(this.params))))));
    }
    get el() { return this; }
}, [0, "atui-color-status-cell", {
        "params": [32],
        "containerStyles": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-color-status-cell", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-color-status-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiColorStatusCell);
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiColorStatusCell as A, defineCustomElement as d };
//# sourceMappingURL=p-DTQ3gMeY.js.map

//# sourceMappingURL=p-DTQ3gMeY.js.map