'use strict';

var index = require('./index-DYE55yNY.js');

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
        return (index.h(index.Host, { key: 'e014ab65332454e2369bf971519f79115b26516b', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '35bf19f135ce25a8d41128acd250328888fc5512', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '636af9bdeda0f4c6e602d46cd9becaeed1bdedc4', slot: "tooltip-trigger" }, index.h("span", { key: '1e6e47fe4e71738ce7c32b473050cffa70cc3f75', class: "truncate" }, this.textValue), this.badgeTextValue && (index.h("at-badge", { key: '632e328c9e80c6c377e5b4f27fdbc4cd6acc6f6d', type: this.params.badgeType ?? 'info', class: "ml-4", label: this.badgeTextValue }))), this.params?.generateTooltip && (index.h("span", { key: '21ca992257272ab2b60a89200fce9c3c8a39586e', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_badge_cell = AtTextBadgeCell;
