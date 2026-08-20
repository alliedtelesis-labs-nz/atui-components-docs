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
        return (h(Host, { key: 'bd80ec6678b2069de67f81b03d44a5b00c448e31', class: "flex h-full items-center justify-center" }, h("at-health-dot", { key: '320201b374d71895cfe9639f5adb317081110b26', status: this.type })));
    }
    static get is() { return "at-health-dot-cell"; }
    static get states() {
        return {
            "type": {}
        };
    }
    static get elementRef() { return "el"; }
}
