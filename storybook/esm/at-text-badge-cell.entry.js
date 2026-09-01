import { r as registerInstance, a as getElement, h, H as Host } from './index-m_dTEvgo.js';

const AtTextBadgeCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    textValue;
    badgeTextValue;
    params;
    init(params) {
        this.params = params;
        if (this.params.text) {
            this.textValue = this.params.text(params.data);
        }
        else {
            this.textValue = params.value?.text || '';
        }
        if (this.params.badgeText) {
            this.badgeTextValue = this.params.badgeText(params.data);
        }
        else {
            this.badgeTextValue = params.value?.badgeText || '';
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
        return (h(Host, { key: 'e7861a6bfe948c8c06d0d5c1dee73b6d280df116', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '589bd3965113fef96a16ae16a785b1127c9efee8', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: 'f4643faff72757283c6fa88a1400166608b4fcf3', slot: "tooltip-trigger" }, h("span", { key: '6250fc55304b54e532947a60f2c7a46a28afb3bd', class: "truncate" }, this.textValue), this.badgeTextValue && (h("at-badge", { key: '64718136029c615bc04d7e1b6f6a95bb6d6dd24b', type: this.params.badgeType ?? 'info', class: "ml-4", label: this.badgeTextValue }))), this.params?.generateTooltip && (h("span", { key: '63043a5035267c8e3213a7ea6544d61e72fd2db1', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTextBadgeCell as at_text_badge_cell };
