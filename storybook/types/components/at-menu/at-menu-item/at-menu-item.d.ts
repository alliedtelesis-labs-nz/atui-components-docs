import { EventEmitter } from '../../../stencil-public-runtime';
import { AtEvent } from '../../../types/events';
/**
 * @category Form Controls
 * @description A menu item component for use within dropdowns, context menus, or navigation lists. Supports icons, active/disabled states, and custom slot content. Emits an event when selected.
 *
 * @slot icon - Carbon icon displayed at the left of the menu item
 * @slot - Use this slot to add custom elements (e.g., icons, badges, actions) after the label section of the menu item. This allows for flexible extension of the menu item content.
 * @slot actions - Use this slot to add custom elements (e.g., icons, badges, actions) at the far right of the menu item.
 */
export declare class AtMenuitemComponent {
    /**
     * Label to be displayed for the menu item
     */
    label?: string;
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
