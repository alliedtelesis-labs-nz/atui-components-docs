const Template = (args) => `
<div style="width: 240px; height: 140px;">
    <at-chart-trend
        ${args.value ? `value="${args.value}"` : ''}
        ${args.unit ? `unit="${args.unit}"` : ''}
        ${args.delta !== undefined ? `delta="${args.delta}"` : ''}
        ${args.delta_direction ? `delta_direction="${args.delta_direction}"` : ''}
        ${args.mode ? `mode="${args.mode}"` : ''}
        ${args.status ? `status="${args.status}"` : ''}
        ${args.color_palette ? `color_palette="${args.color_palette}"` : ''}
    />
</div>
<script>
${args.data ? `document.querySelector('at-chart-trend').data = ${JSON.stringify(args.data)}` : ''}
</script>
`;
const RISING = [42, 45, 40, 48, 52, 47, 55, 60, 58, 62, 59, 68];
const FALLING = [68, 59, 62, 58, 60, 55, 47, 52, 48, 40, 45, 38];
export default {
    title: 'Components/Chart Trend',
    argTypes: {
        value: { control: { type: 'text' } },
        unit: { control: { type: 'text' } },
        delta: { control: { type: 'number' } },
        delta_direction: {
            control: { type: 'inline-radio' },
            options: ['up-is-bad', 'up-is-good'],
        },
        mode: {
            control: { type: 'inline-radio' },
            options: ['line', 'area'],
        },
        status: {
            control: { type: 'select' },
            options: [undefined, 'good', 'warning', 'bad', 'unreachable'],
        },
        color_palette: {
            control: { type: 'select' },
            options: [
                'categorical',
                'sequential',
                'alert',
                'device-status',
                'onboarding-status',
                'custom',
            ],
        },
    },
};
export const Default = {
    name: 'Rising — up-is-bad (regression)',
    args: {
        value: '68ms',
        unit: 'ms',
        mode: 'area',
        data: RISING,
        delta_direction: 'up-is-bad',
    },
    render: Template,
};
export const Improvement = {
    name: 'Falling — up-is-bad (improvement)',
    args: {
        value: '38ms',
        unit: 'ms',
        mode: 'area',
        data: FALLING,
        delta_direction: 'up-is-bad',
    },
    render: Template,
};
export const UpIsGood = {
    name: 'Rising — up-is-good (explicit delta)',
    args: {
        value: '1.4 Gbps',
        unit: ' Gbps',
        delta: 0.6,
        mode: 'line',
        data: RISING,
        delta_direction: 'up-is-good',
        color_palette: 'sequential',
    },
    render: Template,
};
export const NoDelta = {
    name: 'Flat series (delta hidden)',
    args: {
        value: '50%',
        unit: '%',
        mode: 'line',
        data: [50, 50, 50, 50, 50, 50],
    },
    render: Template,
};
