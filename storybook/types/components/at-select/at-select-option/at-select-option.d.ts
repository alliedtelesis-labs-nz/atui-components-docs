import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @category Form Controls
 * @description A select option component used within the AtSelect component.
 *
 * @Slot - Places content before the label.
 * @After - Places content after the label.
 */
export declare class AtSelectOptionComponent {
    /**
     * Value of the select option
     */
    value: any;
    /**
     * Displayed text value (optional) if not provided the value will be used as a fallback
     */
    label?: string;
    /**
     * Indicates if the option is part of an option group
     */
    option_group?: boolean;
    /**
     * Will apply the active styling to the select option
     */
    is_active?: boolean;
    /**
     *  Will disable interaction if set
     */
    disabled?: boolean;
    /**
     * Emitted when the select option is clicked
     */
    atuiClick: EventEmitter<string>;
    private handleClick;
    render(): any;
}
