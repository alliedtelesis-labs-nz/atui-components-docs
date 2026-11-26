'use strict';

var index = require('./index-GH7gxrjy.js');

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
        return (index.h(index.Host, { key: '942d77a523dbffdc36a9df2a1d1380358952c0a6', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '2db91d7bf6e5bf0f9c783d11dc000da716140e77', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: 'c306d4848384ee3b855b54022b31741c025e3df2', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: '9a4f2acf20ea52332cddcba6db3e93f8b3da89c8', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: 'd000e65eff1052254d6e8f085c3443f81a250765', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (index.h("span", { key: 'd2e3fc0a0532b81a3bd482de192f5d6f590c067a', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_title_subtitle_cell = AtTitleSubtitleCell;
