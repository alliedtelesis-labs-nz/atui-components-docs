import { r as registerInstance, g as getElement, h, H as Host } from './index-CoTuPdnC.js';

const AtMenuCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    params;
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
        const actions = typeof this.params.actions === 'function'
            ? this.params.actions(this.params)
            : this.params.actions;
        return (h(Host, { key: 'bd300270c67975fde2f3ccbe7ebae7aa3496051d', class: "flex h-full items-center gap-4" }, h("at-menu", { key: 'b9db80c9ba133e540f9169a967db7d33d70e2606', width: "fit-content", position: "left" }, h("at-button", { key: 'ae607ed6a1d227f589ff053f9b099b3240a1e46a', type: "secondaryText", icon: this.params.icon ?? 'more_vert', slot: "menu-trigger" }), h("div", { key: '1e87677cf5cbc15ac5493ac45db147a517fa7987', class: "flex flex-col" }, actions &&
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
};

export { AtMenuCell as at_menu_cell };
//# sourceMappingURL=at-menu-cell.entry.js.map
