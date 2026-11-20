'use strict';

var index = require('./index-CWfGEe1_.js');

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
        return (index.h(index.Host, { key: '54e906065a9fd6f061c0390e3b70a659869cb4c4', class: "flex h-full items-center" }, index.h("div", { key: 'd7310beaa1eea3f43d710d765eb4a7f2312a9ccf', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
};

exports.at_color_status_cell = AtColorStatusCell;
