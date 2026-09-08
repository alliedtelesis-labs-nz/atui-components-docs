'use strict';

var index = require('./index-Bc1nzv_X.js');

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
        return (index.h(index.Host, { key: '48a093f2db779eba3645f7fb6411e989b8c83568', class: "flex h-full items-center justify-center" }, index.h("at-health-dot", { key: '5c0da797a9ec91428898c9931bb22401747103e3', status: this.type })));
    }
};

exports.at_health_dot_cell = AtHealthDotCell;
