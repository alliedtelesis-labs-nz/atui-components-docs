'use strict';

var index = require('./index-LVEefvKk.js');

const AtTextBadgeCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    init(params) {
        var _a, _b;
        this.params = params;
        if (this.params.text) {
            this.textValue = this.params.text(params.data);
        }
        else {
            this.textValue = ((_a = params.value) === null || _a === void 0 ? void 0 : _a.text) || '';
        }
        if (this.params.badgeText) {
            this.badgeTextValue = this.params.badgeText(params.data);
        }
        else {
            this.badgeTextValue = ((_b = params.value) === null || _b === void 0 ? void 0 : _b.badgeText) || '';
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
        var _a;
        return (index.h(index.Host, { key: 'b0dd0198f9d0c957c93569525a5d0b20bdcd0b5a', class: "flex h-full items-center" }, index.h("at-tooltip", { key: 'b4a1af0da0c25af81c756117efd370f03360e272', position: "right", disabled: !this.params.generateTooltip }, index.h("div", { key: 'f80394e5b3d7aa3d49757cc2e5ddf772151f8eb1', slot: "tooltip-trigger" }, index.h("span", { key: '78ccc1ce25d97a52b99f151f4070bdb57853690a', class: "truncate" }, this.textValue), index.h("at-badge", { key: 'e2fdc77fa3c186ed356d817cdb164019f8c9cdd0', type: "info", class: "ml-4", label: this.badgeTextValue })), ((_a = this.params) === null || _a === void 0 ? void 0 : _a.generateTooltip) && (index.h("span", { key: 'c3b9a27ecffca7a505fdc878a90815d9c5a401a3', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
    get el() { return index.getElement(this); }
};

exports.at_text_badge_cell = AtTextBadgeCell;
//# sourceMappingURL=at-text-badge-cell.entry.cjs.js.map
