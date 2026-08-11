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
        return (h(Host, { key: '3a1081ce5fceee574df02233781307c12db23436', class: "flex h-full items-center justify-center" }, h("at-health-dot", { key: 'dec5e6c160ccf80d83b92bbbcbd487f2e47d4ed2', status: this.type })));
    }
    static get is() { return "at-health-dot-cell"; }
    static get states() {
        return {
            "type": {}
        };
    }
    static get elementRef() { return "el"; }
}
