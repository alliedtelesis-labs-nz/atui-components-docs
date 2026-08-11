'use strict';

var index = require('./index-Ku8sY16C.js');

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
        return (index.h(index.Host, { key: '3502a87ad1b5b80194edbe19854d243247738291', class: "flex h-full items-center" }, index.h("div", { key: 'f31a6cb5fe72674f7bdf1f94015faf6349a7a46a', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
};

exports.at_color_status_cell = AtColorStatusCell;
