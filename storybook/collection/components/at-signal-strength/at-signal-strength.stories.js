const Template = (args) => `
<at-signal-strength
    rssi="${args.rssi}"
    variant="${args.variant ?? 'status'}"
    size="${args.size ?? 'md'}"
    ${args.show_value ? 'show_value' : ''}
>${args.slot ?? ''}</at-signal-strength>`;
const levelReadings = [
    { rssi: -52, label: 'Excellent' },
    { rssi: -64, label: 'Good' },
    { rssi: -72, label: 'Fair' },
    { rssi: -80, label: 'Poor' },
    { rssi: -90, label: 'No signal' },
];
const LevelsTemplate = (args) => `
<div class="flex flex-col gap-8">
    ${levelReadings
    .map(({ rssi, label }) => `
    <at-signal-strength
        rssi="${rssi}"
        variant="${args.variant ?? 'status'}"
        size="${args.size ?? 'md'}"
        show_value
    ><span class="text-secondary">${label}</span></at-signal-strength>`)
    .join('')}
</div>`;
export default {
    title: 'Components/SignalStrength',
    argTypes: {
        rssi: {
            control: { type: 'range', min: -100, max: -30, step: 1 },
        },
        variant: {
            options: ['status', 'mono'],
            control: { type: 'radio' },
        },
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'radio' },
        },
        show_value: { control: 'boolean' },
        slot: { control: 'text' },
    },
};
export const Default = {
    render: Template,
    args: {
        rssi: -62,
        variant: 'status',
        size: 'md',
        show_value: false,
        slot: '',
    },
};
export const AllLevels = {
    render: LevelsTemplate,
    args: { variant: 'status', size: 'md' },
};
export const Mono = {
    render: LevelsTemplate,
    args: { variant: 'mono', size: 'md' },
};
export const Sizes = {
    render: () => `
<div class="flex items-end gap-16">
    <at-signal-strength rssi="-64" size="sm"></at-signal-strength>
    <at-signal-strength rssi="-64" size="md"></at-signal-strength>
    <at-signal-strength rssi="-64" size="lg"></at-signal-strength>
</div>`,
};
export const WithValue = {
    render: Template,
    args: { ...Default.args, show_value: true },
};
export const WithSlot = {
    render: Template,
    args: {
        ...Default.args,
        show_value: true,
        slot: '<span class="text-secondary">Good</span>',
    },
};
export const CustomThresholds = {
    render: () => `
<at-signal-strength rssi="-72" show_value></at-signal-strength>
<script type="module">
document.querySelector('at-signal-strength').thresholds = [-90, -80, -70, -60];
</script>`,
};
export const NoSignal = {
    render: () => `
<at-signal-strength><span class="text-secondary">No signal</span></at-signal-strength>`,
};
