'use strict';

var index = require('./index-i7hIKTeN.js');

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
        return (index.h(index.Host, { key: '089d357a69e76344f97728ff867b919fcf29ae56', class: "flex h-full items-center gap-4" }, index.h("atui-menu", { key: '82bf7201d1d02722345ff4b2bf368d6c201f6ced', width: "fit-content", position: "left" }, index.h("atui-button", { key: '7b0080efe87bf05800e43b8f6482ed65e31b8df9', type: "secondaryText", icon: (_a = this.params.icon) !== null && _a !== void 0 ? _a : 'more_vert', slot: "menu-trigger" }), index.h("div", { key: '53645427abd324f0ed039fbe1339f3263309dcb4', class: "flex flex-col" }, actions &&
            actions.map((action) => typeof action === 'object' &&
                (action.disabled &&
                    action.disabled(this.params.data) &&
                    action.disabledTooltip ? (index.h("atui-tooltip", null, index.h("div", { slot: "tooltip-trigger", class: "w-full" }, index.h("atui-menu-item", { label: action.title, disabled: true, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } })), index.h("span", null, action.disabledTooltip))) : (index.h("atui-menu-item", { label: action.title, disabled: action.disabled
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