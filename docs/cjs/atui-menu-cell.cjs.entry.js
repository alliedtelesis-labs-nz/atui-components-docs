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
        return (index.h(index.Host, { key: '809243d67aee34d28410b68e86ae9dd8bb9c27e5', class: "flex h-full items-center gap-4" }, this.params.value && index.h("span", { key: 'd95e5d85d7b7f9777015773cf98688adba1f5c0a' }, this.params.value), index.h("atui-menu", { key: '355a60632a43905ed58668b9172eddc81d95f9dd' }, index.h("atui-button", { key: '683c9ecd748ed5499e383c448b6527aa134ddd25', type: "secondaryText", icon: (_a = this.params.icon) !== null && _a !== void 0 ? _a : 'more_vert', slot: "menu-trigger" }), index.h("div", { key: 'de723058c933eadc7da2b62dac1f1d1b275384ed', slot: "menu-content", class: "flex max-h-120 w-full flex-col overflow-auto" }, this.params.actions &&
            this.params.actions.map((action) => {
                var _a;
                return typeof action === 'object' ? (index.h("atui-tooltip", { is_visible: action.getDisabled
                        ? action.getDisabled(this.params.data)
                        : false }, "sssssssss", index.h("atui-button", { class: "w-full *:justify-start", type: "secondaryText", label: action.title, slot: "tooltip-trigger", disabled: action.getDisabled
                        ? action.getDisabled(this.params.data)
                        : false, onClick: (params) => {
                        if (action.onTrigger !==
                            undefined)
                            action.onTrigger(params);
                    } }), index.h("span", { slot: "tooltip-content" }, (_a = action.disabledTooltip) !== null && _a !== void 0 ? _a : ''))) : (index.h("span", { class: "py-4" }, "sssssssss", action));
            })))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_menu_cell = AtuiMenuCellComponent;
//# sourceMappingURL=atui-menu-cell.entry.cjs.js.map

//# sourceMappingURL=atui-menu-cell.cjs.entry.js.map