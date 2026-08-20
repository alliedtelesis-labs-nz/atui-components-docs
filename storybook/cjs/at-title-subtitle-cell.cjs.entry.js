'use strict';

var index = require('./index-B7bW4GPk.js');

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
        return (index.h(index.Host, { key: 'f07488f40b2df281d9ba899272f597fffcc3b33f', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '8f2b944932bbcac1e3ff396b2f0584c96a9ac39c', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '7a61683add1713264cb70ae62900c2f46f1d9c40', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: '93e1917b5caaa93fb6466be1d7798ddb9bddbd76', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: '67ec3046404a2438c0c10213c2b9205dde856a07', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (index.h("span", { key: 'a776908507df0d6ba1b876afa2f5f736a5bcc046', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_title_subtitle_cell = AtTitleSubtitleCell;
