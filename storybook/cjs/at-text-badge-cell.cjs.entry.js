'use strict';

var index = require('./index-DLWZuLsW.js');

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
        return (index.h(index.Host, { key: 'caa899cf5f51a9c6681b965b57fba18a09b00da3', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '8f6ee5edec2ebdf6134a2e682bd166a694cc8128', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '4a93fcba0b63a05143da6e69f07ab5815ed79ffb', slot: "tooltip-trigger" }, index.h("span", { key: 'b953dd0bdadd97b8f9df65c0034b060b02fcfdda', class: "truncate" }, this.textValue), this.badgeTextValue && (index.h("at-badge", { key: '6beecbb4353c81e3c5fe503fde7202faed764f10', type: this.params.badgeType ?? 'info', class: "ml-4", label: this.badgeTextValue }))), this.params?.generateTooltip && (index.h("span", { key: '3f51a1da41415d695d316ff69a7945788c69ad6f', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_badge_cell = AtTextBadgeCell;
