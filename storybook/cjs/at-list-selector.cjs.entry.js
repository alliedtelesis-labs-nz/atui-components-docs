'use strict';

var index = require('./index-COiLLAKF.js');

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
                item.id === this.selected_item_id, onClick: () => this.onSelect(item), tabindex: "0", ref: (el) => this.listItemEls.push(el) }, item.badgeText && item.badgeTooltip && (index.h("at-tooltip", { slot: "badge", position: "right" }, index.h("at-badge", { class: "ml-4", slot: "tooltip-trigger", impact: "high", type: "info", label: item.badgeText }), index.h("span", null, item.badgeTooltip))), item.hasInfoButton && (index.h("button", { slot: "info", class: "sm", color: "primary", onClick: (event) => this.onClickInfoButton(event) }, index.h("i", { class: "material-icons" }, "help_outline"))))), index.h("span", null, item.tooltip))));
    }
    render() {
        return (index.h(index.Host, { key: '11e9e6fa22f06e5dd608f1666e4a41d0577f5829', onKeyDown: (event) => this.handleKeyDown(event) }, index.h("slot", { key: 'a266aaddec545b73a03193341dfe9c8576b397cb', name: "header" }), !!this.options.length && (index.h("nav", { key: 'fc3be9007eac89addc2c3cb2c7463f547d12ff29', class: "flex-fill overflow-visible pb-16" }, index.h("div", { key: '2d5bac993ab4afbb7853d94c7e280a584cf2abad', class: "flex flex-col", role: "menu" }, this.getListItems))), index.h("slot", { key: 'b4cb126e704e41818ee02713bf3d0e7cbfc97703' })));
    }
};

exports.at_list_selector = AtListSelector;
//# sourceMappingURL=at-list-selector.entry.cjs.js.map
