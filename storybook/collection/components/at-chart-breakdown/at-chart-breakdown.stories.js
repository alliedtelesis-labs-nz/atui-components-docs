const Template = (args) => `
<at-chart-breakdown
    height="${args.height}"
    ${args.color_palette ? `color_palette="${args.color_palette}"` : ''}
    ${args.center_value ? `center_value="${args.center_value}"` : ''}
    ${args.center_text ? `center_text="${args.center_text}"` : ''}
    ${args.legend_position ? `legend_position="${args.legend_position}"` : ''}
    ${args.cutout !== undefined ? `cutout="${args.cutout}"` : ''}
/>
<script>
${args.data ? `document.querySelector('at-chart-breakdown').data = ${JSON.stringify(args.data, null, 4)}` : ''}
${args.options ? `document.querySelector('at-chart-breakdown').options = ${JSON.stringify(args.options, null, 4)}` : ''}
${args.tooltip_options ? `document.querySelector('at-chart-breakdown').tooltip_options = ${JSON.stringify(args.tooltip_options, null, 4)}` : ''}
${args.legend_options
    ? `
(function() {
    function resolveCssVars(obj) {
        var resolve = function(v) {
            if (typeof v !== 'string') return v;
            var match = v.match(/^var\\(([^)]+)\\)$/);
            if (!match) return v;
            return getComputedStyle(document.documentElement).getPropertyValue(match[1].trim()).trim() || v;
        };
        var out = Object.assign({}, obj);
        if (out.labels && typeof out.labels === 'object') {
            out.labels = Object.fromEntries(Object.entries(out.labels).map(function(e) { return [e[0], resolve(e[1])]; }));
        }
        return out;
    }
    document.querySelector('at-chart-breakdown').legend_options = resolveCssVars(${JSON.stringify(args.legend_options, null, 4)});
})();
`
    : ''}
${args.plugins ? `document.querySelector('at-chart-breakdown').plugins = ${JSON.stringify(args.plugins, null, 4)}` : ''}
</script>
`;
export default {
    title: 'Components/Chart Breakdown',
    argTypes: {
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
        legend_position: {
            control: { type: 'select' },
            options: ['top', 'bottom', 'left', 'right'],
        },
    },
};
export const Categorical = {
    name: 'Categorical Palette',
    args: {
        height: 'md',
        color_palette: 'categorical',
        data: {
            labels: [
                'Auckland',
                'Wellington',
                'Christchurch',
                'Hamilton',
                'Tauranga',
            ],
            datasets: [
                {
                    label: 'Sites',
                    data: [320, 180, 140, 90, 70],
                    hoverOffset: 4,
                },
            ],
        },
    },
    render: Template,
};
export const Sequential = {
    name: 'Sequential Palette',
    args: {
        height: 'md',
        color_palette: 'sequential',
        data: {
            labels: ['0–20%', '20–40%', '40–60%', '60–80%', '80–100%'],
            datasets: [
                {
                    label: 'Utilisation',
                    data: [10, 25, 40, 60, 80],
                    hoverOffset: 4,
                },
            ],
        },
    },
    render: Template,
};
export const Alert = {
    name: 'Alert Palette',
    args: {
        height: 'md',
        color_palette: 'alert',
        data: {
            labels: ['Critical', 'Warning', 'Normal', 'Disabled'],
            datasets: [
                { label: 'Events', data: [12, 34, 200, 8], hoverOffset: 4 },
            ],
        },
    },
    render: Template,
};
export const DeviceStatus = {
    name: 'Device Status Palette',
    args: {
        height: 'md',
        color_palette: 'device-status',
        center_value: '450',
        center_text: 'Devices',
        data: {
            labels: ['Up', 'Warning', 'Down', 'Unreachable', 'Info'],
            datasets: [
                {
                    label: 'Device Status',
                    data: [380, 42, 12, 8, 8],
                    hoverOffset: 4,
                },
            ],
        },
    },
    render: Template,
};
export const OnboardingStatus = {
    name: 'Onboarding Status Palette',
    args: {
        height: 'md',
        color_palette: 'onboarding-status',
        center_value: '450',
        center_text: 'Devices',
        data: {
            labels: [
                'Online',
                'In Progress',
                'Pending',
                'Failed',
                'No Bootstrap',
            ],
            datasets: [
                {
                    label: 'Onboarding',
                    data: [320, 60, 40, 18, 12],
                    hoverOffset: 4,
                },
            ],
        },
    },
    render: Template,
};
export const CustomColors = {
    name: 'Custom Colors (CUSTOM palette)',
    args: {
        height: 'md',
        color_palette: 'custom',
        data: {
            labels: ['One', 'Two', 'Three'],
            datasets: [
                {
                    label: 'My Dataset',
                    data: [300, 50, 100],
                    hoverOffset: 4,
                    backgroundColor: ['#7E57C2', '#26A69A', '#42A5F5'],
                    hoverBackgroundColor: ['#7E57C2', '#26A69A', '#42A5F5'],
                    hoverBorderColor: ['#7E57C2', '#26A69A', '#42A5F5'],
                },
            ],
        },
    },
    render: Template,
};
export const CenterText = {
    name: 'Center Text',
    args: {
        height: 'md',
        color_palette: 'device-status',
        center_value: '450',
        center_text: 'Devices',
        data: {
            labels: ['Up', 'Warning', 'Down', 'Unreachable', 'Info'],
            datasets: [
                {
                    label: 'Device Status',
                    data: [380, 42, 12, 8, 8],
                    hoverOffset: 4,
                },
            ],
        },
    },
    render: Template,
};
export const LegendOptions = {
    name: 'Custom Legend Options',
    args: {
        height: 'md',
        color_palette: 'categorical',
        legend_position: 'bottom',
        legend_options: {
            labels: {
                color: 'var(--token-text-primary)',
                boxWidth: 12,
                boxHeight: 12,
                padding: 16,
            },
        },
        data: {
            labels: [
                'Auckland',
                'Wellington',
                'Christchurch',
                'Hamilton',
                'Tauranga',
            ],
            datasets: [
                {
                    label: 'Sites',
                    data: [320, 180, 140, 90, 70],
                    hoverOffset: 4,
                },
            ],
        },
    },
    render: Template,
};
export const TooltipOptions = {
    name: 'Custom Tooltip Options',
    args: {
        height: 'md',
        color_palette: 'categorical',
        tooltip_options: {
            displayColors: false,
            callbacks: {},
        },
        data: {
            labels: [
                'Auckland',
                'Wellington',
                'Christchurch',
                'Hamilton',
                'Tauranga',
            ],
            datasets: [
                {
                    label: 'Sites',
                    data: [320, 180, 140, 90, 70],
                    hoverOffset: 4,
                },
            ],
        },
    },
    render: Template,
};
export const ThinRing = {
    name: 'Thin Ring (cutout)',
    args: {
        height: 'md',
        color_palette: 'sequential',
        cutout: 88,
        center_value: '74%',
        center_text: 'Utilisation',
        data: {
            labels: ['Used', 'Free'],
            datasets: [{ label: 'Disk', data: [74, 26], hoverOffset: 4 }],
        },
    },
    render: Template,
};
