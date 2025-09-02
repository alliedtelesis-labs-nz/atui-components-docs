'use strict';

var index = require('./index-43B6Ydvl.js');

const AtuiTextStatusCellComponent = class {
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
        return (index.h(index.Host, { key: 'b18a599d63dbd7a86335c30af7698f8c8a683085', class: "flex h-full items-center" }, this.showSimpleText && this.params && (index.h("span", { key: '94d4d9fd16fb67b06a4247dad6ea4f1d0bd0a2ff', class: "truncate text-sm" }, this.text)), !this.showSimpleText &&
            this.params &&
            (this.params.generateTooltip ? (index.h("atui-tooltip", { position: "right" }, index.h("atui-badge", { slot: "tooltip-trigger", type: this.type, label: this.text }), index.h("span", { class: `${(_a = this.params.tooltipClass) !== null && _a !== void 0 ? _a : ''} leading-normal` }, this.params.generateTooltip(this.params)))) : (index.h("atui-badge", { type: this.type, label: this.text })))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_text_status_cell = AtuiTextStatusCellComponent;
//# sourceMappingURL=atui-text-status-cell.entry.cjs.js.map

//# sourceMappingURL=atui-text-status-cell.cjs.entry.js.map