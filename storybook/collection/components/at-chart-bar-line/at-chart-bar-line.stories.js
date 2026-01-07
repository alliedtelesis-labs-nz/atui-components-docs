const Template = (args) => `
<at-chart-bar-line
    type="${args.type}"
    canvas_id="${args.canvas_id}"
/>
<script>
${args.data ? `document.querySelector('at-chart-bar-line').data = ${JSON.stringify(args.data, null, 4)}` : ''}
${args.x_axis_format ? `document.querySelector('at-chart-bar-line').x_axis_format = ${JSON.stringify(args.x_axis_format, null, 4)}` : ''}
${args.options ? `document.querySelector('at-chart-bar-line').options = ${JSON.stringify(args.options, null, 4).replace(/"\(/g, '(').replace(/`"/g, '`')}` : ''}
${args.time_range ? `document.querySelector('at-chart-bar-line').time_range = ${JSON.stringify(args.time_range, null, 4)}` : ''}
${args.thresholds ? `document.querySelector('at-chart-bar-line').thresholds = ${JSON.stringify(args.thresholds, null, 4)}` : ''} 
${args.tooltip_options ? `document.querySelector('at-chart-bar-line').tooltip_options = ${JSON.stringify(args.tooltip_options, null, 4).replace(/"\(/g, '(').replace(/`"/g, '`')}` : ''}
${args.point_styles ? `document.querySelector('at-chart-bar-line').point_styles = ${JSON.stringify(args.point_styles, null, 4)}` : ''}
</script>
`;
export default {
    title: 'Components/Chart Bar Line',
};
export const Bar = {
    args: {
        type: 'bar',
        canvas_id: '1',
        x_axis_format: {},
        data: {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
            ],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderWidth: 1,
                },
            ],
        },
    },
    render: Template,
};
export const Line = {
    args: {
        type: 'line',
        canvas_id: '1',
        x_axis_format: {},
        data: {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
            ],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderWidth: 1,
                },
            ],
        },
    },
    render: Template,
};
export const Time = {
    args: {
        type: 'line',
        canvas_id: '1',
        data: {
            labels: [
                '2025-01-21T08:52:07.316Z',
                '2025-01-21T11:52:07.316Z',
                '2025-01-21T14:52:07.316Z',
                '2025-01-21T17:52:07.316Z',
                '2025-01-21T20:52:07.316Z',
                '2025-01-21T23:52:07.316Z',
                '2025-01-22T02:52:07.316Z',
            ],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [11, 70, 49, 82, 15, 55, 87],
                    fill: false,
                    tension: 0.1,
                    pointStyle: 'rectRounded',
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    pointHitRadius: 5,
                    borderColor: '#7E57C2',
                    backgroundColor: '#7E57C2',
                },
            ],
        },
    },
    render: Template,
};
export const Date = {
    name: 'Custom X Axis Format',
    args: {
        type: 'line',
        canvas_id: '1',
        data: {
            labels: [
                '2025-01-21T08:52:07.316Z',
                '2025-01-21T11:52:07.316Z',
                '2025-01-21T14:52:07.316Z',
                '2025-01-21T17:52:07.316Z',
                '2025-01-21T20:52:07.316Z',
                '2025-01-21T23:52:07.316Z',
                '2025-01-22T02:52:07.316Z',
            ],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [11, 70, 49, 82, 15, 55, 87],
                    fill: false,
                    tension: 0.1,
                    pointStyle: 'rectRounded',
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    pointHitRadius: 5,
                    borderColor: '#7E57C2',
                    backgroundColor: '#7E57C2',
                },
            ],
        },
        x_axis_format: {
            type: 'time',
            time: {
                displayFormats: {
                    day: 'd',
                    minute: 'MM/DD h a',
                    hour: 'MM/DD h a',
                },
            },
            ticks: {
                font: { size: 10 },
                autoSkip: true,
                align: 'center',
                maxRotation: 0,
                minRotation: 0,
            },
        },
    },
    render: Template,
};
export const TimeRange = {
    name: 'Custom Time Range',
    args: {
        type: 'line',
        canvas_id: '1',
        data: {
            labels: [
                '2022-12-31T12:00:00.000Z',
                '2022-12-31T14:00:00.000Z',
                '2022-12-31T17:00:00.000Z',
                '2022-12-31T20:00:00.000Z',
                '2022-12-31T23:00:00.000Z',
                '2023-01-01T02:00:00.000Z',
                '2023-01-01T05:00:00.000Z',
            ],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [42, 17, 68, 91, 29, 53, 5],
                    fill: false,
                    tension: 0.1,
                    pointStyle: 'rectRounded',
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    pointHitRadius: 5,
                    borderColor: '#7E57C2',
                    backgroundColor: '#7E57C2',
                },
            ],
        },
        time_range: {
            selected: 'custom',
            custom: { from: '2023-01-01T01:00:00', to: '2023-01-01T17:00:00' },
        },
    },
    render: Template,
};
export const CustomYLabel = {
    name: 'Custom Y Axis Format',
    args: {
        type: 'line',
        canvas_id: '1',
        options: {
            maintainAspectRatio: false,
            elements: { line: { tension: 0, borderWidth: 2 } },
            animation: false,
            scales: {
                y: {
                    grid: {
                        borderDash: [4, 2],
                        drawOnChartArea: true,
                        display: true,
                        drawTicks: true,
                        color: '#e9ecef',
                        offset: false,
                    },
                    stacked: false,
                    title: { display: true, text: 'Y label' },
                    beginAtZero: true,
                    min: 0,
                    ticks: {
                        callback: '(label) => `${label} bps`',
                    },
                },
                x: {
                    grid: { offset: false },
                    type: 'time',
                    time: { unit: 'hour', stepSize: 2 },
                    ticks: {},
                },
            },
            plugins: {
                tooltip: {
                    mode: 'nearest',
                    intersect: false,
                    position: 'nearest',
                    enabled: true,
                    external: null,
                    callbacks: {},
                },
                legend: { labels: { boxWidth: 10, boxHeight: 10 } },
            },
        },
        data: {
            labels: [
                '2025-01-21T12:00:00.000Z',
                '2025-01-21T14:00:00.000Z',
                '2025-01-21T17:00:00.000Z',
                '2025-01-21T20:00:00.000Z',
                '2025-01-21T23:00:00.000Z',
                '2025-01-22T02:00:00.000Z',
                '2025-01-22T05:00:00.000Z',
            ],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    tension: 0.1,
                    borderColor: '#7E57C2',
                    backgroundColor: '#7E57C2',
                    pointStyle: 'rectRounded',
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    pointHitRadius: 5,
                },
            ],
        },
    },
    render: Template,
};
export const MultipleDatasets = {
    name: 'Multiple Datasets',
    args: {
        type: 'line',
        canvas_id: '1',
        x_axis_format: {},
        data: {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
            ],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    tension: 0.1,
                    borderColor: '#7E57C2',
                    backgroundColor: '#7E57C2',
                    pointStyle: 'rectRounded',
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    pointHitRadius: 5,
                },
                {
                    label: 'Second Dataset',
                    data: [67, 94, 31, 57, 43, 90, 11],
                    fill: false,
                    tension: 0.1,
                    borderColor: '#26A69A',
                    backgroundColor: '#26A69A',
                    pointStyle: 'rectRounded',
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    pointHitRadius: 5,
                },
                {
                    label: 'Third Dataset',
                    data: [35, 18, 63, 95, 32, 52, 8],
                    fill: false,
                    tension: 0.1,
                    borderColor: '#42A5F5',
                    backgroundColor: '#42A5F5',
                    pointStyle: 'rectRounded',
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    pointHitRadius: 5,
                },
            ],
        },
    },
    render: Template,
};
export const StackedMultipleDatasets = {
    name: 'Stacked Multiple Datasets',
    args: {
        type: 'line',
        canvas_id: '1',
        x_axis_format: {},
        options: {
            scales: {
                y: {
                    grid: {
                        borderDash: [4, 2],
                        drawOnChartArea: true,
                        display: true,
                        drawTicks: true,
                        color: '#e9ecef',
                        offset: false,
                    },
                    stacked: true,
                },
                x: {
                    grid: {
                        borderDash: [],
                        drawOnChartArea: true,
                        display: true,
                        drawTicks: true,
                        color: '#e9ecef',
                        offset: false,
                    },
                },
            },
        },
        data: {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
            ],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    tension: 0.1,
                    borderColor: '#7E57C2',
                    backgroundColor: '#7E57C2',
                    pointStyle: 'rectRounded',
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    pointHitRadius: 5,
                },
                {
                    label: 'Second Dataset',
                    data: [67, 94, 31, 57, 43, 90, 11],
                    fill: false,
                    tension: 0.1,
                    borderColor: '#26A69A',
                    backgroundColor: '#26A69A',
                    pointStyle: 'rectRounded',
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    pointHitRadius: 5,
                },
                {
                    label: 'Third Dataset',
                    data: [35, 18, 63, 95, 32, 52, 8],
                    fill: false,
                    tension: 0.1,
                    borderColor: '#42A5F5',
                    backgroundColor: '#42A5F5',
                    pointStyle: 'rectRounded',
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    pointHitRadius: 5,
                },
            ],
        },
    },
    render: Template,
};
export const Thresholds = {
    name: 'Line Chart with Thresholds',
    args: {
        type: 'line',
        canvas_id: '1',
        x_axis_format: {},
        data: {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
            ],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    tension: 0.1,
                    order: 3,
                    borderColor: '#7E57C2',
                    backgroundColor: '#7E57C2',
                    pointStyle: 'rectRounded',
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    pointHitRadius: 5,
                },
                {
                    label: 'Second Dataset',
                    data: [35, 18, 63, 95, 32, 52, 8],
                    fill: false,
                    tension: 0.1,
                    order: 4,
                    borderColor: '#26A69A',
                    backgroundColor: '#26A69A',
                    pointStyle: 'rectRounded',
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    pointHitRadius: 5,
                },
            ],
        },
        thresholds: [
            {
                label: 'Threshold One',
                color: 'rgba(153,  102,  255)',
                dashLine: true,
                data: [25, 25, 25, 45, 45, 45, 45],
                stepped: true,
            },
            {
                label: 'Threshold Two',
                color: 'rgba(255,  159,  64)',
                dashLine: false,
                data: [95, 95, 95, 95, 95, 95, 95],
            },
        ],
    },
    render: Template,
};
export const Tooltips = {
    name: 'Custom Tooltips',
    args: {
        type: 'line',
        canvas_id: '1',
        x_axis_format: {},
        data: {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
            ],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    tension: 0.1,
                    order: 3,
                    borderColor: '#7E57C2',
                    backgroundColor: '#7E57C2',
                    pointStyle: 'rectRounded',
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    pointHitRadius: 5,
                },
                {
                    label: 'Second Dataset',
                    data: [35, 18, 63, 95, 32, 52, 8],
                    fill: false,
                    tension: 0.1,
                    order: 4,
                    borderColor: '#26A69A',
                    backgroundColor: '#26A69A',
                    pointStyle: 'rectRounded',
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    pointHitRadius: 5,
                },
            ],
        },
        tooltip_options: {
            mode: 'nearest',
            intersect: false,
            position: 'nearest',
            displayColors: false,
            callbacks: {
                title: '() => `Chart Title`',
                label: '(label) => `${label.formattedValue} bps`',
            },
        },
    },
    render: Template,
};
export const Area = {
    name: 'Area Chart',
    args: {
        type: 'line',
        canvas_id: '1',
        x_axis_format: {},
        data: {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
            ],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [81, 14, 67, 38, 19, 73, 95],
                    fill: 'origin',
                    tension: 0.3,
                },
            ],
        },
        point_styles: {
            pointRadius: 0,
            pointHitRadius: 0,
            pointHoverRadius: 0,
        },
    },
    render: Template,
};
