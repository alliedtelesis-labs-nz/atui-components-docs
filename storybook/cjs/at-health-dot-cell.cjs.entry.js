'use strict';

var index = require('./index-DYE55yNY.js');

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
        return (index.h(index.Host, { key: '6159b1e9f5ff357dd621efc5e0b8d88f0730dfe4', class: "flex h-full items-center justify-center" }, index.h("at-health-dot", { key: 'cd6038c1de1a3a90fb84388e40e13b34e3f9c157', status: this.type })));
    }
};

exports.at_health_dot_cell = AtHealthDotCell;
