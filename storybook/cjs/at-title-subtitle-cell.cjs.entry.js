'use strict';

var index = require('./index-C7y9_-Ob.js');

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
        return (index.h(index.Host, { key: 'cbe5fab4279c373a6b91b09dc79ed2ca2bf25bc8', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: 'd68ae5fb3cdc718fdf79aa3c115529b3cf63769f', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '0ab00a86b13020394d463d85f27005567be5b4cb', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, index.h("div", { key: 'b4f5fadbac342509533b4d5046b5598a40f7b44d', class: "truncate text-sm leading-normal" }, this.title), index.h("div", { key: 'b48a0de06dbda46972d4fb26cf9bfb21e4b5e2ba', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (index.h("span", { key: '304f423fb98cdd277781737056904f53bef1d36e', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_title_subtitle_cell = AtTitleSubtitleCell;
