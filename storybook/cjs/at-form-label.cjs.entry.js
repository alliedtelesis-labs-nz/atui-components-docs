'use strict';

var index = require('./index-ToR1OkrH.js');

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
        return (index.h("div", { key: '285da4b4b4db16a74aacdf1581cd72cbec5a1eeb', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (index.h("label", { key: 'd634647318eb5e77a91c3de07f4c9c273823d020', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && index.h("span", { key: '239ab004b4057a2f0c41ec3aa1f618c87d342637', class: "text-error" }, "*"))),
            this.info_text && (index.h("at-tooltip", { key: '9bf16d4bbdca8536e585898a1e335e2eee07a0e8', position: "right" }, index.h("at-icon", { key: '90fc18f016add1839f5762a8bca120657797dc32', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), index.h("span", { key: '840fbb8ac709c827ddb3c835c6bee2514d4badc4' }, this.info_text))),
        ]));
    }
};

exports.at_form_label = AtFormLabelComponent;
