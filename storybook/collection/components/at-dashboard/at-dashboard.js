import { h, } from "@stencil/core";
import { GridStack, } from "gridstack";
const DEFAULT_SIZE = {
    w: 5,
    h: 3,
};
export class AtDashboard {
    el;
    widget_items = [];
    changedItem;
    removedItem;
    resizeDragEvent;
    widgetItemsChanged() { }
    grid;
    gridContainerRef;
    componentDidLoad() {
        if (!this.gridContainerRef)
            return;
        this.grid = GridStack.init({
            margin: 4,
            minRow: 1,
            maxRow: 100,
            float: true,
            columnOpts: {
                columnMax: 12,
                breakpoints: [
                    {
                        w: 768,
                        c: 1,
                        layout: 'compact',
                    },
                ],
            },
        }, this.gridContainerRef);
        this.layoutWidgets();
        this.grid.on('added change', (_event, items) => {
            items?.forEach((item) => {
                const dashboardItem = this.widget_items.find((w) => w.id === item.el.id);
                if (dashboardItem) {
                    Object.assign(dashboardItem, {
                        x: item.x,
                        y: item.y,
                        w: item.w ?? DEFAULT_SIZE.w,
                        h: item.h ?? DEFAULT_SIZE.h,
                    });
                    this.changedItem.emit(dashboardItem);
                }
            });
        });
        this.grid.on('resizestop dragstop', (_event, el) => {
            const node = el.gridstackNode;
            const dashboardItem = {
                id: el.id,
                x: node.x,
                y: node.y,
                w: node.w ?? DEFAULT_SIZE.w,
                h: node.h ?? DEFAULT_SIZE.h,
            };
            this.resizeDragEvent.emit(dashboardItem);
        });
    }
    componentDidUpdate() {
        this.layoutWidgets();
    }
    disconnectedCallback() {
        this.grid?.destroy(false);
    }
    layoutWidgets() {
        if (!this.grid)
            return;
        this.grid.removeAll(false);
        this.widget_items.forEach((widget) => this.makeWidget(widget));
    }
    makeWidget(widget) {
        const elSelector = `#${widget.id}`;
        const options = {
            id: widget.id,
            x: widget.x,
            y: widget.y,
            w: widget.w,
            h: widget.h,
        };
        this.grid.makeWidget(elSelector, options);
    }
    removeWidget(widget) {
        this.removedItem.emit(widget);
    }
    render() {
        return (h("div", { key: 'af4687fdfa9df194a2a6db684fc332dcfe0cc6a8', class: "grid-stack", ref: (el) => (this.gridContainerRef = el) }, this.widget_items.map((widget) => (h("div", { class: "grid-stack-item", id: widget.id, key: widget.id }, h("div", { class: "grid-stack-item-content" }, h("div", { class: "absolute top-0 right-0" }, h("at-menu", null, h("at-button", { slot: "menu-trigger", icon: "more_vert", type: "secondaryText" }), h("at-button", { label: "Delete", type: "secondaryText", onAtuiClick: () => {
                this.removeWidget(widget);
            } }))), h("slot", { name: widget.id })))))));
    }
    static get is() { return "at-dashboard"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-dashboard.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-dashboard.css"]
        };
    }
    static get properties() {
        return {
            "widget_items": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "CustomGridStackItem[]",
                    "resolved": "CustomGridStackItem[]",
                    "references": {
                        "CustomGridStackItem": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-dashboard/at-dashboard.tsx",
                            "id": "src/components/at-dashboard/at-dashboard.tsx::CustomGridStackItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get events() {
        return [{
                "method": "changedItem",
                "name": "changedItem",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "CustomGridStackItem",
                    "resolved": "CustomGridStackItem",
                    "references": {
                        "CustomGridStackItem": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-dashboard/at-dashboard.tsx",
                            "id": "src/components/at-dashboard/at-dashboard.tsx::CustomGridStackItem"
                        }
                    }
                }
            }, {
                "method": "removedItem",
                "name": "removedItem",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "CustomGridStackItem",
                    "resolved": "CustomGridStackItem",
                    "references": {
                        "CustomGridStackItem": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-dashboard/at-dashboard.tsx",
                            "id": "src/components/at-dashboard/at-dashboard.tsx::CustomGridStackItem"
                        }
                    }
                }
            }, {
                "method": "resizeDragEvent",
                "name": "resizeDragEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "CustomGridStackItem",
                    "resolved": "CustomGridStackItem",
                    "references": {
                        "CustomGridStackItem": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-dashboard/at-dashboard.tsx",
                            "id": "src/components/at-dashboard/at-dashboard.tsx::CustomGridStackItem"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "widget_items",
                "methodName": "widgetItemsChanged"
            }];
    }
}
//# sourceMappingURL=at-dashboard.js.map
