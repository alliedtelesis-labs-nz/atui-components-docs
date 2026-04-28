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
        return (index.h(index.Host, { key: '55e42df914fb0a40bfdf2481c6d246ebef9e5e98', class: "flex h-full items-center" }, index.h("at-tooltip", { key: '3ab4bc93ab9fd7cc8b400de0b81cc3b3e4ae5fc6', position: "right", disabled: !this.params?.generateTooltip }, index.h("div", { key: '19633c3d0d3294ccb278795e08895179f3747101', class: "flex h-full flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: '77ffb1affd29b31a6b63f427e3f5a5847318eeb7', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: 'fb63c657f54c831bc239fe73beac15d5cdd52dfc', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (index.h("span", { key: 'dd6cfd6c0b0164e7e0d9daad764ab5360486fb07', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_title_subtitle_cell = AtTitleSubtitleCell;
