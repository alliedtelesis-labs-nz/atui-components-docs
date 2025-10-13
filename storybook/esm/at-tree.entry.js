import { r as registerInstance, c as createEvent, h } from './index-EP34iaAr.js';

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
    flattenedItemStyles = [];
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
        return (h("div", { key: '18705ea035ca6ff091b021269f077b31e4d7bed6', class: "w-full" }, h("slot", { key: 'a3cd012004d619067d8281f072fc3505a716beff' }), this.flattenedItemList &&
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
