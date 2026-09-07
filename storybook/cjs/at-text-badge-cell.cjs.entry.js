'use strict';

var index = require('./index-ByfMXhOa.js');

const AtTextBadgeCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    textValue;
    badgeTextValue;
    params;
    init(params) {
        this.applyParams(params);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.applyParams(params);
        return true;
    }
    applyParams(params) {
        this.params = params;
        if (this.params.text) {
            this.textValue = this.params.text(params.data);
        }
        else {
            this.textValue = params.value?.text || '';
        }
        if (this.params.badgeText) {
            this.badgeTextValue = this.params.badgeText(params.data);
        }
        else {
            this.badgeTextValue = params.value?.badgeText || '';
        }
    }
    render() {
        return (index.h(index.Host, { key: '80a91f56972a8f0d6590dab99bc6968b49000cec', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '7e09dc4445232e7fa4e667e34eb07f0cba1e3bdb', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: 'fa7d20521f9ab43a853b304bc96c0471ccc0ac24', slot: "tooltip-trigger" }, index.h("span", { key: 'bdacfae99abc0393bcdd852e3168ff1ebeb17c5c', class: "truncate" }, this.textValue), this.badgeTextValue && (index.h("at-badge", { key: '145e6c17584a352140087945bc63b8809f9fcb88', type: this.params.badgeType ?? 'info', class: "ml-4", label: this.badgeTextValue }))), this.params?.generateTooltip && (index.h("span", { key: '0233357ab0b7bd554055dcb06d12156762e1d022', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_badge_cell = AtTextBadgeCell;
