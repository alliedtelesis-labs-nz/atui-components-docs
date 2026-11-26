import { r as registerInstance, h } from './index-DTCxn2cp.js';

const AtFormLabelComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Label that appears before the info icon.
     */
    label;
    /**
     * When true, there will be a red star on the label.
     */
    required;
    /**
     * The text to be contained in the tooltip.
     */
    info_text;
    /**
     * Placed in the 'for' attribute on the label element
     */
    for;
    render() {
        return (h("div", { key: '35b1229d9d95fb560551ac664d45fe91bdaf92d3', class: "flex items-center gap-8", "data-name": "form-label" }, [
            (this.label || this.required) && (h("label", { key: '391a3d5a7d45260cf3cf961c31e600c04474449b', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: '5b2e15ccdb03b4235c13368dfc49cad43009850a', class: "text-error" }, "*"))),
            this.info_text && (h("at-tooltip", { key: '8ab7b78ba434de52245caf8c2741e2b99a195a68', position: "right" }, h("at-icon", { key: '9c78490af15c1a0228501dbb835af2d8896bded9', slot: "tooltip-trigger", class: "fill-muted focus-visible:ring-active-glow inline-flex cursor-pointer rounded-full outline-none focus-visible:ring", name: "info", size: "1rem", tabindex: "0", role: "img", "aria-label": this.info_text, "data-name": "form-label-info" }), h("span", { key: '1e3c12a9962f906bfd8fcb660916b62da82ea3bf' }, this.info_text))),
        ]));
    }
};

export { AtFormLabelComponent as at_form_label };
