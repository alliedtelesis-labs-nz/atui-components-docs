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
        return (index.h(index.Host, { key: '7b5ced1b2c276c17cf14003400ae9d30a3652c91', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: 'bca8d21edb8ccc34b42265c8c260624688bc54f4', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '1934482167ef95d88939645eff8f782d10d8734b', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: 'a0d5959c4d51e3162923666b7ba15a16f91139cf', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: 'a2bc2221ecbcf555fd7e30a58855943e00385764', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (index.h("span", { key: 'b95aab50ac18465a1acb90f6c4c78e29078b772c', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_title_subtitle_cell = AtTitleSubtitleCell;
