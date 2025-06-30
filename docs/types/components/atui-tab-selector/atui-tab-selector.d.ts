import { EventEmitter } from '../../stencil-public-runtime';
export interface Tab {
    id: string;
    title: string;
}
export type Layout = 'vertical' | 'horizontal';
/**
 * ### interface Tab
 * ```
 * {
 *   id: string;
 *   title: string;
 * }
 * ```
 * @category Navigation
 * @description A tab selector component for switching between different content sections. Provides keyboard navigation and accessible tab panel management.
 *
 * @slot nav-content - Content to be placed after the tabs
 */
export declare class AtuiTabSelector {
    el: HTMLElement;
    /**
     * List of tabs the selector will have
     */
    tabs: Tab[];
    /**
     * Layout of the tabs
     */
    layout: Layout;
    /**
     * hide navigation when you want to provide custom controls
     */
    hide_nav: boolean;
    /**
     * Sets the current active tab
     */
    active_tab?: string;
    /**
     * Emits the id of the tab when a new active_tab is set
     */
    atuiChange: EventEmitter<any>;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    handleActiveTabChange(newValue: string): void;
    private tabsetId;
    private get indicatorRef();
    private get containerRef();
    handleTabChange(id: string): void;
    /**
     * Gets the current active tab
     * @returns The current active_tab value
     */
    getActiveTab(): Promise<string>;
    /**
     * Sets the current active tab
     * @param value - The tab id to set as active
     */
    setActiveTab(value: string): Promise<void>;
    get tabOptions(): any;
    private updateIndicatorPosition;
    checkLayoutAndRender(): any;
    render(): any;
}
/**
 * @category Form Controls
 * @description A tab selector component for switching between different content sections. Provides keyboard navigation and accessible tab panel management.
 */
