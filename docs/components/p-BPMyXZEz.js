import { p as proxyCustomElement, H, h } from './p-kcU6cSzl.js';
import { d as defineCustomElement$1 } from './p-CYjfaOKk.js';

const AtuiFormLabelComponent = /*@__PURE__*/ proxyCustomElement(class AtuiFormLabelComponent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        var _a;
        return (h("div", { key: '46bf72f4ce88c307619f11760a864709ca8613ab', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (h("label", { key: '5832b00f23be6a6d8ac1b6acadaac55dc2d9f9f3', htmlFor: (_a = this.for) !== null && _a !== void 0 ? _a : undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: '4280f137a90d8b2684915c46a23eb9abfd3bcec3', class: "text-error" }, "*"))),
            this.info_text && (h("atui-tooltip", { key: '5f8912183a74a0facc7a5760589997db69ea8e77', position: "right" }, h("span", { key: 'c57cf79420b5fa8a8d354712d69bc632b4295b11', slot: "tooltip-trigger", class: "material-icons cursor-pointer !text-icon-sm text-light" }, "info_outline"), h("span", { key: '00d49070cd19d705b9a840ac7282b5800aaf3d8e', slot: "tooltip-content" }, this.info_text))),
        ]));
    }
}, [256, "atui-form-label", {
        "label": [1],
        "required": [4],
        "info_text": [1],
        "for": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-form-label", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-form-label":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiFormLabelComponent);
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiFormLabelComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-BPMyXZEz.js.map

//# sourceMappingURL=p-BPMyXZEz.js.map