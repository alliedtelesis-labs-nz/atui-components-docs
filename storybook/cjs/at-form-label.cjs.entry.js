'use strict';

var index = require('./index-B73N6Yu9.js');

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
        return (index.h("div", { key: '05faf043929e969ff00e810f7a0834a3e8f5ad69', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (index.h("label", { key: '7af917f0ac19bd3bd09a864d023a65ad81a723bd', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && index.h("span", { key: '0db38090ae6f75e5a726261645e2546201e7a8b6', class: "text-error" }, "*"))),
            this.info_text && (index.h("at-tooltip", { key: 'd0a9ca63849de0f106a5aa7e6fe09a188483aea3', position: "right" }, index.h("at-icon", { key: '4d5240f43948f497b152f086eb8e5e530c0e931f', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), index.h("span", { key: '3c5ba342751bb1bd64406b09d734443632590f98' }, this.info_text))),
        ]));
    }
};

exports.at_form_label = AtFormLabelComponent;
