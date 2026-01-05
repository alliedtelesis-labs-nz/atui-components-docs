import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';

const AtListSelectorItem = /*@__PURE__*/ proxyCustomElement(class AtListSelectorItem extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    /**
     * Id of the list item
     */
    item_id;
    /**
     * Title of the list item.
     */
    item_title;
    /**
     * Optional subtitle of the list item.
     */
    subtitle;
    /**
     * Optional icon shown to the left of the list item - use mat-icon name.
     */
    icon;
    /**
     * Optional prefix.
     */
    item_prefix;
    /**
     * Border below the list item.
     */
    has_border = false;
    /**
     * Visual indication of the selected item.
     */
    is_selected;
    render() {
        return (h(Host, { key: 'cfe7a5c182d4592ed2d5baa8db19bd5c2cd93951', role: "menuitem", class: `outline-active-light hover:bg-surface-1 focus:bg-surface-1 flex flex-row items-center rounded outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-surface-1 !text-active-dark' : ''} ${this.has_border ? 'border-b' : ''}` }, h("i", { key: '3188e20b06f0af7fa6dc9878153b904f5de973d2', class: "material-icons text-light mr-8 ml-16 items-center text-sm", "data-name": "item-icon" }, this.icon), h("div", { key: '1459a263b60de46e57f02fbd0b80f2c473c91baa', class: "flex flex-grow flex-col py-8" }, h("div", { key: '7be461aadc616f200a5f637306d11c1b37ab1f70', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: 'cde4b2d33bed1fb98625f6f64ec523cf596e5322', class: "text-body text-light mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: '93ad1d53b0fc45c38d1d03bb6762c05cc66aee54', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '64aecbb7490b2b3680ad48e1a7915314eb3c09aa', class: "flex flex-row" }, this.item_title && (h("span", { key: 'a909acbdbe2737e4e23367699b3714ab5d66e643', "data-name": "item-title" }, `${this.item_title} `)), h("slot", { key: 'ab3f2b7a98b8308b340399c30faeb2ff7a172749', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: '5754bceb76c89015107ef41f31789041c08b53a6', class: `text-body font-normal ${this.is_selected ? 'text-active-dark' : 'text-med'}`, "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: 'd8329d9504f8030bceadd8f5de5cc5f95926c7a8', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: '2884df072931b3d0e04f6b75ea787d9e4198f449', class: "text-med inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: '11efbe96bb98c821eb5cb892949cc31d988789e2' })));
    }
}, [260, "at-list-selector-item", {
        "item_id": [1],
        "item_title": [1],
        "subtitle": [1],
        "icon": [1],
        "item_prefix": [1],
        "has_border": [4],
        "is_selected": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-list-selector-item"];
    components.forEach(tagName => { switch (tagName) {
        case "at-list-selector-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtListSelectorItem);
            }
            break;
    } });
}

export { AtListSelectorItem as A, defineCustomElement as d };
//# sourceMappingURL=p-CXiuAj1d.js.map

//# sourceMappingURL=p-CXiuAj1d.js.map