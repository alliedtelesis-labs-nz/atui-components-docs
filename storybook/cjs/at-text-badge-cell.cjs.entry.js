'use strict';

var index = require('./index-CzDB71Wy.js');

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
        return (index.h(index.Host, { key: 'd9e93072454597c97ac46ea4c91d54ca380f22ab', class: "flex h-full items-center" }, index.h("at-tooltip", { key: '207c4ac41826fa2d6e262865cb1eff2de787bb00', position: "right", disabled: !this.params.generateTooltip }, index.h("div", { key: '9ff4e3c982f4342887468a1138483a82c1ae94b2', slot: "tooltip-trigger" }, index.h("span", { key: '9833f8220e1b952d43ebc8f5743afd59dc88e7cc', class: "truncate" }, this.textValue), index.h("at-badge", { key: '6f5cc9d1ffcf160afb2748296549ec75322fb9e4', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (index.h("span", { key: '94cd2389eaeef6202b5ecdeded6943212a29dedb', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_badge_cell = AtTextBadgeCell;
