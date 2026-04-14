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
        return (index.h(index.Host, { key: '55e42df914fb0a40bfdf2481c6d246ebef9e5e98', class: "flex h-full items-center" }, index.h("at-tooltip", { key: '3ab4bc93ab9fd7cc8b400de0b81cc3b3e4ae5fc6', position: "right", disabled: !this.params?.generateTooltip }, index.h("div", { key: '19633c3d0d3294ccb278795e08895179f3747101', class: "flex h-full flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: '77ffb1affd29b31a6b63f427e3f5a5847318eeb7', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: '715d53e3e0d706fc2db95c1672fadf7aa0ec737d', class: "text-med truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (index.h("span", { key: '399c51776968148ab21fa39a55445ba216fd55b0', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_title_subtitle_cell = AtTitleSubtitleCell;
