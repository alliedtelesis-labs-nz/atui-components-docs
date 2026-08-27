'use strict';

var index = require('./index-Bo1AxtqW.js');

const AtListSelector = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
        this.atuiInfoButtonClick = index.createEvent(this, "atuiInfoButtonClick", 7);
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
    get el() { return index.getElement(this); }
    listItemEls = [];
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
    focusAndClickRelativeItem(relativePosition) {
        const indexOfActiveItem = this.listItemEls.indexOf(this.el.ownerDocument
            .activeElement);
        const nextActiveItem = this.listItemEls[(indexOfActiveItem +
            relativePosition +
            this.listItemEls.length) %
            this.listItemEls.length];
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
        return this.options.map((item) => (index.h("at-tooltip", { position: "right", disabled: !item.tooltip }, index.h("div", { slot: "tooltip-trigger" }, index.h("at-list-selector-item", { item_id: item.id, item_title: item.title, subtitle: item.subtitle, item_prefix: item.prefix, has_border: this.has_border, is_selected: this.selected_item_id &&
                item.id === this.selected_item_id, onClick: () => this.onSelect(item), tabindex: "0", ref: (el) => this.listItemEls.push(el) }, index.h("at-icon", { slot: "icon", name: item.icon }), item.badgeText && item.badgeTooltip && (index.h("at-tooltip", { slot: "badge", position: "right" }, index.h("at-badge", { class: "ml-4", slot: "tooltip-trigger", impact: "high", type: "info", label: item.badgeText }), index.h("span", null, item.badgeTooltip))), item.hasInfoButton && (index.h("at-button", { slot: "info", size: "sm", type: "secondaryText", onClick: (event) => this.onClickInfoButton(event) }, index.h("at-icon", { slot: "icon", name: "help" }))))), index.h("span", null, item.tooltip))));
    }
    render() {
        return (index.h(index.Host, { key: '879b999e4ea0fa0792579b7233b1e4326833f4d1', onKeyDown: (event) => this.handleKeyDown(event) }, index.h("slot", { key: '47b520cba372ee98edd0dfdc1c035281ffdb9874', name: "header" }), !!this.options.length && (index.h("nav", { key: 'f1ecf26fb27ff10fb2f8912b7be563eb0c6d83ea', class: "flex-fill overflow-visible pb-16" }, index.h("div", { key: 'c7530e2b7eda34a32fe3e10c06f49f5deff4eb5f', class: "flex flex-col", role: "menu" }, this.getListItems))), index.h("slot", { key: '4e8fc923ceb3ec495819dfd0c1cd4a91f7d645c2' })));
    }
};

exports.at_list_selector = AtListSelector;
