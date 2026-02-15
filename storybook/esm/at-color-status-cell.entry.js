import { r as registerInstance, g as getElement, h, H as Host } from './index-jvbUuQtg.js';

const AtColorStatusCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    type = 'disabled';
    init(params) {
        this.type = params.mapValueToStatus(params.data);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.type = params.mapValueToStatus(params.data);
        return true;
    }
    render() {
        const statusClasses = {
            error: 'bg-error-base',
            warning: 'bg-warning-base',
            success: 'bg-success-base',
            disabled: 'bg-disabled-light',
        };
        return (h(Host, { key: 'a6f59d0f12785ac1e021181530d0a3d49f2e5b34', class: "flex h-full items-center" }, h("div", { key: '88dc7ceee123da1046e1eabbc4171ea35bbbaba2', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
};

export { AtColorStatusCell as at_color_status_cell };
