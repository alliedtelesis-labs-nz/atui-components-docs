'use strict';

var index = require('./index-D6_HFEr-.js');

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
        return (index.h("div", { key: '76b023f879c7a9af8f9a0cc7018f0575a82a5d28', class: "flex items-center gap-8", "data-name": "form-label" }, [
            (this.label || this.required) && (index.h("label", { key: 'f05ede7de1bc5a5e0cf8857bef6a545f2e86cdd6', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && index.h("span", { key: '85afff2b6dc52e3cd9d65cdba86e0b1a7d381ec5', class: "text-error" }, "*"))),
            this.info_text && (index.h("at-tooltip", { key: 'a5250dd208d5b828d59f641c96f78b2043f2542b', position: "right" }, index.h("at-icon", { key: '3ce4c2fd095ea141922017a47d6251cb2831420b', slot: "tooltip-trigger", class: "fill-muted focus-visible:ring-active-glow inline-flex cursor-pointer rounded-full outline-none focus-visible:ring", name: "info", size: "1rem", tabindex: "0", role: "img", "aria-label": this.info_text, "data-name": "form-label-info" }), index.h("span", { key: '1a2db08a374484723f24916963286d78a28e4abe' }, this.info_text))),
        ]));
    }
};

exports.at_form_label = AtFormLabelComponent;
