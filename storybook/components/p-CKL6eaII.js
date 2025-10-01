import { p as proxyCustomElement, H, h, c as Host } from './p-DCAHuMKA.js';

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
        return (h(Host, { key: '7cc40da22990221b15848aeba69f0bb45273f4e0', role: "menuitem", class: `outline-active-light hover:bg-surface-1 focus:bg-surface-1 flex flex-row items-center rounded outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-surface-1 !text-active-dark' : ''} ${this.has_border ? 'border-b' : ''}` }, h("i", { key: 'c988a2da0cf002dc34e817fc7b5f326c84207394', class: "material-icons text-light mr-8 ml-16 items-center text-sm", "data-name": "item-icon" }, this.icon), h("div", { key: 'f057f7c41784c86e5b3da88052f4550779dcb573', class: "flex flex-grow flex-col py-8" }, h("div", { key: '6118ef0bb0183ab1b56c9435db867a8e41a457c4', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: 'e00cc4e5cb43cc2e194faccdcd330a7aab3c260d', class: "text-body text-light mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: 'f9c31077480da787670be6eb12795f088e9843a3', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '31d9f1b3e27564f1e4ce311c18f65b82228f2624', class: "flex flex-row" }, this.item_title && (h("span", { key: '97f7154ee9515bc193a461d5cc22f046873de17b', "data-name": "item-title" }, `${this.item_title} `)), h("slot", { key: '1a3d66561854ad3e8bf3a3a808ae18507a10c494', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: '456a9f71b4b7ac2e422beac6089c40d03fa12cfb', class: `text-body font-normal ${this.is_selected ? 'text-active-dark' : 'text-med'}`, "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: '30a4803aa99a527fb075137995e5d76dc0fbfeea', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: '782048ef8510a82404e07307e61dd3eac2532fd8', class: "text-med inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: 'fa7bbe9bdcb04145ecb648ed1eb456b275185b4c' })));
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
//# sourceMappingURL=p-CKL6eaII.js.map

//# sourceMappingURL=p-CKL6eaII.js.map