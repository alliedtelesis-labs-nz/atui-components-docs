import { EventEmitter } from '../../stencil-public-runtime';
import { ButtonSize } from '../at-button/at-button';
import { TreeNode } from '../../types/tree';
/**
 * @category Navigation
 * @description A tree component for displaying hierarchical data.
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
    item_list: TreeNode[];
    /**
     * Set the size of the tree button, default sm
     */
    size: ButtonSize;
    /**
     * Emits when the button is clicked
     */
    atuiClick: EventEmitter<TreeNode>;
    flattenedItemList: Array<TreeNode>;
    flattenedItemStyles: any[];
    handleClick: (id: string) => void;
    flattenItemList: (itemList: TreeNode[]) => void;
    componentWillRender(): void;
    render(): any;
}
