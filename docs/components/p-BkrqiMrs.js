import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';
import { d as defineCustomElement$1 } from './p-BIS2bAMQ.js';

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
        return (h(Host, { key: 'eabf7a7f8b95b50124d8cd565c14d4f490c7c7c2', class: "flex items-center overflow-hidden" }, h("atui-tooltip", { key: 'dba334e60fc2564d506fbb757c54b7da3f88be72', position: "right", is_visible: !!this.params.generateTooltip }, h("div", { key: '4a967271b4900066546703d27a564ac933c83e86', class: "flex items-center", slot: "tooltip-trigger" }, this.params.isImageAtFront && this.imageSource && (h("img", { key: 'd933a8d53a377f9f9594ce1749398d9e13f67da0', src: this.imageSource, class: "mr-2", style: { height: `${this.imageHeight}px` } })), h("span", { key: '49c7891b7592a0ab8f0eb20cb217840b9d618ea4', class: "truncate" }, this.text), !this.params.isImageAtFront && this.imageSource && (h("img", { key: 'd34782ffca592a8336aeff9b7f162a29941b9aeb', src: this.imageSource, class: "ml-2", style: { height: `${this.imageHeight}px` } }))), this.params.generateTooltip && (h("span", { key: 'd73abe20a19345c092c53ec5595f0d5b99ad434c', slot: "tooltip-content", class: `leading-normal` }, this.params.generateTooltip(this.params))))));
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
//# sourceMappingURL=p-BkrqiMrs.js.map

//# sourceMappingURL=p-BkrqiMrs.js.map