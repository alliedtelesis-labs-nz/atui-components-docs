import { r as registerInstance, g as getElement, h, H as Host } from './index-Dm8LkzEZ.js';

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
        return (h(Host, { key: 'c6359122eb28a9b17b3eb3ec36ad9de0d7fe9703', class: "flex h-full items-center" }, h("div", { key: 'fc5219cacf86b1aba02a3d0cd794f9709feb3d2b', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
};

export { AtColorStatusCell as at_color_status_cell };
