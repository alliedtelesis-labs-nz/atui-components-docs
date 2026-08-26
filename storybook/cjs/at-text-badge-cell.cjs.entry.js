'use strict';

var index = require('./index-ToR1OkrH.js');

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
        return (index.h(index.Host, { key: '25cf1bfabc4035aefad75f0ba96b1b6dcfbd6afa', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '99acaf34545fdf8e79f35f012465f60bdd64542f', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: 'fa12a2f0ee42bf023652cb26d95f83d7ab12166f', slot: "tooltip-trigger" }, index.h("span", { key: '15a29c7889cb9f8fa54cad9a12f8876d00065b4b', class: "truncate" }, this.textValue), this.badgeTextValue && (index.h("at-badge", { key: 'e3038d36e2a4fd8c1e73fa5ef8cf36823d5cca59', type: this.params.badgeType ?? 'info', class: "ml-4", label: this.badgeTextValue }))), this.params?.generateTooltip && (index.h("span", { key: 'bf14592ac080159103e7049571cc898d8913990e', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_badge_cell = AtTextBadgeCell;
