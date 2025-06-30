import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';
import { d as defineCustomElement$1 } from './p-BIS2bAMQ.js';

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
        return (h(Host, { key: '5e39c8cfe5a91bc24f74986787d774488bf82086', class: "flex h-full items-center leading-[100%]" }, h("atui-tooltip", { key: '6c0a83e5f7026b1eecde5936d9baa754b97601ee', position: "right", is_visible: !!this.params.generateTooltip }, h("div", { key: '140379a435a4ff397b0afad5e1c994c012af5dac', slot: "tooltip-trigger", style: this.containerStyles, onClick: () => this.params.click(this.params), "data-present": this.dataPresent }), this.params.generateTooltip && (h("span", { key: '0d6cafe3777e0f4b134738806f2d3dc5027420e5', slot: "tooltip-content" }, this.params.generateTooltip(this.params))))));
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
//# sourceMappingURL=p-BbGPURi7.js.map

//# sourceMappingURL=p-BbGPURi7.js.map