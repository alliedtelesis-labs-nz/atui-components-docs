import { h, Host } from "@stencil/core";
/**
 * @category Table Cell
 * @description A basic text cell component for displaying simple text content in data tables. Provides consistent typography and overflow handling.
 */
export class AtuiTextCellComponent {
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
        return (h(Host, { key: 'd0f860b5bc46e77ed3043b271d15563ef83202bc', class: "align-center flex h-full" }, h("atui-tooltip", { key: '13c3820849937cd67ffb671f6d80b00b4940e1da', position: "right", is_visible: !!this.params.generateTooltip }, h("span", { key: 'f1d316ce44e95af2713d5eafd32a76b1cc506197', slot: "tooltip-trigger", "data-index": `column-${this.params.rowIndex}-data`, style: this.textStyles, class: `${(_a = this.textClass) !== null && _a !== void 0 ? _a : ''} truncate`, onClick: () => {
                if (this.params.click)
                    this.params.click(this.params);
            } }, this.textValue), this.params.generateTooltip && (h("span", { key: 'f123a0dfbc99b84bd8d50b8625e2fa93fbb70e95', slot: "tooltip-content", class: `${(_b = this.params.tooltipClass) !== null && _b !== void 0 ? _b : ''} leading-normal` }, this.params.generateTooltip(this.params))))));
    }
    static get is() { return "atui-text-cell"; }
    static get states() {
        return {
            "containerStyles": {},
            "textStyles": {},
            "textClass": {},
            "textValue": {},
            "params": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-text-cell.js.map
