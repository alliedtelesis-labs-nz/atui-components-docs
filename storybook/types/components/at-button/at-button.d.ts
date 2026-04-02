import { EventEmitter } from '../../stencil-public-runtime';
import { LoadingType } from '../at-loading/at-loading';
import { AtEvent } from '../../types/events';
export type ButtonType = 'primary' | 'primaryOutline' | 'primaryText' | 'secondary' | 'secondaryOutline' | 'secondaryText' | 'destructive' | 'destructiveOutline' | 'destructiveText';
export type ButtonSize = 'sm' | 'md' | 'lg';
/**
 * @category Actions
 * @description A versatile button component for user interactions with multiple styling variants, sizes, and loading states. Supports icons, custom content through slots, and accessibility features.
 *
 * @slot - Placed after the label, but before the icon_right. Can be used as a replacement for the label prop.
 */
export declare class AtButtonComponent {
    /**
     * If set, will request submit from the closest form element when clicked
     */
    submit: boolean;
    /**
     * Styling of the button
     */
    type: ButtonType;
    /**
     * Size of the button
     */
    size: ButtonSize;
    /**
     * Label to be displayed within the button
     */
    label: string;
    /**
     * When set the button's styling will change and will no longer be interactive
     */
    disabled: boolean;
    /**
     * Material icon to be displayed before the label within the button
     */
    icon?: string;
    /**
     * Material icon to be displayed after the label within the button
     */
    icon_after?: string;
    /**
     * When set, will display a loading spinner inside the button and hide all labels & icons
     */
    in_progress: boolean;
    /**
     * Delay period on spinner
     */
    spinner_delay_ms: number;
    el: HTMLAtButtonElement;
    /**
     * Emits when the button is clicked
     */
    atuiClick: EventEmitter<AtEvent>;
    canHideSpinner: boolean;
    get spinnerColour(): LoadingType;
    private hideSpinnerIfAfterMinimumDisplayPeriod;
    private setSpinner;
    handleClick(event: Event): void;
    handleKeyDown(event: KeyboardEvent): void;
    componentWillUpdate(): void;
    render(): any;
}
