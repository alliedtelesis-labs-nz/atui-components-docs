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
        return (index.h(index.Host, { key: '70acdc2ace7135f2fd31e4205d7fc4c6dc2017f8', class: "flex h-full items-center" }, index.h("at-tooltip", { key: '1edb6e25433d4a1ed3e48b2c82d26808a5933053', position: "right", disabled: !this.params.generateTooltip }, index.h("div", { key: '0175993e4d9d8bfd3ec395ce3e76e626024d03ea', slot: "tooltip-trigger" }, index.h("span", { key: '187e8fd817399c1bb537fe96c61b0518d0886c25', class: "truncate" }, this.textValue), index.h("at-badge", { key: 'cb2e09abb44984cf55d07d97619c93b84fae9431', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (index.h("span", { key: 'caf14a69c09188bb936b649854bfd2e885394a39', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_badge_cell = AtTextBadgeCell;
