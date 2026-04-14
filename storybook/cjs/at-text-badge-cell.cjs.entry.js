'use strict';

var index = require('./index-BRms7T38.js');

const AtTextBadgeCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    textValue;
    badgeTextValue;
    params;
    init(params) {
        this.params = params;
        if (this.params.text) {
            this.textValue = this.params.text(params.data);
        }
        else {
            this.textValue = params.value?.text || '';
        }
        if (this.params.badgeText) {
            this.badgeTextValue = this.params.badgeText(params.data);
        }
        else {
            this.badgeTextValue = params.value?.badgeText || '';
        }
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(String(params.value));
        return true;
    }
    updateCell(newValue) {
        this.params.value = newValue;
        this.textValue = this.params.value;
    }
    render() {
        return (index.h(index.Host, { key: '200e71729a144d15cf359cd9944693f26569edd5', class: "flex h-full items-center" }, index.h("at-tooltip", { key: '39860fb529777a0e95a2fd9c48c826d393d3083f', position: "right", disabled: !this.params.generateTooltip }, index.h("div", { key: '298a622c0d504fa5a200a3adff3537cd00992d5e', slot: "tooltip-trigger" }, index.h("span", { key: '2d979c1925cac203747590e8bf5fa76681f1d316', class: "truncate" }, this.textValue), index.h("at-badge", { key: 'dd0368d851d8ad59002e3b0b72c5a04920a5f28b', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (index.h("span", { key: '0ba4504bf2300991100c69c0fbe5fd048efc2699', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_badge_cell = AtTextBadgeCell;
