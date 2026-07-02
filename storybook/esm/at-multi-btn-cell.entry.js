import { r as registerInstance, a as getElement, h, H as Host } from './index-D_TsKqPT.js';

const AtMultiBtnCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    params;
    buttons;
    containerStyles;
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
            return (h("at-tooltip", { position: "top", disabled: !button.tooltip, class: "h-fit self-center" }, button && (h("at-button", { slot: "tooltip-trigger", type: "secondaryText", label: button.value, disabled: button.disabled, "data-name": button.dataNameValue, onAtuiClick: () => this.handleClick(button) })), button && button.tooltip && (h("span", { class: `leading-normal` }, button.tooltip))));
        });
    }
    render() {
        return (h(Host, { key: '852cf44319394fb79e7e0b2162ae91b711a61425', class: "flex h-full items-center" }, this.buttonsToRender));
    }
};

export { AtMultiBtnCell as at_multi_btn_cell };
