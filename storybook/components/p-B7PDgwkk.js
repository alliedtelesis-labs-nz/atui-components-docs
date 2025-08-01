import { p as proxyCustomElement, H, h, c as Host } from './p-kcU6cSzl.js';
import { d as defineCustomElement$1 } from './p-B9oksuag.js';

const AtuiTextImageCell = /*@__PURE__*/ proxyCustomElement(class AtuiTextImageCell extends H {
    constructor() {
        super();
        this.__registerHost();
        this.text = '';
        this.imageHeight = 24;
        this.imagePosition = 'before';
    }
    init(params) {
        var _a, _b;
        this.params = params;
        this.imageHeight = (_a = this.params.imageHeight) !== null && _a !== void 0 ? _a : this.imageHeight;
        this.imageWidth = this.params.imageWidth;
        this.imageClass = this.params.imageClass;
        this.imagePosition = (_b = this.params.imagePosition) !== null && _b !== void 0 ? _b : 'before';
        this.updateTextAndImage();
    }
    refresh(params) {
        this.params = params;
        this.updateTextAndImage();
        return true;
    }
    updateTextAndImage() {
        var _a;
        this.text = this.params.text
            ? this.params.text(this.params.data)
            : ((_a = this.params.value) !== null && _a !== void 0 ? _a : '');
    }
    getGui() {
        return this.el;
    }
    get imageSource() {
        return this.params.imageSource(this.params.data);
    }
    render() {
        var _a, _b;
        return (h(Host, { key: '7b1880eda9f2b5a646719be2abfeccd3bdbb1416', class: "flex h-full items-center" }, h("atui-tooltip", { key: '7d7164768abef69ac18ec1b5a0b52a4d5428a421', position: "right", is_visible: !!((_a = this.params) === null || _a === void 0 ? void 0 : _a.generateTooltip) }, h("div", { key: 'e45aef851bca819abf7e97925557227cb01d227c', class: "flex items-center gap-8", slot: "tooltip-trigger" }, this.imagePosition === 'before' &&
            this.imageSource && (h("img", { key: 'd30e6492a9d51c88d4480e0e113f10d9ebc4286d', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" })), this.text && h("span", { key: 'f3fe1cb9911ffe31532e49194971def2e940fe9e', class: "truncate" }, this.text), this.imagePosition === 'after' && this.imageSource && (h("img", { key: '757d6154a928fc8b2469fb30493bb7d24a7551b7', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" }))), ((_b = this.params) === null || _b === void 0 ? void 0 : _b.generateTooltip) && (h("span", { key: '3bdc525c985509f8e07915348f17e0a4c174a26e', slot: "tooltip-content" }, this.params.generateTooltip(this.params))))));
    }
    get el() { return this; }
}, [256, "atui-text-image-cell", {
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
//# sourceMappingURL=p-B7PDgwkk.js.map

//# sourceMappingURL=p-B7PDgwkk.js.map