import { h, } from "@stencil/core";
import { GridStack, } from "gridstack";
const MIN_SIZE = { w: 2, h: 2 };
const MAX_SIZE = { w: 100, h: 100 };
const clampWidgetWidth = (value, fallback) => Math.min(Math.max(value ?? fallback, MIN_SIZE.w), MAX_SIZE.w);
const clampWidgetHeight = (value, fallback) => Math.min(Math.max(value ?? fallback, MIN_SIZE.h), MAX_SIZE.h);
const clampWidgetMaxWidth = (value) => {
    const resolvedValue = value == null || value <= 0 ? MAX_SIZE.w : value;
    return Math.min(Math.max(resolvedValue, MIN_SIZE.w), MAX_SIZE.w);
};
const clampWidgetMaxHeight = (value) => {
    const resolvedValue = value == null || value <= 0 ? MAX_SIZE.h : value;
    return Math.min(Math.max(resolvedValue, MIN_SIZE.h), MAX_SIZE.h);
};
export class AtDashboard {
    el;
    /**
     * Array of dashboard widget items to display in the grid layout.
     */
    widget_items = [];
    /**
     * Emitted when a widget's position or size changes in the grid.
     */
    changedItem;
    /**
     * Emitted when a widget is removed from the dashboard.
     */
    removedItem;
    /**
     * Emitted when a widget finishes resizing or dragging.
     */
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
                columnMax: 24,
                breakpoints: [
                    { w: 480, c: 4, layout: 'list' }, // mobile — full stack
                    { w: 768, c: 8, layout: 'list' }, // small tablet — 3 charts still fit (2 cols each)
                    { w: 1280, c: 16, layout: 'compact' }, // medium — proportional half-size
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
                        w: clampWidgetWidth(item.w, MIN_SIZE.w),
                        h: clampWidgetHeight(item.h, MIN_SIZE.h),
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
                w: clampWidgetWidth(node.w, MIN_SIZE.w),
                h: clampWidgetHeight(node.h, MIN_SIZE.h),
            };
            this.resizeChartComponents(el);
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
            minW: clampWidgetWidth(widget.minW, MIN_SIZE.w),
            minH: clampWidgetHeight(widget.minH, MIN_SIZE.h),
            maxW: clampWidgetMaxWidth(widget.maxW),
            maxH: clampWidgetMaxHeight(widget.maxH),
        };
        this.grid.makeWidget(elSelector, options);
    }
    removeWidget(widget) {
        this.removedItem.emit(widget);
    }
    resizeChartComponents(element) {
        const chartSelectors = [
            'at-chart-donut',
            'at-chart-breakdown',
            'at-chart-bar',
            'at-chart-line',
        ];
        chartSelectors.forEach((selector) => {
            const charts = element.querySelectorAll(selector);
            charts.forEach((chart) => {
                if (typeof chart.resize === 'function') {
                    chart.resize();
                }
            });
        });
    }
    render() {
        return (h("div", { key: '458d6ee7da6a34d916f623e9d83ab2f08214c1d4', class: "grid-stack", ref: (el) => (this.gridContainerRef = el) }, this.widget_items.map((widget) => (h("div", { class: "grid-stack-item", id: widget.id, key: widget.id }, h("div", { class: "grid-stack-item-content" }, h("div", { class: "absolute top-0 right-0 z-10" }, h("at-menu", null, h("at-button", { slot: "menu-trigger", type: "secondaryText" }, h("at-icon", { slot: "icon", name: "overflow_menu" })), h("at-button", { label: "Delete", type: "secondaryText", onAtuiClick: () => {
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
                    "original": "AtICustomGridStackItem[]",
                    "resolved": "AtICustomGridStackItem[]",
                    "references": {
                        "AtICustomGridStackItem": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-dashboard/at-dashboard.tsx",
                            "id": "src/components/at-dashboard/at-dashboard.tsx::AtICustomGridStackItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Array of dashboard widget items to display in the grid layout."
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
                    "text": "Emitted when a widget's position or size changes in the grid."
                },
                "complexType": {
                    "original": "AtICustomGridStackItem",
                    "resolved": "AtICustomGridStackItem",
                    "references": {
                        "AtICustomGridStackItem": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-dashboard/at-dashboard.tsx",
                            "id": "src/components/at-dashboard/at-dashboard.tsx::AtICustomGridStackItem"
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
                    "text": "Emitted when a widget is removed from the dashboard."
                },
                "complexType": {
                    "original": "AtICustomGridStackItem",
                    "resolved": "AtICustomGridStackItem",
                    "references": {
                        "AtICustomGridStackItem": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-dashboard/at-dashboard.tsx",
                            "id": "src/components/at-dashboard/at-dashboard.tsx::AtICustomGridStackItem"
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
                    "text": "Emitted when a widget finishes resizing or dragging."
                },
                "complexType": {
                    "original": "AtICustomGridStackItem",
                    "resolved": "AtICustomGridStackItem",
                    "references": {
                        "AtICustomGridStackItem": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-dashboard/at-dashboard.tsx",
                            "id": "src/components/at-dashboard/at-dashboard.tsx::AtICustomGridStackItem"
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
