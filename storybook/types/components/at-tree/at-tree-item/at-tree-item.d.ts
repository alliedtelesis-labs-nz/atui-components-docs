import { EventEmitter } from '../../../stencil-public-runtime';
import { AtEvent } from '../../../types/events';
export type AtTreeItemSize = 'sm' | 'md' | 'lg';
/**
 * @slot - Placed after the label, content is positioned at far right.
 */
export declare class AtTreeItemComponent {
    /**
     * Size of the button
     */
    size: AtTreeItemSize;
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
    el: HTMLAtTreeItemElement;
    /**
     * Emits when the button is clicked
     */
    atuiClick: EventEmitter<AtEvent>;
    handleClick(event: Event): void;
    handleKeyDown(event: KeyboardEvent): void;
    render(): any;
}
