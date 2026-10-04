import { h, Host } from "@stencil/core";
const LINK_CLASSES = 'text-active cursor-pointer font-medium hover:underline';
/**
 * @category Data Tables
 * @description A basic text cell component for displaying simple text content in data tables. Provides consistent typography and overflow handling.
 */
export class AtTextCellComponent {
    el;
    containerStyles;
    textStyles;
    textClass;
    isLink;
    textValue;
    params;
    init(params) {
        const { size, color, textStyles, containerStyles, textClass, isLink } = params;
        this.textClass = textClass;
        this.isLink = isLink;
        this.containerStyles = containerStyles;
        if (typeof textStyles == 'function') {
            this.textStyles = textStyles(params);
        }
        else {
            this.textStyles = {
                fontSize: size || null,
                color: color || null,
                ...textStyles,
            };
        }
        this.setCellData(params);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.setCellData(params);
        return true;
    }
    setCellData(params) {
        this.params = params;
        this.textValue = params.textTransform
            ? params.textTransform(params.data, params.value)
            : this.getTextValue(params);
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
        return (h(Host, { key: 'd3009b6910633b1d42cfd72700c6a8bf197490df', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: 'ae5c86ab772a4aea54108f807e46346432ba45df', position: "right", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("span", { key: '049ab37a095e5d98823a0e33b04195fe25b922fe', slot: "tooltip-trigger", "data-index": `column-${this.params.rowIndex}-data`, style: this.textStyles, class: `${this.isLink ? LINK_CLASSES : ''} ${this.textClass ?? ''} block truncate`, onClick: () => {
                if (this.params.click)
                    this.params.click(this.params);
            } }, this.textValue), this.params.generateTooltip && (h("span", { key: 'c94a821e3c28193d14de810f9a1d487f626f8cb0', class: `${this.params.tooltipClass ?? ''} leading-normal` }, this.params.generateTooltip(this.params))))));
    }
    static get is() { return "at-text-cell"; }
    static get states() {
        return {
            "containerStyles": {},
            "textStyles": {},
            "textClass": {},
            "isLink": {},
            "textValue": {},
            "params": {}
        };
    }
    static get elementRef() { return "el"; }
}
