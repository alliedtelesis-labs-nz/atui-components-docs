import { r as registerInstance, c as createEvent, h } from './index-C8uvvL0O.js';

const AtTreeComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiClick = createEvent(this, "atuiClick", 7);
        /**
         * Set the size of the tree button, default sm
         */
        this.size = 'sm';
        this.flattenedItemList = [];
        this.flattenedItemStyles = [];
        this.handleClick = (id) => {
            let clickedItem = null;
            const updateIsSelected = (items) => {
                const tempItems = [];
                items.forEach((item) => {
                    const tempItem = Object.assign({}, item);
                    if (item.id === id) {
                        tempItem.selected = !tempItem.selected;
                        clickedItem = tempItem;
                    }
                    if (item.children) {
                        tempItem.children = updateIsSelected(item.children);
                    }
                    tempItems.push(tempItem);
                });
                return tempItems;
            };
            this.item_list = updateIsSelected(this.item_list);
            this.flattenItemList(this.item_list);
            if (clickedItem) {
                this.atuiClick.emit(clickedItem);
            }
        };
        this.flattenItemList = (itemList) => {
            const tempItemList = [];
            const addToFlattenedAndCheckChildren = (items, layer) => {
                items.forEach((item) => {
                    const itemWithDepth = Object.assign(Object.assign({}, item), { depth: layer });
                    tempItemList.push(itemWithDepth);
                    if (item.selected && item.children && item.children.length) {
                        addToFlattenedAndCheckChildren(item.children, layer + 1);
                    }
                });
            };
            addToFlattenedAndCheckChildren(itemList, 0);
            this.flattenedItemList = tempItemList;
        };
    }
    componentWillRender() {
        if (this.item_list && this.item_list.length) {
            this.flattenItemList(this.item_list);
        }
    }
    render() {
        return (h("div", { key: '8077e353c3d7af1ed3231212c3d8a9e96355f737', class: "w-full" }, h("slot", { key: 'd32dfa06ae986fe51328b526eea289ec0c7ec4e7' }), this.flattenedItemList &&
            this.flattenedItemList.map((item, index) => (h("div", { key: index, class: `flex w-full` }, item.tooltip !== undefined ? (h("at-tooltip", { position: "right", class: "flex flex-grow items-start" }, h("at-tree-item", { class: "flex-grow", depth: item.depth, slot: "tooltip-trigger", onAtuiClick: () => this.handleClick(item.id), key: item.id, label: item.displayName, size: this.size, has_children: item.children &&
                    item.children.length > 0, selected: item.selected }, h("slot", { name: "item-content" })), h("span", null, item.tooltip))) : (h("at-tree-item", { depth: item.depth, style: {
                    paddingLeft: this.flattenedItemStyles[index] +
                        'px',
                }, onAtuiClick: () => this.handleClick(item.id), has_children: item.children &&
                    item.children.length > 0, key: item.id, label: item.displayName, size: this.size }, h("slot", { name: "item-content" }))))))));
    }
};

export { AtTreeComponent as at_tree };
//# sourceMappingURL=at-tree.entry.js.map

//# sourceMappingURL=at-tree.entry.js.map