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
        return (index.h(index.Host, { key: '6fef07c9d74a59a0bab3ab5afd424a0e892b8799', class: "flex h-full items-center gap-4" }, this.params.value && index.h("span", { key: 'd8722a29ab5240f34cf1416db203da8fab391131' }, this.params.value), index.h("atui-menu", { key: 'f2ff60264fa11c75db07a9d62d6bb694f4c178eb' }, index.h("atui-button", { key: '197495adab5e940fffe183d23fe57a143bed3684', type: "secondaryText", icon: (_a = this.params.icon) !== null && _a !== void 0 ? _a : 'more_vert', slot: "menu-trigger" }), index.h("div", { key: 'f61ebb6e073778a31ab7faae356dbe76374eabc1', slot: "menu-content", class: "flex max-h-120 w-full flex-col overflow-auto" }, this.params.actions &&
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