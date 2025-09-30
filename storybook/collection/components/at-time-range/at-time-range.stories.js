const Template = (args) => `
<at-time-range
    custom_error_message="${args.custom_error_message ?? ''}"
    range_limit=${args.range_limit ?? 7}
    enable_range_limit=${args.enable_range_limit ? true : false}
    enable_relative_time=${args.enable_relative_time ? true : false}
    ${args.show_all_time ? 'show_all_time' : ''}
/>
<script>
${args.presets ? `document.querySelector('at-time-range').presets = ${JSON.stringify(args.presets, null, 4)}` : ''}
${args.selected_time_range ? `document.querySelector('at-time-range').selected_time_range = ${JSON.stringify(args.selected_time_range, null, 4)}` : ''}
</script>
`;
export default {
    title: 'Components/Time Range',
};
export const Default = Template.bind({});
Default.args = {
    presets: [
        { unit: 'HOURS', value: 1 },
        { unit: 'HOURS', value: 12 },
        { unit: 'DAYS', value: 7 },
        { unit: 'MONTHS', value: 1 },
        { unit: 'YEARS', value: 1 },
        { unit: 'YEARS', value: 5 },
    ],
    enable_range_limit: true,
    enable_relative_time: true,
    range_limit: 7,
    show_all_time: true,
    selected_time_range: { selected: 'all' },
};
//# sourceMappingURL=at-time-range.stories.js.map
