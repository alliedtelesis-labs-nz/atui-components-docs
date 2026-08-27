'use strict';

var index = require('./index-Bo1AxtqW.js');

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
        return (index.h("div", { key: '834d10bc1eeb12d472ff6de82a58da72b7da9816', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (index.h("label", { key: '5e701acb2957bd10f5940fb79adab7980b800c96', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && index.h("span", { key: '652b82e1558b8b5f0141eaabdc99f012761a9c44', class: "text-error" }, "*"))),
            this.info_text && (index.h("at-tooltip", { key: '24e09e020be21168bd340fce28af357010537661', position: "right" }, index.h("at-icon", { key: '4d7a59f5d5d1bfeb0051715a75985afaf52af76e', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), index.h("span", { key: '5f577097a55e389ea883a4c5bdbcac2d5561a497' }, this.info_text))),
        ]));
    }
};

exports.at_form_label = AtFormLabelComponent;
