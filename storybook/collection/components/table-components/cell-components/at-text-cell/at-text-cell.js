import { h, Host } from "@stencil/core";
const LINK_CLASSES = 'text-active cursor-pointer font-medium hover:underline';
const EMPTY_TEXT = '-';
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
    isEmpty;
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
        this.isEmpty = !params.textTransform && this.textValue === EMPTY_TEXT;
    }
    // If you are using objects for the value, they will appear as [object Object].
    // This indicates that you may need to use a valueGetter (see ag-grid API),
    // with a different cell type - this one is designed for displaying a single string value.
    getTextValue(params) {
        const { value } = params;
        // A missing value reads as a dash. Reading it as anything else would
        // throw, and a renderer that throws stops the grid drawing every row
        // after this one.
        if (value === '' || value === null || value === undefined) {
            return EMPTY_TEXT;
        }
        if (Array.isArray(value)) {
            return this.transferArrayValueToString(value);
        }
        return String(value);
    }
    transferArrayValueToString(value) {
        const compactValue = value.filter((val) => !!val);
        if (!compactValue.length) {
            return EMPTY_TEXT;
        }
        const textVal = compactValue.reduce((acc, current) => {
            acc = acc ? `${acc},${current}` : `${current}`;
            return acc;
        });
        return String(textVal);
    }
    render() {
        return (h(Host, { key: '4b070f01b6a914522e86348b467ce963453765b3', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '2b70a4c71869adc12189195e475677ad54007521', position: "right", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("span", { key: 'be99b5886b4bbfc6842de4d8bfd51810e664e5e0', slot: "tooltip-trigger", "data-index": `column-${this.params.rowIndex}-data`, style: this.textStyles, class: `${this.isLink ? LINK_CLASSES : ''} ${this.textClass ?? ''} ${this.isEmpty ? 'text-muted' : ''} block truncate`, onClick: () => {
                if (this.params.click)
                    this.params.click(this.params);
            } }, this.textValue), this.params.generateTooltip && (h("span", { key: 'ddd4f42cd57d28179997c5185f30a6d9e4af1846', class: `${this.params.tooltipClass ?? ''} leading-normal` }, this.params.generateTooltip(this.params))))));
    }
    static get is() { return "at-text-cell"; }
    static get states() {
        return {
            "containerStyles": {},
            "textStyles": {},
            "textClass": {},
            "isLink": {},
            "textValue": {},
            "isEmpty": {},
            "params": {}
        };
    }
    static get elementRef() { return "el"; }
}
