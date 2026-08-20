import { r as registerInstance, h } from './index-_QbJz5mf.js';

const AtFormLabelComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { key: '785e9e88a1f498ebd6a038871bed22e42b83ddf0', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (h("label", { key: '2c6eba0eb39e8d3cb41e5fdd16813fa9091074d9', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: 'b51ad1d0b68d8fd9564c332443ecafcf91f378b8', class: "text-error" }, "*"))),
            this.info_text && (h("at-tooltip", { key: '09df56a39409a6d1ca14a08ca0ec111ab6e8468e', position: "right" }, h("at-icon", { key: 'dfd395a1e3399afe818804b83769fb5d059b7fce', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), h("span", { key: '323555062a4d5c00c3bbcf9bb766764dc2cf12a9' }, this.info_text))),
        ]));
    }
};

export { AtFormLabelComponent as at_form_label };
