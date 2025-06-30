'use strict';

var index = require('./index-DGivrgtr.js');

const AtuiTextBadgeCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    init(params) {
        const { textTransform, badgeText } = params;
        this.params = params;
        this.textValue = params.value;
        this.badgeTextValue = badgeText(params);
        if (params.data) {
            if (textTransform) {
                this.textValue = textTransform(params.data, params.value);
            }
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
        var _a, _b, _c;
        return (index.h(index.Host, { key: '8dab9b7ff525a142056878dadafa56f0442ecfd4', class: "align-center flex h-full" }, index.h("atui-tooltip", { key: 'ad0dfc03b6b74423cb07d56334f9a37b4b79b387', position: "right", is_visible: !!this.params.generateTooltip }, index.h("span", { key: '5a046c4c9c5843f77808198aa2143f35666cd9ef', slot: "tooltip-trigger", "data-index": `column-${this.params.rowIndex}-data`, class: "truncate", onClick: () => {
                if (this.params.click)
                    this.params.click(this.params);
            } }, this.textValue), this.params.generateTooltip && (index.h("span", { key: '642bc7f572d1eaefe96e9338d7009cac90ceb588', slot: "tooltip-content", class: `${(_a = this.params.tooltipClass) !== null && _a !== void 0 ? _a : ''} leading-normal` }, this.params.generateTooltip(this.params)))), index.h("atui-tooltip", { key: '5efc8ced0791d3a3024599358cd5d72fa5e098b0', position: "right", is_visible: !!this.params.generateBadgeTooltip }, index.h("span", { key: 'ad65bfb05395340a5657ee4e7dcb45864f06b292', slot: "tooltip-trigger", "data-index": `column-${this.params.rowIndex}-data`, class: "truncate", onClick: () => {
                if (this.params.click)
                    this.params.click(this.params);
            } }, index.h("atui-badge", { key: '9c794cb7b2d78927203831ec7d0388c0b03f9e2e', type: (_b = this.params) === null || _b === void 0 ? void 0 : _b.badgeType, class: "ml-4", label: this.badgeTextValue })), this.params.generateBadgeTooltip && (index.h("span", { key: 'b391f1748f1c62bdd01c626b75b98f140d4559c5', slot: "tooltip-content", class: `${(_c = this.params.badgeTooltipClass) !== null && _c !== void 0 ? _c : ''} leading-normal` }, this.params.generateBadgeTooltip(this.params))))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_text_badge_cell = AtuiTextBadgeCell;
//# sourceMappingURL=atui-text-badge-cell.entry.cjs.js.map

//# sourceMappingURL=atui-text-badge-cell.cjs.entry.js.map