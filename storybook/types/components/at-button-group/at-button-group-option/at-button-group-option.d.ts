import { EventEmitter } from '../../../stencil-public-runtime';
import { AtEvent } from '../../../types/events';
/**
 * @category Form Controls
 * @description A button group option component for the button group.
 */
export declare class AtButtonGroupOption {
    /**
     * ID of the button element and its option
     */
    option_id?: string;
    /**
     * String to be displayed in the button
     */
    label: string;
    /**
     * Icon to be displayed in the button
     */
    icon: string;
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
    render(): any;
}
