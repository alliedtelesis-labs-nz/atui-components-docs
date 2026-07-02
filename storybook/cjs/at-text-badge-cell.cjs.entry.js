'use strict';

var index = require('./index-RH-Tud8I.js');

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
        return (index.h(index.Host, { key: '92617395eb833f0dd3b4b46c56803f12af3b4d65', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: 'e10c1be6d76e117cbdd0faa9c9111968f66f0132', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '37fd1da19ddd1d14433c29e47cb874fded344838', slot: "tooltip-trigger" }, index.h("span", { key: 'e6fbd15bf6693636dc5bfd171f1426ccdf665043', class: "truncate" }, this.textValue), index.h("at-badge", { key: '9a03b28781f36cad8d2b86797f948804d386b206', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (index.h("span", { key: 'b6ddfe46fd9f8f4000817d1a71bd6fb1d42e879a', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_badge_cell = AtTextBadgeCell;
