'use strict';

var index = require('./index-BPZZ2ScW.js');

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
        return (index.h("div", { key: 'd3744f2b79f057b57de6d79d970634ff06549c78', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (index.h("label", { key: '18805b4fd1f0cb872125c8cf3bb474be97d2fdf7', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && index.h("span", { key: '069aa3d7665d59cf40a44315d5c075679431e537', class: "text-error" }, "*"))),
            this.info_text && (index.h("at-tooltip", { key: '849900e35f74c4628716dd5b3c4f217e74939455', position: "right" }, index.h("at-icon", { key: 'de9e2fb4d7a36df5b3147cb77b85d670bff3174f', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), index.h("span", { key: '957952a75315ab7f9776751ca4ec01771de4d46a' }, this.info_text))),
        ]));
    }
};

exports.at_form_label = AtFormLabelComponent;
