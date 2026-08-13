'use strict';

var index = require('./index-6KYrJiD1.js');

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
    /**
     * Returning `true` tells AG-Grid the cell handled the refresh itself, so the
     * component is reused rather than destroyed and recreated. That matters here
     * because the cell hosts an `at-menu` popover: on recreation the menu panel
     * briefly renders and measures before it is positioned and hidden, which
     * shows up as a flash/artifact in the column (most visible when the actions
     * column is pinned). `params` is `@State`, so reassigning it re-renders the
     * existing cell with the new data.
     */
    refresh(params) {
        this.init(params);
        return true;
    }
    render() {
        const actions = typeof this.params.actions === 'function'
            ? this.params.actions(this.params)
            : this.params.actions;
        return (index.h(index.Host, { key: '464c5db57667b49613bee9e16f741207d141d267', class: "flex h-full items-center gap-4" }, index.h("at-menu", { key: '4a2e68caaaa6b6140e0b98cf6d4949ba895e1572', width: "fit-content", position: "left" }, index.h("at-button", { key: 'eb42cfc1418d9afe6440b35b60500755bfc6e64b', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (index.h("at-icon", { key: '15d0699211c548b6b5bc1bae8a4ef2376a76712d', slot: "icon", name: "overflow_menu" }))), index.h("div", { key: 'de051c85be7ae7ca038854202a1b1b3a2b852b2f', class: "flex flex-col" }, actions &&
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
