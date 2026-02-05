import { EventEmitter } from '../../stencil-public-runtime';
import { GridStackNode } from 'gridstack';
export interface CustomGridStackItem extends GridStackNode {
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
    widget_items: CustomGridStackItem[];
    /**
     * Emitted when a widget's position or size changes in the grid.
     */
    changedItem: EventEmitter<CustomGridStackItem>;
    /**
     * Emitted when a widget is removed from the dashboard.
     */
    removedItem: EventEmitter<CustomGridStackItem>;
    /**
     * Emitted when a widget finishes resizing or dragging.
     */
    resizeDragEvent: EventEmitter<CustomGridStackItem>;
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
