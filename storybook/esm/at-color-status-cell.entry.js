import { r as registerInstance, a as getElement, h, H as Host } from './index-Baj27LS8.js';

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
            error: 'bg-error-foreground',
            warning: 'bg-warning-foreground',
            success: 'bg-success-foreground',
            disabled: 'bg-disabled-foreground',
        };
        return (h(Host, { key: '42a223bc81bb7c0131fb1a1eca2b6f56c7c3b8d9', class: "flex h-full items-center" }, h("div", { key: 'e2fdcc07730e533860c175336b27ab3f39700f76', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
};

export { AtColorStatusCell as at_color_status_cell };
