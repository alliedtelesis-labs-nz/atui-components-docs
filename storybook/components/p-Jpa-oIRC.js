import { p as proxyCustomElement, H, h, c as Host } from './p-Cv5ME95Z.js';

const AtAccordionTriggerComponent = /*@__PURE__*/ proxyCustomElement(class AtAccordionTriggerComponent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '380b131a909d1dd565cbd2e7fd7558c970d39fa6', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (h("span", { key: '8178600d1af1963b3ccd3b65b80bd56a772142c5', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), h("slot", { key: 'de54125bd791a1a74caa35ad71d67296dc1c443c' }), h("i", { key: '644ba355705f5c18435fc04f55f8173747e87c7e', role: "presentation", "aria-hidden": "true", class: "material-icons text-md text-light group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")));
    }
}, [260, "at-accordion-trigger", {
        "label": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-accordion-trigger"];
    components.forEach(tagName => { switch (tagName) {
        case "at-accordion-trigger":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtAccordionTriggerComponent);
            }
            break;
    } });
}

export { AtAccordionTriggerComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-Jpa-oIRC.js.map

//# sourceMappingURL=p-Jpa-oIRC.js.map