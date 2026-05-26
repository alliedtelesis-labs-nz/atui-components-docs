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
        return (index.h(index.Host, { key: '40bb62acc5dcee79158f7e42f7932771d6cdc9f2', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '1c869dd971d3dc9d0205b49c7457b758cd65dafd', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '7d8ae495ca209f64c7af59e461ca8eaa80e16135', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: '48fa5337d62fc422fc21d351c721228a1640a9f1', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: '1b2ec4d6563ffe08ab1cb9676c69f9ba3b679470', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (index.h("span", { key: '63689191c6f93756f6bfdf545a581ed5fab424bc', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_title_subtitle_cell = AtTitleSubtitleCell;
