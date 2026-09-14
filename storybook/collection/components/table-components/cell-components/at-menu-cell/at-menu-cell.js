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
        return (h(Host, { key: '782c685694559ad50fb973adde92fa87c62ee9a6', class: "flex h-full items-center gap-4" }, h("at-menu", { key: 'b0de72413498e0dc74628db9f9b72bd9ac254ee5', width: "fit-content", position: "left" }, h("at-button", { key: 'c284c5af6c20c719059c0094176b42f507cd9247', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (h("at-icon", { key: 'bd8d7e552105c797edf69d95dd496ef40f9eb9a5', slot: "icon", name: "overflow_menu" }))), h("div", { key: 'b8e500ed23117e7a243f48e397d4a219f168973d', class: "flex flex-col" }, actions &&
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
