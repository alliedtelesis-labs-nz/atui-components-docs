import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @category Form Controls
 * @description A select option component used within the AtSelect component.
 *
 * @Slot - Use this slot to add custom content inside the select option before the text.
 */
export declare class AtSelectOptionComponent {
    /**
     * Value of the select option
     */
    value: string;
    /**
     * Will apply the active styling to the select option
     */
    is_active?: boolean;
    /**
     * Emitted when the select option is clicked
     */
    atuiClick: EventEmitter<string>;
    private handleClick;
    render(): any;
}
