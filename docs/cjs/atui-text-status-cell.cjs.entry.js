'use strict';

var index = require('./index-DGivrgtr.js');

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
        const badgeType = params.mapValueToBadge && params.mapValueToBadge(value);
        return badgeType || 'default';
    }
    render() {
        var _a;
        return (index.h(index.Host, { key: '95138d7e2e250fe97161892e83a1e9dc56ba6a34', class: "flex h-full items-center" }, this.showSimpleText && this.params && (index.h("span", { key: 'a3c67703205780a23dde7f37efbfdf6368b0e304', class: "truncate text-sm" }, this.text)), !this.showSimpleText &&
            this.params &&
            (this.params.generateTooltip ? (index.h("atui-tooltip", { position: "right", is_visible: true }, index.h("atui-badge", { slot: "tooltip-trigger", type: this.type, label: this.text, onClick: () => {
                    if (this.params.click)
                        this.params.click(this.params);
                } }), index.h("span", { slot: "tooltip-content", class: `${(_a = this.params.tooltipClass) !== null && _a !== void 0 ? _a : ''} leading-normal` }, this.params.generateTooltip(this.params)))) : (index.h("atui-badge", { type: this.type, label: this.text, onClick: () => {
                    if (this.params.click)
                        this.params.click(this.params);
                } })))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_text_status_cell = AtuiTextStatusCellComponent;
//# sourceMappingURL=atui-text-status-cell.entry.cjs.js.map

//# sourceMappingURL=atui-text-status-cell.cjs.entry.js.map