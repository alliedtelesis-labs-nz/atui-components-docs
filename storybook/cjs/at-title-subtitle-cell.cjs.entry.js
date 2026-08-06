'use strict';

var index = require('./index-C0zY2e5N.js');

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
        return (index.h(index.Host, { key: '696f9e3e6a3905603e26b363aee04626c58f77d9', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '22ba81d0e25360cb1f7e27b840b7ff2390e1ad0b', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '7c399576703349630c4ac52e21ca705711404f50', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: '76c45e0e8bbc75e8755f6e961e6b6a8075b73607', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: 'b835a6b892300df2e8c6b3d1e267415b50c36f12', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (index.h("span", { key: 'ca3f50a5da753a74e51be5dee78479f5b430501a', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_title_subtitle_cell = AtTitleSubtitleCell;
