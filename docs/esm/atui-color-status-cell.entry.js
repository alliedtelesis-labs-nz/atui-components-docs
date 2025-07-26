import { r as registerInstance, h, H as Host, g as getElement } from './index-Cd7WF2gX.js';

const AtuiColorStatusCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = 'disabled';
    }
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
        return (h(Host, { key: 'cdc15f38a66fa9128a6177f9ef9c1f1074d4fbf7', class: "flex h-full items-center" }, h("div", { key: 'c603f0252f54a79d1e3cca1e6b8c7d8ed9fa9a95', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
    get el() { return getElement(this); }
};

export { AtuiColorStatusCell as atui_color_status_cell };
//# sourceMappingURL=atui-color-status-cell.entry.js.map

//# sourceMappingURL=atui-color-status-cell.entry.js.map