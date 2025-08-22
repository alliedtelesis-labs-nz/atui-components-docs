'use strict';

var index = require('./index-43B6Ydvl.js');

const AtuiTextBadgeCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    init(params) {
        var _a, _b;
        this.params = params;
        if (this.params.text) {
            this.textValue = this.params.text(params.data);
        }
        else {
            this.textValue = ((_a = params.value) === null || _a === void 0 ? void 0 : _a.text) || '';
        }
        if (this.params.badgeText) {
            this.badgeTextValue = this.params.badgeText(params.data);
        }
        else {
            this.badgeTextValue = ((_b = params.value) === null || _b === void 0 ? void 0 : _b.badgeText) || '';
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
        var _a;
        return (index.h(index.Host, { key: '9045a3d6a93eb93bbfdea1e5c7a2df22d15474e0', class: "flex h-full items-center" }, index.h("atui-tooltip", { key: '099af47a38a18b3150fbe44b65a04cdc279c9207', position: "right", disabled: !this.params.generateTooltip }, index.h("div", { key: '09deda0fabffc1f9b1280ecffac65bb0664b7822', slot: "tooltip-trigger" }, index.h("span", { key: '7a9fe4d0600eaade3b326b705795bd015a3e6adf', class: "truncate" }, this.textValue), index.h("atui-badge", { key: 'd4e5fd3213de79c0afbc3512b33969a08b318527', type: "info", class: "ml-4", label: this.badgeTextValue })), ((_a = this.params) === null || _a === void 0 ? void 0 : _a.generateTooltip) && (index.h("span", { key: 'f1c83b6d999f13a2c9efaec0c7e6f13fcb97576b', slot: "tooltip-content", class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_text_badge_cell = AtuiTextBadgeCell;
//# sourceMappingURL=atui-text-badge-cell.entry.cjs.js.map

//# sourceMappingURL=atui-text-badge-cell.cjs.entry.js.map