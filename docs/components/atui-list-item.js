import { p as proxyCustomElement, H, h, c as Host } from './p-kcU6cSzl.js';

const listItemVariants = {
    xs: 'min-h-16 text-sm',
    sm: 'min-h-[32px] text-sm',
    md: 'min-h-[40px] text-body',
    lg: 'min-h-[48px] text-body',
};
const AtuiListItem$1 = /*@__PURE__*/ proxyCustomElement(class AtuiListItem extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Size of the list item.
         */
        this.size = 'sm';
        /**
         * Border below the list item.
         */
        this.border = true;
    }
    get sizeClasses() {
        return listItemVariants[this.size];
    }
    render() {
        return (h(Host, { key: '27eb03f47603bd75b617afc9e8478e45bdecaf6c', class: `flex flex-row items-center justify-between gap-16 ${this.sizeClasses} ${this.border ? 'border-b' : ''} rounded outline-none outline-0 outline-active-light hover:cursor-pointer hover:bg-surface-1 focus:bg-surface-1 focus:outline-2` }, h("div", { key: 'd0c5f2f7538b56b6990e60e7824ed28e56f59307', class: "flex flex-grow flex-col" }, h("div", { key: '3b6b39b1f2db19609418a8aec3763e9bdc0025fe', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, this.icon && (h("span", { key: '4cb28135fc21a032e0560a15a5ce30cbf82da9b7', class: "material-icons items-center text-sm text-light" }, this.icon)), this.item_prefix && (h("span", { key: '815587f7d505f0fb97cf9c469b12b3b3ba702780', class: "mr-[4px] font-normal text-med" }, this.item_prefix)), h("span", { key: '873c1427518ad4562472331d02b7de614645532c', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '95ae4cd22f63c479c4b36195b2a3a7ed1e5ab6b1', class: "flex flex-row font-normal" }, h("span", { key: '2b6efeb3cb9f3b7bd35906f82b966d5a433ec4a1', class: "mr-4" }, this.item_title), h("slot", { key: 'eca7d26882934f4e1b89c602240a2d1a7e54bb9b', name: "badge" })), this.subtitle && (h("span", { key: 'bc41602390407c8da4400107d9575b182796b430', class: "inline text-sm font-normal text-med", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: 'bc19110e843da62048c454c31ab150ac9441fbb8', class: "flex flex-wrap items-end justify-end gap-8" }, h("slot", { key: 'd41a64b8f38a3975c54b3f8eb8427b4342a8ddc2' }), this.content && (h("span", { key: '460945a1287f20ac140a9f0e5773052f65102094', "data-name": "content" }, this.content)))));
    }
}, [260, "atui-list-item", {
        "icon": [1],
        "item_prefix": [1],
        "item_title": [1],
        "subtitle": [1],
        "content": [1],
        "size": [1],
        "border": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-list-item"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-list-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiListItem$1);
            }
            break;
    } });
}

const AtuiListItem = AtuiListItem$1;
const defineCustomElement = defineCustomElement$1;

export { AtuiListItem, defineCustomElement };
//# sourceMappingURL=atui-list-item.js.map

//# sourceMappingURL=atui-list-item.js.map