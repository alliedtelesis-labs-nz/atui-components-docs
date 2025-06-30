import { p as proxyCustomElement, H, h } from './p-DJD-7SVX.js';
import { d as defineCustomElement$1 } from './p-D2IbPMfh.js';

const AtuiCheckboxHeaderComponent = /*@__PURE__*/ proxyCustomElement(class AtuiCheckboxHeaderComponent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
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
        return (h("atui-checkbox", { key: '24dc1844d2e249cffeef14415163dbd1cfca6ab4', disabled: this.disabled, value: this.isChecked, onAtuiChange: (event) => this.setRowsValue(event.detail) }));
    }
    get el() { return this; }
}, [0, "atui-checkbox-header", {
        "params": [32],
        "disabled": [32],
        "isChecked": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-checkbox-header", "atui-checkbox"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-checkbox-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiCheckboxHeaderComponent);
            }
            break;
        case "atui-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiCheckboxHeaderComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-BrpwQuGT.js.map

//# sourceMappingURL=p-BrpwQuGT.js.map