import { h, Host } from "@stencil/core";
/**
 * @category Data Tables
 * @description A cell component for displaying a compact health status dot.
 */
export class AtHealthDotCell {
    el;
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
        return (h(Host, { key: 'ac7cbc4868e4ba18b54e36867b0ea505866c9d97', class: "flex h-full items-center justify-center" }, this.type === 'bad' && (h("svg", { key: 'fa1899240b6cd5f6b8894d07097f239e9116514a', width: "15", height: "15", viewBox: "0 0 15 15", "aria-hidden": "true" }, h("path", { key: '8a190add3b543ad8b3b56f1fb2bbd7aeb0b8524d', d: "M6.37883 0.293045C6.76935 -0.0974796 7.40252 -0.09748 7.79304 0.293044L13.8788 6.37883C14.2694 6.76935 14.2694 7.40252 13.8788 \n                          7.79304L7.79305 13.8788C7.40252 14.2694 6.76935 14.2694 6.37883 13.8788L0.293045 7.79305C-0.0974796 7.40252 -0.09748 6.76935 0.293044 6.37883L6.37883 0.293045Z", fill: "var(--chart-alert-3, #ff5252)", stroke: "var(--chart-alert-3, #ff5252)", "stroke-width": "1", "stroke-linejoin": "round" }))), this.type === 'warn' && (h("svg", { key: '57d0b01bc01d84c6e9b7ae89cee3f0cb02dd1ae1', width: "15", height: "15", viewBox: "0 0 15 15", "aria-hidden": "true" }, h("path", { key: 'bc6f114a59f5df61239fc3530f1b6606b21b385c', d: "M6.81445 2.38965C7.19935 1.72298 8.16197 1.72298 8.54688 2.38965L14.1533 12.1006C14.5382 12.7673 14.0569 13.6006 13.2871 13.6006H2.07422C1.30442 13.6006 0.823108 12.7673 1.20801 12.1006L6.81445 2.38965Z", fill: "var(--chart-alert-2, #f59f00)", stroke: "var(--chart-alert-2, #f59f00)", "stroke-width": "1", "stroke-linejoin": "round" }))), this.type === 'good' && (h("svg", { key: '5851127248d7fcd85a3e7c5c90dfbb814ac7de11', width: "14", height: "14", viewBox: "0 0 14 14", "aria-hidden": "true" }, h("circle", { key: '022f0ab269df85c04a0ee9aaa78d49d61c93a7d8', cx: "7", cy: "7", r: "7", fill: "var(--chart-alert-1, #4caf50)" })))));
    }
    static get is() { return "at-health-dot-cell"; }
    static get states() {
        return {
            "type": {}
        };
    }
    static get elementRef() { return "el"; }
}
