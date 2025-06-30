import { p as proxyCustomElement, H, h } from './p-DJD-7SVX.js';
import { d as defineCustomElement$1 } from './p-BIS2bAMQ.js';

const AtuiFormLabelComponent = /*@__PURE__*/ proxyCustomElement(class AtuiFormLabelComponent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        var _a;
        return (h("div", { key: 'bdf4ff18a98c5008722bfea3962cad3fd7eda26c', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (h("label", { key: '9e41dfcb632810723ca9e9ec6bedf17ec2710d42', htmlFor: (_a = this.for) !== null && _a !== void 0 ? _a : undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: '9ec2daeb611fee10bd28f9c8cbff69adf63309de', class: "text-error" }, "*"))),
            this.info_text && (h("atui-tooltip", { key: 'd133a6a0ce90b18430c7dbe146de4260fe7a8b8d', position: "right" }, h("span", { key: '01cc5cb5d254444536b4663bedf07bac50ca970c', slot: "tooltip-trigger", class: "material-icons cursor-pointer !text-icon-sm text-light" }, "info_outline"), h("span", { key: '3109c5d73e5de37d8abc503d51bf4093576325e3', slot: "tooltip-content" }, this.info_text))),
        ]));
    }
}, [0, "atui-form-label", {
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
//# sourceMappingURL=p-CEO3zNbx.js.map

//# sourceMappingURL=p-CEO3zNbx.js.map