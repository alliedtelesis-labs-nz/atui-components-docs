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
        return (h(Host, { key: '742f54cb91c84ec75193e789a6fe5da765be6ee4', role: "menuitem", class: `outline-active-light hover:bg-surface-1 focus:bg-surface-1 flex flex-row items-center rounded outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-surface-1 !text-active-dark' : ''} ${this.has_border ? 'border-b' : ''}` }, h("i", { key: '0228f05409e2c04f0783aaa33b1f60cd1db41e3b', class: "material-icons text-light mr-8 ml-16 items-center text-sm", "data-name": "item-icon" }, this.icon), h("div", { key: 'b724343cd09d3ce3ec2a0839f4f1d4e03a9f432a', class: "flex flex-grow flex-col py-8" }, h("div", { key: '85fa3b4be20f52f96a11e5be778bd5c5852b042c', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: 'bdd26faebf97b43088ee5ce5daccea1e800d562d', class: "text-body text-light mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: '18f6b04baa5975a9cbb688fd763db95f0842b08c', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '84629fc9648b4d8943795a95df2d60180c95ca05', class: "flex flex-row" }, this.item_title && (h("span", { key: 'dbb676b4a333581708162955265e5820ac0b3278', "data-name": "item-title" }, `${this.item_title} `)), h("slot", { key: 'df465b0c59988866d4b990be904c6a098e29c74a', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: 'b76e9528555718de6051a3b8a07e0b7d02594636', class: `text-body font-normal ${this.is_selected ? 'text-active-dark' : 'text-med'}`, "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: '5b1c02e383b217cd2d19dab6c6775f2e00337374', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: '621f2e64aa49641835f8ac149d9d55b971123929', class: "text-med inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: '37d7f38a502d6e4de1380e24a1ceb2371bcb8390' })));
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
//# sourceMappingURL=p-DaUiz_hB.js.map

//# sourceMappingURL=p-DaUiz_hB.js.map