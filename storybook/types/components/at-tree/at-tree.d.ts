import { EventEmitter } from '../../stencil-public-runtime';
import { AtButtonSize } from '../at-button/at-button';
import { AtITreeNode } from '../../types/tree';
/**
 * @category Navigation
 * @description A tree component for displaying hierarchical data.
 * @slot - Use this slot to add custom elements before the tree navigation.
 * @slot item-content - Use this slot to add custom content inside each tree item.
 */
/**
 * ### ```interface ItemNode```
 * ```
 *  id: string;
 *  displayName: string;
 *  children: ItemNode[];
 *  isSelected?: boolean;
 *  tooltip?: string;
 * ```
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
    flattenedItemList: Array<AtITreeNode>;
    flattenedItemStyles: any[];
    handleClick: (id: string) => void;
    flattenItemList: (itemList: AtITreeNode[]) => void;
    componentWillRender(): void;
    render(): any;
}
