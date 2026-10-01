'use strict';

var index = require('./index-B73N6Yu9.js');

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
        return (index.h(index.Host, { key: 'ea6279aa21d90579cc4a6aaf5800b917e176a895', class: "flex h-full items-center justify-center" }, index.h("at-health-dot", { key: 'ac7effc8101e0de9eda026ebf74226fa18fe9f36', status: this.type })));
    }
};

exports.at_health_dot_cell = AtHealthDotCell;
