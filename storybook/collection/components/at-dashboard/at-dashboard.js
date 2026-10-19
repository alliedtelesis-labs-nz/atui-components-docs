import { h, } from "@stencil/core";
import { GridStack, } from "gridstack";
const MIN_SIZE = { w: 2, h: 2 };
const COLUMN_MAX = 24;
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
     * When true the dashboard is read-only: widgets keep their positions and
     * sizes but cannot be dragged, resized or deleted (the per-widget menu is
     * hidden). Use for fixed/system dashboards whose layout is owned elsewhere.
     */
    read_only = false;
    /**
     * When false, GridStack's position and size transitions are turned off,
     * so a static dashboard appears in place on load instead of sliding into
     * its layout.
     */
    is_animated = true;
    /**
     * When true, widgets keep their proportional widths down to the 768px
     * (tablet portrait) breakpoint, where they stack into a single full-width
     * column. Without it the grid reflows to an 8-column list below 768px,
     * where narrow widgets can still sit side by side. Use for a fixed row of
     * equal cards, such as the table-header metric row.
     */
    has_fixed_columns = false;
    /**
     * Emitted when a widget's position or size changes in the grid, with the
     * position and size on the full 24-column grid.
     */
    changedItem;
    /**
     * Emitted when the user finishes resizing or dragging a widget, with every
     * widget's position and size on the full 24-column grid - including widgets
     * the grid moved out of the way. This is the layout to save: passing it back
     * as `widget_items` leaves the grid exactly as the user left it.
     */
    atLayoutChange;
    /**
     * Emitted when a widget is removed from the dashboard.
     */
    removedItem;
    /**
     * Emitted when a widget's Edit action is triggered from the dashboard.
     */
    editItem;
    /**
     * Emitted when a widget finishes resizing or dragging, with its position and
     * size on the full 24-column grid. Widgets the grid moved out of the way are
     * not included; save `atLayoutChange` instead.
     */
    resizeDragEvent;
    widgetItemsChanged() { }
    readOnlyChanged() {
        this.grid?.setStatic(!!this.read_only);
    }
    isAnimatedChanged() {
        this.grid?.setAnimation(this.is_animated !== false);
    }
    hasFixedColumnsChanged() {
        if (!this.grid)
            return;
        this.grid.opts.columnOpts = this.columnOpts;
        this.layoutWidgets();
    }
    get columnOpts() {
        return {
            columnMax: COLUMN_MAX,
            // Widest first: GridStack's own resize check walks them in this order.
            breakpoints: this.has_fixed_columns
                ? [
                    { w: 1280, c: 16, layout: 'moveScale' },
                    { w: 768, c: 1, layout: 'list' },
                ]
                : [
                    { w: 1280, c: 16, layout: 'moveScale' }, // medium: widths scale proportionally
                    { w: 768, c: 8, layout: 'list' }, // small tablet — 3 charts still fit (2 cols each)
                    { w: 480, c: 4, layout: 'list' }, // mobile — full stack
                ],
        };
    }
    applyBreakpoint() {
        const width = this.gridContainerRef?.clientWidth ?? window.innerWidth;
        const breakpoint = [...this.columnOpts.breakpoints]
            .reverse()
            .find((b) => width <= b.w);
        const column = breakpoint?.c ?? COLUMN_MAX;
        if (this.grid.getColumn() === column)
            return;
        this.isScalingToBreakpoint = true;
        try {
            this.grid.column(column, breakpoint?.layout ?? 'moveScale');
        }
        finally {
            this.isScalingToBreakpoint = false;
        }
    }
    grid;
    isScalingToBreakpoint = false;
    gridContainerRef;
    componentDidLoad() {
        if (!this.gridContainerRef)
            return;
        this.grid = GridStack.init({
            margin: 4,
            minRow: 1,
            maxRow: 100,
            float: true,
            staticGrid: !!this.read_only,
            animate: this.is_animated !== false,
            columnOpts: this.columnOpts,
            ...(this.drag_handle
                ? { draggable: { handle: this.drag_handle } }
                : {}),
        }, this.gridContainerRef);
        // Register handlers BEFORE layoutWidgets() so the 'added' events that fire
        // during makeWidget() are captured and resizeChartComponents runs for every
        // widget on the initial load — not just after subsequent drag/resize actions.
        this.grid.on('added change', (event, items) => {
            const isOwnRescale = this.isScalingToBreakpoint && event.type === 'change';
            const layout = isOwnRescale ? undefined : this.fullGridLayout();
            items?.forEach((item) => {
                const dashboardItem = this.widget_items.find((w) => w.id === item.el.id);
                const placed = layout?.get(item.el.id);
                if (dashboardItem && placed) {
                    this.changedItem.emit({ ...dashboardItem, ...placed });
                }
                // Always notify chart components so compact mode is evaluated
                // both on initial add and whenever a widget moves/resizes.
                this.resizeChartComponents(item.el);
            });
        });
        this.grid.on('resizestop dragstop', (_event, el) => {
            this.resizeChartComponents(el);
            // GridStack fires the stop event before it records the move in its
            // full-grid layout cache, later in the same call, so read the layout
            // once that call has returned.
            queueMicrotask(() => {
                const layout = this.fullGridLayout();
                const placed = layout.get(el.id);
                if (placed) {
                    this.resizeDragEvent.emit({ id: el.id, ...placed });
                }
                this.atLayoutChange.emit(this.widget_items
                    .filter((item) => layout.has(item.id))
                    .map((item) => ({
                    ...item,
                    ...layout.get(item.id),
                })));
            });
        });
        this.layoutWidgets();
    }
    componentDidUpdate() {
        // A host that saves the layout it was given passes it straight back.
        // Rebuilding the grid from it would undo GridStack's own placement of the
        // widgets it pushed aside, so only rebuild when something really changed.
        if (this.gridMatches(this.widget_items))
            return;
        this.layoutWidgets();
    }
    disconnectedCallback() {
        this.grid?.destroy(false);
    }
    layoutWidgets() {
        if (!this.grid)
            return;
        this.grid.removeAll(false);
        // Widget sizes are authored on the full grid; place them there, then
        // scale to the current breakpoint, or they keep full-grid widths on a
        // narrower grid and wrap.
        this.grid.column(COLUMN_MAX, 'none');
        this.widget_items.forEach((widget) => this.makeWidget(widget));
        this.applyBreakpoint();
    }
    /**
     * Every widget's position and size on the full COLUMN_MAX grid, keyed by id.
     * At a narrower breakpoint GridStack keeps the full-grid layout cached and
     * carries the user's moves into it, so this is what the host should store,
     * not the scaled positions the grid is drawing.
     */
    fullGridLayout() {
        const saved = this.grid?.save(false, false, undefined, COLUMN_MAX);
        const widgets = Array.isArray(saved) ? saved : [];
        return new Map(widgets.map((widget) => [
            String(widget.id),
            {
                x: widget.x,
                y: widget.y,
                w: clampWidgetWidth(widget.w, MIN_SIZE.w),
                h: clampWidgetHeight(widget.h, MIN_SIZE.h),
            },
        ]));
    }
    /** Whether the grid already shows exactly these widgets, placed as given. */
    gridMatches(items) {
        if (!this.grid)
            return false;
        const layout = this.fullGridLayout();
        if (layout.size !== items.length)
            return false;
        return items.every((item) => {
            const placed = layout.get(item.id);
            const node = this.grid.engine.nodes.find((n) => n.id === item.id);
            return (!!placed &&
                !!node?.el?.isConnected &&
                placed.x === item.x &&
                placed.y === item.y &&
                placed.w === item.w &&
                placed.h === item.h &&
                node.minW === clampWidgetWidth(item.minW, MIN_SIZE.w) &&
                node.minH === clampWidgetHeight(item.minH, MIN_SIZE.h) &&
                node.maxW === clampWidgetMaxWidth(item.maxW) &&
                node.maxH === clampWidgetMaxHeight(item.maxH));
        });
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
            'at-chart-gauge',
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
        return (h("div", { key: 'ec677f16e9e1efbfa73876acf86443635c753ef3', class: "grid-stack", ref: (el) => (this.gridContainerRef = el) }, this.widget_items.map((widget) => (h("div", { class: "grid-stack-item", id: widget.id, key: widget.id }, h("div", { class: "grid-stack-item-content" }, !this.read_only && (h("div", { class: "absolute top-0 right-0 z-10" }, h("at-menu", null, h("at-button", { slot: "menu-trigger", type: "secondaryText", "aria-label": `Widget ${widget.id} options` }, h("at-icon", { slot: "icon", name: "overflow_menu" })), h("div", { class: "flex min-w-[140px] flex-col py-1" }, h("at-menu-item", { label: "Edit", onAtuiClick: () => {
                this.editItem.emit(widget);
            } }), h("at-menu-item", { label: "Delete", onAtuiClick: () => {
                this.removeWidget(widget);
            } }))))), h("slot", { name: widget.id })))))));
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
            },
            "read_only": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "When true the dashboard is read-only: widgets keep their positions and\nsizes but cannot be dragged, resized or deleted (the per-widget menu is\nhidden). Use for fixed/system dashboards whose layout is owned elsewhere."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "read_only",
                "defaultValue": "false"
            },
            "is_animated": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "When false, GridStack's position and size transitions are turned off,\nso a static dashboard appears in place on load instead of sliding into\nits layout."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is_animated",
                "defaultValue": "true"
            },
            "has_fixed_columns": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "When true, widgets keep their proportional widths down to the 768px\n(tablet portrait) breakpoint, where they stack into a single full-width\ncolumn. Without it the grid reflows to an 8-column list below 768px,\nwhere narrow widgets can still sit side by side. Use for a fixed row of\nequal cards, such as the table-header metric row."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "has_fixed_columns",
                "defaultValue": "false"
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
                    "text": "Emitted when a widget's position or size changes in the grid, with the\nposition and size on the full 24-column grid."
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
                "method": "atLayoutChange",
                "name": "atLayoutChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the user finishes resizing or dragging a widget, with every\nwidget's position and size on the full 24-column grid - including widgets\nthe grid moved out of the way. This is the layout to save: passing it back\nas `widget_items` leaves the grid exactly as the user left it."
                },
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
                "method": "editItem",
                "name": "editItem",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a widget's Edit action is triggered from the dashboard."
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
                    "text": "Emitted when a widget finishes resizing or dragging, with its position and\nsize on the full 24-column grid. Widgets the grid moved out of the way are\nnot included; save `atLayoutChange` instead."
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
            }, {
                "propName": "read_only",
                "methodName": "readOnlyChanged",
                "handlerOptions": {
                    "immediate": true
                }
            }, {
                "propName": "is_animated",
                "methodName": "isAnimatedChanged",
                "handlerOptions": {
                    "immediate": true
                }
            }, {
                "propName": "has_fixed_columns",
                "methodName": "hasFixedColumnsChanged",
                "handlerOptions": {
                    "immediate": true
                }
            }];
    }
}
