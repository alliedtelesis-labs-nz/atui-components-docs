import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-CIJrXZgf.js';
import { d as defineCustomElement$4 } from './p-ZLP3JFl_.js';
import { d as defineCustomElement$3 } from './p-4_wQ5txg.js';
import { d as defineCustomElement$2 } from './p-b7uiw7OS.js';

const AtuiListSelector$1 = /*@__PURE__*/ proxyCustomElement(class AtuiListSelector extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiChange = createEvent(this, "atuiChange", 7);
        this.atuiInfoButtonClick = createEvent(this, "atuiInfoButtonClick", 7);
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
        return this.options.map((item) => (h("atui-tooltip", { position: "right", is_visible: item.tooltip !== undefined }, h("div", { slot: "tooltip-trigger" }, h("atui-list-selector-item", { item_id: item.id, item_title: item.title, subtitle: item.subtitle, icon: item.icon, item_prefix: item.prefix, has_border: this.has_border, is_selected: this.selected_item_id &&
                item.id === this.selected_item_id, onClick: () => this.onSelect(item), tabindex: "0", ref: (el) => this.listItemEls.push(el) }, item.badgeText && item.badgeTooltip && (h("atui-tooltip", { slot: "badge", position: "right" }, h("atui-badge", { class: "ml-4", slot: "tooltip-trigger", impact: "high", type: "info", label: item.badgeText }), h("span", { slot: "tooltip-content" }, item.badgeTooltip))), item.hasInfoButton && (h("button", { slot: "info", class: "sm", color: "primary", onClick: (event) => this.onClickInfoButton(event) }, h("i", { class: "material-icons" }, "help_outline"))))), h("span", { slot: "tooltip-content" }, item.tooltip))));
    }
    render() {
        return (h(Host, { key: '1aa78b7a2127c294ca489a8f1b9897c0be9c420d', onKeyDown: (event) => this.handleKeyDown(event) }, h("slot", { key: 'be8a3cfd432d8953043f6a21a1ddc376a90aefd4', name: "header" }), !!this.options.length && (h("nav", { key: '2a7230d2b8850f22b6c5dca33552c6349aad220e', class: "flex-fill overflow-visible pb-16" }, h("div", { key: '4fd672f2145f21910fd17179a96648d0e14b3a1c', class: "flex flex-col", role: "menu" }, this.getListItems))), h("slot", { key: '6a31555c46b0a6574f5a3bb8d07694f08ed47106' })));
    }
    get el() { return this; }
}, [260, "atui-list-selector", {
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