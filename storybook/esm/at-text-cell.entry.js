import { r as registerInstance, a as getElement, h, H as Host } from './index-lWb16Ay7.js';

const AtTextCellComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    containerStyles;
    textStyles;
    textClass;
    textValue;
    params;
    init(params) {
        const { size, color, textStyles, containerStyles, textClass, textTransform, } = params;
        this.textClass = textClass;
        this.containerStyles = containerStyles;
        this.params = params;
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
        return (h(Host, { key: '52a03db0d2a250ab1950b8f9a81e23c1a130dcad', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: 'ae21b40ef34b4571722e19fc23be4b76a3a07be4', position: "right", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("span", { key: '1aa65dee558d0872c24db36e51874c792adb27f5', slot: "tooltip-trigger", "data-index": `column-${this.params.rowIndex}-data`, style: this.textStyles, class: `${this.textClass ?? ''} block truncate`, onClick: () => {
                if (this.params.click)
                    this.params.click(this.params);
            } }, this.textValue), this.params.generateTooltip && (h("span", { key: 'd97bd6164718bf6b6afd9507a107e9e122640661', class: `${this.params.tooltipClass ?? ''} leading-normal` }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTextCellComponent as at_text_cell };
