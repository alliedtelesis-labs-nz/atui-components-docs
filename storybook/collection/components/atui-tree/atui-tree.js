import { h } from "@stencil/core";
/**
 * @category Navigation
 * @description A tree component for displaying hierarchical data.
 */
/**
 * ### ```interface ItemNode```
 * ```
 *  id: string;
 *  displayName: string;
 *  children: ItemNode[];
 *  isSelected?: boolean;
 *  tooltip?: string;
 * ```
 */
export class AtuiTreeComponent {
    constructor() {
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
        return (h("div", { key: 'e549da8e1b1a690d4db9e5bb3cca814efdf80337', class: "w-full" }, h("slot", { key: '1337e7ada57a2601459b8f53dd39fb90adafa275' }), this.flattenedItemList &&
            this.flattenedItemList.map((item, index) => (h("div", { key: index, class: `flex w-full` }, item.tooltip !== undefined ? (h("atui-tooltip", { position: "right", class: "flex flex-grow items-start" }, h("atui-tree-item", { class: "flex-grow", depth: item.depth, slot: "tooltip-trigger", onAtuiClick: () => this.handleClick(item.id), key: item.id, label: item.displayName, size: this.size, has_children: item.children &&
                    item.children.length > 0, selected: item.selected }, h("slot", { name: "item-content" })), h("span", { slot: "tooltip-content" }, item.tooltip))) : (h("atui-tree-item", { depth: item.depth, style: {
                    paddingLeft: this.flattenedItemStyles[index] +
                        'px',
                }, onAtuiClick: () => this.handleClick(item.id), has_children: item.children &&
                    item.children.length > 0, key: item.id, label: item.displayName, size: this.size }, h("slot", { name: "item-content" }))))))));
    }
    static get is() { return "atui-tree"; }
    static get properties() {
        return {
            "item_list": {
                "type": "unknown",
                "attribute": "item_list",
                "mutable": true,
                "complexType": {
                    "original": "TreeNode[]",
                    "resolved": "TreeNode[]",
                    "references": {
                        "TreeNode": {
                            "location": "import",
                            "path": "../../types/tree",
                            "id": "src/types/tree.ts::TreeNode"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "List of items to be displayed in the tree"
                },
                "getter": false,
                "setter": false
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "ButtonSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "ButtonSize": {
                            "location": "import",
                            "path": "../atui-button/atui-button",
                            "id": "src/components/atui-button/atui-button.tsx::ButtonSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set the size of the tree button, default sm"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'sm'"
            }
        };
    }
    static get states() {
        return {
            "flattenedItemList": {},
            "flattenedItemStyles": {}
        };
    }
    static get events() {
        return [{
                "method": "atuiClick",
                "name": "atuiClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits when the button is clicked"
                },
                "complexType": {
                    "original": "TreeNode",
                    "resolved": "TreeNode",
                    "references": {
                        "TreeNode": {
                            "location": "import",
                            "path": "../../types/tree",
                            "id": "src/types/tree.ts::TreeNode"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=atui-tree.js.map
