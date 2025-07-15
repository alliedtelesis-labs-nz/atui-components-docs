import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-8kq1vl9Q.js';

const AtuiListSelector = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
        this.atuiClickInfoButton = createEvent(this, "atuiClickInfoButton", 7);
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
        return this.options.map((item) => (h("atui-tooltip", { position: "right", is_visible: item.tooltip !== undefined }, h("div", { slot: "tooltip-trigger" }, h("atui-list-selector-item", { item_id: item.id, item_title: item.title, subtitle: item.subtitle, icon: item.icon, item_prefix: item.prefix, has_border: this.has_border, is_selected: this.selected_item_id &&
                item.id === this.selected_item_id, onClick: () => this.onSelect(item), tabindex: "0", ref: (el) => this.listItemEls.push(el) }, item.badgeText && item.badgeTooltip && (h("atui-tooltip", { slot: "badge", position: "right" }, h("atui-badge", { class: "ml-4", slot: "tooltip-trigger", impact: "high", type: "info", label: item.badgeText }), h("span", { slot: "tooltip-content" }, item.badgeTooltip))), item.hasInfoButton && (h("button", { slot: "info", class: "sm", color: "primary", onClick: () => this.onClickInfoButton() }, h("i", { class: "material-icons" }, "help_outline"))))), h("span", { slot: "tooltip-content" }, item.tooltip))));
    }
    render() {
        return (h(Host, { key: '9a68eb4fc6eadcd6930033fb8b0afbe3b5469b63', onKeyDown: (event) => this.handleKeyDown(event) }, h("slot", { key: 'e866aba25ed4efb005112cb5961a3bb41508620a', name: "header" }), !!this.options.length && (h("nav", { key: 'bcc26c280e74090233b7e5bcb4f9af9ac23bcebf', class: "flex-fill overflow-visible pb-16" }, h("div", { key: '0482991a0ae2d7a839f5f1ec425886e1ba5fef17', class: "flex flex-col", role: "menu" }, this.getListItems))), h("slot", { key: 'd5016f6e7353fd006c67f4c218991b47438662d1' })));
    }
    get el() { return getElement(this); }
};

export { AtuiListSelector as atui_list_selector };
//# sourceMappingURL=atui-list-selector.entry.js.map

//# sourceMappingURL=atui-list-selector.entry.js.map