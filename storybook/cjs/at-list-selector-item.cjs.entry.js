'use strict';

var index = require('./index-V7Urjg2R.js');

const AtListSelectorItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '416d3822837be183579fccb52df88a811f5801d7', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, index.h("span", { key: '80fa1b0870772e30acc10e89003ed7e55acada45', class: "mr-8 ml-16" }, index.h("slot", { key: '1293a8fe88647a6fa94db5efe248595ca8eb264a', name: "icon" })), index.h("div", { key: 'aa3d318b2ece743faf319c87727323d136f5a4ec', class: "flex min-w-0 flex-grow flex-col py-8" }, index.h("div", { key: 'bf5faed9a4a7f3ffeb2794ce2fc9c68344af4ac5', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (index.h("span", { key: 'ece088cd635892f17762d064fa14799f7d565822', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), index.h("span", { key: '843dd84b3c532c4bbc18cdfb48000230871592f8', class: `text-body flex min-w-0 flex-grow overflow-hidden pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '578e2715471fa1c978c48f6b54a35bfb4b2b1626', class: "flex min-w-0 flex-row" }, this.item_title && (index.h("span", { key: '9a1ea0253d55f9a3f92e28014c09b69c86ce370d', "data-name": "item-title", class: "line-clamp-2 min-w-0 flex-1 break-words whitespace-normal" }, `${this.item_title} `)), index.h("slot", { key: 'ee626754e7e2b91dbf29ea5d5b3250db77df12f2', name: "badge" })), this.item_prefix && this.subtitle && (index.h("span", { key: '825d6cf4370253159d74ddb0a2497d92f3920bd2', class: "text-body text-secondary overflow-hidden font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), index.h("slot", { key: '503bbafc9b5dfc9a21d4871c3a228cc9d13f1134', name: "info" })), this.subtitle && !this.item_prefix && (index.h("span", { key: '4a4c3db2ffe959d708477a8b3ca0ed1f4ce22d75', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), index.h("slot", { key: '646b56c59bc01bf60198171eaedc28b64f4188b2' })));
    }
};

exports.at_list_selector_item = AtListSelectorItem;
