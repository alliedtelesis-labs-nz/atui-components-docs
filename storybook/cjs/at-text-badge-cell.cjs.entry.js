'use strict';

var index = require('./index-Bc1nzv_X.js');

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
        return (index.h(index.Host, { key: 'ccef6167212141c6a44dd9652f29229841d96760', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '5403115afffdf9194f3127129faef7eb8cb40467', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '7aebda37ba9b1fec04696014b755ec40a0447ac6', slot: "tooltip-trigger" }, index.h("span", { key: '141fc49322627079d781e1c3e9710c148616bb62', class: "truncate" }, this.textValue), this.badgeTextValue && (index.h("at-badge", { key: '524456b593411944c737342735d71cf39e32f66c', type: this.params.badgeType ?? 'info', class: "ml-4", label: this.badgeTextValue }))), this.params?.generateTooltip && (index.h("span", { key: '8f47f6ecbc437d98c3dbb1d396bef25f04afa51b', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_badge_cell = AtTextBadgeCell;
