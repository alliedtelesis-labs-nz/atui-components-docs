import { h } from "@stencil/core";
/**
 * @category Table Cell
 * @description A header component for displaying a checkbox.
 */
export class AtCheckboxHeaderComponent {
    params;
    disabled;
    isChecked;
    el;
    init(params) {
        this.params = params;
        this.params.width = 60;
        this.setDisabled();
        const nodes = this.params.api.getRenderedNodes().filter(Boolean);
        const checkedNodes = nodes.filter((rowNode) => {
            return typeof rowNode.data === 'boolean'
                ? rowNode.data
                : rowNode.data[this.params.column.colId];
        });
        this.isChecked = nodes.length && nodes.length === checkedNodes.length;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.params = params;
        this.setDisabled();
        return true;
    }
    setRowsValue(checked) {
        if (checked !== undefined) {
            const nodes = this.params.api.getRenderedNodes().filter(Boolean);
            nodes.forEach((rowNode) => {
                rowNode.setDataValue(this.params.column.colId, checked);
            });
        }
    }
    setDisabled() {
        if (!this.params?.api)
            return;
        const renderedNodes = this.params.api.getRenderedNodes();
        const data = renderedNodes.map((node) => node.data);
        if (this.params.getDisabled !== undefined) {
            this.disabled = this.params.getDisabled(data);
        }
    }
    render() {
        return (h("at-checkbox", { key: '7e481294f7f39c444bd3a6b6799957fa102135cf', disabled: this.disabled, value: this.isChecked, onAtuiChange: (event) => this.setRowsValue(event.detail) }));
    }
    static get is() { return "at-checkbox-header"; }
    static get states() {
        return {
            "params": {},
            "disabled": {},
            "isChecked": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=at-checkbox-header.js.map
