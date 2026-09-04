'use strict';

var index = require('./index-ChtkW4Eq.js');

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
        return (index.h("div", { key: '0fdb98a94c50e9a673fc8369b20a39edef627c8d', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (index.h("label", { key: '2e01b6f4b1d54d09450768b0840133e18f496a79', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && index.h("span", { key: 'c7ea80faafc5eb29294db67990c1888bddceb37a', class: "text-error" }, "*"))),
            this.info_text && (index.h("at-tooltip", { key: 'e5054a00c7c196a956afdb74f30beaabe244b6ab', position: "right" }, index.h("at-icon", { key: '42a3909517a12e48a803331a98f98640d52df072', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), index.h("span", { key: '88f48e556413a5eec753e295731d23c0a115599b' }, this.info_text))),
        ]));
    }
};

exports.at_form_label = AtFormLabelComponent;
