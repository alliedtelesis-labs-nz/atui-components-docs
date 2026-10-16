import { EventEmitter } from '../../stencil-public-runtime';
import { AtEvent } from '../../types/events';
export type AtButtonType = 'primary' | 'primaryOutline' | 'primaryText' | 'secondary' | 'secondaryOutline' | 'secondaryText' | 'destructive' | 'destructiveOutline' | 'destructiveText';
export type AtButtonSize = 'sm' | 'md' | 'lg';
/**
 * @category Actions
 * @description A versatile button component for user interactions with multiple styling variants, sizes, and loading states. Supports icons, custom content through slots, and accessibility features.
 * @slot icon - Carbon icon placed before the label
 * @slot icon_after - Carbon icon placed after the label
 * @slot - Placed after the label, but before the icon_after. Can be used as a replacement for the label prop. Raw text should be wrapped in a `<span>` so CSS icon-only detection works correctly.
 */
export declare class AtButtonComponent {
    /**
     * If set, will request submit from the closest form element when clicked
     */
    submit: boolean;
    /**
     * Theme of the button. Default primary
     */
    type: AtButtonType;
    /**
     * Size of the button
     */
    size: AtButtonSize;
    /**
     * Label to be displayed within the button
     */
    label: string;
    /**
     * When set the button is styled as disabled and ignores clicks, Enter and Space. It stays
     * focusable and hoverable so an `at-tooltip` on it can say why it is disabled.
     */
    disabled: boolean;
    /**
     * When set, will display a loading spinner inside the button and hide all labels & icons.
     * The button never clears it: set it back to false when the work finishes.
     */
    in_progress: boolean;
    /**
     * Minimum time in ms the spinner stays visible once shown. If `in_progress` is cleared
     * sooner, the spinner stays up for the remainder.
     */
    spinner_delay_ms: number;
    el: HTMLAtButtonElement;
    /**
     * Emits when the button is clicked
     */
    atuiClick: EventEmitter<AtEvent>;
    isHoldingSpinner: boolean;
    private spinnerShownAt;
    private spinnerReleaseTimer;
    get isSpinnerVisible(): boolean;
    holdSpinnerForMinimumDisplay(isInProgress: boolean): void;
    private cancelSpinnerRelease;
    private releaseSpinner;
    blockClickWhileDisabled(event: MouseEvent): void;
    blockActivationKeysWhileDisabled(event: KeyboardEvent): void;
    handleClick(event: Event): void;
    handleKeyDown(event: KeyboardEvent): void;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
