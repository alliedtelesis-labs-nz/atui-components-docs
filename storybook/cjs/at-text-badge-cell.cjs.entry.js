'use strict';

var index = require('./index-B7bW4GPk.js');

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
        return (index.h(index.Host, { key: '40542faa7c17d03f0ea9695e0d56cad0c2fe116f', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '9b648a69efce9e3662cf73edcd8e8d5a6e1e4602', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: 'b72a782f8cbd81fcc9ded166582d42bdacebcc5e', slot: "tooltip-trigger" }, index.h("span", { key: '76de0ad6404f9ca3fbd394347ebb936f5b7dd396', class: "truncate" }, this.textValue), index.h("at-badge", { key: 'f482cfaf6c100c831d07217b1865e9150a4ad598', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (index.h("span", { key: 'b4a4eb837bd8779107e1b02ce24ae786b49a1649', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_badge_cell = AtTextBadgeCell;
