import { r as registerInstance, a as getElement, h, H as Host } from './index-BEGRcYEc.js';

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
        return (h(Host, { key: '59a9f704d1de2d590f7792e3898168f07117edf1', class: "flex h-full items-center justify-center" }, h("at-health-dot", { key: 'd10fec3aa2f7d59675f3e9f3b69d4e7bd7aaa767', status: this.type })));
    }
};

export { AtHealthDotCell as at_health_dot_cell };
