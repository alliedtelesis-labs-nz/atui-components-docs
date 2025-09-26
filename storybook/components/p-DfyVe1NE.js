import { p as proxyCustomElement, H, h, F as Fragment, c as Host } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$1 } from './p-D-MOVsDh.js';

const AtTextIconCell = /*@__PURE__*/ proxyCustomElement(class AtTextIconCell extends H {
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
        return (h(Fragment, null, this.params.icons().map((icon) => (h("at-tooltip", { position: "right", disabled: !icon.tooltip }, h("div", { slot: "tooltip-trigger" }, h("i", { class: `material-icons text-icon-md mt-4 cursor-pointer ${icon.iconClass || ''}` }, icon.iconName)), icon.tooltip && (h("span", { class: "leading-normal" }, icon.tooltip)))))));
    }
    render() {
        var _a;
        const iconPosition = ((_a = this.params) === null || _a === void 0 ? void 0 : _a.iconPosition) || 'before';
        return (h(Host, { key: 'a6cae412d64540c5d9adc843e8a8f4e5c731b76b', class: "flex h-full items-center gap-4 overflow-hidden leading-normal" }, iconPosition === 'before' && this.renderIcons(), h("span", { key: '7bfd9b2663735eb43a6feff76bde9315aeb59ec3', class: "truncate" }, this.text), iconPosition === 'after' && this.renderIcons()));
    }
    get el() { return this; }
}, [256, "at-text-icon-cell", {
        "text": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-text-icon-cell", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-text-icon-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTextIconCell);
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtTextIconCell as A, defineCustomElement as d };
//# sourceMappingURL=p-DfyVe1NE.js.map

//# sourceMappingURL=p-DfyVe1NE.js.map