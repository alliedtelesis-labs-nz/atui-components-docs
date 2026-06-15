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
     * Optional CSS selector that restricts where drag can be initiated.
     * When set, users can only drag widgets by grabbing elements matching
     * this selector (e.g. '[data-drag-handle]' for card headers).
     * When not set, the entire widget surface is draggable (GridStack default).
     */
    drag_handle;
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
            ...(this.drag_handle
                ? { draggable: { handle: this.drag_handle } }
                : {}),
        }, this.gridContainerRef);
        // Register handlers BEFORE layoutWidgets() so the 'added' events that fire
        // during makeWidget() are captured and resizeChartComponents runs for every
        // widget on the initial load — not just after subsequent drag/resize actions.
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
                // Always notify chart components so compact mode is evaluated
                // both on initial add and whenever a widget moves/resizes.
                this.resizeChartComponents(item.el);
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
        this.layoutWidgets();
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
        // Measure the actual constrained height GridStack has assigned to this widget.
        const contentEl = element.querySelector('.grid-stack-item-content');
        const contentHeight = contentEl?.getBoundingClientRect().height ?? 0;
        const widgetId = element.id;
        chartSelectors.forEach((selector) => {
            // Stencil's shadow:false slot polyfill leaves slot content as a direct
            // child of at-dashboard, not relocated inside grid-stack-item.
            // Search both the grid item subtree and the at-dashboard light DOM
            // subtree that belongs to this widget (identified by slot="widgetId").
            let charts = element.querySelectorAll(selector);
            if (charts.length === 0 && widgetId) {
                charts = this.el.querySelectorAll(`[slot="${widgetId}"] ${selector}`);
            }
            charts.forEach((chart) => {
                if (typeof chart.resize === 'function') {
                    chart.resize(contentHeight);
                }
            });
        });
    }
    render() {
        return (h("div", { key: '600dcfbef2f1277cbe2c4ce40293e0ba1ec097ce', class: "grid-stack", ref: (el) => (this.gridContainerRef = el) }, this.widget_items.map((widget) => (h("div", { class: "grid-stack-item", id: widget.id, key: widget.id }, h("div", { class: "grid-stack-item-content" }, h("div", { class: "absolute top-0 right-0 z-10" }, h("at-menu", null, h("at-button", { slot: "menu-trigger", type: "secondaryText" }, h("at-icon", { slot: "icon", name: "overflow_menu" })), h("at-button", { label: "Delete", type: "secondaryText", onAtuiClick: () => {
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
            },
            "drag_handle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional CSS selector that restricts where drag can be initiated.\nWhen set, users can only drag widgets by grabbing elements matching\nthis selector (e.g. '[data-drag-handle]' for card headers).\nWhen not set, the entire widget surface is draggable (GridStack default)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "drag_handle"
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
