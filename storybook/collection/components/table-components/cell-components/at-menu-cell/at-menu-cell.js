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
        return (h(Host, { key: '7d7cb9c9e01380634a93e9301304e60e7ed8b280', class: "flex h-full items-center gap-4" }, h("at-menu", { key: 'e8481ffb167d5f03375409815b42cf99bbd3680e', width: "fit-content", position: "left" }, h("at-button", { key: 'd2a9da7644107af533d82286ac4942fa887dde13', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (h("at-icon", { key: 'ac7e10a3d6a76855214adeb06dec61f9d2b2bf18', slot: "icon", name: "overflow_menu" }))), h("div", { key: 'b07bfcd7d06fed572ba5cd90ef5ab4ca45ee3e3b', class: "flex flex-col" }, actions &&
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
