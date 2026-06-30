import { r as registerInstance, h, H as Host } from './index-CBaYZWr2.js';

const AtListSelectorItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '6fe88964391eb225e65120604984a2bc1a2d0b18', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, h("span", { key: '2297947d7ce84296d90dd873ffa8d79b22a9ffe4', class: "fill-light mr-8 ml-16" }, h("slot", { key: 'd6e5d3b8607b682d65511f8f9acca688d0e21932', name: "icon" })), h("div", { key: 'c410384dd375d5dc535b142724547c4ec785e8d8', class: "flex flex-grow flex-col py-8" }, h("div", { key: 'a576bc57bbdf655eccd3f051bb55cf99045b6ef2', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: 'b52cdd5fe0f94dc24fc0bbdc5a1c3fb6476a4c1c', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: '3cb42ffaa857e3e75863758fbd62e33fd8d4aadc', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '5826d082c0c8651b9dfd4a677a6631848df39ab9', class: "flex flex-row" }, this.item_title && (h("span", { key: '76b89c22dc6f2cc81ff0209907416f50314bafc2', "data-name": "item-title" }, `${this.item_title} `)), h("slot", { key: '6ed4c3133e8bfeeb9cad60cc9eb8153b61fd72f3', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: '3ab2159183d61de83fd6dcb6721c54e1fca4962f', class: "text-body text-secondary font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: 'd566a0e0cdcebcff0037e487d5e997f573ee60c0', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: 'de87b28ae0d01509bd67e1cfe0f7a432aa157b51', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: '77f2ac30be1ca23028776f25dc55745f2914ebaa' })));
    }
};

export { AtListSelectorItem as at_list_selector_item };
