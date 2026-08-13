import { r as registerInstance, c as createEvent, h } from './index-IMi8cNQw.js';

const AtTreeComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiClick = createEvent(this, "atuiClick", 7);
    }
    /**
     * List of items to be displayed in the tree
     */
    item_list;
    /**
     * Set the size of the tree button, default sm
     */
    size = 'sm';
    /**
     * Emits when the button is clicked
     */
    atuiClick;
    flattenedItemList = [];
    handleClick = (id) => {
        let clickedItem = null;
        const updateIsSelected = (items) => {
            const tempItems = [];
            items.forEach((item) => {
                const tempItem = { ...item };
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
    flattenItemList = (itemList) => {
        const tempItemList = [];
        const addToFlattenedAndCheckChildren = (items, layer) => {
            items.forEach((item) => {
                const itemWithDepth = { ...item, depth: layer };
                tempItemList.push(itemWithDepth);
                if (item.selected && item.children && item.children.length) {
                    addToFlattenedAndCheckChildren(item.children, layer + 1);
                }
            });
        };
        addToFlattenedAndCheckChildren(itemList, 0);
        this.flattenedItemList = tempItemList;
    };
    componentWillRender() {
        if (this.item_list && this.item_list.length) {
            this.flattenItemList(this.item_list);
        }
    }
    render() {
        return (h("div", { key: 'b6dd6cd863a1f6f894e9cdbae17f5e3c5e7689d2', class: "w-full" }, h("slot", { key: '39a9d5cd0074ecaea8dd666c3c910acf36e5dd04' }), this.flattenedItemList &&
            this.flattenedItemList.map((item, index) => (h("div", { key: index, class: `flex w-full` }, item.tooltip !== undefined ? (h("at-tooltip", { position: "right", class: "block w-full" }, h("at-tree-item", { depth: item.depth, slot: "tooltip-trigger", onAtuiClick: () => this.handleClick(item.id), key: item.id, label: item.displayName, size: this.size, has_children: item.children &&
                    item.children.length > 0, selected: item.selected }, h("slot", { name: "item-content" })), h("span", null, item.tooltip))) : (h("at-tree-item", { depth: item.depth, onAtuiClick: () => this.handleClick(item.id), has_children: item.children &&
                    item.children.length > 0, key: item.id, label: item.displayName, size: this.size }, h("slot", { name: "item-content" }))))))));
    }
};

export { AtTreeComponent as at_tree };
