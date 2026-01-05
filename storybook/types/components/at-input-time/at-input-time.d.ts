import { EventEmitter } from '../../stencil-public-runtime';
export declare class AtInputTime {
    el: HTMLElement;
    /** Current value in "HH:MM" or "HH:MM:SS" */
    value?: string;
    /** Minimum time (e.g., "08:00") */
    min?: string;
    /** Maximum time (e.g., "18:30") */
    max?: string;
    /** Required flag */
    required?: boolean;
    /** Step in seconds (e.g., 60 for minute granularity, 1 to allow seconds) */
    step?: number;
    /** Disabled flag */
    disabled?: boolean;
    /** Readonly flag */
    readonly?: boolean;
    /** Label text displayed above the input */
    label?: string;
    /** Short description or validation hint displayed under the label */
    hint_text?: string;
    /** Optional info icon tooltip text (used by at-form-label) */
    info_text?: string;
    /** Error text displayed when invalid is set */
    error_text?: string;
    /** Shows the error state styling and error text */
    invalid?: boolean;
    /** Emits when value changes (normalized string or null) */
    atuiChange: EventEmitter<string | null>;
    private inputId;
    private normalizeTimeString;
    private onInput;
    render(): any;
}
