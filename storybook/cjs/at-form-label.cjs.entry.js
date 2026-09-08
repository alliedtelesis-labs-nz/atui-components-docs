'use strict';

var index = require('./index-Bc1nzv_X.js');

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
        return (index.h("div", { key: '6cad748e14ef97cc0024205f0166a9159a73458f', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (index.h("label", { key: '5fee42549953f6dc0b28cbd5b57a00adf5be84e5', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && index.h("span", { key: '7b79944ecc3aa223fb4b68bd74906db02152844e', class: "text-error" }, "*"))),
            this.info_text && (index.h("at-tooltip", { key: '44a9217a678baaa98991bc7f4a848ec502be6e4f', position: "right" }, index.h("at-icon", { key: 'eddd67a6d63115bd38f26fbf0f952af829f8e199', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), index.h("span", { key: 'ef5438b9de1ab9b76e09fb74d354d2792b45ab0a' }, this.info_text))),
        ]));
    }
};

exports.at_form_label = AtFormLabelComponent;
