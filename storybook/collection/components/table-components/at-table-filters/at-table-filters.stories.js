const Template = () => `
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
</script>
`;
export default {
    title: 'Components/Table Components/Table Filters',
};
export const Default = Template.bind({});
