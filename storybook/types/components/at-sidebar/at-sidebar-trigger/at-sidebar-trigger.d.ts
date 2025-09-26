import { ButtonSize, ButtonType } from '../../at-button/at-button';
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
    /**
     * Theme of the button. Default secondary
     */
    type: ButtonType;
    private provider;
    private updateIsOpen;
    private toggleSidebar;
    componentDidLoad(): Promise<void>;
    render(): any;
}
