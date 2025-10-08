import { p as proxyCustomElement, H, h } from './p-B9UDFE-Z.js';
import { d as defineCustomElement$1 } from './p-AQC7HRk_.js';

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
        return (h("div", { key: '7c43daf06c476eb7337e6e4444c183fcb1b5b105', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (h("label", { key: 'd13de59bbb0ba68f6c314e82f3b9bc0dfb54936e', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: '2624483e0e5343f0ccc7d5493646196335769872', class: "text-error" }, "*"))),
            this.info_text && (h("at-tooltip", { key: '96ab5f84b3ad4988ed125e41957eed91a35931e8', position: "right" }, h("span", { key: 'cc7eec120ef350ea8373c240d30c93efd8be52ad', slot: "tooltip-trigger", class: "material-icons !text-icon-sm text-light cursor-pointer" }, "info_outline"), h("span", { key: '843d4357be5a77e4416992987af21630dcf8a142' }, this.info_text))),
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
//# sourceMappingURL=p-DQErC-P7.js.map

//# sourceMappingURL=p-DQErC-P7.js.map