import { EventEmitter } from '../../stencil-public-runtime';
export interface ButtonGroupOption {
    option_id: string;
    label?: string;
    icon?: string;
    is_active?: string;
    disabled?: boolean;
    readonly?: boolean;
}
/**
 * @category Form Controls
 * @description A button group component that allows single or multiple selection from a set of toggle options. Provides a cohesive way to group related action buttons with shared styling and behavior.
 *
 * @slot - used to place your own atui-button-group-options if 'options' prop isn't set. Button changing logic will not apply.
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
    options: ButtonGroupOption[];
    /**
     * Sets the current active button
     */
    value: string;
    /**
     * Disables the button group and prevents interaction
     */
    disabled?: boolean;
    el: HTMLAtButtonGroupElement;
    private buttonGroupId;
    /**
     * When the active button is changed, this will emit the 0-based index of the active button
     */
    atuiIndexChange: EventEmitter<number>;
    /**
     * When the active button is changed, this will emit the text value of the active button
     */
    atuiChange: EventEmitter<string>;
    private buttonRefs;
    componentDidLoad(): void;
    handleChange(value: string, index: number): void;
    private setInitialActiveButton;
    render(): any;
    renderOptions(): any[];
}
