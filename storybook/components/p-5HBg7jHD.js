import { p as proxyCustomElement, H, h } from './p-89eupKrN.js';
import { d as defineCustomElement$1 } from './p-CS_tFK1i.js';

const AtCheckboxHeaderComponent = /*@__PURE__*/ proxyCustomElement(class AtCheckboxHeaderComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    params;
    disabled;
    isChecked;
    get el() { return this; }
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
        return (h("at-checkbox", { key: '2bdbea865890fb016293dc04273e2be8f63dd3a9', disabled: this.disabled, value: this.isChecked, onAtuiChange: (event) => this.setRowsValue(event.detail) }));
    }
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
//# sourceMappingURL=p-5HBg7jHD.js.map

//# sourceMappingURL=p-5HBg7jHD.js.map