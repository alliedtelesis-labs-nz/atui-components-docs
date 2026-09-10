import { r as registerInstance, a as getElement, h, H as Host } from './index-46ti_ijN.js';

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
        return (h(Host, { key: '1775478915b40bb6fc8af2d786b6f4dc990a1fd9', class: "flex h-full items-center justify-center" }, h("at-health-dot", { key: '738f366cf5efef4c33367e973f9887f07d3809d8', status: this.type })));
    }
};

export { AtHealthDotCell as at_health_dot_cell };
