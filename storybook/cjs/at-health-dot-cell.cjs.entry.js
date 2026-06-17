'use strict';

var index = require('./index-D93m6lxs.js');

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
        return (index.h(index.Host, { key: 'c0f73d9dcc744311c4aba69aa2bf7a29a9542ed5', class: "flex h-full items-center justify-center" }, this.type === 'bad' && (index.h("svg", { key: '68d9e92ea8f33572a04f33a57a23193da106ff60', width: "15", height: "15", viewBox: "0 0 15 15", "aria-hidden": "true" }, index.h("path", { key: 'a0fa00fdd773bcddbc8cc9bdd91ac24bfcb2ceed', d: "M6.37883 0.293045C6.76935 -0.0974796 7.40252 -0.09748 7.79304 0.293044L13.8788 6.37883C14.2694 6.76935 14.2694 7.40252 13.8788 \n                          7.79304L7.79305 13.8788C7.40252 14.2694 6.76935 14.2694 6.37883 13.8788L0.293045 7.79305C-0.0974796 7.40252 -0.09748 6.76935 0.293044 6.37883L6.37883 0.293045Z", fill: "var(--chart-alert-3, #ff5252)", stroke: "var(--chart-alert-3, #ff5252)", "stroke-width": "1", "stroke-linejoin": "round" }))), this.type === 'warn' && (index.h("svg", { key: 'b37d348d243879b815c89cd3dff87252c990b798', width: "15", height: "15", viewBox: "0 0 15 15", "aria-hidden": "true" }, index.h("path", { key: '6048909bcd988e405ecc25eddb59f7ce9d6df1c5', d: "M6.81445 2.38965C7.19935 1.72298 8.16197 1.72298 8.54688 2.38965L14.1533 12.1006C14.5382 12.7673 14.0569 13.6006 13.2871 13.6006H2.07422C1.30442 13.6006 0.823108 12.7673 1.20801 12.1006L6.81445 2.38965Z", fill: "var(--chart-alert-2, #f59f00)", stroke: "var(--chart-alert-2, #f59f00)", "stroke-width": "1", "stroke-linejoin": "round" }))), this.type === 'good' && (index.h("svg", { key: '1b9760ddd1ff5a00010611c2b3684dc8add5704c', width: "14", height: "14", viewBox: "0 0 14 14", "aria-hidden": "true" }, index.h("circle", { key: 'f9f03d12766bbf1407319d75b36d1e8db6d7d974', cx: "7", cy: "7", r: "7", fill: "var(--chart-alert-1, #4caf50)" })))));
    }
};

exports.at_health_dot_cell = AtHealthDotCell;
