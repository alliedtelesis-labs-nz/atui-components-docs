import { EventEmitter } from '../../stencil-public-runtime';
export declare class AtInputDate {
    /**
     * Earliest selectable date. The calendar disables earlier days, and a typed
     * date outside `min_date` and `max_date` shows a range error once the field
     * loses focus.
     */
    min_date: Date;
    /**
     * Latest selectable date. The calendar disables later days, and a typed
     * date outside `min_date` and `max_date` shows a range error once the field
     * loses focus.
     */
    max_date: Date;
    /**
     * Label text displayed above the date picker
     */
    label?: string;
    /**
     * Short description or validation hint if required
     */
    hint_text: string;
    /**
     * Optional info icon with detailed tooltip description
     */
    info_text?: string;
    /**
     * Error text displayed when invalid is set
     */
    error_text: string;
    /**
     * Current value of the selected date
     */
    value: Date;
    /**
     * Adds a required * to the element
     */
    required: boolean;
    /**
     * Shows the error state styling and `error_text`. The host owns this: the
     * component never sets it. The component shows its own range error for a
     * date outside `min_date` and `max_date`, and leaves `required` to the
     * host. A partly typed date counts as empty and emits `atuiChange` with
     * null.
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
     * Accessible name for the input. Use when a shared column header supplies the
     * visible label and `label` is therefore left unset.
     */
    aria_label: string;
    selectedDate: string;
    translations: any;
    private hasLeftField;
    el: any;
    private inputId;
    /**
     * Emitted when the date selection changes. Emits `null` when the date is cleared.
     */
    atuiChange: EventEmitter<Date | null>;
    componentWillLoad(): Promise<void>;
    watchValue(newValue: Date | null): void;
    componentWillRender(): void;
    private formatBound;
    private get hasMinBound();
    private get hasMaxBound();
    private get isOutOfRange();
    private displayBound;
    private get rangeErrorText();
    private get errorText();
    render(): any;
}
