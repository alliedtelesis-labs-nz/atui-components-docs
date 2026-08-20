'use strict';

var index = require('./index-B7bW4GPk.js');

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
        return (index.h(index.Host, { key: '0bd48a9e153068b1d7ead075ceccc1a0c6fdafd4', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: 'dede3f65afc38f1f4efca466732cc1abe3963634', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: 'be3642ec0782668f742e3bfec0914997c1686c9f', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: '0e35761f731a55093a907214cb3c50d5c7a207f5', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: '593979a3359b68f9eb0c7ced6f239b33682d0d8b', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (index.h("span", { key: '1883d3e417496fdb05e1281c06acae6e153b55a4', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_title_subtitle_cell = AtTitleSubtitleCell;
