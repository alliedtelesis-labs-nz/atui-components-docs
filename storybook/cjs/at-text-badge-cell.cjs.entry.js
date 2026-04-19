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
        return (index.h(index.Host, { key: '93fa0ef8a015e045166dddd1458809decd0a042f', class: "flex h-full items-center" }, index.h("at-tooltip", { key: '78751e08d1960cd19cfe1a02a655ef828e4de135', position: "right", disabled: !this.params.generateTooltip }, index.h("div", { key: '60a40c0dec4e2bc9f75db43dd1a699edf79ca762', slot: "tooltip-trigger" }, index.h("span", { key: 'ee69159e5795a54ac4cf3458102f87afad6b8171', class: "truncate" }, this.textValue), index.h("at-badge", { key: 'b76601eae704ad93953038eacb0ddade9e5b2331', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (index.h("span", { key: 'cda48918cc438d7551f148b4f5ab3b4c71da825f', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_badge_cell = AtTextBadgeCell;
