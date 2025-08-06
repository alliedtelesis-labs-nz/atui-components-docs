import { p as proxyCustomElement, H, d as createEvent, h } from './p-CaGsJoRH.js';
import { d as defineCustomElement$3 } from './p-D9Wtum9m.js';
import { d as defineCustomElement$2 } from './p-BK3KqhUH.js';

const AtuiTreeComponent = /*@__PURE__*/ proxyCustomElement(class AtuiTreeComponent extends H {
    constructor() {
        super();
        this.__registerHost();
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
        return (h("div", { key: 'a9d46558b1f1e53046fc2bcc775e0c5075a50732', class: "w-full" }, h("slot", { key: 'febf277c39a2b7408bd524feda66e81aaf53b2a4' }), this.flattenedItemList &&
            this.flattenedItemList.map((item, index) => (h("div", { key: index, class: `flex w-full` }, item.tooltip !== undefined ? (h("atui-tooltip", { position: "right", class: "flex flex-grow items-start" }, h("atui-tree-item", { class: "flex-grow", depth: item.depth, slot: "tooltip-trigger", onAtuiClick: () => this.handleClick(item.id), key: item.id, label: item.displayName, size: this.size, has_children: item.children &&
                    item.children.length > 0, selected: item.selected }, h("slot", { name: "item-content" })), h("span", { slot: "tooltip-content" }, item.tooltip))) : (h("atui-tree-item", { depth: item.depth, style: {
                    paddingLeft: this.flattenedItemStyles[index] +
                        'px',
                }, onAtuiClick: () => this.handleClick(item.id), has_children: item.children &&
                    item.children.length > 0, key: item.id, label: item.displayName, size: this.size }, h("slot", { name: "item-content" }))))))));
    }
}, [260, "atui-tree", {
        "item_list": [1040],
        "size": [1],
        "flattenedItemList": [32],
        "flattenedItemStyles": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-tree", "atui-tooltip", "atui-tree-item"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-tree":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTreeComponent);
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-tree-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtuiTree = AtuiTreeComponent;
const defineCustomElement = defineCustomElement$1;

export { AtuiTree, defineCustomElement };
//# sourceMappingURL=atui-tree.js.map

//# sourceMappingURL=atui-tree.js.map