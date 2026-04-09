import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @category Form Controls
 * @description A checkbox component for selecting a single option from a predefined list. Provides validation, labeling, and accessibility features for checkbox collections.
 *
 * @slot - Placed after the title & subtitle elements.
 */
export declare class AtCheckbox {
    el: HTMLElement;
    /**
     * Title of the checkbox component.
     */
    label?: string;
    /**
     * Subtitle of the checkbox component.
     */
    hint_text?: string;
    /**
     * Id of the checkbox.
     */
    value?: string;
    /**
     * State of the checkbox
     */
    checked?: boolean;
    /**
     * Disables interaction with the checkbox
     */
    disabled: boolean;
    checkboxEl: HTMLInputElement;
    /**
     * When the checkbox is toggled, this will emit true if the current value is checked, vice versa.
     */
    atuiChange: EventEmitter<boolean>;
    handleChange(value: any): void;
    render(): any;
}
