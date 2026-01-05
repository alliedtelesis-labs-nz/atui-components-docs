import { EventEmitter } from '../../stencil-public-runtime';
export declare class AtInputDate {
    /**
     * Minimum selectable date
     */
    min_date: Date;
    /**
     * Maximum selectable date
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
    selectedDate: string;
    translations: any;
    el: any;
    private inputId;
    /**
     * Emitted when the date selection changes
     */
    atuiChange: EventEmitter<Date>;
    componentWillLoad(): Promise<void>;
    componentWillRender(): void;
    render(): any;
}
