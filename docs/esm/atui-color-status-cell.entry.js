import { r as registerInstance, h, H as Host, g as getElement } from './index-8kq1vl9Q.js';

const AtuiColorStatusCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'f86e7195306ac6cd987bf286e3d6bccf71c8be13', class: "flex h-full items-center leading-[100%]" }, h("atui-tooltip", { key: '474fafe6157fabc1cf119f32097fe7f970c75ad2', position: "right", is_visible: !!this.params.generateTooltip }, h("div", { key: '4c55bbefea4bb32245c44f3904086d6ba08d4fb4', slot: "tooltip-trigger", style: this.containerStyles, onClick: () => this.params.click(this.params), "data-present": this.dataPresent }), this.params.generateTooltip && (h("span", { key: '330dbb3be781145a3614f17aa98789ed90e89d3e', slot: "tooltip-content" }, this.params.generateTooltip(this.params))))));
    }
    get el() { return getElement(this); }
};

export { AtuiColorStatusCell as atui_color_status_cell };
//# sourceMappingURL=atui-color-status-cell.entry.js.map

//# sourceMappingURL=atui-color-status-cell.entry.js.map