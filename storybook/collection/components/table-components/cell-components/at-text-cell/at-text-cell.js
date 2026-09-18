import { h, Host } from "@stencil/core";
const LINK_CLASSES = 'text-active-foreground cursor-pointer font-medium hover:underline';
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
        return (h(Host, { key: '8f3f5a2ef402da05058a1b47549c335e1c86c8a7', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '56635df608d129db8d5f18cab53721ac854b06ef', position: "right", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("span", { key: '159158f9b338d77a65fde1e5c639f35b0a267cfe', slot: "tooltip-trigger", "data-index": `column-${this.params.rowIndex}-data`, style: this.textStyles, class: `${this.isLink ? LINK_CLASSES : ''} ${this.textClass ?? ''} block truncate`, onClick: () => {
                if (this.params.click)
                    this.params.click(this.params);
            } }, this.textValue), this.params.generateTooltip && (h("span", { key: 'f489912d6dd8e8f90df29318ee6bde0ce3488011', class: `${this.params.tooltipClass ?? ''} leading-normal` }, this.params.generateTooltip(this.params))))));
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
