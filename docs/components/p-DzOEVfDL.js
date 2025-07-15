import { p as proxyCustomElement, H, h, c as Host } from './p-DDLUhBkV.js';
import { d as defineCustomElement$1 } from './p-IMVeGR0G.js';

const AtuiImageCell = /*@__PURE__*/ proxyCustomElement(class AtuiImageCell extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    init(params) {
        this.params = params;
        this.imageSource = params.imageSource;
        this.getImageSource = params.getImageSource;
        if (params.getImageSource) {
            this.imageSource = params.getImageSource(params.data);
        }
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params.data);
        return true;
    }
    updateCell(newValue) {
        this.params.data = newValue;
    }
    render() {
        return (h(Host, { key: '76265637532ba8efe9666769e49c781adc6c9c4f', class: "flex h-full items-center overflow-hidden leading-[100%]" }, this.imageSource && (h("atui-tooltip", { key: '028c052e0d0259ac5e46eea9b186f0c587d3c05d', is_visible: !!this.params.generateTooltip }, h("div", { key: '500016612ec8970d9e1a56d0a398ac8aa59f2968', class: "flex items-center" }, h("img", { key: '0e7e115b4ef24900b6eb6c758bb766d2c22878ce', src: this.imageSource, style: { height: '30px' } })), h("span", { key: '0182ceaaf9f024a676cfeb9dc30607f1b66d635e', slot: "tooltip-content" }, this.params.generateTooltip(this.params))))));
    }
    get el() { return this; }
}, [0, "atui-image-cell", {
        "params": [32],
        "imageSource": [32],
        "getImageSource": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-image-cell", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-image-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiImageCell);
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiImageCell as A, defineCustomElement as d };
//# sourceMappingURL=p-DzOEVfDL.js.map

//# sourceMappingURL=p-DzOEVfDL.js.map