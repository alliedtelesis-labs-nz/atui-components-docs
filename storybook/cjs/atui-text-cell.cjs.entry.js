'use strict';

var index = require('./index-s6Ut5Yq6.js');

const AtuiTextCellComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '6f54b669e842e6baec536ef5d1cdef4e1f3c2003', class: "align-center flex h-full" }, index.h("atui-tooltip", { key: '4b379c68e720714e55c5e4aa2d5d9429161e9382', position: "right", disabled: !this.params.generateTooltip }, index.h("span", { key: '4d3fba764a0d10ea40b294d09ec36ebc75dd2019', slot: "tooltip-trigger", "data-index": `column-${this.params.rowIndex}-data`, style: this.textStyles, class: `${(_a = this.textClass) !== null && _a !== void 0 ? _a : ''} truncate`, onClick: () => {
                if (this.params.click)
                    this.params.click(this.params);
            } }, this.textValue), this.params.generateTooltip && (index.h("span", { key: '85c8956da4c187194432ce4bc0ef75cdcfd0fb89', slot: "tooltip-content", class: `${(_b = this.params.tooltipClass) !== null && _b !== void 0 ? _b : ''} leading-normal` }, this.params.generateTooltip(this.params))))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_text_cell = AtuiTextCellComponent;
//# sourceMappingURL=atui-text-cell.entry.cjs.js.map

//# sourceMappingURL=atui-text-cell.cjs.entry.js.map