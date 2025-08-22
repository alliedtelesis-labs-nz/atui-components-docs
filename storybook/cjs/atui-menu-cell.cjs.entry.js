'use strict';

var index = require('./index-43B6Ydvl.js');

const AtuiMenuCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
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
        return (index.h(index.Host, { key: 'caf59aa9ed7d4b177a48659a7ecdabe06a233561', class: "flex h-full items-center gap-4" }, index.h("atui-menu", { key: '29303460a13593a3a90b74b824b4e8a2045d0543', width: "fit-content", position: "left" }, index.h("atui-button", { key: 'febfeb579c929313f0d2df9bf56c4348ed53d205', type: "secondaryText", icon: (_a = this.params.icon) !== null && _a !== void 0 ? _a : 'more_vert', slot: "menu-trigger" }), index.h("div", { key: 'a829108554c4c3d614bf1e5ca724f5cfb8d8a359', slot: "menu-content", class: "flex flex-col" }, actions &&
            actions.map((action) => typeof action === 'object' &&
                (action.disabled &&
                    action.disabled(this.params.data) &&
                    action.disabledTooltip ? (index.h("atui-tooltip", null, index.h("div", { slot: "tooltip-trigger", class: "w-full" }, index.h("atui-menu-item", { label: action.title, disabled: true, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } })), index.h("span", { slot: "tooltip-content" }, action.disabledTooltip))) : (index.h("atui-menu-item", { label: action.title, disabled: action.disabled
                        ? action.disabled(this.params.data)
                        : false, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } }))))))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_menu_cell = AtuiMenuCell;
//# sourceMappingURL=atui-menu-cell.entry.cjs.js.map

//# sourceMappingURL=atui-menu-cell.cjs.entry.js.map