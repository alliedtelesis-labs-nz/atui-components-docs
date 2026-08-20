'use strict';

var index = require('./index-B7bW4GPk.js');

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
        return (index.h(index.Host, { key: 'bd80ec6678b2069de67f81b03d44a5b00c448e31', class: "flex h-full items-center justify-center" }, index.h("at-health-dot", { key: '320201b374d71895cfe9639f5adb317081110b26', status: this.type })));
    }
};

exports.at_health_dot_cell = AtHealthDotCell;
