'use strict';

var index = require('./index-6KYrJiD1.js');

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
        return (index.h(index.Host, { key: '3a1081ce5fceee574df02233781307c12db23436', class: "flex h-full items-center justify-center" }, index.h("at-health-dot", { key: 'dec5e6c160ccf80d83b92bbbcbd487f2e47d4ed2', status: this.type })));
    }
};

exports.at_health_dot_cell = AtHealthDotCell;
