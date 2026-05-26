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
        return (index.h(index.Host, { key: '582ec68ed87725ca7f4ed26e46f6f35a9d9400d4', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '88c8c96d3319dbe857d740ad9e6f79ff623ec7ff', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: 'a17c5d9036af8e3c78dd9b37a71c32bfdd4570fc', slot: "tooltip-trigger" }, index.h("span", { key: 'c0bd7a117b98ceada5daeaaa1683e96a309f2653', class: "truncate" }, this.textValue), index.h("at-badge", { key: '6a970de99cfa11e9f584c62641510cee09b916c7', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (index.h("span", { key: '9ba842141e233b27c26753d0d906ff43b690294f', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_badge_cell = AtTextBadgeCell;
