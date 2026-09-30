import { EventEmitter } from '../../stencil-public-runtime';
import { GridStackNode } from 'gridstack';
export interface AtICustomGridStackItem extends GridStackNode {
    id: string;
    x?: number;
    y?: number;
    w?: number;
    h?: number;
    [key: string]: any;
}
export declare class AtDashboard {
    el: HTMLElement;
    /**
     * Array of dashboard widget items to display in the grid layout.
     */
    widget_items: AtICustomGridStackItem[];
    /**
     * Optional CSS selector that restricts where drag can be initiated.
     * When set, users can only drag widgets by grabbing elements matching
     * this selector (e.g. '[data-drag-handle]' for card headers).
     * When not set, the entire widget surface is draggable (GridStack default).
     */
    drag_handle?: string;
    /**
     * When true the dashboard is read-only: widgets keep their positions and
     * sizes but cannot be dragged, resized or deleted (the per-widget menu is
     * hidden). Use for fixed/system dashboards whose layout is owned elsewhere.
     */
    read_only?: boolean;
    /**
     * When true, widgets keep their proportional widths down to the 768px
     * (tablet portrait) breakpoint, where they stack into a single full-width
     * column. Without it the grid reflows to an 8-column list below 768px,
     * where narrow widgets can still sit side by side. Use for a fixed row of
     * equal cards, such as the table-header metric row.
     */
    has_fixed_columns?: boolean;
    /**
     * Emitted when a widget's position or size changes in the grid.
     */
    changedItem: EventEmitter<AtICustomGridStackItem>;
    /**
     * Emitted when a widget is removed from the dashboard.
     */
    removedItem: EventEmitter<AtICustomGridStackItem>;
    /**
     * Emitted when a widget's Edit action is triggered from the dashboard.
     */
    editItem: EventEmitter<AtICustomGridStackItem>;
    /**
     * Emitted when a widget finishes resizing or dragging.
     */
    resizeDragEvent: EventEmitter<AtICustomGridStackItem>;
    widgetItemsChanged(): void;
    readOnlyChanged(): void;
    hasFixedColumnsChanged(): void;
    private get columnOpts();
    private applyBreakpoint;
    private grid?;
    private isScalingToBreakpoint;
    private gridContainerRef?;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    disconnectedCallback(): void;
    private layoutWidgets;
    private makeWidget;
    private removeWidget;
    private resizeChartComponents;
    render(): any;
}
