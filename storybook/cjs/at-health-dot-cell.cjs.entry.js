'use strict';

var index = require('./index-D0lZ3Nn_.js');

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
        return (index.h(index.Host, { key: 'a7abe68046a8f1962d433cc7899d7edb7f05dc1e', class: "flex h-full items-center justify-center" }, index.h("at-health-dot", { key: '275a1ce23d3c5ffd2ca6bccfb38879168aabc636', status: this.type })));
    }
};

exports.at_health_dot_cell = AtHealthDotCell;
