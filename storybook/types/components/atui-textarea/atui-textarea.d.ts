import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @category Form Controls
 * @description A multi-line text input component for longer text content with auto-resize and validation features. Includes label, hint text, character counting, and accessibility support.
 */
export declare class AtuiTextareaComponent {
    /**
     * Label to be displayed for the textarea
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
     * Displayed when invalid is set
     */
    error_text: string;
    /**
     * Placeholder in the textarea when no text is placed
     */
    placeholder: string;
    /**
     * Adds a required * to the label
     */
    required: boolean;
    /**
     * Displays then error text when set
     */
    invalid: boolean;
    /**
     * Makes the textarea read only
     */
    readonly: boolean;
    /**
     * Disables interaction with the textarea
     */
    disabled: boolean;
    /**
     * Minimum number of rows to display
     */
    min_rows: number;
    /**
     * Maximum number of rows to expand to
     */
    max_rows: number;
    /**
     * Sets the 'autocomplete' attribute on the textarea
     */
    autocomplete: string;
    /**
     * Sets the value of the textarea
     */
    value: string;
    textareaEl: HTMLTextAreaElement;
    el: HTMLAtuiTextareaElement;
    /**
     * Emits an event containing the text string when the textarea's content is changed
     */
    atuiChange: EventEmitter<string>;
    private textareaId;
    handleChange(event: Event): void;
    render(): any;
}
