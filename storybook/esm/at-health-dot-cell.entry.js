import { r as registerInstance, a as getElement, h, H as Host } from './index-CGGSFxDu.js';

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
        return (h(Host, { key: '0a4f0436cef65a5ec3b01dd6887b44f93ff134de', class: "flex h-full items-center justify-center" }, h("at-health-dot", { key: '51bae31f51110665b356d47fd52c5da12011b994', status: this.type })));
    }
};

export { AtHealthDotCell as at_health_dot_cell };
