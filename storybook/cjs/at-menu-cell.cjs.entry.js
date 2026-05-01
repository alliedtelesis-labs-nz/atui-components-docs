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
        return (index.h(index.Host, { key: '35a889c6dee9e3ddb89f18f18631b6274799d854', class: "flex h-full items-center gap-4" }, index.h("at-menu", { key: 'c1f215f1bf8982f46e557ebf20c0de3bc2dcd21f', width: "fit-content", position: "left" }, index.h("at-button", { key: '077416ca06d41de4add543678572dbf2e3a9fdeb', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (index.h("at-icon", { key: 'b16c256ce5d04f960ed1dad52cefff77267b160b', slot: "icon", name: "overflow_menu" }))), index.h("div", { key: '7f3e70bafd19a64000d3e8663585c0b9c0347512', class: "flex flex-col" }, actions &&
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
