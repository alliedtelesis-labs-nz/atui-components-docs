'use strict';

var index = require('./index-BzuO8j9_.js');

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
        return (index.h(index.Host, { key: 'c3df41af5422c73c840deef4541d65dc599853c4', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '4f2e200ab48d63aa4b7fa754982e63187c325a02', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: 'bddeabccdd2ffc227e460116b9ba51f53c6a6852', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: 'a2130e3ca958076996ce409841952486adf6ac61', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: '8f1d619d4535dc55ca11169910cc9e760269083a', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (index.h("span", { key: '7b39ff3d84c2a156dee134fbae617e52ca0ae54b', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_title_subtitle_cell = AtTitleSubtitleCell;
