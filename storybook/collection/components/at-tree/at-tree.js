import { h } from "@stencil/core";
/**
 * @category Navigation
 * @description A tree component for displaying hierarchical data.
 * @slot - Use this slot to add custom elements before the tree navigation.
 * @slot item-content - Use this slot to add custom content inside each tree item.
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
export class AtTreeComponent {
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
        return (h("div", { key: 'f4443a6e9ca39983c4e3a1bfdacc7bfa76952fa0', class: "w-full" }, h("slot", { key: '44256a95ffabe2ec5ca8b57184a8301fd4e47fd8' }), this.flattenedItemList &&
            this.flattenedItemList.map((item, index) => (h("div", { key: index, class: `flex w-full` }, item.tooltip !== undefined ? (h("at-tooltip", { position: "right", class: "flex flex-grow items-start" }, h("at-tree-item", { class: "flex-grow", depth: item.depth, slot: "tooltip-trigger", onAtuiClick: () => this.handleClick(item.id), key: item.id, label: item.displayName, size: this.size, has_children: item.children &&
                    item.children.length > 0, selected: item.selected }, h("slot", { name: "item-content" })), h("span", null, item.tooltip))) : (h("at-tree-item", { depth: item.depth, style: {
                    paddingLeft: this.flattenedItemStyles[index] +
                        'px',
                }, onAtuiClick: () => this.handleClick(item.id), has_children: item.children &&
                    item.children.length > 0, key: item.id, label: item.displayName, size: this.size }, h("slot", { name: "item-content" }))))))));
    }
    static get is() { return "at-tree"; }
    static get properties() {
        return {
            "item_list": {
                "type": "unknown",
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
                "mutable": false,
                "complexType": {
                    "original": "ButtonSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "ButtonSize": {
                            "location": "import",
                            "path": "../at-button/at-button",
                            "id": "src/components/at-button/at-button.tsx::ButtonSize"
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
                "attribute": "size",
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
//# sourceMappingURL=at-tree.js.map
