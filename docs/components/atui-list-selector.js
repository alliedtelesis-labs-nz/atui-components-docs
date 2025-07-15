import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-DDLUhBkV.js';
import { d as defineCustomElement$4 } from './p-DuzY8Lpl.js';
import { d as defineCustomElement$3 } from './p-D8_nzSZQ.js';
import { d as defineCustomElement$2 } from './p-IMVeGR0G.js';

const AtuiListSelector$1 = /*@__PURE__*/ proxyCustomElement(class AtuiListSelector extends H {
    constructor() {
        super();
        this.__registerHost();
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
    get el() { return this; }
}, [4, "atui-list-selector", {
        "options": [16],
        "selected_item_id": [1025],
        "has_border": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-list-selector", "atui-badge", "atui-list-selector-item", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-list-selector":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiListSelector$1);
            }
            break;
        case "atui-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-list-selector-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtuiListSelector = AtuiListSelector$1;
const defineCustomElement = defineCustomElement$1;

export { AtuiListSelector, defineCustomElement };
//# sourceMappingURL=atui-list-selector.js.map

//# sourceMappingURL=atui-list-selector.js.map