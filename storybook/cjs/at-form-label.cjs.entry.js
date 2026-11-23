'use strict';

var index = require('./index-D8ktVGcW.js');

const AtFormLabelComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("div", { key: '62cc4f6dc5f0a5855dff50292f6be59a4014f5d3', class: "flex items-center gap-8", "data-name": "form-label" }, [
            (this.label || this.required) && (index.h("label", { key: '4314c53c512fb37a92141d5a0df4c8ee1a94968b', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && index.h("span", { key: '81a7d8ad13f668225d9ee41111dc97ef61dd4762', class: "text-error" }, "*"))),
            this.info_text && (index.h("at-tooltip", { key: '51c76065788cff732bf6a6ef3532ef308d692a46', position: "right" }, index.h("at-icon", { key: 'aa8a611945fb14de0c0f5884e9828e683f9e3344', slot: "tooltip-trigger", class: "fill-muted focus-visible:ring-active-glow inline-flex cursor-pointer rounded-full outline-none focus-visible:ring", name: "info", size: "1rem", tabindex: "0", role: "img", "aria-label": this.info_text, "data-name": "form-label-info" }), index.h("span", { key: '6157458f8a700fa4bb6296b38aba3c45596de896' }, this.info_text))),
        ]));
    }
};

exports.at_form_label = AtFormLabelComponent;
