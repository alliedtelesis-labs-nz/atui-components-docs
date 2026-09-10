import { h, Host, } from "@stencil/core";
/**
 * @category Navigation
 * @description A list selector component for selecting an item from a list.
 *
 * @slot header - Placed at the top of the list, usually for the title of the list
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
    getListItemElements() {
        return Array.from(this.el.querySelectorAll('at-list-selector-item'));
    }
    focusAndClickRelativeItem(relativePosition) {
        const itemEls = this.getListItemElements();
        if (!itemEls.length)
            return;
        const indexOfActiveItem = itemEls.indexOf(this.el.ownerDocument
            .activeElement);
        const nextActiveItem = itemEls[(indexOfActiveItem + relativePosition + itemEls.length) %
            itemEls.length];
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
        return this.options.map((item) => (h("at-tooltip", { position: "right", disabled: !item.tooltip }, h("div", { slot: "tooltip-trigger" }, h("at-list-selector-item", { item_id: item.id, item_title: item.title, subtitle: item.subtitle, item_prefix: item.prefix, has_border: this.has_border, is_selected: this.selected_item_id &&
                item.id === this.selected_item_id, onClick: () => this.onSelect(item), tabindex: "0" }, h("at-icon", { slot: "icon", name: item.icon }), item.badgeText && item.badgeTooltip && (h("at-tooltip", { slot: "badge", position: "right" }, h("at-badge", { class: "ml-4", slot: "tooltip-trigger", impact: "high", type: "info", label: item.badgeText }), h("span", null, item.badgeTooltip))), item.hasInfoButton && (h("at-button", { slot: "info", size: "sm", type: "secondaryText", onClick: (event) => this.onClickInfoButton(event) }, h("at-icon", { slot: "icon", name: "help" }))))), h("span", null, item.tooltip))));
    }
    render() {
        return (h(Host, { key: 'a330653af5c953a535c12cb5de1a7ef21fdfe700', onKeyDown: (event) => this.handleKeyDown(event) }, h("slot", { key: '25720b85e6ad6dcc2cfde3331816816f57504c05', name: "header" }), !!this.options.length && (h("nav", { key: '1828326d5deea375d9c6380637a44a3d8f22d808', class: "flex-fill overflow-visible pb-16" }, h("div", { key: 'f63cd9554a96c8dc73b52aed00264b5092ebefde', class: "flex flex-col", role: "menu" }, this.getListItems))), h("slot", { key: '44dbe8516c1c3a367f8c9e9e4b6803c609327d81' })));
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
