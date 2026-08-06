'use strict';

var index = require('./index-C0zY2e5N.js');

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
            // `-base` does not exist on any state colour, and neither does
            // `disabled-light`; all four matched no rule, so every state of this cell
            // rendered unpainted. Issue #285.
            error: 'bg-error-foreground',
            warning: 'bg-warning-foreground',
            success: 'bg-success-foreground',
            disabled: 'bg-disabled-background',
        };
        return (index.h(index.Host, { key: 'fb332a98fb1ca80f4dcd3f15088441d20cf8ab3f', class: "flex h-full items-center" }, index.h("div", { key: '9611918ea4502237e2096268ec55b29abe1e7ca9', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
};

exports.at_color_status_cell = AtColorStatusCell;
