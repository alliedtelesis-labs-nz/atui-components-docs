declare const _default: {
    title: string;
};
export default _default;
export declare const Default: any;
/**
 * Persistent facets belong in the `filter-bar` slot, beside the search field.
 * They stay visible whether or not anything is selected, which is what separates
 * them from the ad-hoc conditions authored in the query builder.
 *
 * One container owns the spacing between the controls; the facets can equally be
 * assigned to the slot as siblings, as `filter-bar-table` in the Angular example
 * does.
 */
export declare const WithFilterBar: any;
/**
 * `search_filters` is the host's own filter state, displayed in the table's chip
 * row so one place records everything currently applied. The table does not own
 * those conditions: removing such a chip emits `atExternalFiltersChange` carrying
 * the tree without them, and the removal takes effect only when the host assigns
 * it back. Pass `search_filters` without handling the event and the chip's remove
 * button does nothing - the two halves are optional together, not separately.
 */
export declare const ExternalFilters: any;
/**
 * Selection is opt-in twice over: `row_selection` is off by default, and the
 * checkbox column renders only when `row_id_field` names the field identifying a
 * row - a selection that outlives a page change cannot be held by row position.
 *
 * The bar reports what an action would affect. Ticking the header takes the page;
 * once the whole page is held the bar offers the rest of the result set, and only
 * then, because that is the point at which the user has asked for more than they
 * can see.
 */
export declare const RowSelection: any;
/**
 * The same selection against a server-side table. `scope` is what a host must
 * branch on: `explicit` carries the ids the user picked, while `all-matching`
 * carries the query the selection was made against plus any rows unticked after
 * expanding. Sending 847 ids the browser never received is exactly what this
 * avoids - and a paged query handed to a bulk endpoint would act on one page of
 * the set, so the query travels without paging.
 */
export declare const ServerSideRowSelection: any;
/**
 * The same selection bar, floating. The slot chosen is the switch: put actions in
 * `multi-select-actions` and the bar is an inline strip above the table; put them
 * in `floating-multi-select-actions` and it becomes a manual popover in the top
 * layer, centred over the page and staying put while the table scrolls beneath.
 *
 * Use for a table long enough that an inline bar scrolls out of reach, which is
 * the case the top layer exists to answer - ag-grid's own transformed viewport
 * would otherwise clip a bar positioned over it.
 *
 * It is dismissed by clearing the selection and by nothing else: the popover is
 * `manual`, so clicking the table to pick more rows does not close the thing
 * describing that selection, and neither does Escape.
 */
export declare const FloatingActionBar: any;
