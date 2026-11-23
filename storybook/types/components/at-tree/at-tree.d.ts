import { EventEmitter } from '../../stencil-public-runtime';
import { AtButtonSize } from '../at-button/at-button';
import { AtITreeNode } from '../../types/tree';
/**
 * ### ```interface AtITreeNode```
 * ```
 *  id: string;
 *  displayName: string;
 *  children: AtITreeNode[];
 *  selected?: boolean;
 *  tooltip?: string;
 * ```
 * @category Navigation
 * @description A tree component for displaying hierarchical data.
 * @slot - Use this slot to add custom elements before the tree navigation.
 */
export declare class AtTreeComponent {
    /**
     * List of items to be displayed in the tree
     */
    item_list: AtITreeNode[];
    /**
     * Set the size of the tree button, default sm
     */
    size: AtButtonSize;
    /**
     * Emits when the button is clicked
     */
    atuiClick: EventEmitter<AtITreeNode>;
    el: HTMLAtTreeElement;
    private focusedItemId?;
    handleClick: (id: string) => void;
    private flattenVisibleItems;
    private get visibleItems();
    private tabStopId;
    private focusItem;
    private handleKeyDown;
    private renderItem;
    render(): any;
}
