import { h, Host } from "@stencil/core";
/**
 * @category Data Tables
 * @description A cell component for displaying a color status indicator based on predefined types
 */
export class AtColorStatusCell {
    el;
    type = 'disabled';
    init(params) {
        this.type = params.mapValueToStatus(params.data);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.type = params.mapValueToStatus(params.data);
        return true;
    }
    render() {
        const statusClasses = {
            error: 'bg-error-base',
            warning: 'bg-warning-base',
            success: 'bg-success-base',
            disabled: 'bg-disabled-light',
        };
        return (h(Host, { key: '706d77a6aed5368227aa4e3b74860602dd94063b', class: "flex h-full items-center" }, h("div", { key: '18da44a164dde7dedec3e9809dad3549e3726414', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
    static get is() { return "at-color-status-cell"; }
    static get states() {
        return {
            "type": {}
        };
    }
    static get elementRef() { return "el"; }
}
