import { r as registerInstance, a as getElement, h, H as Host } from './index-Dnh7MvHP.js';

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
        return (h(Host, { key: '6159b1e9f5ff357dd621efc5e0b8d88f0730dfe4', class: "flex h-full items-center justify-center" }, h("at-health-dot", { key: 'cd6038c1de1a3a90fb84388e40e13b34e3f9c157', status: this.type })));
    }
};

export { AtHealthDotCell as at_health_dot_cell };
