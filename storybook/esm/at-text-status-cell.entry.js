import { r as registerInstance, a as getElement, h, H as Host } from './index-lWb16Ay7.js';

const AtTextStatusCellComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    params;
    text;
    type = 'default';
    showSimpleText = false;
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
        return (h(Host, { key: '259105b6dae6d6c9dd34966a196c8e26185d27ee', class: "flex h-full items-center" }, this.showSimpleText && this.params && (h("span", { key: 'dac8c211e5a3d82ec7e11cf03649e44fe9e54383', class: "truncate text-sm" }, this.text)), !this.showSimpleText &&
            this.params &&
            (this.params.generateTooltip ? (h("at-tooltip", { position: "top", class: "h-fit self-center" }, h("at-badge", { slot: "tooltip-trigger", type: this.type, label: this.text }), h("span", { class: `${this.params.tooltipClass ?? ''} leading-normal` }, this.params.generateTooltip(this.params)))) : (h("at-badge", { type: this.type, label: this.text })))));
    }
};

export { AtTextStatusCellComponent as at_text_status_cell };
