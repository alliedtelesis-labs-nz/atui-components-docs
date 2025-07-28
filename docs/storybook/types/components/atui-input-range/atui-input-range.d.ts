import { EventEmitter } from '../../stencil-public-runtime';
export type InputPosition = 'before' | 'after';
/**
 * @category Form Controls
 * @description A range input component for selecting a value within a specified range.
 */
export declare class AtuiInputRangeComponent {
    /**
     * Label of the input.
     */
    label?: string;
    /**
     * Short description or validation hint if required.
     */
    hint_text?: string;
    /**
     * Info icon with detailed tooltip description if required. Content is available via info icon tooltip.
     */
    info_text?: string;
    /**
     * suffix message for the input.
     */
    suffix?: string;
    /**
     * Warning message for the input.
     */
    warning_text?: string;
    /**
     *
     * Error message visible when input is invalid.
     */
    error_text?: string;
    /**
     * Set the input to an invalid state.
     */
    invalid?: boolean;
    /**
     * Set the input to a readonly state.
     */
    readonly?: boolean;
    /**
     * Disable user interaction. Disabled state should be applied via form control.
     */
    disabled?: boolean;
    /**
     * Indicated form field is required.
     */
    required?: boolean;
    /**
     * Numeric value of the slider component.
     */
    get value(): number;
    set value(val: number);
    private _value;
    /**
     * Min selectable value of the slider.
     */
    min: number;
    /**
     * Max selectable value of the slider.
     */
    max: number;
    /**
     * Interval between selections.
     */
    step?: number;
    /**
     * Display min and max text values.
     */
    show_minmax?: boolean;
    /**
     * Display step indicators.
     */
    show_ticks?: boolean;
    /**
     * Display order of input and slider.
     */
    show_value?: boolean;
    /**
     * Display numeric input with slider.
     */
    show_input?: boolean;
    /**
     * Position of the numeric input, left or right of the slider.
     */
    label_position: InputPosition;
    /**
     * Emits an event containing the current value when the text input or slider input's content is changed
     */
    atuiChange: EventEmitter<number>;
    el: HTMLElement;
    private sliderContainerRef;
    private sliderId;
    onChange(inputVal: number): void;
    render(): any;
}
