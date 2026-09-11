'use strict';

var index = require('./index-DLWZuLsW.js');

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
        return (index.h("div", { key: 'ae9b1005d9040d978e20bd32a399a46c238a075b', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (index.h("label", { key: '204a707d189f708d615a952b6c50ea5b82b82c34', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && index.h("span", { key: 'f6f6f9308ea71e15fc21c1156034916b686cf542', class: "text-error" }, "*"))),
            this.info_text && (index.h("at-tooltip", { key: 'fa0d325bea59bd78399366879e1e6416046dcdba', position: "right" }, index.h("at-icon", { key: '590d2d4691c8e476ede4261e4a7dc9c1dca0034b', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), index.h("span", { key: '5d2bef0debcb43f134598798509adb41c28bf115' }, this.info_text))),
        ]));
    }
};

exports.at_form_label = AtFormLabelComponent;
