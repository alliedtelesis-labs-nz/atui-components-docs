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
        return (index.h(index.Host, { key: '887b291d37a81892fa1b0ddeb01e4b680397950b', class: "flex h-full items-center gap-4" }, index.h("at-menu", { key: '5f590fd885168fe6ca1220ff98e85cbda17d2714', width: "fit-content", position: "left" }, index.h("at-button", { key: '3de6cf6eb78d53fec9ebbe8ce3b977a92ad8a65d', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (index.h("at-icon", { key: '093cbe4f7879d25cb8af10a7bc5d622e4a0851ae', slot: "icon", name: "overflow_menu" }))), index.h("div", { key: '275fef61c46e20539e454e61f31627d159db8331', class: "flex flex-col" }, actions &&
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
