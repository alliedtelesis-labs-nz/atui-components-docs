'use strict';

var index = require('./index-i7hIKTeN.js');

const AtuiMultiBtnCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
            return (index.h("atui-tooltip", { position: "right", disabled: !button.tooltip }, button && (index.h("atui-button", { type: "secondaryText", label: button.value, disabled: button.disabled, "data-name": button.dataNameValue, onAtuiClick: () => this.handleClick(button) })), button && button.tooltip && (index.h("span", { class: `leading-normal` }, button.tooltip))));
        });
    }
    render() {
        return (index.h(index.Host, { key: '5d198c54cd484d298bd8cf246372d7c2194e95ef', class: "flex h-full items-center" }, this.buttonsToRender));
    }
    get el() { return index.getElement(this); }
};

exports.atui_multi_btn_cell = AtuiMultiBtnCell;
//# sourceMappingURL=atui-multi-btn-cell.entry.cjs.js.map

//# sourceMappingURL=atui-multi-btn-cell.cjs.entry.js.map