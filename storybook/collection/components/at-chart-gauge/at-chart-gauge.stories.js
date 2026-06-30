const Template = (args) => `
<div style="width: 280px;">
    <at-chart-gauge
        value="${args.value}"
        ${args.min !== undefined ? `min="${args.min}"` : ''}
        ${args.max !== undefined ? `max="${args.max}"` : ''}
        ${args.status ? `status="${args.status}"` : ''}
        ${args.center_value ? `center_value="${args.center_value}"` : ''}
        ${args.center_text ? `center_text="${args.center_text}"` : ''}
        ${args.color_palette ? `color_palette="${args.color_palette}"` : ''}
        ${args.height ? `height="${args.height}"` : ''}
    />
</div>
<script>
${args.thresholds ? `document.querySelector('at-chart-gauge').thresholds = ${JSON.stringify(args.thresholds)}` : ''}
${args.options ? `document.querySelector('at-chart-gauge').options = ${JSON.stringify(args.options, null, 4)}` : ''}
</script>
`;
export default {
    title: 'Components/Chart Gauge',
    argTypes: {
        status: {
            control: { type: 'select' },
            options: ['good', 'warning', 'bad', 'unreachable'],
        },
        color_palette: {
            control: { type: 'select' },
            options: ['alert', 'categorical'],
        },
        height: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl', 'auto'],
        },
    },
};
export const Default = {
    name: 'Default',
    args: {
        value: 72,
        center_value: '72%',
        center_text: 'Utilisation',
    },
    render: Template,
};
export const WithThresholds = {
    name: 'Threshold Zones',
    args: {
        value: 72,
        thresholds: [60, 85],
        status: 'warning',
        center_value: '72%',
        center_text: 'Utilisation',
    },
    render: Template,
};
export const StatusGood = {
    name: 'Status — Good',
    args: {
        value: 35,
        thresholds: [60, 85],
        status: 'good',
        center_value: '35%',
        center_text: 'CPU',
    },
    render: Template,
};
export const StatusWarning = {
    name: 'Status — Warning',
    args: {
        value: 72,
        thresholds: [60, 85],
        status: 'warning',
        center_value: '72%',
        center_text: 'CPU',
    },
    render: Template,
};
export const StatusBad = {
    name: 'Status — Bad',
    args: {
        value: 93,
        thresholds: [60, 85],
        status: 'bad',
        center_value: '93%',
        center_text: 'CPU',
    },
    render: Template,
};
export const CustomRange = {
    name: 'Custom Range',
    args: {
        value: 420,
        min: 0,
        max: 600,
        thresholds: [300, 500],
        status: 'warning',
        center_value: '420',
        center_text: 'Mbps',
    },
    render: Template,
};
export const ValueOnly = {
    name: 'Value Only (no thresholds)',
    args: {
        value: 58,
        status: 'good',
        center_value: '58',
        center_text: 'Score',
    },
    render: Template,
};
