'use strict';

var index = require('./index-V7Urjg2R.js');

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
        return (index.h(index.Host, { key: 'f86ef8e8f73c100360164de33b5798a0d13888b0', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '4a9a7a427e98103b6adb6622d1b4ebbde42c08d4', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: 'add848af6cfb1b91966664febbb4bfdc52dce095', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: 'c85cc77530015dc48f1050e3667d98eb1820c0b4', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: '53b5f7a06323e82339889a0468f44fb4e5e66ff4', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (index.h("span", { key: '046c5da54ef2f51b0eb1abcc357a8bd2eb09e2de', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_title_subtitle_cell = AtTitleSubtitleCell;
