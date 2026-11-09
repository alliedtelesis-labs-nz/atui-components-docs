import { EventEmitter } from '../../stencil-public-runtime';
export interface AtIButtonGroupOption {
    value: any;
    label?: string;
    icon?: string;
    is_active?: boolean;
    disabled?: boolean;
}
/**
 * @category Form Controls
 * @description A button group component that allows single or multiple selection from a set of toggle options. Single selection uses `value` and `atuiChange`. Set `multiple` for multiple selection, which uses `values` and `atuiValuesChange`.
 *
 * @slot - used to place your own at-button-group-options if 'options' prop isn't set. Parent will manage button selection and emit change events.
 */
export declare class AtButtonGroup {
    /**
     * Label for button group.
     */
    label?: string;
    /**
     * Optional info icon with detailed tooltip description.
     *
     * Displayed at right of label.
     */
    info_text?: string;
    /**
     * Hint for options.
     */
    hint_text?: string;
    /**
     * Error text for invalid choices.
     */
    error_text?: string;
    /**
     * List of options to be displayed on the button group.
     */
    options: AtIButtonGroupOption[];
    /**
     * Sets the current active button
     */
    value: string;
    /**
     * Disables the button group and prevents interaction
     */
    disabled?: boolean;
    /**
     * Lets each option toggle on and off independently. The selection is held in `values` and
     * reported by `atuiValuesChange`, and the group is announced as a group of checkboxes.
     */
    multiple: boolean;
    /**
     * The selected option values when `multiple` is set.
     */
    values: string[];
    el: HTMLAtButtonGroupElement;
    private buttonGroupId;
    private labelId;
    /**
     * When the active button is changed, this will emit the 0-based index of the active button
     */
    atuiIndexChange: EventEmitter<number>;
    /**
     * When the active button is changed, this will emit the text value of the active button
     */
    atuiChange: EventEmitter<string>;
    /**
     * When `multiple` is set and an option is toggled, this will emit the selected values in option order
     */
    atuiValuesChange: EventEmitter<string[]>;
    buttonEls: HTMLAtButtonGroupOptionElement[];
    /**
     * What each slotted option asked for on its own, so the group's `disabled`
     * can be lifted again without re-enabling an option that was never meant to
     * be interactive.
     */
    private optionOwnDisabled;
    handleDisabledChange(): void;
    handleValueChange(newValue: any): void;
    handleValuesChange(): void;
    handleMultipleChange(): void;
    private isSelected;
    private syncMultipleSelection;
    componentDidLoad(): void;
    getButtonElements(): HTMLAtButtonGroupOptionElement[];
    initializeButtons(): void;
    private applyDisabledToButtons;
    attachEventListenersToButtons(): void;
    activateOptionButton(): void;
    private isBoundValue;
    get getButtonGroupOptions(): any;
    handleChange(event: CustomEvent, optionValue: any, index: number): void;
    private optionOrder;
    private toggleValue;
    render(): any;
}
