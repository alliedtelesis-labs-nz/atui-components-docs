import { r as registerInstance, g as getElement, h, H as Host } from './index-BAAX2Der.js';

const AtHealthDotCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
        return (h(Host, { key: '7d64477d7bafe7c69dff998a8d34b47d6cae36e6', class: "flex h-full items-center justify-center" }, this.type === 'bad' && (h("svg", { key: 'ee484f2ad61e30a1e4a6818628a7771ea690551e', width: "15", height: "15", viewBox: "0 0 15 15", "aria-hidden": "true" }, h("path", { key: 'b24b578bafaaaba07b100a4e1371ada1942f4d32', d: "M6.37883 0.293045C6.76935 -0.0974796 7.40252 -0.09748 7.79304 0.293044L13.8788 6.37883C14.2694 6.76935 14.2694 7.40252 13.8788 \n                          7.79304L7.79305 13.8788C7.40252 14.2694 6.76935 14.2694 6.37883 13.8788L0.293045 7.79305C-0.0974796 7.40252 -0.09748 6.76935 0.293044 6.37883L6.37883 0.293045Z", fill: "var(--token-state-error-base, #ff5252)", stroke: "var(--token-state-error-base, #ff5252)", "stroke-width": "1", "stroke-linejoin": "round" }))), this.type === 'warn' && (h("svg", { key: '482f173783f470c776953705f33194afc9d3aadf', width: "15", height: "15", viewBox: "0 0 15 15", "aria-hidden": "true" }, h("path", { key: 'e88afc0d4fda4f572ee6de7968140aa305dff457', d: "M6.81445 2.38965C7.19935 1.72298 8.16197 1.72298 8.54688 2.38965L14.1533 12.1006C14.5382 12.7673 14.0569 13.6006 13.2871 13.6006H2.07422C1.30442 13.6006 0.823108 12.7673 1.20801 12.1006L6.81445 2.38965Z", fill: "var(--token-state-warning-base, #f59f00)", stroke: "var(--token-state-warning-base, #f59f00)", "stroke-width": "1", "stroke-linejoin": "round" }))), this.type === 'good' && (h("svg", { key: '719c3dbd82f0772d01b060a8a1b3dd0d33d06253', width: "14", height: "14", viewBox: "0 0 14 14", "aria-hidden": "true" }, h("circle", { key: '98a80049862faf16b15fd52ff56dfd22190fe8d0', cx: "7", cy: "7", r: "7", fill: "var(--token-state-success-base, #4caf50)" })))));
    }
};

export { AtHealthDotCell as at_health_dot_cell };
