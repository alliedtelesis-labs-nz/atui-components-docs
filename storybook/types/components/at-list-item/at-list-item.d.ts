type Size = 'sm' | 'md' | 'lg';
/**
 * @category Layout
 * @description A list item component for data in key:value format.
 *
 * @slot title - Placed in the title position
 * @slot - PLace custom content or items before the content
 */
export declare class AtListItem {
    /**
     * Optional icon shown to the left of the list item - use mat-icon name.
     */
    icon?: string;
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
     * Border below the list item.
     */
    border?: boolean;
    get sizeClasses(): string;
    render(): any;
}
export {};
