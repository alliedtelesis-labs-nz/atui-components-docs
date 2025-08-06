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
        return (index.h(index.Host, { key: '04bc7340760dd99a243cd5648aff43b6cbb01850' }, index.h("div", { key: 'a702ca4101dfc1e209c6d62c4ae1ed847cdc9bbb', class: "flex h-full flex-col justify-center" }, index.h("div", { key: '724227fd63185a5a3f5c6258ccb5e7c5b9076c34', class: "truncate text-sm leading-normal" }, (_a = this.value) === null || _a === void 0 ? void 0 : _a.title), index.h("div", { key: 'd473594779cf546833bd540196bd5e393eebf9b3', class: "truncate text-xs font-normal leading-normal text-med" }, (_b = this.value) === null || _b === void 0 ? void 0 : _b.subtitle))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_title_subtitle_cell = AtuiTitleSubtitleCell;
//# sourceMappingURL=atui-title-subtitle-cell.entry.cjs.js.map

//# sourceMappingURL=atui-title-subtitle-cell.cjs.entry.js.map