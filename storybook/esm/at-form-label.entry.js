import { r as registerInstance, h } from './index-46ti_ijN.js';

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
        return (h("div", { key: 'bc1b619dcb47197bc6d64488329aac30a39dbccf', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (h("label", { key: 'a8a7fc298ffa8537540ad63714f77a7c9d2934df', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: '221730acbf0009568b6a61b05acaab47d2435ac0', class: "text-error" }, "*"))),
            this.info_text && (h("at-tooltip", { key: '03fcec52b9e346530ebf18e4bb178eaa59c2672a', position: "right" }, h("at-icon", { key: '2699597f2750cd35928747bcfb2288338029819e', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), h("span", { key: '03a3b757073b087ffba1f640135e120e8f0fdf39' }, this.info_text))),
        ]));
    }
};

export { AtFormLabelComponent as at_form_label };
