import { r as registerInstance, h } from './index-CGGSFxDu.js';

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
        return (h("div", { key: 'a0fd69942bed6fe6860ef534f4f06366ebc73e67', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (h("label", { key: '3f230fab0205d4ec0780679de382b4aaa6b9d8c0', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: '2b42be6eaa6ae6a93d2cfe458a180f06e5516dad', class: "text-error" }, "*"))),
            this.info_text && (h("at-tooltip", { key: 'a4b5ee26f2b0c30d4b134982fb7e83eb1aa065b4', position: "right" }, h("at-icon", { key: 'b0f0b51bf0adade9b6c1f5ffb818502da8a8b8e1', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), h("span", { key: '8a6ade5e8b13f592c7a70a0eee4f0aaa92eaf7ad' }, this.info_text))),
        ]));
    }
};

export { AtFormLabelComponent as at_form_label };
