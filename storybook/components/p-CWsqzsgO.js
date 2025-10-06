import { p as proxyCustomElement, H, h, c as Host } from './p-_-xuBOrs.js';

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
        return (h(Host, { key: '48012ff37a001f02cbc843b9e8d68503d6eccd65', role: "menuitem", class: `outline-active-light hover:bg-surface-1 focus:bg-surface-1 flex flex-row items-center rounded outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-surface-1 !text-active-dark' : ''} ${this.has_border ? 'border-b' : ''}` }, h("i", { key: '1384ad2a893129eaeb971f56ae6b9e2e5475c884', class: "material-icons text-light mr-8 ml-16 items-center text-sm", "data-name": "item-icon" }, this.icon), h("div", { key: 'a923521685bab648f9ca8b07df850faa09a87245', class: "flex flex-grow flex-col py-8" }, h("div", { key: '141f9ee2407b6cb93d5f1dbe5c6d476e654f7891', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: 'cec14dc67113277d7dd0d6d17d17946dabf5c81b', class: "text-body text-light mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: '2054039c1142db99cc7e5581758edb8f61a1a4f7', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '366f1d098656faf7d3b746f4b9eebba2e75862b1', class: "flex flex-row" }, this.item_title && (h("span", { key: 'e52c7844ba78d27a0f86571071e67d6362cd21fc', "data-name": "item-title" }, `${this.item_title} `)), h("slot", { key: 'a44521ba91ce4ae52d76cf7627114e112f45fb0b', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: '1a833646fe72a1d060fd6c2a97711b415420ec07', class: `text-body font-normal ${this.is_selected ? 'text-active-dark' : 'text-med'}`, "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: 'b468573589a1245dead3ee6794ad58024f765593', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: '8a81fbf899dd022a1293b2ef886dbd57e9bf4cf7', class: "text-med inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: '83a16d0f7027038ec34e7c08e71d1f8808d8fff8' })));
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
//# sourceMappingURL=p-CWsqzsgO.js.map

//# sourceMappingURL=p-CWsqzsgO.js.map