import { p as proxyCustomElement, H, h } from './p-89eupKrN.js';
import { d as defineCustomElement$1 } from './p-B8lZLFeC.js';

const AtFormLabelComponent = /*@__PURE__*/ proxyCustomElement(class AtFormLabelComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    /**
     * Label that appears before the info icon.
     */
    label;
    /**
     * When true, there will be a red star on the label.
     */
    required;
    /**
     * The text to be contained in the tooltip.
     */
    info_text;
    /**
     * Placed in the 'for' attribute on the label element
     */
    for;
    render() {
        return (h("div", { key: 'e01090c68771ffed22245a13690edc8f48fcb5c9', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (h("label", { key: 'c252d4b23f41d33fdcb287ea8060546ecd261c34', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: 'b773a79d3e5089ef447617830bf9253f37d12cec', class: "text-error" }, "*"))),
            this.info_text && (h("at-tooltip", { key: 'f20cc801f79759efa3fe554a4f0b21dd18f76f71', position: "right" }, h("span", { key: '71adaa0747cdc948d52294f51d32fb77909244da', slot: "tooltip-trigger", class: "material-icons !text-icon-sm text-light cursor-pointer" }, "info_outline"), h("span", { key: '926a6b15c7905f61e34ce6791d9986dc84a2c1a7' }, this.info_text))),
        ]));
    }
}, [256, "at-form-label", {
        "label": [1],
        "required": [4],
        "info_text": [1],
        "for": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-form-label", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-form-label":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtFormLabelComponent);
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtFormLabelComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-CIL9MUFC.js.map

//# sourceMappingURL=p-CIL9MUFC.js.map