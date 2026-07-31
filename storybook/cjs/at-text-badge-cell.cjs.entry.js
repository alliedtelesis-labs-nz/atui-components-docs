'use strict';

var index = require('./index-COV7xI6A.js');

const AtTextBadgeCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    textValue;
    badgeTextValue;
    params;
    init(params) {
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
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(String(params.value));
        return true;
    }
    updateCell(newValue) {
        this.params.value = newValue;
        this.textValue = this.params.value;
    }
    render() {
        return (index.h(index.Host, { key: 'f421b39f7fce30e2cd81a3d3007012211ea5dac0', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '208d7df981e4612458bb2242326db0dd611c5bb9', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: 'b1953a41322e23cdd80000966433c3d82f0b2063', slot: "tooltip-trigger" }, index.h("span", { key: '93742dc235bd7258f370eba973947d56d5023b8a', class: "truncate" }, this.textValue), index.h("at-badge", { key: 'aa47f39b9cb914862c57a6958011a76c2d1ac77f', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (index.h("span", { key: '70bb8cd47ee715f03d126f6e9a57639d41786907', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_badge_cell = AtTextBadgeCell;
