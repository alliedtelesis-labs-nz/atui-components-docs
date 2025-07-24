'use strict';

var index = require('./index-BAt2i-T2.js');

const AtuiListSelector = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
        this.atuiInfoButtonClick = index.createEvent(this, "atuiInfoButtonClick", 7);
        /**
         * List of items.
         */
        this.options = [];
        this.listItemEls = [];
    }
    onSelect(item) {
        this.selected_item_id = item.id;
        this.atuiChange.emit(item);
    }
    onClickInfoButton(event) {
        this.atuiInfoButtonClick.emit({
            originalEvent: event,
            componentType: 'atui-list-selector',
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
        return this.options.map((item) => (index.h("atui-tooltip", { position: "right", is_visible: item.tooltip !== undefined }, index.h("div", { slot: "tooltip-trigger" }, index.h("atui-list-selector-item", { item_id: item.id, item_title: item.title, subtitle: item.subtitle, icon: item.icon, item_prefix: item.prefix, has_border: this.has_border, is_selected: this.selected_item_id &&
                item.id === this.selected_item_id, onClick: () => this.onSelect(item), tabindex: "0", ref: (el) => this.listItemEls.push(el) }, item.badgeText && item.badgeTooltip && (index.h("atui-tooltip", { slot: "badge", position: "right" }, index.h("atui-badge", { class: "ml-4", slot: "tooltip-trigger", impact: "high", type: "info", label: item.badgeText }), index.h("span", { slot: "tooltip-content" }, item.badgeTooltip))), item.hasInfoButton && (index.h("button", { slot: "info", class: "sm", color: "primary", onClick: (event) => this.onClickInfoButton(event) }, index.h("i", { class: "material-icons" }, "help_outline"))))), index.h("span", { slot: "tooltip-content" }, item.tooltip))));
    }
    render() {
        return (index.h(index.Host, { key: 'e419bc7e2c633c81d95484263c5a9c553ef95bad', onKeyDown: (event) => this.handleKeyDown(event) }, index.h("slot", { key: 'e4040936ff92afa660488e31fb49015f5327e543', name: "header" }), !!this.options.length && (index.h("nav", { key: '3357d56b130b8273aab451e05a8ebdfe8e70a8e0', class: "flex-fill overflow-visible pb-16" }, index.h("div", { key: '98e53dcf07ca5afb6c0cbb5168bfb99c953bcfa3', class: "flex flex-col", role: "menu" }, this.getListItems))), index.h("slot", { key: '6d6cd9fb24e9f4852651f414b85753854b1f3f8f' })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_list_selector = AtuiListSelector;
//# sourceMappingURL=atui-list-selector.entry.cjs.js.map

//# sourceMappingURL=atui-list-selector.cjs.entry.js.map