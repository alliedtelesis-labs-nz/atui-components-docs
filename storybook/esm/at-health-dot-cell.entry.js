import { r as registerInstance, a as getElement, h, H as Host } from './index-vSlhROK9.js';

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
        return (h(Host, { key: '48a093f2db779eba3645f7fb6411e989b8c83568', class: "flex h-full items-center justify-center" }, h("at-health-dot", { key: '5c0da797a9ec91428898c9931bb22401747103e3', status: this.type })));
    }
};

export { AtHealthDotCell as at_health_dot_cell };
