'use strict';

var index = require('./index--r5sCsiV.js');

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
        return (index.h(index.Host, { key: '204082fe9c8bffe4467d2e58d2604ec44df0af33', class: "flex h-full items-center gap-4" }, index.h("at-menu", { key: '7bc007cd944027fba24bc0285036997019d0c168', width: "fit-content", position: "left" }, index.h("at-button", { key: 'be369a6182a814d8e8ecccdec64a447ca215f538', type: "secondaryText", icon: this.params.icon, slot: "menu-trigger" }, !this.params.icon && (index.h("at-icon", { key: '60468304447e5c73e1967d5600c5fdd3505ddce6', slot: "icon", name: "overflow_menu" }))), index.h("div", { key: 'f51bfafdf6d3ce23d943361f38e9c0cb939ef789', class: "flex flex-col" }, actions &&
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
