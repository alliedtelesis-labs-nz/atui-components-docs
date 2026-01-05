import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';
import { d as defineCustomElement$1 } from './p-CdUod9Pr.js';

const AtTextCellComponent = /*@__PURE__*/ proxyCustomElement(class AtTextCellComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    get el() { return this; }
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
        return (h(Host, { key: 'e3a16cbd0408aeeb46c22a22a8b4cb01e57a63d1', class: "align-center flex h-full" }, h("at-tooltip", { key: '6f25d02b782e2e5c87aa481b10646c587dc750fa', position: "right", disabled: !this.params.generateTooltip }, h("span", { key: '4d3fba764a0d10ea40b294d09ec36ebc75dd2019', slot: "tooltip-trigger", "data-index": `column-${this.params.rowIndex}-data`, style: this.textStyles, class: `${this.textClass ?? ''} truncate`, onClick: () => {
                if (this.params.click)
                    this.params.click(this.params);
            } }, this.textValue), this.params.generateTooltip && (h("span", { key: '61f2170fff2849af06b5277654fcad68c8ec459a', class: `${this.params.tooltipClass ?? ''} leading-normal` }, this.params.generateTooltip(this.params))))));
    }
}, [256, "at-text-cell", {
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
    const components = ["at-text-cell", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-text-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTextCellComponent);
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtTextCellComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-BlNImvmv.js.map

//# sourceMappingURL=p-BlNImvmv.js.map