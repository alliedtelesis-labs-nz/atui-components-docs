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
     * Emitted when a widget's position or size changes in the grid.
     */
    changedItem: EventEmitter<AtICustomGridStackItem>;
    /**
     * Emitted when a widget is removed from the dashboard.
     */
    removedItem: EventEmitter<AtICustomGridStackItem>;
    /**
     * Emitted when a widget finishes resizing or dragging.
     */
    resizeDragEvent: EventEmitter<AtICustomGridStackItem>;
    widgetItemsChanged(): void;
    private grid?;
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
