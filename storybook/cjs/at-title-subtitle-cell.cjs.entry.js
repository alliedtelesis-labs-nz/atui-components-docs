'use strict';

var index = require('./index--r5sCsiV.js');

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
        return (index.h(index.Host, { key: '51000639f6b985449651ec5e433bc3626f4a3084', class: "flex h-full items-center" }, index.h("at-tooltip", { key: 'cb075d914342457e8efb3df29ce222974b4bd0ca', position: "right", disabled: !this.params?.generateTooltip }, index.h("div", { key: '809e05ce044c6425c23f4ea0322d7d11edbea8f3', class: "flex h-full flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: '41e393c6fe7a3e17825e079e36b0006a54bc4ea0', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: '606d529305c7a9381d8f19fb571f865962c775d0', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (index.h("span", { key: '3cdf51511468e4dfbb87e5a4f0e13b6549782a09', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_title_subtitle_cell = AtTitleSubtitleCell;
