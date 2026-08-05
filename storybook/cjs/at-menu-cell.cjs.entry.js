'use strict';

var index = require('./index-hahhWKrj.js');

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
        return (index.h(index.Host, { key: '551cd635ef7a7b6d6c3f43f1dc544c1ff4442cb4', class: "flex h-full items-center gap-4" }, index.h("at-menu", { key: '2dce97c28ca61a531749604d8d4799ac2df6f5ed', width: "fit-content", position: "left" }, index.h("at-button", { key: 'c9e1ce7164bd39047d439c92d33429c9ffd205ea', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (index.h("at-icon", { key: '38360defe40b59934e4b979b3504ff140376d57b', slot: "icon", name: "overflow_menu" }))), index.h("div", { key: 'd61a1f562b4a177812739683931c17f42d7a09ba', class: "flex flex-col" }, actions &&
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
