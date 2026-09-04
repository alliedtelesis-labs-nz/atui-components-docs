'use strict';

var index = require('./index-ChtkW4Eq.js');

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
        return (index.h(index.Host, { key: '7439020f00ba062223da8dae48dd5889961461f3', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '357ece8cecae4130fe34a41f9760d10bbacd6572', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '5af1302a356059743a2dca82d7f250751c309249', slot: "tooltip-trigger" }, index.h("span", { key: '74672f082a87184a43b1cc84be73811589595e34', class: "truncate" }, this.textValue), this.badgeTextValue && (index.h("at-badge", { key: 'a9932fcea02bff7ba4b22865849d44834c038083', type: this.params.badgeType ?? 'info', class: "ml-4", label: this.badgeTextValue }))), this.params?.generateTooltip && (index.h("span", { key: 'da057878118a2571368816bf1813ea4bfe24654a', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_badge_cell = AtTextBadgeCell;
