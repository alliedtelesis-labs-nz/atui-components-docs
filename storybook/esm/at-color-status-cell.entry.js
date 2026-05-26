import { r as registerInstance, g as getElement, h, H as Host } from './index-BAAX2Der.js';

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
        return (h(Host, { key: '12c2c2ad99e23fc046e6521469bcbaadaf90f8e3', class: "flex h-full items-center" }, h("div", { key: '53477f97fe76df93cfb80963a22f38610747e1d3', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
};

export { AtColorStatusCell as at_color_status_cell };
