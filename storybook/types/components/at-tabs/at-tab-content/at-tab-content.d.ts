import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @category Navigation
 * @description A tab content component for the tab selector.
 * @event atuiActivate - Emitted the first time this panel's tab is selected, carrying its tab_id.
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
    /**
     * True once this panel's tab has been selected at least once. Reflected, and
     * set before at-tabs emits atuiTabChange, so a consumer can defer building
     * expensive panel content until the tab is first opened.
     */
    has_activated: boolean;
    isActive: boolean;
    /**
     * Emits this panel's tab_id the first time its tab is selected
     */
    atuiActivate: EventEmitter<string>;
    private tabSelector;
    componentWillLoad(): void;
    componentDidLoad(): Promise<void>;
    disconnectedCallback(): void;
    handleActivated(isActivated: boolean, wasActivated: boolean): void;
    setIsActive(id: string): void;
    updateActiveState: (event: Event) => void;
    render(): any;
}
