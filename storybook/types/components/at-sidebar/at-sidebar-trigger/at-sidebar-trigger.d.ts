import { ButtonSize } from '../../at-button/at-button';
/**
 * @category Navigation
 * @description A sidebar trigger component for the sidebar.
 */
export declare class AtSidebarTriggerComponent {
    el: HTMLElement;
    isOpen: boolean;
    /**
     * Size of the button
     */
    size: ButtonSize;
    private provider;
    private updateIsOpen;
    private toggleSidebar;
    componentDidLoad(): Promise<void>;
    render(): any;
}
