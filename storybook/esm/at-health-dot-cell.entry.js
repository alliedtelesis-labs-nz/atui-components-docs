import { r as registerInstance, a as getElement, h, H as Host } from './index-CT99rxub.js';

const AtHealthDotCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    type = 'good';
    init(params) {
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
        return (h(Host, { key: 'ffbfdc813f940bbd9b15d3bb6a92fd403cf8d9fa', class: "flex h-full items-center justify-center" }, h("at-health-dot", { key: 'cd13fe3e1525aede1b18ece223cdbbd3e83f530c', status: this.type })));
    }
};

export { AtHealthDotCell as at_health_dot_cell };
