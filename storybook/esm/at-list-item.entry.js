import { r as registerInstance, h, H as Host } from './index-EP34iaAr.js';

const listItemVariants = {
    sm: 'py-4 text-sm',
    md: 'py-8 text-body',
    lg: 'py-[12px] text-body',
};
const AtListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'e415c7a94d3db5baa280d19936a41ab4a6743761', role: "listitem", tabIndex: 0, class: `flex items-center gap-3 px-4 ${this.sizeClasses} ${this.border ? 'border-border border-b border-solid' : ''}` }, h("div", { key: '780b48424407c4437a9c9b8d9860cd7fe6a84dae', class: "flex flex-grow flex-col" }, h("div", { key: '235dbdaa8d1dd3038abed9539ae7622054390416', class: `flex items-center justify-start gap-8 whitespace-nowrap` }, this.icon && (h("span", { key: '06e55a655cddadb5023c07b1ed24a789694fe62b', class: "material-icons text-light items-center text-sm" }, this.icon)), this.item_prefix && (h("span", { key: '6e93fb59d8f5d928c6ee261d2bb57ec273415a3b', class: "text-med mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: '39a3ed971afc3f72dc232c2ec2d31dc167091f20', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '886493a967125a5d70b3d31f61409d10878e0777', class: "flex flex-row font-normal" }, h("span", { key: 'f1f935a40ecd0e4f92aa46e7b102602a5b9b8349', class: "mr-4" }, this.item_title), h("slot", { key: '18528f3c5ea587e96412d7bbba9531a0c14bd40f', name: "title" })), this.subtitle && (h("span", { key: 'ddb5625bda65d9ff83eaf1a1ff387bb10cdc1d45', class: "text-med inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: 'f43455c961e83e8e6d45cb9d7865de51f6819b04', class: "flex flex-wrap items-end justify-end gap-8" }, h("slot", { key: '227f747fbc98acf16844abd71e8adf87b6cb837f' }), this.content && (h("span", { key: 'e542b8f14fbe8744df2b99577811ed3d81768b60', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
//# sourceMappingURL=at-list-item.entry.js.map
