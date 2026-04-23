/**
 * @category Navigation
 * @description A list selector item component for the list selector.
 * @internal
 *
 * @slot icon - Carbon icon placed at the left of the list item
 * @slot badge - Placed after the item-title
 * @slot info - Placed after the subtitle
 * @slot - Placed at the end the of the element
 */
export declare class AtListSelectorItem {
    /**
     * Id of the list item
     */
    item_id: string;
    /**
     * Title of the list item.
     */
    item_title: string;
    /**
     * Optional subtitle of the list item.
     */
    subtitle?: string;
    /**
     * Optional prefix.
     */
    item_prefix?: string;
    /**
     * Border below the list item.
     */
    has_border?: boolean;
    /**
     * Visual indication of the selected item.
     */
    is_selected?: boolean;
    render(): any;
}
