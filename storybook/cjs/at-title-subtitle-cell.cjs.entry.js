'use strict';

var index = require('./index-COV7xI6A.js');

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
        return (index.h(index.Host, { key: '02e7865ccd5ee5d800837fd211cb0ab86fcbd7a3', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: 'db7d67296237bc98a9c089c63aa5a7d32ca7dd37', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '65a3c1d7e1bbaad1cccdab0ea81f52eb5c84fcf6', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: '1096304e447d2f24e79ba819b8d0112a69e22746', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: '461d1062afc29b9ddcb6a71e22fb2bb54624793b', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (index.h("span", { key: '5f653ce8dbf4417adde5e23df1638e6aa342fe8b', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_title_subtitle_cell = AtTitleSubtitleCell;
