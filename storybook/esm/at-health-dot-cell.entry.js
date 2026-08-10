import { r as registerInstance, a as getElement, h, H as Host } from './index-HD-uhvb8.js';

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
        return (h(Host, { key: '7ea160a90950e1d327443fadab08de006c7e8710', class: "flex h-full items-center justify-center" }, h("at-health-dot", { key: '3b509116242b58dc4e730fd9306bdcb491f2e708', status: this.type })));
    }
};

export { AtHealthDotCell as at_health_dot_cell };
