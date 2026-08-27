import { r as registerInstance, a as getElement, h, H as Host } from './index-lWb16Ay7.js';

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
        return (h(Host, { key: 'a04b28189309ee0fd64548fad805bff6eb4680d7', class: "flex h-full items-center justify-center" }, h("at-health-dot", { key: '9d5ebf7719d8afaf461dff2751a8f261b294e064', status: this.type })));
    }
};

export { AtHealthDotCell as at_health_dot_cell };
