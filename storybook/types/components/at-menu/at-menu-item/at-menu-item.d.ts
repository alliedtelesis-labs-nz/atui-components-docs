import { EventEmitter } from '../../../stencil-public-runtime';
import { AtEvent } from '../../../types/events';
export declare class AtMenuitemComponent {
    /**
     * Label to be displayed for the menu item
     */
    label?: string;
    /**
     * Icon to be displayed with the label
     */
    icon?: string;
    /**
     * Will change the styling of the menuitem when set
     */
    is_active?: boolean;
    /**
     * Disables user interaction with the menu-item and updates visual style to appear inactive
     */
    disabled: boolean;
    /**
     * Emits when the button is clicked
     */
    atuiClick: EventEmitter<AtEvent>;
    render(): any;
}
