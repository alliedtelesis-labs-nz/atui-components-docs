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
        return (h(Host, { key: '551cd635ef7a7b6d6c3f43f1dc544c1ff4442cb4', class: "flex h-full items-center gap-4" }, h("at-menu", { key: '2dce97c28ca61a531749604d8d4799ac2df6f5ed', width: "fit-content", position: "left" }, h("at-button", { key: 'c9e1ce7164bd39047d439c92d33429c9ffd205ea', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (h("at-icon", { key: '38360defe40b59934e4b979b3504ff140376d57b', slot: "icon", name: "overflow_menu" }))), h("div", { key: 'd61a1f562b4a177812739683931c17f42d7a09ba', class: "flex flex-col" }, actions &&
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
