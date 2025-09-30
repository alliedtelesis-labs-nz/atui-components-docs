import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-BAZ2N91w.js';
import { d as defineCustomElement$4 } from './p-CTWY0kLr.js';
import { d as defineCustomElement$3 } from './p-3NDFat5r.js';
import { d as defineCustomElement$2 } from './p-C03bPuQn.js';

const AtListSelector$1 = /*@__PURE__*/ proxyCustomElement(class AtListSelector extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atuiChange = createEvent(this, "atuiChange", 7);
        this.atuiInfoButtonClick = createEvent(this, "atuiInfoButtonClick", 7);
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
    get el() { return this; }
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
        return this.options.map((item) => (h("at-tooltip", { position: "right", disabled: !item.tooltip }, h("div", { slot: "tooltip-trigger" }, h("at-list-selector-item", { item_id: item.id, item_title: item.title, subtitle: item.subtitle, icon: item.icon, item_prefix: item.prefix, has_border: this.has_border, is_selected: this.selected_item_id &&
                item.id === this.selected_item_id, onClick: () => this.onSelect(item), tabindex: "0", ref: (el) => this.listItemEls.push(el) }, item.badgeText && item.badgeTooltip && (h("at-tooltip", { slot: "badge", position: "right" }, h("at-badge", { class: "ml-4", slot: "tooltip-trigger", impact: "high", type: "info", label: item.badgeText }), h("span", null, item.badgeTooltip))), item.hasInfoButton && (h("button", { slot: "info", class: "sm", color: "primary", onClick: (event) => this.onClickInfoButton(event) }, h("i", { class: "material-icons" }, "help_outline"))))), h("span", null, item.tooltip))));
    }
    render() {
        return (h(Host, { key: '6be26c2389224e0f47a7272510f479afc4b538f1', onKeyDown: (event) => this.handleKeyDown(event) }, h("slot", { key: 'b0fa93694a3a2d57b815f53c0e2d624f76d3bbac', name: "header" }), !!this.options.length && (h("nav", { key: 'a7c32df5e626cba32a2039e5ff510f86083ac47b', class: "flex-fill overflow-visible pb-16" }, h("div", { key: '2e68019db31babb42f4e039527a07c83ebf1ff27', class: "flex flex-col", role: "menu" }, this.getListItems))), h("slot", { key: '2f3d544695b91fef1c6cd2b6d0e51305178ae61a' })));
    }
}, [260, "at-list-selector", {
        "options": [16],
        "selected_item_id": [1025],
        "has_border": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-list-selector", "at-badge", "at-list-selector-item", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-list-selector":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtListSelector$1);
            }
            break;
        case "at-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-list-selector-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtListSelector = AtListSelector$1;
const defineCustomElement = defineCustomElement$1;

export { AtListSelector, defineCustomElement };
//# sourceMappingURL=at-list-selector.js.map

//# sourceMappingURL=at-list-selector.js.map