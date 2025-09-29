import { r as registerInstance, h, H as Host, g as getElement } from './index-BlNBm0E8.js';

const AtMenuCell = class {
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
        return (h(Host, { key: 'bd300270c67975fde2f3ccbe7ebae7aa3496051d', class: "flex h-full items-center gap-4" }, h("at-menu", { key: 'b9db80c9ba133e540f9169a967db7d33d70e2606', width: "fit-content", position: "left" }, h("at-button", { key: 'ae607ed6a1d227f589ff053f9b099b3240a1e46a', type: "secondaryText", icon: (_a = this.params.icon) !== null && _a !== void 0 ? _a : 'more_vert', slot: "menu-trigger" }), h("div", { key: '1e87677cf5cbc15ac5493ac45db147a517fa7987', class: "flex flex-col" }, actions &&
            actions.map((action) => typeof action === 'object' &&
                (action.disabled &&
                    action.disabled(this.params.data) &&
                    action.disabledTooltip ? (h("at-tooltip", null, h("div", { slot: "tooltip-trigger", class: "w-full" }, h("at-menu-item", { label: action.title, disabled: true, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } })), h("span", null, action.disabledTooltip))) : (h("at-menu-item", { label: action.title, disabled: action.disabled
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

export { AtMenuCell as at_menu_cell };
//# sourceMappingURL=at-menu-cell.entry.js.map
