import { r as registerInstance, c as createEvent, a as getElement, h } from './index-DTCxn2cp.js';

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
    get el() { return getElement(this); }
    focusedItemId;
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
        if (clickedItem) {
            this.atuiClick.emit(clickedItem);
        }
    };
    flattenVisibleItems(itemList) {
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
        return tempItemList;
    }
    get visibleItems() {
        return this.flattenVisibleItems(this.item_list ?? []);
    }
    tabStopId(items) {
        return items.some((item) => item.id === this.focusedItemId)
            ? this.focusedItemId
            : items[0]?.id;
    }
    focusItem(id) {
        this.focusedItemId = id;
        this.el
            .querySelector(`[data-name="tree"] at-tree-item[data-item-id="${CSS.escape(id)}"]`)
            ?.focus();
    }
    handleKeyDown(event) {
        const items = this.visibleItems;
        const index = items.findIndex((item) => item.id === this.focusedItemId);
        if (index === -1)
            return;
        const item = items[index];
        const hasChildren = !!item.children?.length;
        switch (event.key) {
            case 'ArrowDown':
                if (index < items.length - 1)
                    this.focusItem(items[index + 1].id);
                break;
            case 'ArrowUp':
                if (index > 0)
                    this.focusItem(items[index - 1].id);
                break;
            case 'Home':
                this.focusItem(items[0].id);
                break;
            case 'End':
                this.focusItem(items[items.length - 1].id);
                break;
            case 'ArrowRight':
                if (hasChildren && !item.selected) {
                    this.handleClick(item.id);
                }
                else if (hasChildren) {
                    this.focusItem(items[index + 1].id);
                }
                break;
            case 'ArrowLeft': {
                if (hasChildren && item.selected) {
                    this.handleClick(item.id);
                    break;
                }
                const parent = items
                    .slice(0, index)
                    .reverse()
                    .find((candidate) => candidate.depth === item.depth - 1);
                if (parent)
                    this.focusItem(parent.id);
                break;
            }
            default:
                return;
        }
        event.preventDefault();
    }
    renderItem(item, isTabStop, isTooltipTrigger) {
        return (h("at-tree-item", { "data-item-id": item.id, slot: isTooltipTrigger ? 'tooltip-trigger' : undefined, depth: item.depth, label: item.displayName, size: this.size, has_children: item.children && item.children.length > 0, selected: item.selected,
            // The attribute, not tabIndex: Stencil skips a property write that matches
            // the element's current value, and an unfocusable element already reads -1.
            tabindex: isTabStop ? 0 : -1, onAtuiClick: () => this.handleClick(item.id), onFocus: () => (this.focusedItemId = item.id) }));
    }
    render() {
        const items = this.visibleItems;
        const tabStopId = this.tabStopId(items);
        return (h("div", { key: '87a8fde78bdec32ee4b0a5f6a509512a3c1bbb05', class: "w-full" }, h("slot", { key: '6901dce2540dbcf031fc1701f6a01c63bd31e736' }), h("div", { key: 'c89d5098336ea0f5ffc576f563dfa94349c4e598', role: "tree", "data-name": "tree", onKeyDown: (event) => this.handleKeyDown(event) }, items.map((item) => (h("div", { key: item.id, role: "none", class: "flex w-full" }, item.tooltip !== undefined ? (h("at-tooltip", { position: "right", class: "block w-full" }, this.renderItem(item, item.id === tabStopId, true), h("span", null, item.tooltip))) : (this.renderItem(item, item.id === tabStopId, false))))))));
    }
};

export { AtTreeComponent as at_tree };
