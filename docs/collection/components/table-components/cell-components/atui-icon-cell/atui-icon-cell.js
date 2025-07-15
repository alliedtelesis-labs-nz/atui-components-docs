import { h, Host } from "@stencil/core";
/**
 * @category Table Cell
 * @description A cell component for displaying an icon.
 */
export class AtuiIconCell {
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
        return (h(Host, { key: 'df276223020126e1e8999e283434626d2aa57759', class: "flex h-full items-center overflow-hidden leading-[100%]" }, this.getIcons));
    }
    static get is() { return "atui-icon-cell"; }
    static get states() {
        return {
            "params": {},
            "icons": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-icon-cell.js.map
