'use strict';

var index = require('./index-BJDFmEHZ.js');

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
        return (index.h(index.Host, { key: '29bc6c5b3d5de13fbfae0f16a786d56c9fb62dba', class: "flex h-full items-center gap-4" }, this.params.value && index.h("span", { key: '32125c9e14d19bbd62aeac56f6f390419b8a9eb9' }, this.params.value), index.h("atui-menu", { key: 'd958befd2705c78264f209dcf890b94ac29709a5' }, index.h("atui-button", { key: 'ba46826631e0413b2d32f4c887b4048ce5044206', type: "secondaryText", icon: (_a = this.params.icon) !== null && _a !== void 0 ? _a : 'more_vert', slot: "menu-trigger" }), index.h("div", { key: 'cbe95a4ba046f059818f7180df90886a6fdab18c', slot: "menu-content", class: "flex max-h-120 w-full flex-col overflow-auto" }, this.params.actions &&
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