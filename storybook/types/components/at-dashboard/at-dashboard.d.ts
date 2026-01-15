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
    widget_templates: CustomGridStackItem[];
    changedItem: EventEmitter<CustomGridStackItem>;
    removedItem: EventEmitter<CustomGridStackItem>;
    resizeEvent: EventEmitter<GridStackNode>;
    widgetTemplatesChanged(): void;
    private grid?;
    private gridContainerRef?;
    private needsLayout;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidRender(): void;
    disconnectedCallback(): void;
    private layoutWidgets;
    private makeWidget;
    private removeWidget;
    private injectStyle;
    render(): any;
}
