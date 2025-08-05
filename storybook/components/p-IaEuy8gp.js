import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';
import { d as defineCustomElement$1 } from './p-BLBTk09G.js';

const AtuiTextImageCell = /*@__PURE__*/ proxyCustomElement(class AtuiTextImageCell extends H {
    constructor() {
        super();
        this.__registerHost();
        this.imageHeight = 20;
    }
    init(params) {
        this.params = params;
        this.imageSource = params.imageSource;
        this.imageHeight = params.imageHeight || this.imageHeight;
        this.text = params.value || params.text;
        if (params.getImageSource && params.data) {
            this.imageSource = params.getImageSource(params.data);
        }
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
        this.text = newValue;
    }
    render() {
        return (h(Host, { key: '43223d4a9ec266b8804db8a4a749bc13be2cafb2', class: "flex items-center overflow-hidden" }, h("atui-tooltip", { key: '85c7c2d6b8d917447a738a51418198e2459d1058', position: "right", is_visible: !!this.params.generateTooltip }, h("div", { key: 'c2797a0bf9a97c24bbe97cbe572c28884620f472', class: "flex items-center", slot: "tooltip-trigger" }, this.params.isImageAtFront && this.imageSource && (h("img", { key: '061aff5c86ded40e0e6a5e93de77b25767b3464e', src: this.imageSource, class: "mr-2", style: { height: `${this.imageHeight}px` } })), h("span", { key: 'c7bf25f46bde6bb62a075911f57a6b7bab035e55', class: "truncate" }, this.text), !this.params.isImageAtFront && this.imageSource && (h("img", { key: 'a82705ba6b8237bf111572c53012d4246f43bdad', src: this.imageSource, class: "ml-2", style: { height: `${this.imageHeight}px` } }))), this.params.generateTooltip && (h("span", { key: '9e2de3f7dacb85fb2d9b2b06b0e9ef96ab3427e3', slot: "tooltip-content", class: `leading-normal` }, this.params.generateTooltip(this.params))))));
    }
    get el() { return this; }
}, [0, "atui-text-image-cell", {
        "params": [32],
        "imageSource": [32],
        "imageHeight": [32],
        "text": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-text-image-cell", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-text-image-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTextImageCell);
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiTextImageCell as A, defineCustomElement as d };
//# sourceMappingURL=p-IaEuy8gp.js.map

//# sourceMappingURL=p-IaEuy8gp.js.map