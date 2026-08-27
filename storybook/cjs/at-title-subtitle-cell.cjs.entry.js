'use strict';

var index = require('./index-Bo1AxtqW.js');

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
        return (index.h(index.Host, { key: '0ea4219f3d64af23ca4ece0a8bc5feb67d121b4d', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '28a1a86bb6473652a9b2abea3cf2c8b458c78e73', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '0ef8c6dfeb641b00c5d91097c514c08b35c37712', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: '0a6a60138d34201adb8a9af374a59eb5574beb24', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: '811c25ca935d7187411b7eadd02f3cfd36c24b3e', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (index.h("span", { key: '320f01384d5d7bfe6e52dde4b3bb24e435506634', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_title_subtitle_cell = AtTitleSubtitleCell;
