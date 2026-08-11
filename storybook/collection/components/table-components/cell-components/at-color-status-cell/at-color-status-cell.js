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
        return (h(Host, { key: '3502a87ad1b5b80194edbe19854d243247738291', class: "flex h-full items-center" }, h("div", { key: 'f31a6cb5fe72674f7bdf1f94015faf6349a7a46a', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
    static get is() { return "at-color-status-cell"; }
    static get states() {
        return {
            "type": {}
        };
    }
    static get elementRef() { return "el"; }
}
