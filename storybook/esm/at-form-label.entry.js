import { r as registerInstance, h } from './index-B2z78KBX.js';

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
        return (h("div", { key: 'ea4f261ca871eb0142a5f2cb60ba2b7e4af6c821', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (h("label", { key: 'ff4a0e69a3b9bae5dca774b27214a73f54df55fd', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: '0e301449466cd171bf820f33211cbc7aa6233600', class: "text-error" }, "*"))),
            this.info_text && (h("at-tooltip", { key: '73dd6fa20274ea3b489450aa3a50fe5af6d2980a', position: "right" }, h("at-icon", { key: 'bff426ac4886a6655950415d690aaf2085fd93a4', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), h("span", { key: 'a1e0f22e1913c71137e0804b6472554df3d1dc5e' }, this.info_text))),
        ]));
    }
};

export { AtFormLabelComponent as at_form_label };
