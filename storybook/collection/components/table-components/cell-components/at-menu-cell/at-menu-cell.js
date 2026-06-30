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
        return (h(Host, { key: '76aced4aeefa9b51155d9526b269af8d421a0668', class: "flex h-full items-center gap-4" }, h("at-menu", { key: '2a00dd8b9f56e683474c191affc18e743b423247', width: "fit-content", position: "left" }, h("at-button", { key: 'e8a68753a68eb4bb1d85e568b99cd33e3d1855e3', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (h("at-icon", { key: '93ac2b6178abb89ad28f8506a3c79aa524b89fb3', slot: "icon", name: "overflow_menu" }))), h("div", { key: '73c70aca21ccdba38c60710d16512bd1c616b1e9', class: "flex flex-col" }, actions &&
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
