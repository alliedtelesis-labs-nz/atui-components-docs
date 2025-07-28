import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @category Form Controls
 * @description A numeric input component for entering numerical values.
 */
export declare class AtuiInputNumericComponent {
    /**
     * Label above the input container
     */
    label: string;
    /**
     * Short description or validation hint if required
     */
    hint_text: string;
    /**
     * Optional info icon with detailed tooltip description
     */
    info_text: string;
    /**
     * Error text displayed when invalid is set
     */
    error_text: string;
    /**
     * Placeholder text to be shown when no input is passed
     */
    placeholder: string;
    /**
     * Adds a required * to the element
     */
    required: boolean;
    /**
     * Shows the error text
     */
    invalid: boolean;
    /**
     * Makes the input read only
     */
    readonly: boolean;
    /**
     * Disables interaction with the input
     */
    disabled: boolean;
    /**
     * Min selectable value of the input.
     */
    min: number;
    /**
     * Max selectable value of the input.
     */
    max: number;
    /**
     * Interval between selections.
     */
    step?: number;
    /**
     * Show buttons inside input or outside
     */
    show_buttons: boolean;
    /**
     * The value of the input
     */
    value: number;
    inputEl: HTMLInputElement;
    el: HTMLAtuiInputElement;
    /**
     * Emits an event containing the text string or number when the input's content is changed
     */
    atuiChange: EventEmitter<string | number>;
    private inputId;
    handleChange(event: Event): void;
    handleDecrease: () => void;
    handleIncrease: () => void;
    render(): any;
}
