import { EventEmitter } from '../../stencil-public-runtime';
export interface AtITab {
    id: string;
    title: string;
}
export type AtTabsLayout = 'vertical' | 'horizontal';
/**
 * ### interface Tab
 * ```
 * {
 *   id: string;
 *   title: string;
 * }
 * ```
 * @category Navigation
 * @description A tabs component for switching between different content sections. Provides keyboard navigation and accessible tab panel management. It acts as a controller.
 *
 * @slot nav-content - Content to be placed after the tabs
 * @slot tab-list - Used to place your own at-tab components instead of using the 'tabs' prop
 * @slot tab-content - Used to place your own at-tab-content component
 */
export declare class AtTabs {
    el: HTMLElement;
    /**
     * List of tabs the selector will have
     */
    tabs: AtITab[];
    /**
     * Layout of the tabs
     */
    layout: AtTabsLayout;
    /**
     * hide navigation when you want to provide custom controls
     */
    hide_nav: boolean;
    /**
     * Sets the current active tab
     */
    active_tab?: string;
    /**
     * If true, tabs will fill the width of the container
     * @default false
     */
    fill?: boolean;
    /**
     * Emits the id of the tab when a new active_tab is set
     */
    atuiTabChange: EventEmitter<string>;
    tabEls: HTMLAtTabTriggerElement[];
    tabManualAdded: {
        id: string;
        title: string;
    }[];
    componentDidRender(): void;
    initializeTabs(): void;
    addEventListenersToTabs(): void;
    getTabsElements(): HTMLAtTabTriggerElement[];
    componentDidUpdate(): void;
    handleActiveTabChange(newValue: string): void;
    updateTabActiveStates(newValue: string): void;
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
