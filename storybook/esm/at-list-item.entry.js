import { r as registerInstance, h, H as Host } from './index-p5TDLQHl.js';

// Vertical padding only — the container (e.g. `at-card`, which already applies
// 16px of content padding) owns the horizontal inset, so rows sit flush with the
// container's title and other content instead of being double-indented.
const listItemVariants = {
    xs: 'min-h-16 text-sm py-4',
    sm: 'min-h-[32px] text-sm py-4',
    md: 'min-h-[40px] text-body py-4',
    lg: 'min-h-[48px] text-body py-4',
};
const AtListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
     * Applied styling for hover background color and cursor.
     */
    selectable = false;
    get sizeClasses() {
        return listItemVariants[this.size];
    }
    render() {
        return (h(Host, { key: '0bab05a1109172508a20b44a62da93d0c5f76de1', role: "listitem", tabIndex: this.selectable ? 0 : undefined, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b`, "data-name": "list-item" }, h("div", { key: '7c5c801402478622862ff4a0119eed2efad68924', class: "flex flex-grow flex-col", "data-name": "list-item-details" }, h("div", { key: 'a9d2bb024daa24d920695e9e6d3db2799bf8fe62', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: '2f356321853de1d98edce4f2e4f18d1b2c499317', class: "fill-light" }, h("slot", { key: '5b6bdc4f88c6dac0e232e4db2a2fe312b90ab3d2', name: "icon" })), this.item_prefix && (h("span", { key: 'e8f924267b0c2f65753b77b0cba9d63e3930571a', class: "text-secondary mr-[4px] font-normal", "data-name": "prefix" }, this.item_prefix)), h("span", { key: '46c888b2d334b59918127f0a98f2db697ffc88dc', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '32f15b9d1ac182f0bc85d29d0616e03e8ea7417b', class: "flex flex-row font-normal" }, h("span", { key: '01bb1272296472d07892a2fa0d174923d0b6ecb5', class: "mr-4", "data-name": "title" }, this.item_title), h("slot", { key: '1999569b7f41c819635a9c5a2861f08f93ef98f4', name: "title" })), this.subtitle && (h("span", { key: '4636444b58dbc34bd78528524d8bd16d01c50dee', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: '1d3a472b8b77a16fbe4abe19ea92702eec30189f', class: "flex flex-wrap items-end justify-end gap-8 text-right", "data-name": "list-item-content" }, h("slot", { key: '8cdc1c0b51e0d64bbebffab659cf7c62afea4f7f' }), this.content && (h("span", { key: '953237dc39278685471aa2f527ee69b4e1cfeae7', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
