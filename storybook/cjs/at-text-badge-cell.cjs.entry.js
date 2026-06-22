'use strict';

var index = require('./index-BYFFxEOi.js');

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
        return (index.h(index.Host, { key: '4afd9872a720a6d074130a8b7cf127a315682876', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: 'efc0d5aaabdbc6569e55db5c19b381d23fc421de', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: 'd1b8855068d09d596250b16c43155046d7779052', slot: "tooltip-trigger" }, index.h("span", { key: 'cc7060e2a34b264264b51ccd3882ca05fb4efd2e', class: "truncate" }, this.textValue), index.h("at-badge", { key: '8707551e8ac9937fd10f2faa25d202edca20b14f', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (index.h("span", { key: '15f10fe890017fda99b5943000a274e602043843', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_badge_cell = AtTextBadgeCell;
