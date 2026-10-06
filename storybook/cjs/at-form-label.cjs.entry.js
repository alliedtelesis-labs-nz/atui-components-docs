'use strict';

var index = require('./index-Dzqi4iVM.js');

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
        return (index.h("div", { key: '7366bbc74affb1db53d11ca026e4bd2d5c4d0dca', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (index.h("label", { key: 'b9eebe57ff4f2f837d613fbf197fe3b31a4af752', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && index.h("span", { key: 'fa0a71bf8821fa79cbc4bded69856064ab968bae', class: "text-error" }, "*"))),
            this.info_text && (index.h("at-tooltip", { key: '4dc78c021784d82fe2cf7f840caacaab22be8e54', position: "right" }, index.h("at-icon", { key: '1a5daf3ac7d5537c201659b6280fd89586887909', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), index.h("span", { key: 'd5edb66260ebb4ab61dd02ab348ed7b643da7cd4' }, this.info_text))),
        ]));
    }
};

exports.at_form_label = AtFormLabelComponent;
