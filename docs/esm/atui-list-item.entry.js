import { r as registerInstance, h, H as Host } from './index-Cd7WF2gX.js';

const listItemVariants = {
    xs: 'min-h-16 text-sm',
    sm: 'min-h-[32px] text-sm',
    md: 'min-h-[40px] text-body',
    lg: 'min-h-[48px] text-body',
};
const AtuiListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Size of the list item.
         */
        this.size = 'sm';
        /**
         * Border below the list item.
         */
        this.border = true;
    }
    get sizeClasses() {
        return listItemVariants[this.size];
    }
    render() {
        return (h(Host, { key: '836f1b5ef206467f40cc14bc6a6a96313d226850', class: `flex flex-row items-center justify-between gap-16 ${this.sizeClasses} ${this.border ? 'border-b' : ''} rounded outline-none outline-0 outline-active-light hover:cursor-pointer hover:bg-surface-1 focus:bg-surface-1 focus:outline-2` }, h("div", { key: 'c89e57485c6b1c6b8444e36aa430c5b7eba49efc', class: "flex flex-grow flex-col" }, h("div", { key: '31b857c1940db9bb22e0333ea1dc8afd759a05af', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, this.icon && (h("span", { key: 'd4bbf2b403c7e4ab53f869eaac9b439d4d17115c', class: "material-icons items-center text-sm text-light" }, this.icon)), this.item_prefix && (h("span", { key: 'f3b6840f25aa1fd4ebd28fc921d8833796146e19', class: "mr-[4px] font-normal text-med" }, this.item_prefix)), h("span", { key: '4a4bffe6422882794caaced323451cc05a2baed7', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '508b94885f9aa25db9d5568d2081fc835035c7a1', class: "flex flex-row font-normal" }, h("span", { key: '1d7b135f399cf3cf12ebb1504a570d45681033c4', class: "mr-4" }, this.item_title), h("slot", { key: 'ff079d786be9ad9d82de1f3cab674a04ad4bd1fc', name: "badge" })), this.subtitle && (h("span", { key: '2d3ca2aa6a416fa7ef455866afdccdba90d9a04e', class: "inline text-sm font-normal text-med", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: 'a24f31318e6884064cc1c5659b48afb065e9bbc7', class: "flex flex-wrap items-end justify-end gap-8" }, h("slot", { key: '5fc7e0ab352fa0fec228fceaeccbf6b67c13c11d' }), this.content && (h("span", { key: '141e2bb5200d6ef218549d8f2d4dcdf983156ae9', "data-name": "content" }, this.content)))));
    }
};

export { AtuiListItem as atui_list_item };
//# sourceMappingURL=atui-list-item.entry.js.map

//# sourceMappingURL=atui-list-item.entry.js.map