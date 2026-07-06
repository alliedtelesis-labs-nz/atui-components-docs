'use strict';

var index = require('./index-BkghNVG3.js');

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
        return (index.h(index.Host, { key: '1d4690681cb5ab6f7bb6a3606e805f4b5b16bf79', class: "flex h-full items-center justify-center" }, this.type === 'bad' && (index.h("svg", { key: 'd50294d43185596ecabfa4045bb1d57cc69b2fec', width: "15", height: "15", viewBox: "0 0 15 15", "aria-hidden": "true" }, index.h("path", { key: '2e48facdb0286e25c3d32f795f8348b414e5a8f4', d: "M6.37883 0.293045C6.76935 -0.0974796 7.40252 -0.09748 7.79304 0.293044L13.8788 6.37883C14.2694 6.76935 14.2694 7.40252 13.8788 \n                          7.79304L7.79305 13.8788C7.40252 14.2694 6.76935 14.2694 6.37883 13.8788L0.293045 7.79305C-0.0974796 7.40252 -0.09748 6.76935 0.293044 6.37883L6.37883 0.293045Z", fill: "var(--chart-alert-3, #ff5252)", stroke: "var(--chart-alert-3, #ff5252)", "stroke-width": "1", "stroke-linejoin": "round" }))), this.type === 'warn' && (index.h("svg", { key: '0f6d97813bdbce803bbf3658b253f920d496135d', width: "15", height: "15", viewBox: "0 0 15 15", "aria-hidden": "true" }, index.h("path", { key: '2cb750e056b3926bd5ad1e4306385de9a9412b24', d: "M6.81445 2.38965C7.19935 1.72298 8.16197 1.72298 8.54688 2.38965L14.1533 12.1006C14.5382 12.7673 14.0569 13.6006 13.2871 13.6006H2.07422C1.30442 13.6006 0.823108 12.7673 1.20801 12.1006L6.81445 2.38965Z", fill: "var(--chart-alert-2, #f59f00)", stroke: "var(--chart-alert-2, #f59f00)", "stroke-width": "1", "stroke-linejoin": "round" }))), this.type === 'good' && (index.h("svg", { key: '1c2c6b230be5251ca00ade9956b541b8f42be7b1', width: "14", height: "14", viewBox: "0 0 14 14", "aria-hidden": "true" }, index.h("circle", { key: '03a406721358f1f3505a9d615befee47d8f6dacc', cx: "7", cy: "7", r: "7", fill: "var(--chart-alert-1, #4caf50)" })))));
    }
};

exports.at_health_dot_cell = AtHealthDotCell;
