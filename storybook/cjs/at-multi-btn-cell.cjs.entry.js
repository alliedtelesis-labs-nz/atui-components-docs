'use strict';

var index = require('./index-zRWHCAJe.js');

const AtMultiBtnCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
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
            return (index.h("at-tooltip", { position: "top", disabled: !button.tooltip, class: "h-fit self-center" }, button && (index.h("at-button", { slot: "tooltip-trigger", type: button.type ?? 'secondaryText', label: button.icon ? undefined : button.value, "aria-label": button.icon ? button.value : undefined, disabled: button.disabled, "data-name": button.dataNameValue, onAtuiClick: () => this.handleClick(button) }, button.icon && (index.h("at-icon", { slot: "icon", name: button.icon, size: "16px" })))), button && button.tooltip && (index.h("span", { class: `leading-normal` }, button.tooltip))));
        });
    }
    render() {
        return (index.h(index.Host, { key: 'e5f120e1e5fcddcbc05c5bad634078e626207d11', class: "flex h-full items-center" }, this.buttonsToRender));
    }
};

exports.at_multi_btn_cell = AtMultiBtnCell;
