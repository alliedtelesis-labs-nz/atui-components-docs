'use strict';

var index = require('./index-BunRc-jd.js');

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
        return (index.h(index.Host, { key: 'fb26325ce531a0d8a884eef3ca7e6fec25bdaea3', class: "flex h-full items-center justify-center" }, index.h("at-health-dot", { key: '2e514406d501b666d38c7da56f06cd8928bb8abf', status: this.type })));
    }
};

exports.at_health_dot_cell = AtHealthDotCell;
