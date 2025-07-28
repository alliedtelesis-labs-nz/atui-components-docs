import { EventEmitter } from '../../../stencil-public-runtime';
import { AtuiEvent } from '../../../types/events';
export type TreeItemSize = 'sm' | 'md' | 'lg';
/**
 * @slot - Placed after the label, content is positioned at far right.
 */
export declare class AtuiTreeItemComponent {
    /**
     * Size of the button
     */
    size: TreeItemSize;
    /**
     * Label to be displayed within the button
     */
    label: string;
    /**
     * Defines the indent of the tree item
     */
    depth?: number;
    /**
     * Determines whether to add the arrow indicator icon
     */
    has_children?: boolean;
    /**
     * Determines the direction of the indicator arrow
     */
    selected?: boolean;
    /**
     * When set the button's styling will change and will no longer be interactive
     */
    disabled?: boolean;
    el: HTMLAtuiTreeItemElement;
    /**
     * Emits when the button is clicked
     */
    atuiClick: EventEmitter<AtuiEvent>;
    handleClick(event: Event): void;
    handleKeyDown(event: KeyboardEvent): void;
    render(): any;
}
