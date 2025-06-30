'use strict';

var index = require('./index-DGivrgtr.js');

const AtuiTitleSubtitleCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    init(params) {
        const { value } = params;
        this.params = params;
        this.value = value;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params.value);
        return true;
    }
    updateCell(newValue) {
        this.params.value = newValue;
        this.value = newValue;
    }
    render() {
        var _a, _b;
        return (index.h(index.Host, { key: 'c479412ce05622b3848089dadb82b58a05015332' }, index.h("div", { key: 'cc1fb4b767632a6a22854ab9b182592073b6c821', class: "flex h-full flex-col justify-center" }, index.h("div", { key: '485b9f2b0cc418c3f7ec419cc4f1dfc051f16edd', class: "truncate text-sm leading-normal" }, (_a = this.value) === null || _a === void 0 ? void 0 : _a.title), index.h("div", { key: '7ecae6d04378b376d29d53b9f8d16d8d6db514a9', class: "truncate text-xs font-normal leading-normal text-med" }, (_b = this.value) === null || _b === void 0 ? void 0 : _b.subtitle))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_title_subtitle_cell = AtuiTitleSubtitleCell;
//# sourceMappingURL=atui-title-subtitle-cell.entry.cjs.js.map

//# sourceMappingURL=atui-title-subtitle-cell.cjs.entry.js.map