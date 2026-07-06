'use strict';

var index = require('./index-BVOcg3sk.js');

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
        return (index.h(index.Host, { key: 'd91b2dcacee9c126ac2b1ba50bdd14feed59e26e', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '93b170e3c3597adb5a32a7b7e9d9497bb3454bb5', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '5cdff83592b09c17bb9e82283d9f8165b82175ea', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: '86acc9870ef50c176aa2afe7c133574000bfa3d7', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: '4b8b458bc8775f4bd0eed607169e4b7e12ea51a6', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (index.h("span", { key: '1cbef4919ec3d758250a1b2392ae3064103f9824', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_title_subtitle_cell = AtTitleSubtitleCell;
