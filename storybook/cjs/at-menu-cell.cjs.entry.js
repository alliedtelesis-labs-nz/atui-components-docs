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
        return (index.h(index.Host, { key: '961ed09d00dd4e9d72500f609d0e4ccdef50ac1f', class: "flex h-full items-center gap-4" }, index.h("at-menu", { key: 'b2ec4750ba2884ec3c5a4ff0562ff2bcf803bf2e', width: "fit-content", position: "left" }, index.h("at-button", { key: '988a855dfe2a20793cd9bae097c288ec9af4c5fc', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (index.h("at-icon", { key: '5f037f8094145c06301d2c1ed3d75a0903db72e2', slot: "icon", name: "overflow_menu" }))), index.h("div", { key: '05024616fb60ac6ea4704bf2f21df54cb8851a4d', class: "flex flex-col" }, actions &&
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
