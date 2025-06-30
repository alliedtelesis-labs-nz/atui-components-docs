'use strict';

var index = require('./index-DGivrgtr.js');

const AtuiMenuCellComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '16fbfee3c2074bc24787ba07303bae75cefad817', class: "flex h-full items-center gap-4" }, this.params.value && index.h("span", { key: 'b21ba6be2820fa15b50a89772c1acbacf0e7ea3a' }, this.params.value), index.h("atui-menu", { key: '43ceeb55d07dc0144698598b3f739256fb286273' }, index.h("atui-button", { key: '15032f4a68816316136664fa33b988546a0f96f2', type: "secondaryText", icon: (_a = this.params.icon) !== null && _a !== void 0 ? _a : 'more_vert', slot: "menu-trigger" }), index.h("div", { key: 'beb826895327152cf7352850ae6c2a7e884a9959', slot: "menu-content", class: "flex max-h-120 w-full flex-col overflow-auto" }, this.params.actions &&
            this.params.actions.map((action) => {
                var _a;
                return typeof action === 'object' ? (index.h("atui-tooltip", { is_visible: action.getDisabled
                        ? action.getDisabled(this.params.data)
                        : false }, index.h("atui-button", { class: "w-full *:justify-start", type: "secondaryText", label: action.title, slot: "tooltip-trigger", disabled: action.getDisabled
                        ? action.getDisabled(this.params.data)
                        : false, onClick: (params) => {
                        if (action.onTrigger !==
                            undefined)
                            action.onTrigger(params);
                    } }), index.h("span", { slot: "tooltip-content" }, (_a = action.disabledTooltip) !== null && _a !== void 0 ? _a : ''))) : (index.h("span", { class: "py-4" }, action));
            })))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_menu_cell = AtuiMenuCellComponent;
//# sourceMappingURL=atui-menu-cell.entry.cjs.js.map

//# sourceMappingURL=atui-menu-cell.cjs.entry.js.map