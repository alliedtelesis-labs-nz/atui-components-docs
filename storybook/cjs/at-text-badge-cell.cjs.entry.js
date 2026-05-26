'use strict';

var index = require('./index--r5sCsiV.js');

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
        return (index.h(index.Host, { key: '75876db0e7696418e9557361deeecb39b0a7d425', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: 'fba70aeecca5121bf873f6024ee4fcd32c182134', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '871d3f30708fc00de45bd0e1d7b5418c31007325', slot: "tooltip-trigger" }, index.h("span", { key: 'b1933b40c55521384df243e573962ec84381dedc', class: "truncate" }, this.textValue), index.h("at-badge", { key: '7a33851b85535262e9559c6b5404972a2b9fccde', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (index.h("span", { key: '4c62ce80a246a7256f9cbca349167472fd89c3aa', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_badge_cell = AtTextBadgeCell;
