import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';
import { d as defineCustomElement$1 } from './p-BIS2bAMQ.js';

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
        return (h(Host, { key: '4ec67489ca3a326c8949b081eb13d1f847d413ac', class: "flex h-full items-center overflow-hidden leading-[100%]" }, this.imageSource && (h("atui-tooltip", { key: '84a498a738cb0e4a0915b6ceef842a838737ba46', is_visible: !!this.params.generateTooltip }, h("div", { key: '34b587ab9c2ae818c45b9d9ba612f7b55382bc34', class: "flex items-center" }, h("img", { key: '7a02c0a3c7cc7f0f19a6af1c9f925fffc1338d6f', src: this.imageSource, style: { height: '30px' } })), h("span", { key: '5ce6ab28714e7119eb77b56ae35e4346ec761e0f', slot: "tooltip-content" }, this.params.generateTooltip(this.params))))));
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
//# sourceMappingURL=p-Dl67lJI4.js.map

//# sourceMappingURL=p-Dl67lJI4.js.map