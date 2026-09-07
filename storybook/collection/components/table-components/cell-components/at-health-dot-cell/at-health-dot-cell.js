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
        return (h(Host, { key: '0a4f0436cef65a5ec3b01dd6887b44f93ff134de', class: "flex h-full items-center justify-center" }, h("at-health-dot", { key: '51bae31f51110665b356d47fd52c5da12011b994', status: this.type })));
    }
    static get is() { return "at-health-dot-cell"; }
    static get states() {
        return {
            "type": {}
        };
    }
    static get elementRef() { return "el"; }
}
