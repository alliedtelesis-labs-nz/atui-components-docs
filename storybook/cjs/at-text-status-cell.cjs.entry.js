'use strict';

var index = require('./index-CdUivN1V.js');

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
        return (index.h(index.Host, { key: 'b2e0059719089048535c0f1d662f633ff89ce172', class: "flex h-full items-center" }, this.showSimpleText && this.params && (index.h("span", { key: 'd1ba0db4dba6fee0dd54d4eccbbce3c4238b2d73', class: "truncate text-sm" }, this.text)), !this.showSimpleText &&
            this.params &&
            (this.params.generateTooltip ? (index.h("at-tooltip", { position: "right" }, index.h("at-badge", { slot: "tooltip-trigger", type: this.type, label: this.text }), index.h("span", { class: `${this.params.tooltipClass ?? ''} leading-normal` }, this.params.generateTooltip(this.params)))) : (index.h("at-badge", { type: this.type, label: this.text })))));
    }
};

exports.at_text_status_cell = AtTextStatusCellComponent;
