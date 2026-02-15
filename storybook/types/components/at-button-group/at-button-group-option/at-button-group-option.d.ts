import { EventEmitter } from '../../../stencil-public-runtime';
import { AtEvent } from '../../../types/events';
/**
 * @category Form Controls
 * @description A button group option component for the button group.
 *
 * @Slot - Places content before the label.
 * @After - Places content after the label.
 */
export declare class AtButtonGroupOption {
    /**
     * Value of the select option
     */
    value: any;
    /**
     * Displayed text value (optional) if not provided the value will be used as a fallback
     */
    label?: string;
    /**
     * Icon to be displayed in the button
     */
    icon?: string;
    /**
     * Will disable interaction if set
     */
    disabled: boolean;
    /**
     * Will apply active styling to the button
     */
    is_active: boolean;
    el: any;
    /**
     * Emits when the button is clicked
     */
    atuiClick: EventEmitter<AtEvent>;
    host_disabled: boolean;
    private provider;
    componentDidLoad(): Promise<void>;
    handleClick(event: Event): void;
    render(): any;
}
