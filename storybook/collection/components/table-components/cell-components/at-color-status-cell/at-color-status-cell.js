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
        return (h(Host, { key: 'cc1ff9da2a0c4ec517351bb2147cd817ded061e4', class: "flex h-full items-center" }, h("div", { key: '37727c4348f61bb4fd6edfdc7ba58d4d9d52719c', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
    static get is() { return "at-color-status-cell"; }
    static get states() {
        return {
            "type": {}
        };
    }
    static get elementRef() { return "el"; }
}
