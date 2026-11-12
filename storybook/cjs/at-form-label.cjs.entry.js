'use strict';

var index = require('./index-DGi-f7lA.js');

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
        return (index.h("div", { key: '04c3bda0ea477fe72de1723acc6215039870040e', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (index.h("label", { key: '44b375e0b76f5629e38550d6ea150df8c2aec8d9', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && index.h("span", { key: 'e7b0ecc3c6d842d1b8dca7f694499a3798bb78df', class: "text-error" }, "*"))),
            this.info_text && (index.h("at-tooltip", { key: '6535efaf5ccbf9fe3e83816499dd9c30a7fbd0be', position: "right" }, index.h("at-icon", { key: '2786f3aae8e29ff2c5c44651b8bdcedb6cc8fa9a', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), index.h("span", { key: '656020e293b65f60ba7d3537529d2540869c3352' }, this.info_text))),
        ]));
    }
};

exports.at_form_label = AtFormLabelComponent;
