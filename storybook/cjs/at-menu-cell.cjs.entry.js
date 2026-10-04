'use strict';

var index = require('./index-Dzqi4iVM.js');

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
        return (index.h(index.Host, { key: '46041121d7415dd871e28bf81295f47c45d15ab1', class: "flex h-full items-center gap-4" }, index.h("at-menu", { key: '9df3a0ef5226cbd66400c240c9a14791fb591ad9', width: "fit-content", position: "left" }, index.h("at-button", { key: 'd2e81a2f5a139681c48667fb5b556228511728be', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (index.h("at-icon", { key: 'cae6bec14c4ebef6d63fae7d7fb438c0addcab40', slot: "icon", name: "overflow_menu" }))), index.h("div", { key: '9964dd0defe140437ee4ed1cf5b97af552c1df5d', class: "flex flex-col" }, actions &&
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
