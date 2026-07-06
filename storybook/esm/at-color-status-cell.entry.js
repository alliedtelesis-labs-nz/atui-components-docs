import { r as registerInstance, a as getElement, h, H as Host } from './index-BEGRcYEc.js';

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
        return (h(Host, { key: 'f29784f1d177803299c7b3c8a96a3865ed0a4514', class: "flex h-full items-center" }, h("div", { key: 'fe7529c9cdb44d14e4e66ccd02b772b25819eae8', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
};

export { AtColorStatusCell as at_color_status_cell };
