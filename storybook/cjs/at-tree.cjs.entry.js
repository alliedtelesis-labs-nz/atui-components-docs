'use strict';

var index = require('./index-LVEefvKk.js');

const AtTreeComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiClick = index.createEvent(this, "atuiClick", 7);
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
        return (index.h("div", { key: '8d36a054d61e01c6773f117b622b0ee21e0130d5', class: "w-full" }, index.h("slot", { key: 'ee7b14a6e4286bbf0c12bae3f2ea3dab08aba8e0' }), this.flattenedItemList &&
            this.flattenedItemList.map((item, index$1) => (index.h("div", { key: index$1, class: `flex w-full` }, item.tooltip !== undefined ? (index.h("at-tooltip", { position: "right", class: "flex flex-grow items-start" }, index.h("at-tree-item", { class: "flex-grow", depth: item.depth, slot: "tooltip-trigger", onAtuiClick: () => this.handleClick(item.id), key: item.id, label: item.displayName, size: this.size, has_children: item.children &&
                    item.children.length > 0, selected: item.selected }, index.h("slot", { name: "item-content" })), index.h("span", null, item.tooltip))) : (index.h("at-tree-item", { depth: item.depth, style: {
                    paddingLeft: this.flattenedItemStyles[index$1] +
                        'px',
                }, onAtuiClick: () => this.handleClick(item.id), has_children: item.children &&
                    item.children.length > 0, key: item.id, label: item.displayName, size: this.size }, index.h("slot", { name: "item-content" }))))))));
    }
};

exports.at_tree = AtTreeComponent;
//# sourceMappingURL=at-tree.entry.cjs.js.map
