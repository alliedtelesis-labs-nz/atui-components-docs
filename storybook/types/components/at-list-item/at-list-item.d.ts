type Size = 'xs' | 'sm' | 'md' | 'lg';
/**
 * @category Layout
 * @description A list item component for data in key:value format.
 *
 * @slot icon - Carbon icon placed at the left of the list item
 * @slot title - Placed in the title position
 * @slot - Place custom content or items before the content
 */
export declare class AtListItem {
    /**
     * Optional prefix.
     */
    item_prefix?: string;
    /**
     * Title of the list item.
     */
    item_title: string;
    /**
     * Optional subtitle of the list item.
     */
    subtitle?: string;
    /**
     * Content of the list item placed at the right of the item.
     */
    content?: string;
    /**
     * Size of the list item.
     */
    size?: Size;
    /**
     * Applied styling for hover background color and cursor.
     */
    selectable?: boolean;
    get sizeClasses(): string;
    render(): any;
}
export {};
