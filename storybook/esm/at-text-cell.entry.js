import { r as registerInstance, a as getElement, h, H as Host } from './index-B_iXjeZH.js';

const LINK_CLASSES = 'text-active cursor-pointer font-medium hover:underline';
const EMPTY_TEXT = '-';
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
        return (h(Host, { key: 'c0911c5f58ee595badf82297a847f9dd24995482', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: 'a8495b020201ab00d65dfb544192a342417eeeec', position: "right", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("span", { key: '94e25e46b7347562ab7ed18c5d8c45f280209b1d', slot: "tooltip-trigger", "data-index": `column-${this.params.rowIndex}-data`, style: this.textStyles, class: `${this.isLink ? LINK_CLASSES : ''} ${this.textClass ?? ''} ${this.isEmpty ? 'text-muted' : ''} block truncate`, onClick: () => {
                if (this.params.click)
                    this.params.click(this.params);
            } }, this.textValue), this.params.generateTooltip && (h("span", { key: 'c222cd3e0c3e24775cf4f8b4f3b3ec7c1a70cdf8', class: `${this.params.tooltipClass ?? ''} leading-normal` }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTextCellComponent as at_text_cell };
