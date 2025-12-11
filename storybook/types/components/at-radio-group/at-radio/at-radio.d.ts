import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @category Form Controls
 * @description A radio button component for selecting a single option from a predefined list.
 *
 * @slot - Placed below the title/subtitle
 */
export declare class AtRadio {
    el: HTMLElement;
    /**
     * Title of the radio component.
     */
    label?: string;
    /**
     * Subtitle of the radio component.
     */
    hint_text?: string;
    /**
     * Sets the value of the checkbox
     */
    value?: boolean;
    /**
     * ID of the radio button element and its option
     */
    option_id?: string;
    /**
     * Name of radio group.
     * Buttons sharing a name are associated with the same radio group.
     */
    group?: string;
    /**
     * Disables interaction with the radio
     */
    disabled?: boolean;
    /**
     * Disables the radio option but keeps the text readable. Used for global readonly form state.
     */
    readonly: boolean;
    radioEl: HTMLInputElement;
    /**
     * Emits the current state of the radio when clicked.
     */
    atuiChange: EventEmitter<string>;
    handleChange(): void;
    handleKeyDown(event: KeyboardEvent): void;
    render(): JSX.Element;
}
