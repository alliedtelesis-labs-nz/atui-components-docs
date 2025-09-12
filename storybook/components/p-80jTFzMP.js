import { p as proxyCustomElement, H, h, F as Fragment, c as Host } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$1 } from './p-BtsG-JMI.js';

const AtuiTextIconCell = /*@__PURE__*/ proxyCustomElement(class AtuiTextIconCell extends H {
    constructor() {
        super();
        this.__registerHost();
        this.text = '';
    }
    update(params) {
        var _a;
        this.params = params;
        if (params.text) {
            this.text = params.text(params.data);
        }
        else {
            this.text = ((_a = params.value) === null || _a === void 0 ? void 0 : _a.toString()) || '';
        }
    }
    init(params) {
        this.update(params);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.update(params);
        return true;
    }
    renderIcons() {
        return (h(Fragment, null, this.params.icons().map((icon) => (h("atui-tooltip", { position: "right", disabled: !icon.tooltip }, h("div", { slot: "tooltip-trigger" }, h("i", { class: `material-icons text-icon-md mt-4 cursor-pointer ${icon.iconClass || ''}` }, icon.iconName)), icon.tooltip && (h("span", { class: "leading-normal" }, icon.tooltip)))))));
    }
    render() {
        var _a;
        const iconPosition = ((_a = this.params) === null || _a === void 0 ? void 0 : _a.iconPosition) || 'before';
        return (h(Host, { key: '5a8d2b4356cc6da0b6b9238dfde40e455eec4f1f', class: "flex h-full items-center gap-4 overflow-hidden leading-normal" }, iconPosition === 'before' && this.renderIcons(), h("span", { key: '9c26e4d069d0d3d72e7d7b932a64975212ce26ad', class: "truncate" }, this.text), iconPosition === 'after' && this.renderIcons()));
    }
    get el() { return this; }
}, [256, "atui-text-icon-cell", {
        "text": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-text-icon-cell", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-text-icon-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTextIconCell);
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiTextIconCell as A, defineCustomElement as d };
//# sourceMappingURL=p-80jTFzMP.js.map

//# sourceMappingURL=p-80jTFzMP.js.map