/**
 * @category Navigation
 * @description A sidebar trigger component for the sidebar.
 */
export declare class AtSidebarTriggerComponent {
    el: HTMLElement;
    isOpen: boolean;
    private provider;
    private updateIsOpen;
    private toggleSidebar;
    private handleKeyDown;
    componentDidLoad(): Promise<void>;
    disconnectedCallback(): void;
    private handleSidebarChange;
    render(): any;
}
