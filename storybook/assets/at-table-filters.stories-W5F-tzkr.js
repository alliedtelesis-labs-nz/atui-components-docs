const o=()=>`
<at-filter-form></at-filter-form>
<at-table-filters></at-table-filters>
<script>
Promise.all([
    customElements.whenDefined('at-filter-form'),
    customElements.whenDefined('at-table-filters'),
]).then(() => {
    const atFilterForm = document.querySelector('at-filter-form');
    const atTableFilters = document.querySelector('at-table-filters');

    const col_three_options = [
        { value: 'Active', label: 'Active' },
        { value: 'Inactive', label: 'Inactive' },
        { value: 'Pending', label: 'Pending' },
    ];

    atFilterForm.filter_config = [
        { id: 'col_one', label: 'Column One', value: 'hello' },
        { id: 'col_two', label: 'Column Two', value: 'value 1' },
        {
            id: 'col_three',
            label: 'Column Three',
            value: 'active',
            filter_options: col_three_options,
        },
    ];

    const initial_filters = {
        id: 'root',
        logical_operator: 'And',
        children: [
            { id: 'col_one', label: 'Column One', operator: 'contains', value: 'hello' },
            {
                id: 'group_1',
                logical_operator: 'Or',
                children: [
                    { id: 'col_two', label: 'Column Two', operator: 'is', value: 'value 1' },
                    {
                        id: 'col_three',
                        label: 'Column Three',
                        operator: 'is not',
                        value: 'Inactive',
                        filter_options: col_three_options,
                    },
                ],
            },
        ],
    };
    atFilterForm.active_filters = initial_filters;
    atTableFilters.filters = initial_filters;

    atFilterForm.addEventListener('atSearch', (event) => {
        atTableFilters.filters = event.detail;
    });

    atTableFilters.addEventListener('atChange', (event) => {
        atTableFilters.filters = event.detail;
        atFilterForm.active_filters = event.detail;
    });
});
        {
            _id: "2",
            col_one: "Feb 1,  2018 - Feb 28,  2018",
            col_two: "value 2",
        },
        {
            _id: "1",
            col_one: "Jan 1,  2018 - Jan 31,  2018",
            col_two: "value 3",
        },
        {
            _id: "0",
            col_one: "Dec 1,  2017 - Dec 31,  2017",
            col_two: "value 4",
        },
    ],
    total: 4,
};
document.querySelector('at-table').table_data = table_data
document.querySelector('at-table').col_defs = col_defs
document.querySelector('at-table-filters').col_defs = col_defs
document.querySelector('at-table')
    .createGrid()
    .then((api) => document.querySelector('at-table-actions').ag_grid = api)
<\/script>
`,r={title:"Components/Table Components/Table Filters"},e=o.bind({});var t,l,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => \`
<at-filter-form></at-filter-form>
<at-table-filters></at-table-filters>
<script>
Promise.all([
    customElements.whenDefined('at-filter-form'),
    customElements.whenDefined('at-table-filters'),
]).then(() => {
    const atFilterForm = document.querySelector('at-filter-form');
    const atTableFilters = document.querySelector('at-table-filters');

    const col_three_options = [
        { value: 'Active', label: 'Active' },
        { value: 'Inactive', label: 'Inactive' },
        { value: 'Pending', label: 'Pending' },
    ];

    atFilterForm.filter_config = [
        { id: 'col_one', label: 'Column One', value: 'hello' },
        { id: 'col_two', label: 'Column Two', value: 'value 1' },
        {
            id: 'col_three',
            label: 'Column Three',
            value: 'active',
            filter_options: col_three_options,
        },
    ];

    const initial_filters = {
        id: 'root',
        logical_operator: 'And',
        children: [
            { id: 'col_one', label: 'Column One', operator: 'contains', value: 'hello' },
            {
                id: 'group_1',
                logical_operator: 'Or',
                children: [
                    { id: 'col_two', label: 'Column Two', operator: 'is', value: 'value 1' },
                    {
                        id: 'col_three',
                        label: 'Column Three',
                        operator: 'is not',
                        value: 'Inactive',
                        filter_options: col_three_options,
                    },
                ],
            },
        ],
    };
    atFilterForm.active_filters = initial_filters;
    atTableFilters.filters = initial_filters;

    atFilterForm.addEventListener('atSearch', (event) => {
        atTableFilters.filters = event.detail;
    });

    atTableFilters.addEventListener('atChange', (event) => {
        atTableFilters.filters = event.detail;
        atFilterForm.active_filters = event.detail;
    });
});
        {
            _id: "2",
            col_one: "Feb 1,  2018 - Feb 28,  2018",
            col_two: "value 2",
        },
        {
            _id: "1",
            col_one: "Jan 1,  2018 - Jan 31,  2018",
            col_two: "value 3",
        },
        {
            _id: "0",
            col_one: "Dec 1,  2017 - Dec 31,  2017",
            col_two: "value 4",
        },
    ],
    total: 4,
};
document.querySelector('at-table').table_data = table_data
document.querySelector('at-table').col_defs = col_defs
document.querySelector('at-table-filters').col_defs = col_defs
document.querySelector('at-table')
    .createGrid()
    .then((api) => document.querySelector('at-table-actions').ag_grid = api)
<\/script>
\``,...(a=(l=e.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const i=["Default"];export{e as Default,i as __namedExportsOrder,r as default};
