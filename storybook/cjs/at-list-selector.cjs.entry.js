'use strict';

var index = require('./index-BRms7T38.js');

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
        return this.options.map((item) => (index.h("at-tooltip", { position: "right", disabled: !item.tooltip }, index.h("div", { slot: "tooltip-trigger" }, index.h("at-list-selector-item", { item_id: item.id, item_title: item.title, subtitle: item.subtitle, icon: item.icon, item_prefix: item.prefix, has_border: this.has_border, is_selected: this.selected_item_id &&
                item.id === this.selected_item_id, onClick: () => this.onSelect(item), tabindex: "0", ref: (el) => this.listItemEls.push(el) }, item.badgeText && item.badgeTooltip && (index.h("at-tooltip", { slot: "badge", position: "right" }, index.h("at-badge", { class: "ml-4", slot: "tooltip-trigger", impact: "high", type: "info", label: item.badgeText }), index.h("span", null, item.badgeTooltip))), item.hasInfoButton && (index.h("at-button", { slot: "info", size: "sm", type: "secondaryText", onClick: (event) => this.onClickInfoButton(event) }, index.h("at-icon", { slot: "icon", name: "help" }))))), index.h("span", null, item.tooltip))));
    }
    render() {
        return (index.h(index.Host, { key: 'd2f4cef909632a38c408dc080daebd3a32b897c7', onKeyDown: (event) => this.handleKeyDown(event) }, index.h("slot", { key: 'f0984dd95c0b943ac3857e109726590853c5c14b', name: "header" }), !!this.options.length && (index.h("nav", { key: '253d586d45b12df5bc8a81334631c727e2177d36', class: "flex-fill overflow-visible pb-16" }, index.h("div", { key: 'e0d39c7b1c802607c7593a7e13c47f22745e4987', class: "flex flex-col", role: "menu" }, this.getListItems))), index.h("slot", { key: '97e2bed79fe4ef358f83285a4f084119fdb5e809' })));
    }
};

exports.at_list_selector = AtListSelector;
