import { EventEmitter } from '../../stencil-public-runtime';
export interface RadioOption {
    option_id: string;
    label?: string;
    hint_text?: string;
    disabled?: boolean;
    readonly?: boolean;
    group?: string;
}
export type RadioLayout = 'column' | 'row' | 'grid';
/**
 * @category Form Controls
 * @description A radio button group component for selecting a single option from a predefined list. Provides grouped validation, labeling, and accessibility features for radio button collections.
 *
 * @slot - Use this slot to manually add <at-radio> elements. All <at-radio> elements added via the slot will be grouped together by the radio group.
 */
export declare class AtRadioGroup {
    /**
     * Label of the radio group.
     */
    label?: string;
    /**
     * Optional info icon with detailed tooltip description.
     * Displayed at right of label.
     */
    info_text?: string;
    /**
     * Direction that the radio elements are placed
     */
    layout?: RadioLayout;
    /**
     * Disables the radio options but keeps the text readable. Use for global readonly form state.
     */
    disabled?: boolean;
    /**
     * Disables interaction with atui-radio elements when set
     */
    readonly?: boolean;
    /**
     * Adds a required * to the label
     */
    required?: boolean;
    /**
     * Short description or validation hint if required
     */
    hint_text?: string;
    /**
     * Shown when 'invalid' prop is set
     */
    error_text?: string;
    /**
     * Shows the error text
     */
    invalid: boolean;
    /**
     * Options displayed in the radio group.
     */
    options: RadioOption[];
    /**
     * A string containing the Id of the currently selected radio
     */
    value: string;
    el: HTMLAtRadioGroupElement;
    watchValue(newValue: string): void;
    private radioEls;
    private radioGroupId;
    /**
     * Emits an event when active radio element changes. `event.detail` is the ID of the active radio
     */
    atuiChange: EventEmitter<string>;
    handleChange(optionId: string): void;
    focusAndClickRelativeRadio(relativePosition: number): void;
    handleKeyDown(event: KeyboardEvent): void;
    get getRadios(): JSX.Element[] | undefined;
    getSlottedRadios(): HTMLAtRadioElement[];
    componentDidLoad(): void;
    initializeSlottedRadios(): void;
    handleSlottedRadioChange(event: CustomEvent<string>): void;
    updateSlottedRadiosState(selectedOptionId: string): void;
    render(): JSX.Element;
}
