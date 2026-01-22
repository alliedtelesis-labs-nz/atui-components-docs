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
    widget_items: CustomGridStackItem[];
    changedItem: EventEmitter<CustomGridStackItem>;
    removedItem: EventEmitter<CustomGridStackItem>;
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
