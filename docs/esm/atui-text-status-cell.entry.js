import { r as registerInstance, h, H as Host, g as getElement } from './index-8kq1vl9Q.js';

const AtuiTextStatusCellComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '8b13698cb29607553519083a9b020d9bb7d67373', class: "flex h-full items-center" }, this.showSimpleText && this.params && (h("span", { key: '8bbfa63d70c75b615fe0668ab80f53e73bb88c9a', class: "truncate text-sm" }, this.text)), !this.showSimpleText &&
            this.params &&
            (this.params.generateTooltip ? (h("atui-tooltip", { position: "right", is_visible: true }, h("atui-badge", { slot: "tooltip-trigger", type: this.type, label: this.text, onClick: () => {
                    if (this.params.click)
                        this.params.click(this.params);
                } }), h("span", { slot: "tooltip-content", class: `${(_a = this.params.tooltipClass) !== null && _a !== void 0 ? _a : ''} leading-normal` }, this.params.generateTooltip(this.params)))) : (h("atui-badge", { type: this.type, label: this.text, onClick: () => {
                    if (this.params.click)
                        this.params.click(this.params);
                } })))));
    }
    get el() { return getElement(this); }
};

export { AtuiTextStatusCellComponent as atui_text_status_cell };
//# sourceMappingURL=atui-text-status-cell.entry.js.map

//# sourceMappingURL=atui-text-status-cell.entry.js.map