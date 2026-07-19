import { r as registerInstance, a as getElement, h, H as Host } from './index-jCYcKtgi.js';

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
        return (h(Host, { key: 'a672a70b7a214715ad7739a8a7260736356a793a', class: "flex h-full items-center justify-center" }, h("at-health-dot", { key: '6f843a1b727358ac6171a7a84bf13b713f3d0699', status: this.type })));
    }
};

export { AtHealthDotCell as at_health_dot_cell };
