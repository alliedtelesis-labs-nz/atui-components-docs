'use strict';

var index = require('./index-BzjIU9ss.js');

const AtColorStatusCell = class {
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
        return (index.h(index.Host, { key: 'f8049a4c2216fb59d99f7759543be67fb029f40c', class: "flex h-full items-center" }, index.h("div", { key: '58fc5148e5aee3b49f9b27a55d80d98d59784ad1', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
    get el() { return index.getElement(this); }
};

exports.at_color_status_cell = AtColorStatusCell;
//# sourceMappingURL=at-color-status-cell.entry.cjs.js.map
