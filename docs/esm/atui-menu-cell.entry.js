import { r as registerInstance, h, H as Host, g as getElement } from './index-HJO1YDmC.js';

const AtuiMenuCellComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
        return (h(Host, { key: '16fbfee3c2074bc24787ba07303bae75cefad817', class: "flex h-full items-center gap-4" }, this.params.value && h("span", { key: 'b21ba6be2820fa15b50a89772c1acbacf0e7ea3a' }, this.params.value), h("atui-menu", { key: '43ceeb55d07dc0144698598b3f739256fb286273' }, h("atui-button", { key: '15032f4a68816316136664fa33b988546a0f96f2', type: "secondaryText", icon: (_a = this.params.icon) !== null && _a !== void 0 ? _a : 'more_vert', slot: "menu-trigger" }), h("div", { key: 'beb826895327152cf7352850ae6c2a7e884a9959', slot: "menu-content", class: "flex max-h-120 w-full flex-col overflow-auto" }, this.params.actions &&
            this.params.actions.map((action) => {
                var _a;
                return typeof action === 'object' ? (h("atui-tooltip", { is_visible: action.getDisabled
                        ? action.getDisabled(this.params.data)
                        : false }, h("atui-button", { class: "w-full *:justify-start", type: "secondaryText", label: action.title, slot: "tooltip-trigger", disabled: action.getDisabled
                        ? action.getDisabled(this.params.data)
                        : false, onClick: (params) => {
                        if (action.onTrigger !==
                            undefined)
                            action.onTrigger(params);
                    } }), h("span", { slot: "tooltip-content" }, (_a = action.disabledTooltip) !== null && _a !== void 0 ? _a : ''))) : (h("span", { class: "py-4" }, action));
            })))));
    }
    get el() { return getElement(this); }
};

export { AtuiMenuCellComponent as atui_menu_cell };
//# sourceMappingURL=atui-menu-cell.entry.js.map

//# sourceMappingURL=atui-menu-cell.entry.js.map