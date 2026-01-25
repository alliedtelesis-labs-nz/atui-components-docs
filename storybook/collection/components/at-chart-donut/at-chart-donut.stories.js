const Template = (args) => `
<at-chart-donut
    canvas_id="${args.canvas_id}"
/>
<script>
${args.data ? `document.querySelector('at-chart-donut').data = ${JSON.stringify(args.data, null, 4)}` : ''}
${args.options ? `document.querySelector('at-chart-donut').options = ${JSON.stringify(args.options, null, 4)}` : ''}
${args.tooltip_options ? `document.querySelector('at-chart-donut').tooltip_options = ${JSON.stringify(args.tooltip_options, null, 4)}` : ''}
${args.plugins ? `document.querySelector('at-chart-donut').plugins = ${JSON.stringify(args.plugins, null, 4)}` : ''}
</script>
`;
export default {
    title: 'Components/Chart Donut',
};
export const Donut = {
    args: {
        canvas_id: '1',
        data: {
            labels: ['One', 'Two', 'Three'],
            datasets: [
                {
                    label: 'My First Dataset',
                    data: [300, 50, 100],
                    hoverOffset: 4,
                    backgroundColor: ['#7E57C2', '#26A69A', '#42A5F5'],
                    hoverBackgroundColor: ['#7E57C2', '#26A69A', '#42A5F5'],
                    hoverBorderColor: ['#7E57C2', '#26A69A', '#42A5F5'],
                },
            ],
        },
        options: { responsive: true, maintainAspectRatio: false },
        plugins: [],
    },
    render: Template,
};
export const CenterText = {
    args: {
        canvas_id: '1',
        data: {
            labels: ['One', 'Two', 'Three'],
            datasets: [
                {
                    label: 'My First Dataset',
                    data: [300, 50, 100],
                    hoverOffset: 4,
                    backgroundColor: ['#7E57C2', '#26A69A', '#42A5F5'],
                    hoverBackgroundColor: ['#7E57C2', '#26A69A', '#42A5F5'],
                    hoverBorderColor: ['#7E57C2', '#26A69A', '#42A5F5'],
                },
            ],
        },
        center_value: '450',
        center_text: 'Devices',
        options: { responsive: true, maintainAspectRatio: false },
        plugins: [],
    },
    render: Template,
};
