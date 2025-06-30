import { EventEmitter } from '../../stencil-public-runtime';
export interface ListSelectorItem {
    id: string;
    title: string;
    subtitle?: string;
    icon?: string;
    tooltip?: string;
    prefix?: string;
    badgeText?: string;
    badgeTooltip?: string;
    hasInfoButton?: boolean;
}
/**
 * @category Navigation
 * @description A list selector component for selecting an item from a list.
 *
 * @slot - Placed after the list items
 */
export declare class AtuiListSelector {
    /**
     * List of items.
     */
    options: ListSelectorItem[];
    /**
     * The selected item.
     */
    selected_item_id: string;
    /**
     * Whether each item has a bottom border.
     */
    has_border: boolean;
    /**
     * Emits an event when the selected item is changed, the `event.detail` is the ListSelectorItem
     */
    atuiChange: EventEmitter<ListSelectorItem>;
    /**
     * Emits when event the when info button of an item is clicked
     */
    atuiClickInfoButton: EventEmitter<any>;
    el: HTMLAtuiListSelectorElement;
    listItemEls: HTMLAtuiListSelectorItemElement[];
    onSelect(item: ListSelectorItem): void;
    onClickInfoButton(): void;
    focusAndClickRelativeItem(relativePosition: number): void;
    handleKeyDown(event: KeyboardEvent): void;
    get getListItems(): any;
    render(): any;
}
