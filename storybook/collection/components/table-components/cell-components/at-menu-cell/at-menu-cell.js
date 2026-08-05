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
        return (h(Host, { key: '475aec51a46cdb814d77723c2e28336d5de020a7', class: "flex h-full items-center gap-4" }, h("at-menu", { key: '7b8f8bda5489bbde93bae0295a8c192874b84198', width: "fit-content", position: "left" }, h("at-button", { key: '970953dfac04062d15282ddc8ddd59f1620d4530', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (h("at-icon", { key: '3d3ed9bc3d616447ce63f3f4e048506f9c901fce', slot: "icon", name: "overflow_menu" }))), h("div", { key: '221a526e32c3221a3135634f7dc0638063d52396', class: "flex flex-col" }, actions &&
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
