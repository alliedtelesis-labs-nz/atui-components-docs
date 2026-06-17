'use strict';

var index = require('./index-D1oh76XY.js');

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
        return (index.h(index.Host, { key: '1ab6c335961317c70023d1054e30804f2ed6075e', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '53ae67e90383e1d7642a23a3698a0b1f24d51604', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '6bc817e3a3e898854fb6ec222142aaf3141c175a', slot: "tooltip-trigger" }, index.h("span", { key: 'afc8cde71296a0cdbd5d751bdacfac8ff8333add', class: "truncate" }, this.textValue), index.h("at-badge", { key: 'dd6909c7bc55693ddad5fd68fbc981e0149d54f5', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (index.h("span", { key: '60262da511a73c2cf022999754301db087372ea5', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_badge_cell = AtTextBadgeCell;
