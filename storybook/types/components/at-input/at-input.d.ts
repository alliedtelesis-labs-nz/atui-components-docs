import { EventEmitter } from '../../stencil-public-runtime';
export type AtInputType = 'text' | 'url' | 'email' | 'password';
/**
 * @category Form Controls
 * @description A comprehensive text input component with label, validation, hints, and accessibility features. Supports multiple input types, clearable functionality, and integrates with form validation.
 * @slot label -  Place before "form label" to add custom label content.
 * @slot input-actions - Place inside the input container to add custom action elements (e.g., icons, buttons) next to the input field.
 */
export declare class AtInputComponent {
    /**
     * Label above the input container
     */
    label: string;
    /**
     * Type of the input
     */
    type: AtInputType;
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
    placeholder: string | number;
    /**
     * Adds a required * to the element
     */
    required: boolean;
    /**
     * Shows the error text
     */
    invalid: boolean;
    /**
     * Sets the 'autocomplete' attribute on the input element
     */
    autocomplete: string;
    /**
     * Makes the input read only
     */
    readonly: boolean;
    /**
     * Disables interaction with the input
     */
    disabled: boolean;
    /**
     * Allows the input to be cleared with a 'x' at the end of the input element
     */
    clearable: boolean;
    /**
     * The value of the input
     */
    value: string;
    inputEl: HTMLInputElement;
    el: HTMLAtInputElement;
    /**
     * Emits an event containing the text string or number when the input's content is changed
     */
    atuiChange: EventEmitter<string | number>;
    private inputId;
    handleChange(event: Event): void;
    handleClear(): void;
    render(): any;
}
