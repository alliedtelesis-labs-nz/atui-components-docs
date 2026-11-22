'use strict';

var index = require('./index-D6_HFEr-.js');

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
        return (index.h(index.Host, { key: '9dd6ce86eb0c5e668e00af98aaba1b79b6b4247d', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '2bc730dfdecdabc016b11c2571727311901342e2', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '53d28f5de5a5978d2ac86ce3327772a07d39c083', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: '7a286c41e8949964d0719b976f3400c9a02869d9', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: 'd77343dc4699b0657b9ee95ae3e0da74a2dd99c9', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (index.h("span", { key: '9c1fabc8c1a17ac2cbc41e11305c0fb43e8932a2', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_title_subtitle_cell = AtTitleSubtitleCell;
