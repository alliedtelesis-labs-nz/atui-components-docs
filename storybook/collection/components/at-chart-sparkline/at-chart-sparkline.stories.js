const Template = (args) => `
<div style="width: 200px;">
    <at-chart-sparkline
        ${args.mode ? `mode="${args.mode}"` : ''}
        ${args.status ? `status="${args.status}"` : ''}
        ${args.height ? `height="${args.height}"` : ''}
        ${args.color_palette ? `color_palette="${args.color_palette}"` : ''}
    />
</div>
<script>
${args.data ? `document.querySelector('at-chart-sparkline').data = ${JSON.stringify(args.data)}` : ''}
</script>
`;
const TREND = [4, 6, 5, 8, 7, 11, 9, 13, 12, 16];
const VOLATILE = [12, 3, 18, 7, 22, 5, 16, 9, 25, 2];
export default {
    title: 'Components/Chart Sparkline',
    argTypes: {
        mode: {
            control: { type: 'inline-radio' },
            options: ['line', 'area'],
        },
        status: {
            control: { type: 'select' },
            options: ['good', 'warning', 'bad', 'unreachable'],
        },
        height: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl', 'auto'],
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
export const Line = {
    name: 'Line (glow)',
    args: {
        mode: 'line',
        data: TREND,
    },
    render: Template,
};
export const AreaFill = {
    name: 'Area (gradient fill)',
    args: {
        mode: 'area',
        data: TREND,
    },
    render: Template,
};
export const StatusGood = {
    name: 'Status — Good',
    args: {
        mode: 'line',
        status: 'good',
        data: TREND,
    },
    render: Template,
};
export const StatusWarning = {
    name: 'Status — Warning',
    args: {
        mode: 'line',
        status: 'warning',
        data: VOLATILE,
    },
    render: Template,
};
export const StatusBad = {
    name: 'Status — Bad',
    args: {
        mode: 'area',
        status: 'bad',
        data: VOLATILE,
    },
    render: Template,
};
export const StatusUnreachable = {
    name: 'Status — Unreachable',
    args: {
        mode: 'line',
        status: 'unreachable',
        data: TREND,
    },
    render: Template,
};
