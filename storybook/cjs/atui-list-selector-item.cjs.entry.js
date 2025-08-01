'use strict';

var index = require('./index-DSZ-ppzm.js');

const AtuiListSelectorItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Border below the list item.
         */
        this.has_border = false;
    }
    render() {
        return (index.h(index.Host, { key: '82ea0c15dc7ce43ec5873ac4ab3f290d0b356022', role: "menuitem", class: `flex flex-row items-center rounded outline-none outline-0 outline-active-light hover:cursor-pointer hover:bg-surface-1 focus:bg-surface-1 focus:outline-2 ${this.is_selected ? 'bg-surface-1 !text-active-dark' : ''} ${this.has_border ? 'border-b' : ''}` }, index.h("i", { key: '042ac29ec90609abca4f9de4b8c1b060256a1cfd', class: "material-icons ml-16 mr-8 items-center text-sm text-light", "data-name": "item-icon" }, this.icon), index.h("div", { key: 'b8bd37f1ac49da5ffc56c6679726235e0d7165fd', class: "flex flex-grow flex-col py-8" }, index.h("div", { key: '8f8da2c9b97768d92411aa7fb5d8f1a3cb9b5e7e', class: "flex items-center whitespace-nowrap text-body font-medium" }, this.item_prefix && (index.h("span", { key: '73777b38fc976ad87a428a95330aaca0fd190a25', class: "mr-[16px] text-body font-normal text-light", "data-name": "item-prefix" }, this.item_prefix)), index.h("span", { key: '590b8f037cd6f70b254f0279d8a661e921715a55', class: `flex flex-grow truncate pr-8 text-body font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '991a1159a8356a14390d2dd2a9353f557d4b6479', class: "flex flex-row" }, this.item_title && (index.h("span", { key: '637f1de277fcd8d5c1da9aec1044b44d1b763874', "data-name": "item-title" }, `${this.item_title} `)), index.h("slot", { key: '58d3f7c2e0923ba6efc2a53d38e9e30cb3e49744', name: "badge" })), this.item_prefix && this.subtitle && (index.h("span", { key: 'f5bf04e75530e1a287a10f2ce28be6470fe266f7', class: `text-body font-normal ${this.is_selected ? 'text-active-dark' : 'text-med'}`, "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), index.h("slot", { key: 'c2e3a2fb0f62260470b65eecc891c3d8d6333180', name: "info" })), this.subtitle && !this.item_prefix && (index.h("span", { key: '84a3f1d3fc865fb062d081efc2b17c201fba3d05', class: "inline text-sm font-normal text-med", "data-name": "item-subtitle" }, this.subtitle))), index.h("slot", { key: '8bfa950dd0dda1f9b8fdc7d2c2b7fd4e4c3fd674' })));
    }
};

exports.atui_list_selector_item = AtuiListSelectorItem;
//# sourceMappingURL=atui-list-selector-item.entry.cjs.js.map

//# sourceMappingURL=atui-list-selector-item.cjs.entry.js.map