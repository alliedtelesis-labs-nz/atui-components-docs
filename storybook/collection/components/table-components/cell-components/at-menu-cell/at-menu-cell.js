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
        return (h(Host, { key: 'c50eb97e1dbf872d26735c732bf23419c97bf4ac', class: "flex h-full items-center gap-4" }, h("at-menu", { key: '41f5b04aef01692a433802b0c3577dfa2e1a4a4d', width: "fit-content", position: "left" }, h("at-button", { key: 'b1d8eabcdbd20335370828d635ea849cc872dba8', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (h("at-icon", { key: '129cc1a863c1d78569466313381737ca043c6b1c', slot: "icon", name: "overflow_menu" }))), h("div", { key: 'a6be1c9284f85245b12c9dca3c20199422bf886b', class: "flex flex-col" }, actions &&
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
