'use strict';

var index = require('./index-DE68Mlxo.js');

const AtTextStatusCellComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    params;
    text;
    type = 'default';
    showSimpleText = false;
    init(params) {
        const { value } = params;
        if (!value)
            return;
        this.setCellData(params, value);
    }
    getGui() {
        return this.el;
    }
    refresh(_) {
        return true;
    }
    setCellData(params, value) {
        this.params = params;
        const badgeType = this.mapValueToBadgeType(params, value);
        this.text = params.mapValueToText
            ? params.mapValueToText(value)
            : value;
        if (params.checkShouldShowSimpleText)
            this.showSimpleText = params.checkShouldShowSimpleText(value);
        this.type = badgeType;
    }
    mapValueToBadgeType(params, value) {
        const badgeType = params.mapValueToStatus && params.mapValueToStatus(value);
        return badgeType || 'default';
    }
    render() {
        return (index.h(index.Host, { key: 'fa395b2910f87ec90482fb9c32296663af3b7a30', class: "flex h-full items-center" }, this.showSimpleText && this.params && (index.h("span", { key: 'a6e2c53f022b0f017f3f394754dddeda3cf63a13', class: "truncate text-sm" }, this.text)), !this.showSimpleText &&
            this.params &&
            (this.params.generateTooltip ? (index.h("at-tooltip", { position: "top", class: "h-fit self-center" }, index.h("at-badge", { slot: "tooltip-trigger", type: this.type, label: this.text }), index.h("span", { class: `${this.params.tooltipClass ?? ''} leading-normal` }, this.params.generateTooltip(this.params)))) : (index.h("at-badge", { type: this.type, label: this.text })))));
    }
};

exports.at_text_status_cell = AtTextStatusCellComponent;
