import { r as registerInstance, h, H as Host, g as getElement } from './index-C8uvvL0O.js';

const AtuiTextBadgeCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'bf30c243bcb584002af7174a2f034dbadd591aa1', class: "flex h-full items-center" }, h("atui-tooltip", { key: '7ab7a9c61dec391f557549db3be111365fd14227', position: "right", disabled: !this.params.generateTooltip }, h("div", { key: '3fde108d3447f74013b447d69ca84037b0b28e3c', slot: "tooltip-trigger" }, h("span", { key: '764cad6f5d39428ef836a93664c223e1049771ba', class: "truncate" }, this.textValue), h("atui-badge", { key: '15d098a11c0c4620140626112ac5f38929cae2c0', type: "info", class: "ml-4", label: this.badgeTextValue })), ((_a = this.params) === null || _a === void 0 ? void 0 : _a.generateTooltip) && (h("span", { key: '86a19e5b2fb649ecc04e47e4c7de322c54059d69', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
    get el() { return getElement(this); }
};

export { AtuiTextBadgeCell as atui_text_badge_cell };
//# sourceMappingURL=atui-text-badge-cell.entry.js.map

//# sourceMappingURL=atui-text-badge-cell.entry.js.map