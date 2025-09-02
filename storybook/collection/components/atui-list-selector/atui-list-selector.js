import { h, Host, } from "@stencil/core";
/**
 * @category Navigation
 * @description A list selector component for selecting an item from a list.
 *
 * @slot - Placed after the list items
 */
export class AtuiListSelector {
    constructor() {
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
        return this.options.map((item) => (h("atui-tooltip", { position: "right", disabled: !item.tooltip }, h("div", { slot: "tooltip-trigger" }, h("atui-list-selector-item", { item_id: item.id, item_title: item.title, subtitle: item.subtitle, icon: item.icon, item_prefix: item.prefix, has_border: this.has_border, is_selected: this.selected_item_id &&
                item.id === this.selected_item_id, onClick: () => this.onSelect(item), tabindex: "0", ref: (el) => this.listItemEls.push(el) }, item.badgeText && item.badgeTooltip && (h("atui-tooltip", { slot: "badge", position: "right" }, h("atui-badge", { class: "ml-4", slot: "tooltip-trigger", impact: "high", type: "info", label: item.badgeText }), h("span", null, item.badgeTooltip))), item.hasInfoButton && (h("button", { slot: "info", class: "sm", color: "primary", onClick: (event) => this.onClickInfoButton(event) }, h("i", { class: "material-icons" }, "help_outline"))))), h("span", null, item.tooltip))));
    }
    render() {
        return (h(Host, { key: 'aad6039888a89d73c08382cc54a59a5ae45e3b86', onKeyDown: (event) => this.handleKeyDown(event) }, h("slot", { key: '94ea7ca4321bda0d1ae76b9d4e078282403fa941', name: "header" }), !!this.options.length && (h("nav", { key: '2bd593d4cba6e1768809be0276434bbec3a92aad', class: "flex-fill overflow-visible pb-16" }, h("div", { key: '0cb4091416b1dfb272061f92384186a16e693047', class: "flex flex-col", role: "menu" }, this.getListItems))), h("slot", { key: 'eb74b7724f6b6b266346c9212ed169d9a1b38c86' })));
    }
    static get is() { return "atui-list-selector"; }
    static get properties() {
        return {
            "options": {
                "type": "unknown",
                "attribute": "options",
                "mutable": false,
                "complexType": {
                    "original": "ListSelectorItem[]",
                    "resolved": "ListSelectorItem[]",
                    "references": {
                        "ListSelectorItem": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-list-selector/atui-list-selector.tsx",
                            "id": "src/components/atui-list-selector/atui-list-selector.tsx::ListSelectorItem"
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
                "attribute": "selected_item_id",
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
                "reflect": false
            },
            "has_border": {
                "type": "boolean",
                "attribute": "has_border",
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
                "reflect": false
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
                    "original": "ListSelectorItem",
                    "resolved": "ListSelectorItem",
                    "references": {
                        "ListSelectorItem": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-list-selector/atui-list-selector.tsx",
                            "id": "src/components/atui-list-selector/atui-list-selector.tsx::ListSelectorItem"
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
                    "original": "AtuiEvent",
                    "resolved": "AtuiEvent",
                    "references": {
                        "AtuiEvent": {
                            "location": "import",
                            "path": "../../types/events",
                            "id": "src/types/events.ts::AtuiEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-list-selector.js.map
