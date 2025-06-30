'use strict';

var index = require('./index-DGivrgtr.js');

const AtuiTreeComponent = class {
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
        return (index.h("div", { key: '7aea7f7773a6278d5073e3c7e13a9452307f609e', class: "w-full" }, index.h("slot", { key: '5fbbf7ecc86b0de9c125a163dc10b912cc29d8ce' }), this.flattenedItemList &&
            this.flattenedItemList.map((item, index$1) => (index.h("div", { key: index$1, class: `flex w-full` }, item.tooltip !== undefined ? (index.h("atui-tooltip", { position: "right", class: "flex flex-grow items-start" }, index.h("atui-tree-item", { class: "flex-grow", depth: item.depth, slot: "tooltip-trigger", onAtuiClick: () => this.handleClick(item.id), key: item.id, label: item.displayName, size: this.size, has_children: item.children &&
                    item.children.length > 0, selected: item.selected }, index.h("slot", { name: "item-content" })), index.h("span", { slot: "tooltip-content" }, item.tooltip))) : (index.h("atui-tree-item", { depth: item.depth, style: {
                    paddingLeft: this.flattenedItemStyles[index$1] +
                        'px',
                }, onAtuiClick: () => this.handleClick(item.id), has_children: item.children &&
                    item.children.length > 0, key: item.id, label: item.displayName, size: this.size }, index.h("slot", { name: "item-content" }))))))));
    }
};

exports.atui_tree = AtuiTreeComponent;
//# sourceMappingURL=atui-tree.entry.cjs.js.map

//# sourceMappingURL=atui-tree.cjs.entry.js.map