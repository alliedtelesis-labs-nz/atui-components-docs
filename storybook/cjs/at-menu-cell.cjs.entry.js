'use strict';

var index = require('./index-D1oh76XY.js');

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
        return (index.h(index.Host, { key: '81ff79667c50413339446cedaa3e6b5aff8469a4', class: "flex h-full items-center gap-4" }, index.h("at-menu", { key: 'ee1aa149eec069f0efc86b7f2b90ed93f8e8beaf', width: "fit-content", position: "left" }, index.h("at-button", { key: 'a3d3dadd718b06eb1e9152984b6f2ab66e1bfc24', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (index.h("at-icon", { key: 'd16de0e5149f9e8f5a5441da0a0df0f072a6fecb', slot: "icon", name: "overflow_menu" }))), index.h("div", { key: '6b614eedf4ec7d07c046b606cc4e6221a02afc4a', class: "flex flex-col" }, actions &&
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
