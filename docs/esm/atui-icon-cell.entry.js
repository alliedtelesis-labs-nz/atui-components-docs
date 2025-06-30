import { r as registerInstance, h, H as Host, g as getElement } from './index-HJO1YDmC.js';

const AtuiIconCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return this.params.value.map((icon) => (h("atui-tooltip", { position: "right", is_visible: !!this.params.generateTooltip }, h("div", { class: "flex items-center", slot: "tooltip-trigger" }, h("span", { class: `material-icons text-icon-md ${icon.iconClass}` }, icon.iconName)), this.params.generateTooltip && (h("span", { slot: "tooltip-content", class: `leading-normal` }, this.params.generateTooltip(icon.tooltipText))))));
    }
    render() {
        return (h(Host, { key: 'ffff7d50a8ee8ab9b0445bab34fdea3cb7febe7f', class: "flex h-full items-center overflow-hidden leading-[100%]" }, this.getIcons));
    }
    get el() { return getElement(this); }
};

export { AtuiIconCell as atui_icon_cell };
//# sourceMappingURL=atui-icon-cell.entry.js.map

//# sourceMappingURL=atui-icon-cell.entry.js.map