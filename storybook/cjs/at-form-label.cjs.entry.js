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
        return (index.h("div", { key: '93c01a640f9ab46b8587e7cef1339ba4265c3d53', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (index.h("label", { key: 'e2240e593526655ed5b231ca56fa44acc1d7751d', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && index.h("span", { key: 'd216890922f85b255db348e2abd166d8d5b38e38', class: "text-error" }, "*"))),
            this.info_text && (index.h("at-tooltip", { key: '221c600fcfe87223e6830883f4a04b5ea84b412c', position: "right" }, index.h("at-icon", { key: '2f66f8753ea6898391155bd967961993e93f83bd', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), index.h("span", { key: '19ddab7ae1af802b5789bb154542a6bedd8037aa' }, this.info_text))),
        ]));
    }
};

exports.at_form_label = AtFormLabelComponent;
