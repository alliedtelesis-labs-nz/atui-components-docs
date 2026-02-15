import { EventEmitter } from '../../stencil-public-runtime';
import { AtEvent } from '../../types/events';
export interface AtIListSelectorItem {
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
export declare class AtListSelector {
    /**
     * List of items.
     */
    options: AtIListSelectorItem[];
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
    atuiChange: EventEmitter<AtIListSelectorItem>;
    /**
     * Emits when event when the info button of an item is clicked
     */
    atuiInfoButtonClick: EventEmitter<AtEvent>;
    el: HTMLAtListSelectorElement;
    listItemEls: HTMLAtListSelectorItemElement[];
    onSelect(item: AtIListSelectorItem): void;
    onClickInfoButton(event: Event): void;
    focusAndClickRelativeItem(relativePosition: number): void;
    handleKeyDown(event: KeyboardEvent): void;
    get getListItems(): any;
    render(): any;
}
