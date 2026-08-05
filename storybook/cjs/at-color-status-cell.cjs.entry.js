'use strict';

var index = require('./index-hahhWKrj.js');

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
        return (index.h(index.Host, { key: '37a42f3770687ff0106bb68a98cb5918f40d67b7', class: "flex h-full items-center" }, index.h("div", { key: 'cffec596f215318960fb2b1af47b02ccb499a3e8', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
};

exports.at_color_status_cell = AtColorStatusCell;
