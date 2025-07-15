'use strict';

var index = require('./index-BJDFmEHZ.js');

const AtuiListSelector = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
        this.atuiClickInfoButton = index.createEvent(this, "atuiClickInfoButton", 7);
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
    onClickInfoButton() {
        this.atuiClickInfoButton.emit();
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
                item.id === this.selected_item_id, onClick: () => this.onSelect(item), tabindex: "0", ref: (el) => this.listItemEls.push(el) }, item.badgeText && item.badgeTooltip && (index.h("atui-tooltip", { slot: "badge", position: "right" }, index.h("atui-badge", { class: "ml-4", slot: "tooltip-trigger", impact: "high", type: "info", label: item.badgeText }), index.h("span", { slot: "tooltip-content" }, item.badgeTooltip))), item.hasInfoButton && (index.h("button", { slot: "info", class: "sm", color: "primary", onClick: () => this.onClickInfoButton() }, index.h("i", { class: "material-icons" }, "help_outline"))))), index.h("span", { slot: "tooltip-content" }, item.tooltip))));
    }
    render() {
        return (index.h(index.Host, { key: '9a68eb4fc6eadcd6930033fb8b0afbe3b5469b63', onKeyDown: (event) => this.handleKeyDown(event) }, index.h("slot", { key: 'e866aba25ed4efb005112cb5961a3bb41508620a', name: "header" }), !!this.options.length && (index.h("nav", { key: 'bcc26c280e74090233b7e5bcb4f9af9ac23bcebf', class: "flex-fill overflow-visible pb-16" }, index.h("div", { key: '0482991a0ae2d7a839f5f1ec425886e1ba5fef17', class: "flex flex-col", role: "menu" }, this.getListItems))), index.h("slot", { key: 'd5016f6e7353fd006c67f4c218991b47438662d1' })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_list_selector = AtuiListSelector;
//# sourceMappingURL=atui-list-selector.entry.cjs.js.map

//# sourceMappingURL=atui-list-selector.cjs.entry.js.map