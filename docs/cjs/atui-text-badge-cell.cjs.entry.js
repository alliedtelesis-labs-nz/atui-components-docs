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
        return (index.h(index.Host, { key: 'c4a1d605581b6e3d67a8b0c53c9281c86f0bea15', class: "align-center flex h-full" }, index.h("atui-tooltip", { key: '94f5e8eec560ece9b8eb8293e73dace27e252cfe', position: "right", is_visible: !!this.params.generateTooltip }, index.h("span", { key: '53bf5bd948ed0ea247dfccb9b712a77ad6bdba6b', slot: "tooltip-trigger", "data-index": `column-${this.params.rowIndex}-data`, class: "truncate", onClick: () => {
                if (this.params.click)
                    this.params.click(this.params);
            } }, this.textValue), this.params.generateTooltip && (index.h("span", { key: 'ba75a8b46e482895a06c9789c3a76699604dabe9', slot: "tooltip-content", class: `${(_a = this.params.tooltipClass) !== null && _a !== void 0 ? _a : ''} leading-normal` }, this.params.generateTooltip(this.params)))), index.h("atui-tooltip", { key: 'd59b8830277484c60d238af1175fd4ca9a588a38', position: "right", is_visible: !!this.params.generateBadgeTooltip }, index.h("span", { key: '9daa20527e1d4ac545de2beff33aaa9d591c3443', slot: "tooltip-trigger", "data-index": `column-${this.params.rowIndex}-data`, class: "truncate", onClick: () => {
                if (this.params.click)
                    this.params.click(this.params);
            } }, index.h("atui-badge", { key: '70e2549f833949932ad38ea2bd8b89bc387e667e', type: (_b = this.params) === null || _b === void 0 ? void 0 : _b.badgeType, class: "ml-4", label: this.badgeTextValue })), this.params.generateBadgeTooltip && (index.h("span", { key: '8b94209f3c66f63437792cec4046234c0c6284d3', slot: "tooltip-content", class: `${(_c = this.params.badgeTooltipClass) !== null && _c !== void 0 ? _c : ''} leading-normal` }, this.params.generateBadgeTooltip(this.params))))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_text_badge_cell = AtuiTextBadgeCell;
//# sourceMappingURL=atui-text-badge-cell.entry.cjs.js.map

//# sourceMappingURL=atui-text-badge-cell.cjs.entry.js.map