'use strict';

var index = require('./index-CzDB71Wy.js');

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
        return (index.h(index.Host, { key: '3fa580a477f5e8ea1e6bad081757511ff0b0a051', class: "flex h-full items-center gap-4" }, index.h("at-menu", { key: '567378f1fb1e253e01d3448bf0e3458759940bd5', width: "fit-content", position: "left" }, index.h("at-button", { key: 'ee006285f231543d187638cf355e5a24f9061495', type: "secondaryText", icon: this.params.icon ?? 'more_vert', slot: "menu-trigger" }), index.h("div", { key: '2723278d7f03a67d4a411edd0f974cb5fca4d0fe', class: "flex flex-col" }, actions &&
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
