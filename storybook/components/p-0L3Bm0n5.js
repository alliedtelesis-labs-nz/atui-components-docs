import { p as proxyCustomElement, H, h } from './p-89eupKrN.js';
import { d as defineCustomElement$1 } from './p-BlmpD1px.js';

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
        return (h("div", { key: '46f2ac984700e680d451d1ca7ce3c9b6e6864917', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (h("label", { key: 'd1e9b91ac550ab6575f33ab03e8b516eea827359', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: '144e57b74ee8ae87ad75ae9769ac0d2b39d6bd5c', class: "text-error" }, "*"))),
            this.info_text && (h("at-tooltip", { key: 'f6da4f3d873f24247216d9595c859d29252d7e62', position: "right" }, h("span", { key: 'd905beaab6ff77e016984466717ee650e6face1d', slot: "tooltip-trigger", class: "material-icons !text-icon-sm text-light cursor-pointer" }, "info_outline"), h("span", { key: '7ca8889b2be5849c4ee7021f54750c3b20f8bb6f' }, this.info_text))),
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
//# sourceMappingURL=p-0L3Bm0n5.js.map

//# sourceMappingURL=p-0L3Bm0n5.js.map