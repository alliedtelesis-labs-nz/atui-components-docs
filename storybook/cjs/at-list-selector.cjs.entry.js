'use strict';

var index = require('./index-DK-3iCCu.js');

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
        return (index.h(index.Host, { key: '6d9acc56511912a3c5990e60ef6804e077139b18', onKeyDown: (event) => this.handleKeyDown(event) }, index.h("slot", { key: 'c09aa984479c2a47fa81df6b84fd71d779953f07', name: "header" }), !!this.options.length && (index.h("nav", { key: 'f911b1cb132e50a877d130f1c11ea81db234fc4a', class: "flex-fill overflow-visible pb-16" }, index.h("div", { key: 'a89ccd0814d637bea3ba79de89bc2cb77969a822', class: "flex flex-col", role: "menu" }, this.getListItems))), index.h("slot", { key: 'ed420b60bcbac7dbba24b28ba2c9dc90a36a31df' })));
    }
};

exports.at_list_selector = AtListSelector;
