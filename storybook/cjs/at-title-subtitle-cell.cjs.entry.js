'use strict';

var index = require('./index-ChtkW4Eq.js');

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
        return (index.h(index.Host, { key: 'eee25c62f7605b381db15d16cdfe1de8ba43d771', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '94364a1ab437df7f300d511a5e2258a22fd5a6e1', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '552bc6a5b1dab697792ce00340e4307b42467398', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: '4be651b640119d68623e68e8d4a800d3d934c564', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: '69335f65d3e81830ef3aaf73708301c4b4e843b0', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (index.h("span", { key: 'd7ea50d3e1fb65b46cfc38d38daeffcb5b196d4c', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_title_subtitle_cell = AtTitleSubtitleCell;
