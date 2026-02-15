import { r as registerInstance, h, H as Host } from './index-jvbUuQtg.js';

const listItemVariants = {
    xs: 'min-h-16 text-sm',
    sm: 'min-h-[32px] text-sm',
    md: 'min-h-[40px] text-body',
    lg: 'min-h-[48px] text-body',
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
        return (h(Host, { key: 'c216f28e384123a74047d0972010c086cd7d32aa', role: "listitem", tabIndex: 0, class: "hover:bg-surface-1 flex items-center gap-3 px-4 py-3" }, h("div", { key: '12cf485674777a3987e78a1f3de9341059f96097', class: "flex flex-grow flex-col" }, h("div", { key: '8d777e99a1b9a62810ecb13ed80c2ae821138c0a', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, this.icon && (h("span", { key: '2111d3d2a55f4fcf82901718f6b3507d91e9d2e2', class: "material-icons text-light items-center text-sm" }, this.icon)), this.item_prefix && (h("span", { key: 'b576ee8e19a008a196f0e716b3f95d94850c9043', class: "text-med mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: '723d627817520aa4824855afa4e34d023e1d7849', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'd4e95769766364b5407908f62af0661f617c18ef', class: "flex flex-row font-normal" }, h("span", { key: 'e0f2bffe9dbeae333b1680197a99f513fa42c525', class: "mr-4" }, this.item_title), h("slot", { key: '7c4d65d53b23bb495cd3e05f955ff72e664ce517', name: "title" })), this.subtitle && (h("span", { key: '26e81f21eab37376e56dec1c94594bb7153ce396', class: "text-med inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: '16d04e7040b67a08e19fb3f4e8837f82a9f57ebb', class: "flex flex-wrap items-end justify-end gap-8" }, h("slot", { key: '6fa08d13ca31c1fa1a4d181ded9621def0ea3d23' }), this.content && (h("span", { key: '6b8187b66a3f9e80c76bda1c862d6c1973e35eb8', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
