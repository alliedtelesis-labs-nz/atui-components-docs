'use strict';

var index = require('./index-w3vomLqM.js');

const AtMenuCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
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
        return (index.h(index.Host, { key: 'bd300270c67975fde2f3ccbe7ebae7aa3496051d', class: "flex h-full items-center gap-4" }, index.h("at-menu", { key: 'b9db80c9ba133e540f9169a967db7d33d70e2606', width: "fit-content", position: "left" }, index.h("at-button", { key: 'ae607ed6a1d227f589ff053f9b099b3240a1e46a', type: "secondaryText", icon: this.params.icon ?? 'more_vert', slot: "menu-trigger" }), index.h("div", { key: '1e87677cf5cbc15ac5493ac45db147a517fa7987', class: "flex flex-col" }, actions &&
            actions.map((action) => typeof action === 'object' &&
                (action.disabled &&
                    action.disabled(this.params.data) &&
                    action.disabledTooltip ? (index.h("at-tooltip", null, index.h("div", { slot: "tooltip-trigger", class: "w-full" }, index.h("at-menu-item", { label: action.title, disabled: true, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } })), index.h("span", null, action.disabledTooltip))) : (index.h("at-menu-item", { label: action.title, disabled: action.disabled
                        ? action.disabled(this.params.data)
                        : false, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } }))))))));
    }
};

exports.at_menu_cell = AtMenuCell;
//# sourceMappingURL=at-menu-cell.entry.cjs.js.map
