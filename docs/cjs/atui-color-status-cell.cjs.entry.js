'use strict';

var index = require('./index-BAt2i-T2.js');

const AtuiColorStatusCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    init(params) {
        const { color, dataPresent, containerStyles } = params;
        this.dataPresent = dataPresent;
        this.params = params;
        this.containerStyles = Object.assign({ 'background-color': color, 'height': '100%', 'width': '100%', 'cursor': 'pointer' }, containerStyles);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params.color);
        return true;
    }
    updateCell(newValue) {
        this.params.color = newValue;
    }
    render() {
        return (index.h(index.Host, { key: 'f86e7195306ac6cd987bf286e3d6bccf71c8be13', class: "flex h-full items-center leading-[100%]" }, index.h("atui-tooltip", { key: '474fafe6157fabc1cf119f32097fe7f970c75ad2', position: "right", is_visible: !!this.params.generateTooltip }, index.h("div", { key: '4c55bbefea4bb32245c44f3904086d6ba08d4fb4', slot: "tooltip-trigger", style: this.containerStyles, onClick: () => this.params.click(this.params), "data-present": this.dataPresent }), this.params.generateTooltip && (index.h("span", { key: '330dbb3be781145a3614f17aa98789ed90e89d3e', slot: "tooltip-content" }, this.params.generateTooltip(this.params))))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_color_status_cell = AtuiColorStatusCell;
//# sourceMappingURL=atui-color-status-cell.entry.cjs.js.map

//# sourceMappingURL=atui-color-status-cell.cjs.entry.js.map