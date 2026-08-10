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
            // `-base` does not exist on any state colour, and neither does
            // `disabled-light`; all four matched no rule, so every state of this cell
            // rendered unpainted. Issue #285.
            error: 'bg-error-foreground',
            warning: 'bg-warning-foreground',
            success: 'bg-success-foreground',
            disabled: 'bg-disabled-background',
        };
        return (h(Host, { key: 'c1e3234bb5b27f96658c3b9ace8602d3c0e64224', class: "flex h-full items-center" }, h("div", { key: '89e954325770815320daf0a8d342459e3cd8baa7', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
    static get is() { return "at-color-status-cell"; }
    static get states() {
        return {
            "type": {}
        };
    }
    static get elementRef() { return "el"; }
}
