'use strict';

var index = require('./index-DK-3iCCu.js');

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
        return (index.h(index.Host, { key: '181af2c8abe65e5a96a87f4da67bfe4b8cad82c7', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '9ec2b4c7f4aa97a5fae4915018d7a02fedc502a6', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '1cf77ade22caa62fdb0ca1c57b8cced7ae3edee6', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: 'd6663a22704707b5d8a1029c3a887b8974b5e34e', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: '991169569ec485220b152b61438dc67eb6e5aa4c', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (index.h("span", { key: '8b6a3c174c8d55c1df7f92c8c7175a848bec29c6', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_title_subtitle_cell = AtTitleSubtitleCell;
