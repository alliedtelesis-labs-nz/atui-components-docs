'use strict';

var index = require('./index-DGDau4r1.js');

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
        return (index.h(index.Host, { key: 'c7c9b08f1c11932a5502581bbac94eceea280cc1', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: 'd1c8eb536c5371eb227cb6fa54e811a53f3a8c2c', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '1212c442d365fde3f7b070e84b57340911fc841f', slot: "tooltip-trigger" }, index.h("span", { key: 'ba8282d641899884e338293fdff3d9222c1e0dfa', class: "truncate" }, this.textValue), index.h("at-badge", { key: 'd08ce551188a4d0a7e64e96de957d52b60aa8781', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (index.h("span", { key: 'c50562463c4bbb6dcf9ae5580ca8f41258169dfa', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_badge_cell = AtTextBadgeCell;
