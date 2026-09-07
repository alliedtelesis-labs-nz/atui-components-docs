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
            error: 'bg-error-foreground',
            warning: 'bg-warning-foreground',
            success: 'bg-success-foreground',
            disabled: 'bg-disabled-foreground',
        };
        return (h(Host, { key: 'e490386af0b0421cb9b2ddece93059c4bcd1d523', class: "flex h-full items-center" }, h("div", { key: 'cef64e9bfcb6ea7fe1dc3981942069adb4fff31c', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
    static get is() { return "at-color-status-cell"; }
    static get states() {
        return {
            "type": {}
        };
    }
    static get elementRef() { return "el"; }
}
