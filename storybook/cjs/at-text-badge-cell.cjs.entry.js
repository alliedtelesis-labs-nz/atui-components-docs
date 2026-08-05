'use strict';

var index = require('./index-D7uTOurQ.js');

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
        return (index.h(index.Host, { key: 'cfaa494c60131ecfb8b34829720220a5f4484c03', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '4e591c38ec980dc912429db7d9a059ce8caaf8c8', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: 'cab08afa823ae804de74e8eb5a76b265523da3e0', slot: "tooltip-trigger" }, index.h("span", { key: '31806d42780cb0abfdb8012a722a415ca8718b1a', class: "truncate" }, this.textValue), index.h("at-badge", { key: 'ee21b29a5ddd7366be8f0f4e0e0b449fe3196494', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (index.h("span", { key: 'dd521f6d6a8d207c1afb87251501292cbcd3a4b6', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_badge_cell = AtTextBadgeCell;
