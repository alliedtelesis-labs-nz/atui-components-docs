'use strict';

var index = require('./index-BRms7T38.js');

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
        return (index.h(index.Host, { key: 'dd0acfe46ddcfdeaf982150d976a27492c26a1ec', class: "flex h-full items-center" }, index.h("at-tooltip", { key: '2efaebf53b6e16fb80b96aad6bfee13fe24965e8', position: "right", disabled: !this.params?.generateTooltip }, index.h("div", { key: 'f5c6f67bb215027a0db6c609ca009675585f8c71', class: "flex h-full flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: '7567c16626acfe316fb8c94527ff7b121206ce21', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: '9c4f35a78101fdd2501048da4a9c8538c85a027d', class: "text-med truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (index.h("span", { key: '09827dbebfe34c1ae8ba73e0002af1867ae7640a', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_title_subtitle_cell = AtTitleSubtitleCell;
