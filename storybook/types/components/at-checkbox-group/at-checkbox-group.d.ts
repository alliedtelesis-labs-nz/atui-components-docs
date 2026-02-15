import { EventEmitter } from '../../stencil-public-runtime';
export interface AtICheckboxOptions {
    option_id: string;
    label?: string;
    hint_text?: string;
    value?: boolean;
}
export type AtCheckboxLayout = 'column' | 'row' | 'grid';
/**
 * ### ```interface CheckboxOptions```
 * ```
 *  id: string;
 *  label?: string;
 *  hint_text?: string;
 *  value?: boolean;
 * ```
 *
 * @category Form Controls
 * @description A checkbox group component for selecting multiple options from a predefined list. Provides grouped validation, labeling, and accessibility features for checkbox collections.
 * @slot - Used to place checkboxes manually when 'options' property is not set.
 */
export declare class AtCheckboxGroup {
    /**
     * Label of the checkbox group.
     */
    label?: string;
    /**
     * Info icon with detailed tooltip description. Displayed at right of label.
     */
    info_text?: string;
    /**
     * Hint to be placed below the label
     */
    hint_text?: string;
    /**
     * Displayed when the input is invalid
     */
    error_text?: string;
    /**
     * Disables interaction with the checkbox
     */
    disabled?: boolean;
    /**
     * Shows the error text
     */
    invalid?: boolean;
    /**
     * Adds a required * to the label
     */
    required?: boolean;
    /**
     * Options displayed in the checkbox group.
     */
    options: AtICheckboxOptions[];
    updateSelected(): void;
    /**
     * Sets the layout of the checkbox-group
     */
    layout?: AtCheckboxLayout;
    /**
     * A list of strings, containing the Id's of the currently selected checkboxes
     */
    value: string[];
    el: HTMLAtCheckboxGroupElement;
    checkboxEls: HTMLAtCheckboxElement[];
    /**
     * Emits an event containing the 'selected' prop when changed
     */
    atuiChange: EventEmitter<string[]>;
    private formControlSelected;
    componentDidLoad(): void;
    get getCheckBoxes(): any;
    handleChange(event: CustomEvent, checkboxId: string): void;
    render(): any;
}
/**
 * @category Form Controls
 * @description A checkbox group component for selecting multiple options from a predefined list. Provides grouped validation, labeling, and accessibility features for checkbox collections.
 *
 * @slot - Used to place checkboxes manually when 'options' property is not set.
 */
