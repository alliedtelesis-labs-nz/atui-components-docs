import { r as registerInstance, h, H as Host, g as getElement } from './index-D3rwhcmG.js';

const AtuiMenuCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'caf59aa9ed7d4b177a48659a7ecdabe06a233561', class: "flex h-full items-center gap-4" }, h("atui-menu", { key: '29303460a13593a3a90b74b824b4e8a2045d0543', width: "fit-content", position: "left" }, h("atui-button", { key: 'febfeb579c929313f0d2df9bf56c4348ed53d205', type: "secondaryText", icon: (_a = this.params.icon) !== null && _a !== void 0 ? _a : 'more_vert', slot: "menu-trigger" }), h("div", { key: '2aae9cb01fc39e1ddc1db2f428002857b2a24620', class: "flex flex-col" }, actions &&
            actions.map((action) => typeof action === 'object' &&
                (action.disabled &&
                    action.disabled(this.params.data) &&
                    action.disabledTooltip ? (h("atui-tooltip", null, h("div", { slot: "tooltip-trigger", class: "w-full" }, h("atui-menu-item", { label: action.title, disabled: true, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } })), h("span", null, action.disabledTooltip))) : (h("atui-menu-item", { label: action.title, disabled: action.disabled
                        ? action.disabled(this.params.data)
                        : false, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } }))))))));
    }
    get el() { return getElement(this); }
};

export { AtuiMenuCell as atui_menu_cell };
//# sourceMappingURL=atui-menu-cell.entry.js.map

//# sourceMappingURL=atui-menu-cell.entry.js.map