import { p as proxyCustomElement, H, h, c as Host } from './p-CIJrXZgf.js';
import { d as defineCustomElement$1 } from './p-b7uiw7OS.js';

const AtuiTextCellComponent = /*@__PURE__*/ proxyCustomElement(class AtuiTextCellComponent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    init(params) {
        const { size, color, textStyles, containerStyles, textClass, textTransform, } = params;
        this.textClass = textClass;
        this.containerStyles = containerStyles;
        this.params = params;
        if (typeof textStyles == 'function') {
            this.textStyles = textStyles(params);
        }
        else {
            this.textStyles = Object.assign({ fontSize: size || null, color: color || null }, textStyles);
        }
        this.textValue = this.getTextValue(params);
        if (textTransform) {
            this.textValue = textTransform(params.data, params.value);
        }
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.textValue = this.getTextValue(params);
        return true;
    }
    // If you are using objects for the value, they will appear as [object Object].
    // This indicates that you may need to use a valueGetter (see ag-grid API),
    // with a different cell type - this one is designed for displaying a single string value.
    getTextValue(params) {
        const { value } = params;
        if (value === '') {
            return '-';
        }
        if (value.constructor === Array) {
            return this.transferArrayValueToString(value);
        }
        return String(value);
    }
    transferArrayValueToString(value) {
        const compactValue = value.filter((val) => !!val);
        if (!compactValue.length) {
            return '-';
        }
        const textVal = compactValue.reduce((acc, current) => {
            acc = acc ? `${acc},${current}` : `${current}`;
            return acc;
        });
        return String(textVal);
    }
    render() {
        var _a, _b;
        return (h(Host, { key: '6f54b669e842e6baec536ef5d1cdef4e1f3c2003', class: "align-center flex h-full" }, h("atui-tooltip", { key: 'db0dbee51c8af0dbac3dd8f98099e7eb7ac5e332', position: "right", is_visible: !!this.params.generateTooltip }, h("span", { key: '3bff885ac86e1c33b5d6ca1bcd2121e96d13841f', slot: "tooltip-trigger", "data-index": `column-${this.params.rowIndex}-data`, style: this.textStyles, class: `${(_a = this.textClass) !== null && _a !== void 0 ? _a : ''} truncate`, onClick: () => {
                if (this.params.click)
                    this.params.click(this.params);
            } }, this.textValue), this.params.generateTooltip && (h("span", { key: '223ef15afd4d08f345ec2c9e4b3cdf5f99cd1523', slot: "tooltip-content", class: `${(_b = this.params.tooltipClass) !== null && _b !== void 0 ? _b : ''} leading-normal` }, this.params.generateTooltip(this.params))))));
    }
    get el() { return this; }
}, [256, "atui-text-cell", {
        "containerStyles": [32],
        "textStyles": [32],
        "textClass": [32],
        "textValue": [32],
        "params": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-text-cell", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-text-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTextCellComponent);
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiTextCellComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-B2f-41pQ.js.map

//# sourceMappingURL=p-B2f-41pQ.js.map