'use strict';

var index = require('./index-i7hIKTeN.js');

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
        return (index.h(index.Host, { key: '81471c60d311d69f9dcc1c318792bce21b14b1b3', class: "flex h-full items-center" }, this.showSimpleText && this.params && (index.h("span", { key: 'ce11340b744de473d674c332a2750719a8a5dd00', class: "truncate text-sm" }, this.text)), !this.showSimpleText &&
            this.params &&
            (this.params.generateTooltip ? (index.h("atui-tooltip", { position: "right" }, index.h("atui-badge", { slot: "tooltip-trigger", type: this.type, label: this.text }), index.h("span", { class: `${(_a = this.params.tooltipClass) !== null && _a !== void 0 ? _a : ''} leading-normal` }, this.params.generateTooltip(this.params)))) : (index.h("atui-badge", { type: this.type, label: this.text })))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_text_status_cell = AtuiTextStatusCellComponent;
//# sourceMappingURL=atui-text-status-cell.entry.cjs.js.map

//# sourceMappingURL=atui-text-status-cell.cjs.entry.js.map