import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @category Form Controls
 * @description A toggle switch component for binary on/off selections. Provides accessible alternative to checkboxes with visual toggle behavior.
 * @slot label -  place before "form label" to add custom label content.
 */
export declare class AtButtonSwitchComponent {
    /**
     * Label displayed alongside the toggle.
     */
    label?: string;
    /**
     * Optional info icon with detailed tooltip description.
     *
     * Displayed at right of label.
     */
    info_text?: string;
    /**
     * Short description or validation hint if required.
     */
    hint_text?: string;
    /**
     * Disable interaction with the toggle.
     */
    disabled?: boolean;
    /**
     * Set the toggles state.
     */
    value: boolean;
    el: HTMLElement;
    translations: any;
    private toggleId;
    /**
     * Emits an event when toggled with `event.detail` being true if the switch is enabled
     */
    atuiChange: EventEmitter<boolean>;
    componentWillLoad(): void;
    onToggle(change: boolean): void;
    render(): any;
}
