import { r as registerInstance, h, H as Host, g as getElement } from './index-Cd7WF2gX.js';

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
        return (h(Host, { key: '81c87518a6487eccb488ebbfceef2ad2448f34a4', class: "flex items-center overflow-hidden" }, h("atui-tooltip", { key: '70808255046d38bcbbe94a7a56e4a5b2e28c2000', position: "right", is_visible: !!this.params.generateTooltip }, h("div", { key: '26a993776fdccbbdae73b8a07fcf9961a04fc322', class: "flex items-center gap-8", slot: "tooltip-trigger", onClick: this.getTextClick(this.params.value) }, iconPosition === 'before' && this.getIcons, h("span", { key: '59daab53657fe32777737ab29db2b04d95061c5d', class: "truncate" }, this.value.text.textValue), iconPosition === 'after' && this.getIcons), this.params.generateTooltip && (h("span", { key: '62ae805815d81f1e2364e1101166d02e92124f0b', slot: "tooltip-content", class: `leading-normal` }, this.params.generateTooltip(this.params))))));
    }
    get el() { return getElement(this); }
};

export { AtuiTextIconCell as atui_text_icon_cell };
//# sourceMappingURL=atui-text-icon-cell.entry.js.map

//# sourceMappingURL=atui-text-icon-cell.entry.js.map