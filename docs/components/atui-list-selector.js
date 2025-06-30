import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-DJD-7SVX.js';
import { d as defineCustomElement$4 } from './p-DIGwH9iS.js';
import { d as defineCustomElement$3 } from './p-BrqobUOt.js';
import { d as defineCustomElement$2 } from './p-BIS2bAMQ.js';

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
        return (h(Host, { key: 'c5f39e181fa78269bb59f45ae82101851724a935', onKeyDown: (event) => this.handleKeyDown(event) }, h("slot", { key: 'cbb4cdf57e183c8f1ab8d31c0b81c3b4bfeafc3c', name: "header" }), !!this.options.length && (h("nav", { key: '2daac4824644308dcef99f0a88bafce10e5ba486', class: "flex-fill overflow-visible pb-16" }, h("div", { key: 'b249e0792490a685eddbe6f3d5b1a7297374142b', class: "flex flex-col", role: "menu" }, this.getListItems))), h("slot", { key: 'd7e848a160b70bec50ed7e3dd0f29b8ed4902e83' })));
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