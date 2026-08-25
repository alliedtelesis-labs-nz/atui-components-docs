import { r as registerInstance, a as getElement, h, H as Host } from './index-DgqokAJi.js';

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
        return (h(Host, { key: 'c88b89231d989d3f4a1bf5cdf553c88fa1745a81', class: "flex h-full items-center justify-center" }, h("at-health-dot", { key: 'fcb8a1e4eac6d329b0ce4d8c8d081da966e2dc6c', status: this.type })));
    }
};

export { AtHealthDotCell as at_health_dot_cell };
