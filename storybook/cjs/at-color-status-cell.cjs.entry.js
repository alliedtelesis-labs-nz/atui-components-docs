'use strict';

var index = require('./index-Bo1AxtqW.js');

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
        return (index.h(index.Host, { key: 'b91ff31b95bba637614713ec4d7007aa525e13ba', class: "flex h-full items-center" }, index.h("div", { key: '30e916246e7caa40424d5dc47d21c8f79c9387e0', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
};

exports.at_color_status_cell = AtColorStatusCell;
