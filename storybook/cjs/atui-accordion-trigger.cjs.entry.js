'use strict';

var index = require('./index-DGivrgtr.js');

const AtuiAccordionTriggerComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '1cde0d8240d62080a4e16aac903acf0477926dbb', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (index.h("span", { key: 'dfcc6b3ee376c3f26b2ad063fc901cd74b141363', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), index.h("slot", { key: '255f0a51daa96eac27f9e68292795614f9f1fc17' }), index.h("i", { key: '398249ce66aefaf7152002c139dec6e8e0800308', role: "presentation", "aria-hidden": "true", class: "material-icons text-md text-light group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")));
    }
};

exports.atui_accordion_trigger = AtuiAccordionTriggerComponent;
//# sourceMappingURL=atui-accordion-trigger.entry.cjs.js.map

//# sourceMappingURL=atui-accordion-trigger.cjs.entry.js.map