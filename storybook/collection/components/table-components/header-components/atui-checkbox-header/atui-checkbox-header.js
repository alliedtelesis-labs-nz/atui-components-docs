import { h } from "@stencil/core";
/**
 * @category Table Cell
 * @description A header component for displaying a checkbox.
 */
export class AtuiCheckboxHeaderComponent {
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
        var _a;
        if (!((_a = this.params) === null || _a === void 0 ? void 0 : _a.api))
            return;
        const renderedNodes = this.params.api.getRenderedNodes();
        const data = renderedNodes.map((node) => node.data);
        if (this.params.getDisabled !== undefined) {
            this.disabled = this.params.getDisabled(data);
        }
    }
    render() {
        return (h("atui-checkbox", { key: 'c128369ffee132636465b6e217fe6e57da5dbf8e', disabled: this.disabled, value: this.isChecked, onAtuiChange: (event) => this.setRowsValue(event.detail) }));
    }
    static get is() { return "atui-checkbox-header"; }
    static get states() {
        return {
            "params": {},
            "disabled": {},
            "isChecked": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-checkbox-header.js.map
