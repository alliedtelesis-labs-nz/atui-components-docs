import { EventEmitter } from '../../stencil-public-runtime';
export declare class AtInputTime {
    el: HTMLElement;
    /** Current value in "HH:MM" or "HH:MM:SS" */
    value?: string;
    /**
     * Earliest time the user can enter (e.g., "08:00"). A typed time outside
     * `min` and `max` shows a range error once the field loses focus.
     */
    min?: string;
    /**
     * Latest time the user can enter (e.g., "18:30"). A typed time outside
     * `min` and `max` shows a range error once the field loses focus.
     */
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
    /**
     * Shows the error state styling and `error_text`. The host owns this: the
     * component never sets it. The component shows its own range error for a
     * time outside `min` and `max`, and leaves `required` to the host. A partly
     * typed time counts as empty and emits `atuiChange` with no value.
     */
    invalid?: boolean;
    private hasLeftField;
    private translations;
    /**
     * Accessible name for the input. Use when a shared column header supplies the
     * visible label and `label` is therefore left unset.
     */
    aria_label: string;
    /** Emits when value changes (normalized string or null) */
    atuiChange: EventEmitter<string | null>;
    private inputId;
    private normalizeTimeString;
    componentWillLoad(): Promise<void>;
    private get isOutOfRange();
    private get rangeErrorText();
    private get errorText();
    private onBlur;
    private onInput;
    render(): any;
}
