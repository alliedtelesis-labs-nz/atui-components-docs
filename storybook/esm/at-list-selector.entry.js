import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-BQ4XN8sR.js';

const AtListSelector = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
        this.atuiInfoButtonClick = createEvent(this, "atuiInfoButtonClick", 7);
    }
    /**
     * List of items.
     */
    options = [];
    /**
     * The selected item.
     */
    selected_item_id;
    /**
     * Whether each item has a bottom border.
     */
    has_border;
    /**
     * Emits an event when the selected item is changed, the `event.detail` is the ListSelectorItem
     */
    atuiChange;
    /**
     * Emits when event when the info button of an item is clicked
     */
    atuiInfoButtonClick;
    get el() { return getElement(this); }
    onSelect(item) {
        this.selected_item_id = item.id;
        this.atuiChange.emit(item);
    }
    onClickInfoButton(event) {
        this.atuiInfoButtonClick.emit({
            originalEvent: event,
            componentType: 'at-list-selector',
        });
    }
    getListItemElements() {
        return Array.from(this.el.querySelectorAll('at-list-selector-item'));
    }
    focusAndClickRelativeItem(relativePosition) {
        const itemEls = this.getListItemElements();
        if (!itemEls.length)
            return;
        const indexOfActiveItem = itemEls.indexOf(this.el.ownerDocument
            .activeElement);
        const nextActiveItem = itemEls[(indexOfActiveItem + relativePosition + itemEls.length) %
            itemEls.length];
        nextActiveItem.click();
        nextActiveItem.focus();
    }
    handleKeyDown(event) {
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
            event.preventDefault();
            this.focusAndClickRelativeItem(1);
        }
        else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
            event.preventDefault();
            this.focusAndClickRelativeItem(-1);
        }
    }
    get getListItems() {
        return this.options.map((item) => (h("at-tooltip", { position: "right", disabled: !item.tooltip }, h("div", { slot: "tooltip-trigger" }, h("at-list-selector-item", { item_id: item.id, item_title: item.title, subtitle: item.subtitle, item_prefix: item.prefix, has_border: this.has_border, is_selected: this.selected_item_id &&
                item.id === this.selected_item_id, onClick: () => this.onSelect(item), tabindex: "0" }, h("at-icon", { slot: "icon", name: item.icon }), item.badgeText && item.badgeTooltip && (h("at-tooltip", { slot: "badge", position: "right" }, h("at-badge", { class: "ml-4", slot: "tooltip-trigger", impact: "high", type: "info", label: item.badgeText }), h("span", null, item.badgeTooltip))), item.hasInfoButton && (h("at-button", { slot: "info", size: "sm", type: "secondaryText", onClick: (event) => this.onClickInfoButton(event) }, h("at-icon", { slot: "icon", name: "help" }))))), h("span", null, item.tooltip))));
    }
    render() {
        return (h(Host, { key: '45ddc373b6677a98c239035f992fbba4bb9c1307', onKeyDown: (event) => this.handleKeyDown(event) }, h("slot", { key: '4ed8834393603580b8c6d8bdcee89d4827affb61', name: "header" }), !!this.options.length && (h("nav", { key: 'afdf12dc2e4f7c935506599897f8ec3fbefa5446', class: "flex-fill overflow-visible pb-16" }, h("div", { key: 'b3bc90cc2bef0f0a7787a22c24ed9ae5242599a0', class: "flex flex-col", role: "menu" }, this.getListItems))), h("slot", { key: '5b6be3666d226faee71aed851b2edf84a330f6ee' })));
    }
};

export { AtListSelector as at_list_selector };
