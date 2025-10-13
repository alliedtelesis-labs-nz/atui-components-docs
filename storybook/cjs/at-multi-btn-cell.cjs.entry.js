'use strict';

var index = require('./index-COiLLAKF.js');

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
            return (index.h("at-tooltip", { position: "right", disabled: !button.tooltip }, button && (index.h("at-button", { type: "secondaryText", label: button.value, disabled: button.disabled, "data-name": button.dataNameValue, onAtuiClick: () => this.handleClick(button) })), button && button.tooltip && (index.h("span", { class: `leading-normal` }, button.tooltip))));
        });
    }
    render() {
        return (index.h(index.Host, { key: '5e869e148e5c3ee3bd8984a022a6b4cec97c2942', class: "flex h-full items-center" }, this.buttonsToRender));
    }
};

exports.at_multi_btn_cell = AtMultiBtnCell;
//# sourceMappingURL=at-multi-btn-cell.entry.cjs.js.map
