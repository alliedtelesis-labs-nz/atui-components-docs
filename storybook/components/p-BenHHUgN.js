import { p as proxyCustomElement, H, h } from './p-CaGsJoRH.js';
import { d as defineCustomElement$1 } from './p-D9Wtum9m.js';

const AtuiFormLabelComponent = /*@__PURE__*/ proxyCustomElement(class AtuiFormLabelComponent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        var _a;
        return (h("div", { key: 'bcc4dfe305f44384713dc1594862c39392d98a9e', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (h("label", { key: '3a6bbb492697dd4c313d0d3768721c5446273389', htmlFor: (_a = this.for) !== null && _a !== void 0 ? _a : undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: '889253bed723ed0ca6fd16f9941e9fce8e82ce22', class: "text-error" }, "*"))),
            this.info_text && (h("atui-tooltip", { key: '31eeeb645d00c497a1fd5482217cc3a30c1c2646', position: "right" }, h("span", { key: '888f9b50a50e822471f1689507f2ad7314ee9d58', slot: "tooltip-trigger", class: "material-icons cursor-pointer !text-icon-sm text-light" }, "info_outline"), h("span", { key: 'd697f497964404119454cf9526f99a5e648b12f2', slot: "tooltip-content" }, this.info_text))),
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
//# sourceMappingURL=p-BenHHUgN.js.map

//# sourceMappingURL=p-BenHHUgN.js.map