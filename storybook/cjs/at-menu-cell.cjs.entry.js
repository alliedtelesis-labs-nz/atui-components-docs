'use strict';

var index = require('./index-CZHE0nPQ.js');

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
        return (index.h(index.Host, { key: 'cd843166ecd99edb560c19055269531291c3092b', class: "flex h-full items-center gap-4" }, index.h("at-menu", { key: '9a05f96770fab6983771648ed2c4cd310235b2be', width: "fit-content", position: "left" }, index.h("at-button", { key: 'c9a1120f98f70f8de2d09780707917defc5460b6', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (index.h("at-icon", { key: 'a29d7a7c4f0d86ffcad7ec035ec647edb7e9474b', slot: "icon", name: "overflow_menu" }))), index.h("div", { key: '2a6fe12751b0b66c432ab0093f127aed580ccfd5', class: "flex flex-col" }, actions &&
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
