'use strict';

var index = require('./index-BAt2i-T2.js');

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
        const actions = typeof this.params.actions === 'function'
            ? this.params.actions(this.params)
            : this.params.actions;
        return (index.h(index.Host, { key: 'ea3e0e66b77252986740d179645cf27ab7f6faaf', class: "flex h-full items-center gap-4" }, index.h("atui-menu", { key: 'c870a7e7a2198f458c893aed9c1e56b92941be63', width: "auto", portal: true }, index.h("atui-button", { key: 'eeeade5554c540c931103ec7970545816f538b11', type: "secondaryText", icon: (_a = this.params.icon) !== null && _a !== void 0 ? _a : 'more_vert', slot: "menu-trigger" }), index.h("div", { key: 'a6644d2a49fbd756a26284ecfab7b951936f0df5', slot: "menu-content", class: "flex flex-col" }, actions &&
            actions.map((action) => typeof action === 'object' &&
                (action.getDisabled &&
                    action.getDisabled(this.params.data) &&
                    action.disabledTooltip ? (index.h("atui-tooltip", null, index.h("div", { slot: "tooltip-trigger", class: "w-full" }, index.h("atui-menu-item", { label: action.title, disabled: true, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } })), index.h("span", { slot: "tooltip-content" }, action.disabledTooltip))) : (index.h("atui-menu-item", { label: action.title, disabled: action.getDisabled
                        ? action.getDisabled(this.params.data)
                        : false, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } }))))))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_menu_cell = AtuiMenuCellComponent;
//# sourceMappingURL=atui-menu-cell.entry.cjs.js.map

//# sourceMappingURL=atui-menu-cell.cjs.entry.js.map