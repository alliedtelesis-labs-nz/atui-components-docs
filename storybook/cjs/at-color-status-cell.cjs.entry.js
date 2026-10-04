'use strict';

var index = require('./index-Dzqi4iVM.js');

const AtColorStatusCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
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
        return (index.h(index.Host, { key: '42a223bc81bb7c0131fb1a1eca2b6f56c7c3b8d9', class: "flex h-full items-center" }, index.h("div", { key: 'e2fdcc07730e533860c175336b27ab3f39700f76', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
};

exports.at_color_status_cell = AtColorStatusCell;
