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
        return (index.h(index.Host, { key: '80cf8a4bb61260b09d085effced9be5393c2ab4b', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: 'a352a19338933c077fa0336e221469e4d48ba881', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '73bc91f3259777636912b37f9f20b0e8d3c753ef', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: '149b3cd941325ae9516d627bcd17f7494d479e51', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: '2e43ae7ab98f3664ea2ab6b4ab693f21fde2e260', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (index.h("span", { key: 'bda992b28cdf516cd2673c65ea333c9b7c5918b3', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_title_subtitle_cell = AtTitleSubtitleCell;
