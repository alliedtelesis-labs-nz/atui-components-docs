'use strict';

var index = require('./index-BAt2i-T2.js');

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
        return (index.h(index.Host, { key: 'df276223020126e1e8999e283434626d2aa57759', class: "flex h-full items-center overflow-hidden leading-[100%]" }, this.getIcons));
    }
    get el() { return index.getElement(this); }
};

exports.atui_icon_cell = AtuiIconCell;
//# sourceMappingURL=atui-icon-cell.entry.cjs.js.map

//# sourceMappingURL=atui-icon-cell.cjs.entry.js.map