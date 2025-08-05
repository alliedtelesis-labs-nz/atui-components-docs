import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';
import { d as defineCustomElement$1 } from './p-BLBTk09G.js';

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
        return (h(Host, { key: '6b19412e636f1334171dc0430969b20199b5d9d1', class: "flex h-full items-center leading-[100%]" }, h("atui-tooltip", { key: 'c7da97d5d0e8e1d5b30b14bd970a4444e178b2f1', position: "right", is_visible: !!this.params.generateTooltip }, h("div", { key: 'b3b34ba1115f9e48ab1fabb4f21511f5a8ff8e3a', slot: "tooltip-trigger", style: this.containerStyles, onClick: () => this.params.click(this.params), "data-present": this.dataPresent }), this.params.generateTooltip && (h("span", { key: '47e76d488c52c2619c9870d8af0864c5c6c911f1', slot: "tooltip-content" }, this.params.generateTooltip(this.params))))));
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
//# sourceMappingURL=p-DFR0kxvN.js.map

//# sourceMappingURL=p-DFR0kxvN.js.map