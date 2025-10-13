import { r as registerInstance, g as getElement, h, H as Host } from './index-EP34iaAr.js';

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
        return (h(Host, { key: 'f8049a4c2216fb59d99f7759543be67fb029f40c', class: "flex h-full items-center" }, h("div", { key: '58fc5148e5aee3b49f9b27a55d80d98d59784ad1', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
};

export { AtColorStatusCell as at_color_status_cell };
//# sourceMappingURL=at-color-status-cell.entry.js.map
