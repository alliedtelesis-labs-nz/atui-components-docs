import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';
import { d as defineCustomElement$1 } from './p-BLBTk09G.js';

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
        return (h(Host, { key: '44660840d1aafcbfedd17f1c962c76d70ea8835c', class: "flex h-full items-center overflow-hidden leading-[100%]" }, this.imageSource && (h("atui-tooltip", { key: 'bdab6ea72f538da603a36a3062393f1edd50cd0e', is_visible: !!this.params.generateTooltip }, h("div", { key: 'f577fb34af23906b4c5e02486c5fc549f9cf54f5', class: "flex items-center" }, h("img", { key: 'ab1f40a3922c334924e5bee0efd8ef70e6c3a91a', src: this.imageSource, style: { height: '30px' } })), h("span", { key: '7cd18206e32f9d2cb09c00ad32c800657cc65105', slot: "tooltip-content" }, this.params.generateTooltip(this.params))))));
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
//# sourceMappingURL=p-CH-Ycb9D.js.map

//# sourceMappingURL=p-CH-Ycb9D.js.map