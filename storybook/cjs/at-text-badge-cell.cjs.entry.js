'use strict';

var index = require('./index-BVOcg3sk.js');

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
        return (index.h(index.Host, { key: '55eba9c00a104fd0420121a5d96909978e17ac13', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '8490784a16621b916e079101f4b2600e5a7fc1e6', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '181ca22918aaac9d2bcafd26914c32e6adb108eb', slot: "tooltip-trigger" }, index.h("span", { key: 'dc2aea521b4dce892d5e3eed3ebc964bf8ae75d4', class: "truncate" }, this.textValue), index.h("at-badge", { key: '3f0225232322f4c2b5ddfdc9906cd1a00ca1a5bd', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (index.h("span", { key: 'b7f8fa21947b87c0fb031491c81174cf833bf135', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_badge_cell = AtTextBadgeCell;
