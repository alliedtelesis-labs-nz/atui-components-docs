import { h, Host } from "@stencil/core";
/**
 * @category Table Cell
 * @description A cell component for displaying a menu.
 */
export class AtuiMenuCellComponent {
    init(params) {
        this.params = params;
    }
    getGui() {
        return this.el;
    }
    refresh(_) {
        return false;
    }
    render() {
        var _a;
        const actions = typeof this.params.actions === 'function'
            ? this.params.actions(this.params)
            : this.params.actions;
        return (h(Host, { key: 'ea3e0e66b77252986740d179645cf27ab7f6faaf', class: "flex h-full items-center gap-4" }, h("atui-menu", { key: 'c870a7e7a2198f458c893aed9c1e56b92941be63', width: "auto", portal: true }, h("atui-button", { key: 'eeeade5554c540c931103ec7970545816f538b11', type: "secondaryText", icon: (_a = this.params.icon) !== null && _a !== void 0 ? _a : 'more_vert', slot: "menu-trigger" }), h("div", { key: 'a6644d2a49fbd756a26284ecfab7b951936f0df5', slot: "menu-content", class: "flex flex-col" }, actions &&
            actions.map((action) => typeof action === 'object' &&
                (action.getDisabled &&
                    action.getDisabled(this.params.data) &&
                    action.disabledTooltip ? (h("atui-tooltip", null, h("div", { slot: "tooltip-trigger", class: "w-full" }, h("atui-menu-item", { label: action.title, disabled: true, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } })), h("span", { slot: "tooltip-content" }, action.disabledTooltip))) : (h("atui-menu-item", { label: action.title, disabled: action.getDisabled
                        ? action.getDisabled(this.params.data)
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
