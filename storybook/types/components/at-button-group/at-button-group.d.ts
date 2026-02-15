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
 * @description A button group component that allows single or multiple selection from a set of toggle options. Provides a cohesive way to group related action buttons with shared styling and behavior.
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
     * Defines the emit type defaults to string. Boolean shoudl be used when you are
     */
    type?: 'string' | 'bool';
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
    buttonEls: HTMLAtButtonGroupOptionElement[];
    handleValueChange(newValue: any): void;
    componentDidLoad(): void;
    getButtonElements(): HTMLAtButtonGroupOptionElement[];
    initializeButtons(): void;
    attachEventListenersToButtons(): void;
    activateOptionButton(): void;
    get getButtonGroupOptions(): any;
    handleChange(event: CustomEvent, optionValue: any, index: number): void;
    /**
     * Handles keyboard navigation for all button options.
     */
    private handleKeyDown;
    disconnectedCallback(): void;
    render(): any;
}
