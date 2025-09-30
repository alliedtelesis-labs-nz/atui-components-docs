import { p as proxyCustomElement, H, h } from './p-Bx9nFool.js';
import { d as defineCustomElement$1 } from './p-CDDohbWp.js';

const AtFormLabelComponent = /*@__PURE__*/ proxyCustomElement(class AtFormLabelComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    render() {
        var _a;
        return (h("div", { key: 'e52a5a37130898e8537efeea0d5bc6b041fd426b', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (h("label", { key: '7c0dc564ab386bb31cf5dc79c5b741b8b7e19864', htmlFor: (_a = this.for) !== null && _a !== void 0 ? _a : undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: 'aba209d4d38d4954bb3edc9773cb0211019e08fb', class: "text-error" }, "*"))),
            this.info_text && (h("at-tooltip", { key: '84a13a0b082af880513ec632864012e6b2256f2d', position: "right" }, h("span", { key: '2b19e12fb91e1c09fe731f3bc7e7307f0dad61f4', slot: "tooltip-trigger", class: "material-icons !text-icon-sm text-light cursor-pointer" }, "info_outline"), h("span", { key: '817587626ab1406bc6c6b321f54f1e2fb2cb323e' }, this.info_text))),
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
//# sourceMappingURL=p-C5bGvK_v.js.map

//# sourceMappingURL=p-C5bGvK_v.js.map