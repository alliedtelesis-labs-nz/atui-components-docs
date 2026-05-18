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
        return (h(Host, { key: '961ed09d00dd4e9d72500f609d0e4ccdef50ac1f', class: "flex h-full items-center gap-4" }, h("at-menu", { key: 'b2ec4750ba2884ec3c5a4ff0562ff2bcf803bf2e', width: "fit-content", position: "left" }, h("at-button", { key: '988a855dfe2a20793cd9bae097c288ec9af4c5fc', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (h("at-icon", { key: '5f037f8094145c06301d2c1ed3d75a0903db72e2', slot: "icon", name: "overflow_menu" }))), h("div", { key: '05024616fb60ac6ea4704bf2f21df54cb8851a4d', class: "flex flex-col" }, actions &&
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
