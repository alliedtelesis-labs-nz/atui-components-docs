import { h, Host } from "@stencil/core";
/**
 * @category Data Tables
 * @description A cell component for displaying a menu.
 */
export class AtMenuCell {
    el;
    params;
    init(params) {
        this.params = params;
    }
    getGui() {
        return this.el;
    }
    /**
     * Returning `true` tells AG-Grid the cell handled the refresh itself, so the
     * component is reused rather than destroyed and recreated. That matters here
     * because the cell hosts an `at-menu` popover: on recreation the menu panel
     * briefly renders and measures before it is positioned and hidden, which
     * shows up as a flash/artifact in the column (most visible when the actions
     * column is pinned). `params` is `@State`, so reassigning it re-renders the
     * existing cell with the new data.
     */
    refresh(params) {
        this.init(params);
        return true;
    }
    render() {
        const actions = typeof this.params.actions === 'function'
            ? this.params.actions(this.params)
            : this.params.actions;
        return (h(Host, { key: 'd21e1badfc99b33b2a313e30221ad64b475ac5f5', class: "flex h-full items-center gap-4" }, h("at-menu", { key: 'ee1e2664357066141c97f23bc1b8f4fec5d4dd7f', width: "fit-content", position: "left" }, h("at-button", { key: '6274c944b2374dd2d78607e8de411787ed28a6a5', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (h("at-icon", { key: '47f9b64713d2bcd35ac5c9684928433ba50a1a05', slot: "icon", name: "overflow_menu" }))), h("div", { key: 'c1907d8be3614975354c62c74867449606af36bc', class: "flex flex-col" }, actions &&
            actions.map((action) => typeof action === 'object' &&
                (action.disabled &&
                    action.disabled(this.params.data) &&
                    action.disabledTooltip ? (h("at-tooltip", null, h("div", { slot: "tooltip-trigger", class: "w-full" }, h("at-menu-item", { label: action.title, disabled: true, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } })), h("span", null, action.disabledTooltip))) : (h("at-menu-item", { label: action.title, disabled: action.disabled
                        ? action.disabled(this.params.data)
                        : false, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } }))))))));
    }
    static get is() { return "at-menu-cell"; }
    static get states() {
        return {
            "params": {}
        };
    }
    static get elementRef() { return "el"; }
}
