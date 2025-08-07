import { h, Host } from "@stencil/core";
/**
 * @category Table Cell
 * @description A cell component for displaying a menu.
 */
export class AtuiMenuCell {
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
        var _a;
        const actions = typeof this.params.actions === 'function'
            ? this.params.actions(this.params)
            : this.params.actions;
        return (h(Host, { key: 'caf59aa9ed7d4b177a48659a7ecdabe06a233561', class: "flex h-full items-center gap-4" }, h("atui-menu", { key: '29303460a13593a3a90b74b824b4e8a2045d0543', width: "fit-content", position: "left" }, h("atui-button", { key: 'febfeb579c929313f0d2df9bf56c4348ed53d205', type: "secondaryText", icon: (_a = this.params.icon) !== null && _a !== void 0 ? _a : 'more_vert', slot: "menu-trigger" }), h("div", { key: 'a829108554c4c3d614bf1e5ca724f5cfb8d8a359', slot: "menu-content", class: "flex flex-col" }, actions &&
            actions.map((action) => typeof action === 'object' &&
                (action.disabled &&
                    action.disabled(this.params.data) &&
                    action.disabledTooltip ? (h("atui-tooltip", null, h("div", { slot: "tooltip-trigger", class: "w-full" }, h("atui-menu-item", { label: action.title, disabled: true, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } })), h("span", { slot: "tooltip-content" }, action.disabledTooltip))) : (h("atui-menu-item", { label: action.title, disabled: action.disabled
                        ? action.disabled(this.params.data)
                        : false, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } }))))))));
    }
    static get is() { return "atui-menu-cell"; }
    static get states() {
        return {
            "params": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-menu-cell.js.map
