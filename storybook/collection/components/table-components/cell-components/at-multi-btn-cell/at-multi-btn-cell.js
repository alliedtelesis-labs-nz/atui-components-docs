import { h, Host } from "@stencil/core";
/**
 * @category Table Cell
 * @description A cell component for displaying multiple buttons.
 */
export class AtMultiBtnCell {
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
            return (h("at-tooltip", { position: "right", disabled: !button.tooltip }, button && (h("at-button", { type: "secondaryText", label: button.value, disabled: button.disabled, "data-name": button.dataNameValue, onAtuiClick: () => this.handleClick(button) })), button && button.tooltip && (h("span", { class: `leading-normal` }, button.tooltip))));
        });
    }
    render() {
        return (h(Host, { key: '5e869e148e5c3ee3bd8984a022a6b4cec97c2942', class: "flex h-full items-center" }, this.buttonsToRender));
    }
    static get is() { return "at-multi-btn-cell"; }
    static get states() {
        return {
            "params": {},
            "buttons": {},
            "containerStyles": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=at-multi-btn-cell.js.map
