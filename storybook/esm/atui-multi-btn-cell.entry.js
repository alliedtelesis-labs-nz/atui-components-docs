import { r as registerInstance, h, H as Host, a as getElement } from './index-CIq6mZ3i.js';

const AtuiMultiBtnCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    init(params) {
        this.params = params;
        const { containerStyles, buttons } = this.params;
        this.containerStyles = containerStyles;
        this.buttons =
            typeof buttons === 'function' ? buttons(params) : buttons;
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
    }
    handleClick(btn) {
        return btn.click && btn.click(this.params);
    }
    get buttonsToRender() {
        return this.buttons.map((button) => {
            return (h("atui-tooltip", { position: "right", disabled: !button.tooltip }, button && (h("atui-button", { type: "secondaryText", label: button.value, disabled: button.disabled, "data-name": button.dataNameValue, onAtuiClick: () => this.handleClick(button) })), button && button.tooltip && (h("span", { slot: "tooltip-content", class: `leading-normal` }, button.tooltip))));
        });
    }
    render() {
        return (h(Host, { key: '9fb4ade99471dc1269702f700af3426db1f7bf3c', class: "flex h-full items-center" }, this.buttonsToRender));
    }
    get el() { return getElement(this); }
};

export { AtuiMultiBtnCell as atui_multi_btn_cell };
//# sourceMappingURL=atui-multi-btn-cell.entry.js.map

//# sourceMappingURL=atui-multi-btn-cell.entry.js.map