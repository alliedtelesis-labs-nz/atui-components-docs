import { r as registerInstance, h, H as Host, g as getElement } from './index-8kq1vl9Q.js';

const AtuiTextBadgeCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '06688d2f88e803fa9fe40bfdd5b75bb4e7fd579d', class: "align-center flex h-full" }, h("atui-tooltip", { key: '1f7de985662542647932b2851853996df96a9e60', position: "right", is_visible: !!this.params.generateTooltip }, h("span", { key: '1ba32fea4960734f3b2a64bdb01dfb08091949ac', slot: "tooltip-trigger", "data-index": `column-${this.params.rowIndex}-data`, class: "truncate", onClick: () => {
                if (this.params.click)
                    this.params.click(this.params);
            } }, this.textValue), this.params.generateTooltip && (h("span", { key: 'b9479897b34d7f06b30f35a96c508a3b686453b4', slot: "tooltip-content", class: `${(_a = this.params.tooltipClass) !== null && _a !== void 0 ? _a : ''} leading-normal` }, this.params.generateTooltip(this.params)))), h("atui-tooltip", { key: '001cee21af866cec8c56850071ef3d47e0ace18e', position: "right", is_visible: !!this.params.generateBadgeTooltip }, h("span", { key: '67f215e4cff8920f96d4cfd5b0ab22e39619fb71', slot: "tooltip-trigger", "data-index": `column-${this.params.rowIndex}-data`, class: "truncate", onClick: () => {
                if (this.params.click)
                    this.params.click(this.params);
            } }, h("atui-badge", { key: '4ba17f21f09f4d3fcf02f6f23f16e7dd731fc9f0', type: (_b = this.params) === null || _b === void 0 ? void 0 : _b.badgeType, class: "ml-4", label: this.badgeTextValue })), this.params.generateBadgeTooltip && (h("span", { key: '8805dec1b04b3b16b409bf3229649734423140f6', slot: "tooltip-content", class: `${(_c = this.params.badgeTooltipClass) !== null && _c !== void 0 ? _c : ''} leading-normal` }, this.params.generateBadgeTooltip(this.params))))));
    }
    get el() { return getElement(this); }
};

export { AtuiTextBadgeCell as atui_text_badge_cell };
//# sourceMappingURL=atui-text-badge-cell.entry.js.map

//# sourceMappingURL=atui-text-badge-cell.entry.js.map