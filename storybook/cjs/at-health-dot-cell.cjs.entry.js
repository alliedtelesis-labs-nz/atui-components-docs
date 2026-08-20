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
        return (index.h(index.Host, { key: 'e56c5b739ef3f6ac52f7c2d43980035eb8c2c3df', class: "flex h-full items-center justify-center" }, index.h("at-health-dot", { key: '25d5bb434a67b51ab0a48d1bac8abe96eee5f77e', status: this.type })));
    }
};

exports.at_health_dot_cell = AtHealthDotCell;
