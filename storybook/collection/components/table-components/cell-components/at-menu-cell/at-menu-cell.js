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
        return (h(Host, { key: '0335f2526eb9d21bfc0df05a295d857be5e7a6e6', class: "flex h-full items-center gap-4" }, h("at-menu", { key: 'd2e08aedbcf38cec840d2747014b46cd1b2fae7b', width: "fit-content", position: "left" }, h("at-button", { key: 'a1767a6f65e80a3f28a9113c2a2d5102db06fefb', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (h("at-icon", { key: '0b1fa2d39a3f5bfb5f6fd6cf0015d6c18dc651aa', slot: "icon", name: "overflow_menu" }))), h("div", { key: '9578176b32c1cf62e9fcb02df51e0ff5732d5dc0', class: "flex flex-col" }, actions &&
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
