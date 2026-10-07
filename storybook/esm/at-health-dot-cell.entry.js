import { r as registerInstance, a as getElement, h, H as Host } from './index-Cw-6gA7Z.js';

const barColors = {
    good: 'var(--chart-alert-1, #4caf50)',
    warn: 'var(--chart-alert-2, #f59f00)',
    bad: 'var(--chart-alert-3, #ff5252)',
};
const statusLabels = {
    good: 'Healthy',
    warn: 'Warning',
    bad: 'Critical',
};
const AtHealthDotCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    type = 'good';
    display = 'dot';
    init(params) {
        this.display = params.display ?? 'dot';
        const mappedType = params.mapValueToStatus
            ? params.mapValueToStatus(params.data)
            : params.value;
        switch ((mappedType || '').toLowerCase()) {
            case 'critical':
            case 'bad':
                this.type = 'bad';
                break;
            case 'warning':
            case 'warn':
                this.type = 'warn';
                break;
            case 'healthy':
            case 'good':
            default:
                this.type = 'good';
                break;
        }
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.init(params);
        return true;
    }
    render() {
        if (this.display === 'bar') {
            return (h(Host, { class: "block h-full" }, h("span", { "data-name": "health-bar", class: "absolute inset-y-0 left-0 w-8", style: { backgroundColor: barColors[this.type] }, role: "img", "aria-label": statusLabels[this.type] })));
        }
        return (h(Host, { class: "flex h-full items-center justify-center" }, h("at-health-dot", { status: this.type })));
    }
};

export { AtHealthDotCell as at_health_dot_cell };
