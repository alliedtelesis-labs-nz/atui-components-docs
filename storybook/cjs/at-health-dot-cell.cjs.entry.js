'use strict';

var index = require('./index-COV7xI6A.js');

const AtHealthDotCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    type = 'good';
    init(params) {
        const mappedType = params.mapValueToStatus
            ? params.mapValueToStatus(params.data)
            : params.value;
        switch ((mappedType || '').toLowerCase()) {
            case 'critical':
            case 'bad':
                this.type = 'bad';
                break;
            case 'warning':
            case 'warn':
                this.type = 'warn';
                break;
            case 'healthy':
            case 'good':
            default:
                this.type = 'good';
                break;
        }
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.init(params);
        return true;
    }
    render() {
        return (index.h(index.Host, { key: 'a501be56d655bf9996c798f5e8c85a88c87d1155', class: "flex h-full items-center justify-center" }, index.h("at-health-dot", { key: '9ded8194fe21378be7fa99404e036d719037edb4', status: this.type })));
    }
};

exports.at_health_dot_cell = AtHealthDotCell;
