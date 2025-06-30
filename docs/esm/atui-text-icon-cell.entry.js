import { r as registerInstance, h, H as Host, g as getElement } from './index-HJO1YDmC.js';

const AtuiTextIconCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    init(params) {
        this.params = params;
        this.value = params.value;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params);
        return true;
    }
    updateCell(params) {
        this.params.value = this.value = params.value;
    }
    getIconClick(icon) {
        return icon.iconClick && icon.iconClick(this.params);
    }
    getTextClick(cell) {
        return cell.click && cell.click(this.params);
    }
    get getIcons() {
        return this.params.value.icons.map((icon) => (h("span", { class: `material-icons text-icon-md ${icon.iconClass}`, onClick: this.getIconClick(icon) }, icon.iconName)));
    }
    render() {
        const iconPosition = this.params.icon_position || 'before';
        return (h(Host, { key: '7576c46c9e0caf0e938dc4d745c4b8419640d0e0', class: "flex items-center overflow-hidden" }, h("atui-tooltip", { key: '584db4ca2cd5acd8fc0786626425010cff9dd3b8', position: "right", is_visible: !!this.params.generateTooltip }, h("div", { key: 'f50437cbc634fbcb44b24c7c5a04fcfe944ca346', class: "flex items-center gap-8", slot: "tooltip-trigger", onClick: this.getTextClick(this.params.value) }, iconPosition === 'before' && this.getIcons, h("span", { key: 'dfc0187c24c2eb6a14a4a482ad631d4217da5095', class: "truncate" }, this.value.text.textValue), iconPosition === 'after' && this.getIcons), this.params.generateTooltip && (h("span", { key: 'b29f5647d1182ce0b0d01bb3a0e1a588a3d168e0', slot: "tooltip-content", class: `leading-normal` }, this.params.generateTooltip(this.params))))));
    }
    get el() { return getElement(this); }
};

export { AtuiTextIconCell as atui_text_icon_cell };
//# sourceMappingURL=atui-text-icon-cell.entry.js.map

//# sourceMappingURL=atui-text-icon-cell.entry.js.map