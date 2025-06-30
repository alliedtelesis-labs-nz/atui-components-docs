import { h, Host } from "@stencil/core";
/**
 * @category Table Cell
 * @description A cell component for displaying multiple buttons.
 */
export class AtuiMultiBtnCell {
    init(params) {
        this.params = params;
        const { containerStyles, buttons } = params;
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
            return (h("atui-tooltip", { position: "right", is_visible: !!button.tooltip }, button && (h("atui-button", { type: "secondaryText", label: button.value, disabled: button.disabled, "data-name": button.dataNameValue, onAtuiClick: () => this.handleClick(button) })), button && button.tooltip && (h("span", { slot: "tooltip-content", class: `leading-normal` }, button.tooltip))));
        });
    }
    render() {
        return (h(Host, { key: '19abf3a96db0d35485c85b4cd20c4c60b1669dd0', class: "flex h-full items-center leading-[100%]" }, this.buttonsToRender));
    }
    static get is() { return "atui-multi-btn-cell"; }
    static get states() {
        return {
            "params": {},
            "buttons": {},
            "containerStyles": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-multi-btn-cell.js.map
