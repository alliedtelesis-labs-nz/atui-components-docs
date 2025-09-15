import { p as proxyCustomElement, H, h } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$1 } from './p-Df2_temq.js';

const AtCheckboxHeaderComponent = /*@__PURE__*/ proxyCustomElement(class AtCheckboxHeaderComponent extends H {
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
        return (h("at-checkbox", { key: 'd42e032330e3d1c19fe04a9c70fd4eac9b962863', disabled: this.disabled, value: this.isChecked, onAtuiChange: (event) => this.setRowsValue(event.detail) }));
    }
    get el() { return this; }
}, [256, "at-checkbox-header", {
        "params": [32],
        "disabled": [32],
        "isChecked": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-checkbox-header", "at-checkbox"];
    components.forEach(tagName => { switch (tagName) {
        case "at-checkbox-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtCheckboxHeaderComponent);
            }
            break;
        case "at-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtCheckboxHeaderComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-DYJKJijd.js.map

//# sourceMappingURL=p-DYJKJijd.js.map