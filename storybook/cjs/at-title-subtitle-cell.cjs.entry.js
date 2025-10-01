'use strict';

var index = require('./index-w3vomLqM.js');

const AtTitleSubtitleCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    params;
    title = '';
    subtitle = '';
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
        this.params = params;
        if (params.title) {
            this.title = params.title(params.data);
        }
        else {
            this.title = params.data?.titleSubtitleCell?.title || '';
        }
        if (params.subtitle) {
            this.subtitle = params.subtitle(params.data);
        }
        else {
            this.subtitle = params.data?.titleSubtitleCell?.subtitle || '';
        }
    }
    render() {
        return (index.h(index.Host, { key: '6fab1f86b5e5787f1555fa71cabff25330885eaf', class: "flex h-full items-center" }, index.h("at-tooltip", { key: '412a2aea43d27c85941ffba0a7ab0080e600fa4b', position: "right", disabled: !this.params?.generateTooltip }, index.h("div", { key: '18ef6a2e4c756dc53b919e1a930c6738f26fcfb1', class: "flex h-full flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: 'a4d37c3366019e27358c5bf175ffa3092c73590d', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: 'f939e9ea726f333b4e8e5645a3f1d1f27eba6444', class: "text-med truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (index.h("span", { key: 'b0ec439f4f0d3a4c5fa4d6cf88c5da9c9779e49d', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_title_subtitle_cell = AtTitleSubtitleCell;
//# sourceMappingURL=at-title-subtitle-cell.entry.cjs.js.map
