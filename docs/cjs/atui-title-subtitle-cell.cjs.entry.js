'use strict';

var index = require('./index-BAt2i-T2.js');

const AtuiTitleSubtitleCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '7e81564568f33deeddc3b8770d6b8b9e38df2865', class: "flex h-full items-center" }, index.h("atui-tooltip", { key: '10b6f66cefdbb1af2989158b1719eaee0ba65beb', position: "right", is_visible: !!((_a = this.params) === null || _a === void 0 ? void 0 : _a.generateTooltip) }, index.h("div", { key: 'e5c91cf150fd5817b307e1bf5802d405e360e378', class: "flex h-full flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: '386d94f889e7dcafc491d51e313ca8c167d54850', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: 'a98695d68997a3fb2eb10eff975a43050b716831', class: "truncate text-xs font-normal leading-normal text-med" }, this.subtitle)), ((_b = this.params) === null || _b === void 0 ? void 0 : _b.generateTooltip) && (index.h("span", { key: '90e6e7e224447ae7209029a184552b758524b1f0', slot: "tooltip-content", class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_title_subtitle_cell = AtuiTitleSubtitleCell;
//# sourceMappingURL=atui-title-subtitle-cell.entry.cjs.js.map

//# sourceMappingURL=atui-title-subtitle-cell.cjs.entry.js.map