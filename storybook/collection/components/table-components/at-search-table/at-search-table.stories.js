const Template = (args) => `
<at-search-table page_size=${args.page_size ?? 10} />
<script>
document.querySelector('at-search-table').table_data = ${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-search-table').col_defs = ${JSON.stringify(args.col_defs, null, 4)}
</script>
`;
const FilterBarTemplate = (args) => `
<at-search-table id="filter-bar-table" page_size=${args.page_size ?? 10}>
    <div class="flex items-end gap-8" slot="filter-bar">
        <at-select class="w-input-sm" label="Status" id="status-facet"></at-select>
        <at-multi-select class="w-input-sm" label="Region" placeholder="Region" selection_display="count" id="region-facet"></at-multi-select>
    </div>
</at-search-table>
<script>
const table = document.querySelector('#filter-bar-table');
table.table_data = ${JSON.stringify(args.table_data, null, 4)}
table.col_defs = ${JSON.stringify(args.col_defs, null, 4)}
document.querySelector('#status-facet').options = [
    { label: 'Any status', value: 'any' },
    { label: 'Active', value: 'active' },
    { label: 'Retired', value: 'retired' },
]
document.querySelector('#region-facet').options = [
    { label: 'North', value: 'north' },
    { label: 'South', value: 'south' },
]
</script>
`;
const ExternalFiltersTemplate = (args) => `
<at-search-table id="external-filters-table" page_size=${args.page_size ?? 10} show_table_filters>
    <div class="flex items-end gap-8" slot="filter-bar">
        <at-multi-select class="w-input-sm" label="Region" placeholder="Region" selection_display="count" id="external-region"></at-multi-select>
    </div>
</at-search-table>
<script>
const externalTable = document.querySelector('#external-filters-table');
const regionFacet = document.querySelector('#external-region');
externalTable.table_data = ${JSON.stringify(args.table_data, null, 4)}
externalTable.col_defs = ${JSON.stringify(args.col_defs, null, 4)}
regionFacet.options = [
    { label: 'North', value: 'north' },
    { label: 'South', value: 'south' },
]

const toFilterTree = (regions) => ({
    id: 'root',
    logical_operator: 'And',
    children: regions.map((region) => ({
        id: 'region',
        value: region,
        operator: 'is',
        label: 'Region',
    })),
});

regionFacet.value = ['north', 'south'];
externalTable.search_filters = toFilterTree(regionFacet.value);

regionFacet.addEventListener('atuiChange', (event) => {
    externalTable.search_filters = toFilterTree(event.detail ?? []);
});

// The table never edits a prop it does not own: removing one of its chips is a
// request, and the selection only really goes away once the host applies it.
externalTable.addEventListener('atExternalFiltersChange', (event) => {
    externalTable.search_filters = event.detail.filters;
    regionFacet.value = event.detail.filters.children.map((condition) => condition.value);
});
</script>
`;
/**
 * Client-side: the table holds every row, so an expansion to "all matching" can be
 * answered from what it already has.
 */
const RowSelectionTemplate = (args) => `
<at-search-table
    id="selection-table"
    page_size=${args.page_size ?? 5}
    row_selection
    row_id_field="_id"
    row_noun="device"
    row_noun_plural="devices"
>
    <div class="flex gap-8" slot="multi-select-actions">
        <at-button size="sm" type="secondaryOutline" label="Export"></at-button>
        <at-button size="sm" type="secondaryOutline" label="Archive"></at-button>
    </div>
</at-search-table>
<pre id="selection-readout" class="mt-16 text-xs"></pre>
<script>
const selectionTable = document.querySelector('#selection-table');
selectionTable.table_data = ${JSON.stringify(args.table_data, null, 4)}
selectionTable.col_defs = ${JSON.stringify(args.col_defs, null, 4)}

// A row the host refuses: its checkbox renders disabled and "select all on page"
// steps over it rather than silently including it.
selectionTable.row_selectable = (row) => row._id !== '2';

selectionTable.addEventListener('atSelectionChange', (event) => {
    const { scope, count, ids, excluded_ids } = event.detail;
    document.querySelector('#selection-readout').textContent =
        'scope: ' + scope + '  count: ' + count +
        '  ids: [' + ids.join(', ') + ']' +
        '  excluded: [' + excluded_ids.join(', ') + ']';
});
</script>
`;
/**
 * Server-side: the table holds one page and the host owns the rest. The selection
 * cannot be a list of ids the browser has never seen, so expanding it carries the
 * query instead.
 */
const ServerSelectionTemplate = (args) => `
<at-search-table
    id="server-selection-table"
    page_size=${args.page_size ?? 5}
    server_side_mode
    row_selection
    row_id_field="_id"
    row_noun="device"
    row_noun_plural="devices"
>
    <div class="flex gap-8" slot="multi-select-actions">
        <at-button size="sm" type="secondaryOutline" label="Export"></at-button>
    </div>
</at-search-table>
<pre id="server-selection-readout" class="mt-16 text-xs"></pre>
<script>
const serverTable = document.querySelector('#server-selection-table');
const TOTAL = 847;
const PAGE_SIZE = ${args.page_size ?? 5};

const pageOf = (startRow) => ({
    items: Array.from({ length: PAGE_SIZE }, (_, i) => ({
        _id: String(startRow + i),
        col_one: 'Device ' + (startRow + i + 1),
        col_two: 'Site ' + ((startRow + i) % 4 + 1),
    })),
    total: TOTAL,
});

serverTable.col_defs = ${JSON.stringify(args.col_defs, null, 4)}
serverTable.table_data = pageOf(0);

// Stands in for the server. The table asks for a window and is handed that window
// plus the unfiltered total; it never sees the other 842 rows.
serverTable.addEventListener('atSearchParamsChange', (event) => {
    serverTable.table_data = pageOf(event.detail.startRow ?? 0);
});

serverTable.addEventListener('atSelectionChange', (event) => {
    const { scope, count, ids, excluded_ids, query } = event.detail;
    document.querySelector('#server-selection-readout').textContent =
        scope === 'all-matching'
            ? 'scope: all-matching  count: ' + count +
              '  excluded: [' + excluded_ids.join(', ') + ']' +
              '  query: ' + JSON.stringify(query)
            : 'scope: ' + scope + '  count: ' + count + '  ids: [' + ids.join(', ') + ']';
});
</script>
`;
/**
 * The floating variant: the same bar, lifted into the top layer as a manual
 * popover so a long table can scroll underneath it.
 */
const FloatingSelectionTemplate = (args) => `
<at-search-table
    id="floating-selection-table"
    page_size=${args.page_size ?? 5}
    row_selection
    row_id_field="_id"
    row_noun="device"
    row_noun_plural="devices"
>
    <div class="flex gap-8" slot="floating-multi-select-actions">
        <at-button size="sm" type="secondaryOutline" label="Export"></at-button>
        <at-button size="sm" type="secondaryOutline" label="Archive"></at-button>
    </div>
</at-search-table>
<script>
const floatingTable = document.querySelector('#floating-selection-table');
floatingTable.table_data = ${JSON.stringify(args.table_data, null, 4)}
floatingTable.col_defs = ${JSON.stringify(args.col_defs, null, 4)}
</script>
`;
export default {
    title: 'Components/Search Table',
};
export const Default = Template.bind({});
Default.args = {
    col_defs: [
        {
            flex: 1,
            field: 'col_one',
            colId: 'col_one',
        },
        {
            flex: 1,
            field: 'col_two',
            colId: 'col_two',
        },
    ],
    table_data: {
        items: [
            {
                _id: '3',
                col_one: 'hello world',
                col_two: 'value 1',
            },
            {
                _id: '2',
                col_one: 'Feb 1,  2018 - Feb 28,  2018',
                col_two: 'value 2',
            },
            {
                _id: '1',
                col_one: 'Jan 1,  2018 - Jan 31,  2018',
                col_two: 'value 3',
            },
            {
                _id: '0',
                col_one: 'Dec 1,  2017 - Dec 31,  2017',
                col_two: 'value 4',
            },
        ],
        total: 4,
    },
    page_size: 10,
};
/**
 * Persistent facets belong in the `filter-bar` slot, beside the search field.
 * They stay visible whether or not anything is selected, which is what separates
 * them from the ad-hoc conditions authored in the query builder.
 *
 * One container owns the spacing between the controls; the facets can equally be
 * assigned to the slot as siblings, as `filter-bar-table` in the Angular example
 * does.
 */
export const WithFilterBar = FilterBarTemplate.bind({});
WithFilterBar.args = Default.args;
/**
 * `search_filters` is the host's own filter state, displayed in the table's chip
 * row so one place records everything currently applied. The table does not own
 * those conditions: removing such a chip emits `atExternalFiltersChange` carrying
 * the tree without them, and the removal takes effect only when the host assigns
 * it back. Pass `search_filters` without handling the event and the chip's remove
 * button does nothing - the two halves are optional together, not separately.
 */
export const ExternalFilters = ExternalFiltersTemplate.bind({});
ExternalFilters.args = Default.args;
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
export const RowSelection = RowSelectionTemplate.bind({});
RowSelection.args = {
    ...Default.args,
    page_size: 5,
};
/**
 * The same selection against a server-side table. `scope` is what a host must
 * branch on: `explicit` carries the ids the user picked, while `all-matching`
 * carries the query the selection was made against plus any rows unticked after
 * expanding. Sending 847 ids the browser never received is exactly what this
 * avoids - and a paged query handed to a bulk endpoint would act on one page of
 * the set, so the query travels without paging.
 */
export const ServerSideRowSelection = ServerSelectionTemplate.bind({});
ServerSideRowSelection.args = {
    ...Default.args,
    page_size: 5,
};
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
export const FloatingActionBar = FloatingSelectionTemplate.bind({});
FloatingActionBar.args = {
    ...Default.args,
    page_size: 5,
};
