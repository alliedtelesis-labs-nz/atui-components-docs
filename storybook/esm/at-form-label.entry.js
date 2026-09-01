import { r as registerInstance, h } from './index-m_dTEvgo.js';

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
        return (h("div", { key: '3f280b0fc7739531335d2ce508025605f15c9823', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (h("label", { key: '5a0e9cc45309610601d128532b653e43e5691b2a', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: 'cda96da481956820a31a3f900beea21548f7f883', class: "text-error" }, "*"))),
            this.info_text && (h("at-tooltip", { key: '0c5129a1e162384d2f9d139a053fe9f3bd2eaa5a', position: "right" }, h("at-icon", { key: 'db562c982e0782d39d5ccd41ae2d21ca943338f3', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), h("span", { key: 'bfaf8e1092a14003003c144811f77ea1adea3c20' }, this.info_text))),
        ]));
    }
};

export { AtFormLabelComponent as at_form_label };
