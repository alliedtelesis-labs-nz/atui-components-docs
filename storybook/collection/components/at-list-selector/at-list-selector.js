import { h, Host, } from "@stencil/core";
/**
 * @category Navigation
 * @description A list selector component for selecting an item from a list.
 *
 * @slot - Placed after the list items
 */
export class AtListSelector {
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
    el;
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
        return (h(Host, { key: '23027af17c56d4be957ebfdd628118333cb81492', onKeyDown: (event) => this.handleKeyDown(event) }, h("slot", { key: '192f9e49533360b396a60334e3e1e78f8d0c567c', name: "header" }), !!this.options.length && (h("nav", { key: '27ac3075f686b6bda17d3cae4cd1bc15966c96e3', class: "flex-fill overflow-visible pb-16" }, h("div", { key: '81319232865f839ede07a4be1e60dc555c986316', class: "flex flex-col", role: "menu" }, this.getListItems))), h("slot", { key: 'dc210d601606d56a2766bdda4525e90f9778fed6' })));
    }
    static get is() { return "at-list-selector"; }
    static get properties() {
        return {
            "options": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AtIListSelectorItem[]",
                    "resolved": "AtIListSelectorItem[]",
                    "references": {
                        "AtIListSelectorItem": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-list-selector/at-list-selector.tsx",
                            "id": "src/components/at-list-selector/at-list-selector.tsx::AtIListSelectorItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "List of items."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "selected_item_id": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The selected item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "selected_item_id"
            },
            "has_border": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether each item has a bottom border."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "has_border"
            }
        };
    }
    static get events() {
        return [{
                "method": "atuiChange",
                "name": "atuiChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits an event when the selected item is changed, the `event.detail` is the ListSelectorItem"
                },
                "complexType": {
                    "original": "AtIListSelectorItem",
                    "resolved": "AtIListSelectorItem",
                    "references": {
                        "AtIListSelectorItem": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-list-selector/at-list-selector.tsx",
                            "id": "src/components/at-list-selector/at-list-selector.tsx::AtIListSelectorItem"
                        }
                    }
                }
            }, {
                "method": "atuiInfoButtonClick",
                "name": "atuiInfoButtonClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits when event when the info button of an item is clicked"
                },
                "complexType": {
                    "original": "AtEvent",
                    "resolved": "AtEvent",
                    "references": {
                        "AtEvent": {
                            "location": "import",
                            "path": "../../types/events",
                            "id": "src/types/events.ts::AtEvent",
                            "referenceLocation": "AtEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
}
