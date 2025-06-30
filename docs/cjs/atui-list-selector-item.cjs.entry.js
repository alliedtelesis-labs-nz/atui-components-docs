'use strict';

var index = require('./index-DGivrgtr.js');

const AtuiListSelectorItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Border below the list item.
         */
        this.has_border = false;
    }
    render() {
        return (index.h(index.Host, { key: '79f9f0d2811f30ba88c77b2e70846093b4807c21', role: "menuitem", class: `flex flex-row items-center rounded outline-none outline-0 outline-active-light hover:cursor-pointer hover:bg-surface-1 focus:bg-surface-1 focus:outline-2 ${this.is_selected ? 'bg-surface-1 !text-active-dark' : ''} ${this.has_border ? 'border-b' : ''}` }, index.h("i", { key: 'b85b9e26fa2ef0d3c49ec09a98e47a43e070dec8', class: "material-icons ml-16 mr-8 items-center text-sm text-light", "data-name": "item-icon" }, this.icon), index.h("div", { key: '8e1f2a056cce7fbb898b4433d8a37cdf21e7d831', class: "flex flex-grow flex-col py-8" }, index.h("div", { key: 'c7b8f86ddcef9eb071e0b0de7a54e482e87af1a8', class: "flex items-center whitespace-nowrap text-body font-medium" }, this.item_prefix && (index.h("span", { key: '2f2b711cae93c0fe8b9dda51d65afb35e89d0db3', class: "mr-[16px] text-body font-normal text-light", "data-name": "item-prefix" }, this.item_prefix)), index.h("span", { key: 'ca8cad5cf6c42aa7d1dd6503ee3cbe9674384d86', class: `flex flex-grow truncate pr-8 text-body font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: 'adf0db4e1b9bad6f681e52aa6ef14c4d5098ff56', class: "flex flex-row" }, this.item_title && (index.h("span", { key: '5efbe8802320d72b7b877493af0c233a402fd498', "data-name": "item-title" }, `${this.item_title} `)), index.h("slot", { key: '806a8cf1435761eed45839ddf48618d13e7e3f5f', name: "badge" })), this.item_prefix && this.subtitle && (index.h("span", { key: '62b9dfec6a38597f17015a8385d517c969e80930', class: `text-body font-normal ${this.is_selected ? 'text-active-dark' : 'text-med'}`, "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), index.h("slot", { key: '64590672f2385f2491c268fa96f47367f0278601', name: "info" })), this.subtitle && !this.item_prefix && (index.h("span", { key: '066bc4944876f4ed3535fc035d9b3b8b1c342a3d', class: "inline text-sm font-normal text-med", "data-name": "item-subtitle" }, this.subtitle))), index.h("slot", { key: 'bb873f99b69c1ae1cc685c8012051139f23359fc' })));
    }
};

exports.atui_list_selector_item = AtuiListSelectorItem;
//# sourceMappingURL=atui-list-selector-item.entry.cjs.js.map

//# sourceMappingURL=atui-list-selector-item.cjs.entry.js.map