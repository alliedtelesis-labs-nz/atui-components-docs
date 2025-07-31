import { p as proxyCustomElement, H, h, F as Fragment, c as Host } from './p-CIJrXZgf.js';
import { d as defineCustomElement$1 } from './p-b7uiw7OS.js';

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
        return (h(Fragment, null, this.params.icons().map((icon) => (h("atui-tooltip", { position: "right", is_visible: !!icon.tooltip }, h("div", { slot: "tooltip-trigger" }, h("i", { class: `material-icons mt-4 cursor-pointer text-icon-md ${icon.iconClass || ''}` }, icon.iconName)), icon.tooltip && (h("span", { slot: "tooltip-content", class: "leading-normal" }, icon.tooltip)))))));
    }
    render() {
        var _a;
        const iconPosition = ((_a = this.params) === null || _a === void 0 ? void 0 : _a.iconPosition) || 'before';
        return (h(Host, { key: 'bc8d32e3dd8d8f452b657ed406c0cac222e4ce48', class: "flex h-full items-center gap-4 overflow-hidden leading-normal" }, iconPosition === 'before' && this.renderIcons(), h("span", { key: 'dcc17cb2a261dedb11c9f7baf0fbd5d1d7d1dcca', class: "truncate" }, this.text), iconPosition === 'after' && this.renderIcons()));
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
//# sourceMappingURL=p-CmwxTvIh.js.map

//# sourceMappingURL=p-CmwxTvIh.js.map