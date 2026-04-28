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
    refresh(params) {
        this.init(params);
        return false;
    }
    render() {
        const actions = typeof this.params.actions === 'function'
            ? this.params.actions(this.params)
            : this.params.actions;
        return (h(Host, { key: '32adf16418304ea48fff937d7eb54d26a2661c6a', class: "flex h-full items-center gap-4" }, h("at-menu", { key: 'fbfb56d49f8a8ceb94fb25f519c01bad74b35c92', width: "fit-content", position: "left" }, h("at-button", { key: 'dfc68a1518f4415a85cf3a6fe5ea87d26063b476', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (h("at-icon", { key: '695b0d177e9d421a6338bbc403ee4b16348d1e11', slot: "icon", name: "overflow_menu" }))), h("div", { key: '442a01a7400f343f0ce3eb2cc67e94043402e836', class: "flex flex-col" }, actions &&
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
