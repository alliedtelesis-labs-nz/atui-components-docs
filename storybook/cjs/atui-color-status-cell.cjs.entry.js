'use strict';

var index = require('./index-s6Ut5Yq6.js');

const AtuiColorStatusCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: 'cdc15f38a66fa9128a6177f9ef9c1f1074d4fbf7', class: "flex h-full items-center" }, index.h("div", { key: 'c603f0252f54a79d1e3cca1e6b8c7d8ed9fa9a95', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_color_status_cell = AtuiColorStatusCell;
//# sourceMappingURL=atui-color-status-cell.entry.cjs.js.map

//# sourceMappingURL=atui-color-status-cell.cjs.entry.js.map