'use strict';

var index = require('./index-Dk6I1ku2.js');

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
        return (index.h(index.Host, { key: '4c2846e17b0c91d6ffc9ec6c7bcf0be717fa321b', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: 'b062d7ec844251b143d11467ecd16fc698f86850', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '1d3a62b1867de09069406b82a49708b18c451f86', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: 'fecd1db65c8df52177a7ae09004c9e39d9cad204', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: 'f95e6db76e48dc81dee750cb488b4cbdecb9c185', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (index.h("span", { key: 'e781214ec1ed2783306813c819b41bdfe01bc702', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_title_subtitle_cell = AtTitleSubtitleCell;
