import { r as registerInstance, a as getElement, h, H as Host } from './index-C56p-u4D.js';

const LINK_CLASSES = 'text-active cursor-pointer font-medium hover:underline';
const AtTextCellComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
        return (h(Host, { key: 'ddf3b4ac4a114e68ccfa595c74bccc0043cb70b7', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: 'f2b869a2b0cc13cf82abee5ee4688dc5e2361227', position: "right", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("span", { key: 'c79c47ac4aa17e80dc1edad16c7a8b67bd6d9537', slot: "tooltip-trigger", "data-index": `column-${this.params.rowIndex}-data`, style: this.textStyles, class: `${this.isLink ? LINK_CLASSES : ''} ${this.textClass ?? ''} block truncate`, onClick: () => {
                if (this.params.click)
                    this.params.click(this.params);
            } }, this.textValue), this.params.generateTooltip && (h("span", { key: '36f52746714a6582e9471bf670aa3b4b33165df1', class: `${this.params.tooltipClass ?? ''} leading-normal` }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTextCellComponent as at_text_cell };
