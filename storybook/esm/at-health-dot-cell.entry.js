import { r as registerInstance, a as getElement, h, H as Host } from './index-ChWFprTL.js';

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
        return (h(Host, { key: 'ae7586e7e8c6c54598d5901aa5433f27fe631b0a', class: "flex h-full items-center justify-center" }, h("at-health-dot", { key: '5cce9bf6ee130823e65491e79d2d9be4d8c41703', status: this.type })));
    }
};

export { AtHealthDotCell as at_health_dot_cell };
