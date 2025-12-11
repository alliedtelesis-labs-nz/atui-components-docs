'use strict';

var index = require('./index-COiLLAKF.js');

const listItemVariants = {
    xs: 'min-h-16 text-sm',
    sm: 'min-h-[32px] text-sm',
    md: 'min-h-[40px] text-body',
    lg: 'min-h-[48px] text-body',
};
const AtListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Optional icon shown to the left of the list item - use mat-icon name.
     */
    icon;
    /**
     * Optional prefix.
     */
    item_prefix;
    /**
     * Title of the list item.
     */
    item_title;
    /**
     * Optional subtitle of the list item.
     */
    subtitle;
    /**
     * Content of the list item placed at the right of the item.
     */
    content;
    /**
     * Size of the list item.
     */
    size = 'sm';
    /**
     * Border below the list item.
     */
    border = true;
    get sizeClasses() {
        return listItemVariants[this.size];
    }
    render() {
        return (index.h(index.Host, { key: '72f5b96a80717b9f212f0fb92a7ba9cca9357530', class: `flex flex-row items-center justify-between gap-16 ${this.sizeClasses} ${this.border ? 'border-b' : ''} outline-active-light hover:bg-surface-1 focus:bg-surface-1 rounded outline-0 outline-none hover:cursor-pointer focus:outline-2` }, index.h("div", { key: '18f91117a65f2d081e3189e9233ccccc2d16b50e', class: "flex flex-grow flex-col" }, index.h("div", { key: '9bfacd10695d2f4b62017bc15ff6cc6139a487f9', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, this.icon && (index.h("span", { key: 'ba49d076649df7054d363854b501f3f564fcba94', class: "material-icons text-light items-center text-sm" }, this.icon)), this.item_prefix && (index.h("span", { key: '0d4e52d5c478e020f8a9897555f77c12936cc9a7', class: "text-med mr-[4px] font-normal" }, this.item_prefix)), index.h("span", { key: '02013d7396a6778088371b8814bce1ea699e94ed', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: 'e93add77b9948d6afb934245cc2b3eb7dc282f1e', class: "flex flex-row font-normal" }, index.h("span", { key: '1ab973857cbc55f1e228bf094419b15bf5fffc8f', class: "mr-4" }, this.item_title), index.h("slot", { key: '374e7676fae6aef9a247e51d0868103db197887d', name: "badge" })), this.subtitle && (index.h("span", { key: '5777bb15c9270fff8dab1a0ed3e3ab9f0e7b0006', class: "text-med inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: 'd4a93ed752ac835c60f5c530e75962167c422dd3', class: "flex flex-wrap items-end justify-end gap-8" }, index.h("slot", { key: '10cb362d06601744ebd97fdbb7196e87139a1780' }), this.content && (index.h("span", { key: '6040b82c67303436a405acf8b0fbd1f7c48397c3', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
//# sourceMappingURL=at-list-item.entry.cjs.js.map
