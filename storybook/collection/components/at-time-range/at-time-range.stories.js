const defaultPresets = [
    { unit: 'HOURS', value: 1 },
    { unit: 'HOURS', value: 12 },
    { unit: 'DAYS', value: 7 },
    { unit: 'MONTHS', value: 1 },
    { unit: 'YEARS', value: 1 },
    { unit: 'YEARS', value: 5 },
];
const Template = (args) => `
<div style="display: flex; flex-direction: column; gap: 16px; padding: 16px;">
    <at-time-range
        range_limit=${args.range_limit ?? 7}
        enable_range_limit=${args.enable_range_limit ? true : false}
        enable_relative_time=${args.enable_relative_time !== false}
        ${args.show_all_time ? 'show_all_time' : ''}
    />
    <pre id="debug-output" style="margin: 0; padding: 8px; background: #f5f5f5; border: 1px solid #ddd; border-radius: 4px; font-size: 12px; white-space: pre-wrap;">Waiting for selection...</pre>
</div>
<script>
(function() {
    var el = document.querySelector('at-time-range');
    var debug = document.querySelector('#debug-output');
    el.presets = ${JSON.stringify(args.presets ?? defaultPresets)};
    el.selected_time_range = ${JSON.stringify(args.selected_time_range ?? { selected: { unit: 'HOURS', value: 1 } })};
    debug.textContent = 'Initial: ' + JSON.stringify(el.selected_time_range, null, 2);
    el.addEventListener('atuiTimeChange', function(e) {
        debug.textContent = 'atuiTimeChange: ' + JSON.stringify(e.detail, null, 2);
    });
})();
</script>
`;
const setProps = async ({ canvasElement, args }) => {
    await customElements.whenDefined('at-time-range');
    const el = canvasElement.querySelector('at-time-range');
    const debug = canvasElement.querySelector('#debug-output');
    if (el) {
        el.presets = args.presets ?? defaultPresets;
        el.selected_time_range = args.selected_time_range ?? {
            selected: { unit: 'HOURS', value: 1 },
        };
        if (debug) {
            debug.textContent =
                'Initial: ' + JSON.stringify(el.selected_time_range, null, 2);
        }
        el.addEventListener('atuiTimeChange', (e) => {
            if (debug) {
                debug.textContent =
                    'atuiTimeChange: ' + JSON.stringify(e.detail, null, 2);
            }
        });
    }
};
export default {
    title: 'Components/Time Range',
};
export const Default = Template.bind({});
Default.args = {
    presets: defaultPresets,
    enable_range_limit: true,
    enable_relative_time: true,
    range_limit: 7,
    show_all_time: true,
    selected_time_range: { selected: 'all' },
};
Default.play = setProps;
export const PredefinedPresetsOnly = Template.bind({});
PredefinedPresetsOnly.args = {
    presets: defaultPresets,
    enable_range_limit: false,
    enable_relative_time: false,
    show_all_time: false,
    selected_time_range: { selected: { unit: 'HOURS', value: 1 } },
};
PredefinedPresetsOnly.play = setProps;
export const CustomPresetsShortRange = Template.bind({});
CustomPresetsShortRange.args = {
    presets: [
        { unit: 'MINUTES', value: 15 },
        { unit: 'MINUTES', value: 30 },
        { unit: 'HOURS', value: 1 },
        { unit: 'HOURS', value: 6 },
        { unit: 'HOURS', value: 24 },
    ],
    enable_range_limit: true,
    enable_relative_time: false,
    range_limit: 7,
    show_all_time: false,
    selected_time_range: { selected: { unit: 'MINUTES', value: 15 } },
};
CustomPresetsShortRange.play = setProps;
export const RelativeTimeWithPresets = Template.bind({});
RelativeTimeWithPresets.args = {
    presets: defaultPresets,
    enable_range_limit: true,
    enable_relative_time: true,
    range_limit: 30,
    show_all_time: false,
    selected_time_range: { selected: { unit: 'DAYS', value: 7 } },
};
RelativeTimeWithPresets.play = setProps;
export const WithAllTime = Template.bind({});
WithAllTime.args = {
    presets: defaultPresets,
    enable_range_limit: false,
    enable_relative_time: true,
    show_all_time: true,
    selected_time_range: { selected: 'all' },
};
WithAllTime.play = setProps;
