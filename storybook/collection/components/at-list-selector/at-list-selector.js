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
                item.id === this.selected_item_id, onClick: () => this.onSelect(item), tabindex: "0", ref: (el) => this.listItemEls.push(el) }, item.badgeText && item.badgeTooltip && (h("at-tooltip", { slot: "badge", position: "right" }, h("at-badge", { class: "ml-4", slot: "tooltip-trigger", impact: "high", type: "info", label: item.badgeText }), h("span", null, item.badgeTooltip))), item.hasInfoButton && (h("at-button", { slot: "info", size: "sm", type: "secondaryText", onClick: (event) => this.onClickInfoButton(event) }, h("at-icon", { slot: "icon", name: "help" }))))), h("span", null, item.tooltip))));
    }
    render() {
        return (h(Host, { key: 'ab5dc2c03d257992ccb040e19271de5f006cc51b', onKeyDown: (event) => this.handleKeyDown(event) }, h("slot", { key: '3f05f8f74b4b211d50feffb445da9c4f442ae703', name: "header" }), !!this.options.length && (h("nav", { key: '966ee60f6cb69eb8af4844b50910de1645bac5f4', class: "flex-fill overflow-visible pb-16" }, h("div", { key: '82c4a63d94a21bbc67b9ce35d4a8d21a2e1997e3', class: "flex flex-col", role: "menu" }, this.getListItems))), h("slot", { key: 'f913cf72b128a8bb336a84d4159cc1867144aafe' })));
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
