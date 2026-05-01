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
        return (h(Host, { key: '35a889c6dee9e3ddb89f18f18631b6274799d854', class: "flex h-full items-center gap-4" }, h("at-menu", { key: 'c1f215f1bf8982f46e557ebf20c0de3bc2dcd21f', width: "fit-content", position: "left" }, h("at-button", { key: '077416ca06d41de4add543678572dbf2e3a9fdeb', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (h("at-icon", { key: 'b16c256ce5d04f960ed1dad52cefff77267b160b', slot: "icon", name: "overflow_menu" }))), h("div", { key: '7f3e70bafd19a64000d3e8663585c0b9c0347512', class: "flex flex-col" }, actions &&
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
