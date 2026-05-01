import { EventEmitter } from '../../../stencil-public-runtime';
import { AtEvent } from '../../../types/events';
/**
 * @category Form Controls
 * @description A button group option component for the button group.
 *
 * @slot icon - Carbon icon placed before the label.
 * @slot - Places content before the label.
 * @slot after - Places content after the label.
 */
export declare class AtButtonGroupOption {
    /**
     * Value of the select option
     */
    value: string;
    /**
     * Displayed text value (optional) if not provided the value will be used as a fallback
     */
    label?: string;
    /**
     * Will disable interaction if set
     */
    disabled: boolean;
    /**
     * Will apply active styling to the button
     */
    is_active: boolean;
    el: any;
    /**
     * Emits when the button is clicked
     */
    atuiClick: EventEmitter<AtEvent>;
    host_disabled: boolean;
    private provider;
    componentDidLoad(): Promise<void>;
    handleClick(event: Event): void;
    handleKeydown(event: KeyboardEvent): void;
    private hasIcon;
    render(): any;
}
