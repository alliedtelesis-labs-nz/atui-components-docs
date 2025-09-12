import { p as proxyCustomElement, H, h, c as Host } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$1 } from './p-BtsG-JMI.js';

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
        return (h(Host, { key: '79ff006e8236e67030bbcfd0d88f64be2db3a8ce', class: "flex h-full items-center" }, h("atui-tooltip", { key: 'f4af42359343f390386d53e99b224692525fd23d', position: "right", disabled: !((_a = this.params) === null || _a === void 0 ? void 0 : _a.generateTooltip) }, h("div", { key: 'e7b1090dd5493bd9d9b5ab41e16b040be61faae3', class: "flex items-center gap-8", slot: "tooltip-trigger" }, this.imagePosition === 'before' &&
            this.imageSource && (h("img", { key: 'd1f8fadadd6f90bc0887994976399890e019a6f1', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" })), this.text && h("span", { key: '7c6c4fc387ef81f18345588c26ac781fade1f7e8', class: "truncate" }, this.text), this.imagePosition === 'after' && this.imageSource && (h("img", { key: '3a59f8157d6e18f9c8a239a60b1c1ad335a0ce43', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" }))), ((_b = this.params) === null || _b === void 0 ? void 0 : _b.generateTooltip) && (h("span", { key: '06b37f8eb019bce47c942ab778727daab4a93d1a' }, this.params.generateTooltip(this.params))))));
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
//# sourceMappingURL=p-Tm1Ky9hJ.js.map

//# sourceMappingURL=p-Tm1Ky9hJ.js.map