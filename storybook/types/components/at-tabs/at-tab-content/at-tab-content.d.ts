/**
 * @category Navigation
 * @description A tab content component for the tab selector.
 * @slot - Use this slot to add custom elements within the tab content area.
 */
export declare class AtTabContent {
    el: HTMLElement;
    /**
     * ID of the tab
     */
    tab_id: string;
    /**
     * Determines if the tab content is active
     */
    is_active: boolean;
    isActive: boolean;
    private tabSelector;
    componentWillLoad(): void;
    componentDidLoad(): Promise<void>;
    disconnectedCallback(): void;
    setIsActive(id: string): void;
    updateActiveState: (event: Event) => void;
    render(): any;
}
