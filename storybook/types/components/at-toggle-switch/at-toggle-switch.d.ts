import { EventEmitter } from '../../stencil-public-runtime';
export type AtLabelPosition = 'before' | 'after';
/**
 * @category Form Controls
 * @description A toggle switch component for binary on/off selections. Provides accessible alternative to checkboxes with visual toggle behavior.
 * @slot label -  place before "form label" to add custom label content.
 */
export declare class AtToggleSwitchComponent {
    /**
     * Label displayed alongside the toggle.
     */
    label?: string;
    /**
     * Short description or validation hint if required.
     */
    hint_text?: string;
    /**
     * Position of the label, left or right of the toggle.
     */
    label_position: AtLabelPosition;
    /**
     * Show the toggle label.
     */
    show_label?: boolean;
    /**
     * Disable interaction with the toggle.
     */
    disabled?: boolean;
    /**
     * Set the toggles state.
     */
    value: boolean;
    inputEl: HTMLInputElement;
    private toggleId;
    /**
     * Emits an event when toggled with `event.detail` being true if the switch is enabled
     */
    atuiChange: EventEmitter<boolean>;
    onToggle(change: boolean): void;
    render(): any;
}
