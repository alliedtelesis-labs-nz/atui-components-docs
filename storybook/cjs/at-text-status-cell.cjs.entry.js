'use strict';

var index = require('./index-LVEefvKk.js');

const AtTextStatusCellComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.type = 'default';
        this.showSimpleText = false;
    }
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
        var _a;
        return (index.h(index.Host, { key: 'c803d176badce0972ede8920cc059e5c9f02baf7', class: "flex h-full items-center" }, this.showSimpleText && this.params && (index.h("span", { key: '0db68d72f7e416b697a5704e580665d3ea4eac51', class: "truncate text-sm" }, this.text)), !this.showSimpleText &&
            this.params &&
            (this.params.generateTooltip ? (index.h("at-tooltip", { position: "right" }, index.h("at-badge", { slot: "tooltip-trigger", type: this.type, label: this.text }), index.h("span", { class: `${(_a = this.params.tooltipClass) !== null && _a !== void 0 ? _a : ''} leading-normal` }, this.params.generateTooltip(this.params)))) : (index.h("at-badge", { type: this.type, label: this.text })))));
    }
    get el() { return index.getElement(this); }
};

exports.at_text_status_cell = AtTextStatusCellComponent;
//# sourceMappingURL=at-text-status-cell.entry.cjs.js.map
