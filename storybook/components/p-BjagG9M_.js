import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';

const AtuiAccordionTriggerComponent = /*@__PURE__*/ proxyCustomElement(class AtuiAccordionTriggerComponent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '1cde0d8240d62080a4e16aac903acf0477926dbb', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (h("span", { key: 'dfcc6b3ee376c3f26b2ad063fc901cd74b141363', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), h("slot", { key: '255f0a51daa96eac27f9e68292795614f9f1fc17' }), h("i", { key: '398249ce66aefaf7152002c139dec6e8e0800308', role: "presentation", "aria-hidden": "true", class: "material-icons text-md text-light group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")));
    }
}, [4, "atui-accordion-trigger", {
        "label": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-accordion-trigger"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-accordion-trigger":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiAccordionTriggerComponent);
            }
            break;
    } });
}

export { AtuiAccordionTriggerComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-BjagG9M_.js.map

//# sourceMappingURL=p-BjagG9M_.js.map