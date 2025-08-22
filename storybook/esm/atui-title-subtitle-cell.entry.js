import { r as registerInstance, h, H as Host, a as getElement } from './index-CIq6mZ3i.js';

const AtuiTitleSubtitleCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.title = '';
        this.subtitle = '';
    }
    init(params) {
        this.setParams(params);
    }
    refresh(params) {
        this.setParams(params);
        return true;
    }
    getGui() {
        return this.el;
    }
    setParams(params) {
        var _a, _b, _c, _d;
        this.params = params;
        if (params.title) {
            this.title = params.title(params.data);
        }
        else {
            this.title = ((_b = (_a = params.data) === null || _a === void 0 ? void 0 : _a.titleSubtitleCell) === null || _b === void 0 ? void 0 : _b.title) || '';
        }
        if (params.subtitle) {
            this.subtitle = params.subtitle(params.data);
        }
        else {
            this.subtitle = ((_d = (_c = params.data) === null || _c === void 0 ? void 0 : _c.titleSubtitleCell) === null || _d === void 0 ? void 0 : _d.subtitle) || '';
        }
    }
    render() {
        var _a, _b;
        return (h(Host, { key: '7e81564568f33deeddc3b8770d6b8b9e38df2865', class: "flex h-full items-center" }, h("atui-tooltip", { key: '79e15abf71f8b733a16d770cec161c7bc1d7d3c6', position: "right", disabled: !((_a = this.params) === null || _a === void 0 ? void 0 : _a.generateTooltip) }, h("div", { key: '335425ca7d67de564571442acb7899928c1f68da', class: "flex h-full flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: 'b85f675f0b7af73c3053ad3f27b48035af11d71a', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: '06414f84b865e52c28c73ac1e7962df60589a188', class: "truncate text-xs font-normal leading-normal text-med" }, this.subtitle)), ((_b = this.params) === null || _b === void 0 ? void 0 : _b.generateTooltip) && (h("span", { key: '3f8d73ffe381635bf3aa1bd3f66417bef75947bd', slot: "tooltip-content", class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
    get el() { return getElement(this); }
};

export { AtuiTitleSubtitleCell as atui_title_subtitle_cell };
//# sourceMappingURL=atui-title-subtitle-cell.entry.js.map

//# sourceMappingURL=atui-title-subtitle-cell.entry.js.map