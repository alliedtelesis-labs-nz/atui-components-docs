'use strict';

var index = require('./index-CdUivN1V.js');

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
        return (index.h(index.Host, { key: 'c382c2efe8ab26510aaba85ac1e09f99e24e4f13', class: "flex h-full items-center gap-4" }, index.h("at-menu", { key: '87dbf0209fb0d2145d4dfa307e4d979aff988346', width: "fit-content", position: "left" }, index.h("at-button", { key: '42a3c84bd45b368b0812070c7887d9cfb2eec269', type: "secondaryText", icon: this.params.icon ?? 'more_vert', slot: "menu-trigger" }), index.h("div", { key: '668b0476d0966cc2136070f94b7629c2172daf6a', class: "flex flex-col" }, actions &&
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
