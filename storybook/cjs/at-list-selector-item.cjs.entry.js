'use strict';

var index = require('./index-DK-3iCCu.js');

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
        return (index.h(index.Host, { key: '8846758e84bcc4444626237ce22c0d0e469aa1ae', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, index.h("span", { key: 'a0cbe28d79ab16a19308ec7ab746182298631251', class: "fill-light mr-8 ml-16" }, index.h("slot", { key: '88dd067e79170edb18a2e80b2bc56ed585a4af29', name: "icon" })), index.h("div", { key: '78d7813c8feecb0469d3b48acb7d312acfd2dfed', class: "flex flex-grow flex-col py-8" }, index.h("div", { key: '16324bfacaf6e5c751bdae815fcc26a32d0fedc5', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (index.h("span", { key: '6680b8c7d6f541e44440d0202c8f7ca649b95ba8', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), index.h("span", { key: '74254cd1831873f1030a5cf28020d01f01a9e615', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '9fc8cdf2d773452508a9fc1da1192773d3062e9e', class: "flex flex-row" }, this.item_title && (index.h("span", { key: 'f902f33e2deb2f1bfde62dd1dd238a0ebce23e86', "data-name": "item-title" }, `${this.item_title} `)), index.h("slot", { key: '4a2bac3d99e17862de5b3dabd7fb963a82c6d224', name: "badge" })), this.item_prefix && this.subtitle && (index.h("span", { key: '3c08754f957ff9ce391fe57ea788bbd35473e9be', class: "text-body text-secondary font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), index.h("slot", { key: '42a60b9a50dbe04d22083c032c9c71416686605d', name: "info" })), this.subtitle && !this.item_prefix && (index.h("span", { key: '20d239ce2af5a706681a6f527dcfd7bd87b22035', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), index.h("slot", { key: '71043258f0db554fa117332cdb8a074ac9d4283e' })));
    }
};

exports.at_list_selector_item = AtListSelectorItem;
