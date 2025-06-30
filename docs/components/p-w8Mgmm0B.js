import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';
import { d as defineCustomElement$1 } from './p-BLBTk09G.js';

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
        return (h(Host, { key: 'b9a2614deb0dccb50d18171f454f967b3f5ea436', class: "align-center flex h-full" }, h("atui-tooltip", { key: '6e81572a04e76fe333895ca0c1b6b70264e538e6', position: "right", is_visible: !!this.params.generateTooltip }, h("span", { key: '1be4d2145957591e15a818a2849d8dfcf2f9bacc', slot: "tooltip-trigger", "data-index": `column-${this.params.rowIndex}-data`, style: this.textStyles, class: `${(_a = this.textClass) !== null && _a !== void 0 ? _a : ''} truncate`, onClick: () => {
                if (this.params.click)
                    this.params.click(this.params);
            } }, this.textValue), this.params.generateTooltip && (h("span", { key: '963f599c9acc097f52c70f6882853b7bb8c63131', slot: "tooltip-content", class: `${(_b = this.params.tooltipClass) !== null && _b !== void 0 ? _b : ''} leading-normal` }, this.params.generateTooltip(this.params))))));
    }
    get el() { return this; }
}, [0, "atui-text-cell", {
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
//# sourceMappingURL=p-w8Mgmm0B.js.map

//# sourceMappingURL=p-w8Mgmm0B.js.map