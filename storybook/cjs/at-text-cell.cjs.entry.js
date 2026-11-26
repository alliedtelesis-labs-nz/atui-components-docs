'use strict';

var index = require('./index-GH7gxrjy.js');

const LINK_CLASSES = 'text-active cursor-pointer font-medium hover:underline';
const EMPTY_TEXT = '-';
const AtTextCellComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
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
        return (index.h(index.Host, { key: '5bc2d1f6d2fe35fdc6b0c4ea03ab3f059f34e0f3', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: 'b7f9a5733675209de8ec5c4f373d51cd9878f7c4', position: "right", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("span", { key: 'f21d7402e2f1032605fb4a9ec6de06d8afb65eac', slot: "tooltip-trigger", "data-index": `column-${this.params.rowIndex}-data`, style: this.textStyles, class: `${this.isLink ? LINK_CLASSES : ''} ${this.textClass ?? ''} ${this.isEmpty ? 'text-muted' : ''} block truncate`, onClick: () => {
                if (this.params.click)
                    this.params.click(this.params);
            } }, this.textValue), this.params.generateTooltip && (index.h("span", { key: '8300dfb02640ce9ae3b6c8bdc5ab2f30eab960f8', class: `${this.params.tooltipClass ?? ''} leading-normal` }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_cell = AtTextCellComponent;
