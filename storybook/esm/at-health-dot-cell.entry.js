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
        return (h(Host, { key: '835bf47458aa245bc7c74f9385dc8ab695d71867', class: "flex h-full items-center justify-center" }, this.type === 'bad' && (h("svg", { key: '11bda4d62b588cda25d0868656eb4d341341b654', width: "15", height: "15", viewBox: "0 0 15 15", "aria-hidden": "true" }, h("path", { key: '015ebf84e5d00aec3443c952ee04de781d889caf', d: "M6.37883 0.293045C6.76935 -0.0974796 7.40252 -0.09748 7.79304 0.293044L13.8788 6.37883C14.2694 6.76935 14.2694 7.40252 13.8788 \n                          7.79304L7.79305 13.8788C7.40252 14.2694 6.76935 14.2694 6.37883 13.8788L0.293045 7.79305C-0.0974796 7.40252 -0.09748 6.76935 0.293044 6.37883L6.37883 0.293045Z", fill: "var(--chart-alert-3, #ff5252)", stroke: "var(--chart-alert-3, #ff5252)", "stroke-width": "1", "stroke-linejoin": "round" }))), this.type === 'warn' && (h("svg", { key: '7752777e4b925f6b0302db571b2f7bc31c21cb2e', width: "15", height: "15", viewBox: "0 0 15 15", "aria-hidden": "true" }, h("path", { key: '75098abe882cdd95e1622944c3a87182be3f1543', d: "M6.81445 2.38965C7.19935 1.72298 8.16197 1.72298 8.54688 2.38965L14.1533 12.1006C14.5382 12.7673 14.0569 13.6006 13.2871 13.6006H2.07422C1.30442 13.6006 0.823108 12.7673 1.20801 12.1006L6.81445 2.38965Z", fill: "var(--chart-alert-2, #f59f00)", stroke: "var(--chart-alert-2, #f59f00)", "stroke-width": "1", "stroke-linejoin": "round" }))), this.type === 'good' && (h("svg", { key: 'e27bfe5f1ddfc6e85bf34b850aeefa793d6ee094', width: "14", height: "14", viewBox: "0 0 14 14", "aria-hidden": "true" }, h("circle", { key: '8599531c590c2101bea02ebf14078be38ac1c43a', cx: "7", cy: "7", r: "7", fill: "var(--chart-alert-1, #4caf50)" })))));
    }
};

export { AtHealthDotCell as at_health_dot_cell };
