import { EventEmitter } from '../../stencil-public-runtime';
export type BadgeSize = 'lg' | 'sm';
/**
 * @category Utilities
 * @description A chip list component for displaying collections of tags, filters, or selectable items. Supports removal, selection, and interactive chip management.
 *
 * @slot - Placed after the chips & the 'clear all' button
 */
export declare class AtuiChipList {
    /**
     * Items in the chip list.
     */
    chips: string[];
    /**
     * Disables the list of chips. Prevents removing a chip.
     */
    disabled: boolean;
    /**
     * Disables the list of chips but keeps the text readable. Prevents removing a chip.
     */
    readonly: boolean;
    /**
     * Shows the 'Clear All' button
     */
    show_clear_all: boolean;
    /**
     * Size of the chips. Determines padding and font-size. For use in input chip lists.
     */
    size: BadgeSize;
    /**
     * Emitted when the 'X' on a chip, or 'Clear All' is clicked.
     */
    atuiRemoveChip: EventEmitter<string[]>;
    keyDownHandler(event: KeyboardEvent, chipsToRemove: string[]): void;
    removeChipHandler(chipsToRemove: string[]): void;
    get getChips(): any;
    render(): any;
}
