import { p as proxyCustomElement, H, h, c as Host } from './p-CaGsJoRH.js';

const AtuiListSelectorItem = /*@__PURE__*/ proxyCustomElement(class AtuiListSelectorItem extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Border below the list item.
         */
        this.has_border = false;
    }
    render() {
        return (h(Host, { key: '82ea0c15dc7ce43ec5873ac4ab3f290d0b356022', role: "menuitem", class: `outline-active-light hover:bg-surface-1 focus:bg-surface-1 flex flex-row items-center rounded outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-surface-1 !text-active-dark' : ''} ${this.has_border ? 'border-b' : ''}` }, h("i", { key: '042ac29ec90609abca4f9de4b8c1b060256a1cfd', class: "material-icons text-light mr-8 ml-16 items-center text-sm", "data-name": "item-icon" }, this.icon), h("div", { key: 'b8bd37f1ac49da5ffc56c6679726235e0d7165fd', class: "flex flex-grow flex-col py-8" }, h("div", { key: '8f8da2c9b97768d92411aa7fb5d8f1a3cb9b5e7e', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: '73777b38fc976ad87a428a95330aaca0fd190a25', class: "text-body text-light mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: '590b8f037cd6f70b254f0279d8a661e921715a55', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '991a1159a8356a14390d2dd2a9353f557d4b6479', class: "flex flex-row" }, this.item_title && (h("span", { key: '637f1de277fcd8d5c1da9aec1044b44d1b763874', "data-name": "item-title" }, `${this.item_title} `)), h("slot", { key: '58d3f7c2e0923ba6efc2a53d38e9e30cb3e49744', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: 'f5bf04e75530e1a287a10f2ce28be6470fe266f7', class: `text-body font-normal ${this.is_selected ? 'text-active-dark' : 'text-med'}`, "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: 'c2e3a2fb0f62260470b65eecc891c3d8d6333180', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: '84a3f1d3fc865fb062d081efc2b17c201fba3d05', class: "text-med inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: '8bfa950dd0dda1f9b8fdc7d2c2b7fd4e4c3fd674' })));
    }
}, [260, "atui-list-selector-item", {
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
    const components = ["atui-list-selector-item"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-list-selector-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiListSelectorItem);
            }
            break;
    } });
}

export { AtuiListSelectorItem as A, defineCustomElement as d };
//# sourceMappingURL=p-BNtZ4qRm.js.map

//# sourceMappingURL=p-BNtZ4qRm.js.map