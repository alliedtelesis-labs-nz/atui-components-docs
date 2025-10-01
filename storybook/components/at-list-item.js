import { p as proxyCustomElement, H, h, c as Host } from './p-_-xuBOrs.js';

const listItemVariants = {
    xs: 'min-h-16 text-sm',
    sm: 'min-h-[32px] text-sm',
    md: 'min-h-[40px] text-body',
    lg: 'min-h-[48px] text-body',
};
const AtListItem$1 = /*@__PURE__*/ proxyCustomElement(class AtListItem extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
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
        return (h(Host, { key: '75a0ed13e905df2c5af6a940909af3c4eed079b7', class: `flex flex-row items-center justify-between gap-16 ${this.sizeClasses} ${this.border ? 'border-b' : ''} outline-active-light hover:bg-surface-1 focus:bg-surface-1 rounded outline-0 outline-none hover:cursor-pointer focus:outline-2` }, h("div", { key: '2766ff45a56604dc358a7b3ae870744970d37936', class: "flex flex-grow flex-col" }, h("div", { key: '6898c09d40bbb7a0e1ddf40cbf0b610c4277d1b4', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, this.icon && (h("span", { key: '2d28d271754b5a8ddb4345167a4b7de53df84e5f', class: "material-icons text-light items-center text-sm" }, this.icon)), this.item_prefix && (h("span", { key: '39805ca0e314ede48d58ac829e26a1bd83b0f10d', class: "text-med mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: '262497f98cea93e4231bbb39e989d3af02874020', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '6f685cd30cbbf42398c76d0604750363c00379a5', class: "flex flex-row font-normal" }, h("span", { key: 'f3e240e80af38bfff8deef04c7ea4d443b2f7e09', class: "mr-4" }, this.item_title), h("slot", { key: '6ada1dd26df1ea5e6d83683b5d513551078f12bc', name: "badge" })), this.subtitle && (h("span", { key: 'eb16535d3fa8b5b48f33aed6413ad61438388639', class: "text-med inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: 'f11ade86fd311021dab679089c5f1290da87460e', class: "flex flex-wrap items-end justify-end gap-8" }, h("slot", { key: '626b2ba06372a6295db13322b4c64f20dcd91d28' }), this.content && (h("span", { key: '168d1738b153e33ae081191ccf7ff5684b97eb44', "data-name": "content" }, this.content)))));
    }
}, [260, "at-list-item", {
        "icon": [1],
        "item_prefix": [1],
        "item_title": [1],
        "subtitle": [1],
        "content": [1],
        "size": [1],
        "border": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-list-item"];
    components.forEach(tagName => { switch (tagName) {
        case "at-list-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtListItem$1);
            }
            break;
    } });
}

const AtListItem = AtListItem$1;
const defineCustomElement = defineCustomElement$1;

export { AtListItem, defineCustomElement };
//# sourceMappingURL=at-list-item.js.map

//# sourceMappingURL=at-list-item.js.map