'use strict';

var index = require('./index-DGivrgtr.js');

const AtuiIconCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    init(params) {
        this.params = params;
        this.icons = params.value;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params.value);
        return true;
    }
    updateCell(newValue) {
        this.params.value = newValue;
        this.icons = this.params.value;
    }
    get getIcons() {
        return this.params.value.map((icon) => (index.h("atui-tooltip", { position: "right", is_visible: !!this.params.generateTooltip }, index.h("div", { class: "flex items-center", slot: "tooltip-trigger" }, index.h("span", { class: `material-icons text-icon-md ${icon.iconClass}` }, icon.iconName)), this.params.generateTooltip && (index.h("span", { slot: "tooltip-content", class: `leading-normal` }, this.params.generateTooltip(icon.tooltipText))))));
    }
    render() {
        return (index.h(index.Host, { key: '1159e73291e5072f36c7472d763bad96248df84d', class: "flex h-full items-center overflow-hidden leading-[100%]" }, this.getIcons));
    }
    get el() { return index.getElement(this); }
};

exports.atui_icon_cell = AtuiIconCell;
//# sourceMappingURL=atui-icon-cell.entry.cjs.js.map

//# sourceMappingURL=atui-icon-cell.cjs.entry.js.map