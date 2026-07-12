'use strict';

var index = require('./index-DRsFs1GW.js');

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
        return (index.h(index.Host, { key: '1d4690681cb5ab6f7bb6a3606e805f4b5b16bf79', class: "flex h-full items-center justify-center" }, index.h("at-health-dot", { key: 'aa37e1f5dabdf0f86c53664f62b3b11562ff8315', status: this.type })));
    }
};

exports.at_health_dot_cell = AtHealthDotCell;
