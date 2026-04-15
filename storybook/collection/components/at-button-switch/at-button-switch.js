import { h, Host, } from "@stencil/core";
import { classlist } from "../../utils/classlist";
import { fetchTranslations } from "../../utils/translation";
const variantsConfig = {
    variants: {
        active: {
            true: 'bg-active-foreground/15 text-active',
            false: 'text-dark',
        },
        disabled: {
            true: 'text-disabled hover:text-disabled pointer-events-none',
            false: null,
        },
    },
};
const getButtonClasses = classlist('focus-visible:border-active-foreground focus-visible:ring-active-foreground/40 relative flex h-[30px] items-center gap-4 rounded-md border border-solid border-transparent px-12 py-8 leading-none font-normal transition-colors duration-300 ease-in-out outline-none focus-visible:ring-2 focus-visible:ring-offset-0', variantsConfig);
/**
 * @category Form Controls
 * @description A toggle switch component for binary on/off selections. Provides accessible alternative to checkboxes with visual toggle behavior.
 * @slot label -  place before "form label" to add custom label content.
 */
export class AtButtonSwitchComponent {
    /**
     * Label displayed alongside the toggle.
     */
    label;
    /**
     * Optional info icon with detailed tooltip description.
     *
     * Displayed at right of label.
     */
    info_text;
    /**
     * Short description or validation hint if required.
     */
    hint_text;
    /**
     * Disable interaction with the toggle.
     */
    disabled;
    /**
     * Set the toggles state.
     */
    value = false;
    el;
    translations;
    toggleId = `toggle-${Math.random().toString(36).substring(2, 11)}`;
    /**
     * Emits an event when toggled with `event.detail` being true if the switch is enabled
     */
    atuiChange;
    componentWillLoad() {
        fetchTranslations(this.el).then((translations) => {
            this.translations = translations;
        });
    }
    onToggle(change) {
        this.value = change;
        this.atuiChange.emit(change);
    }
    render() {
        const onButtonClasses = getButtonClasses({
            active: this.value === true,
            disabled: this.disabled,
        });
        const offButtonClasses = getButtonClasses({
            active: this.value === false,
            disabled: this.disabled,
        });
        return (h(Host, { key: '4b679c9aedf14eb8706c15786136ed9b62e6f427', id: `${this.toggleId}-host`, role: "radiogroup", "aria-labelledby": `${this.toggleId}-label` }, h("div", { key: '1a86bfa8a90df3fb4e3a5afcf631ce57c907d9f5', class: "flex flex-col" }, h("slot", { key: 'ac08848aa8ef0d83e0787d88e0db4934859ca5df', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: 'f1a0d3f9ce1e748c2fca6ceaee1297202567f50d', id: this.toggleId, label: this.label, info_text: this.info_text })), this.hint_text && (h("span", { key: '6a20cdae7c509ec7f5c34b1cd410ea0126b52a02', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "button-switch-hint" }, this.hint_text))), h("div", { key: 'd3e246fad1e4fac540632a2290fa801452c03cc1', class: "border-med relative w-fit rounded-lg border bg-white inset-shadow-xs" }, h("div", { key: '6eca1cba05f94f02c92db84ea0fc4f08f218dedc', class: "relative z-20 m-[2px] flex flex-row", "data-name": "switch-options" }, h("button", { key: '77004e6c160d3bb6e58046ff0bee40af614cf62b', class: offButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === false, disabled: this.disabled, onClick: () => this.onToggle(false), "data-name": "switch-off-button", "data-value": "false", type: "button" }, this.translations?.ATUI?.OFF || 'Off'), h("button", { key: '4f48f1e7df427bb43217242a00a5800e7ae10c07', class: onButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === true, disabled: this.disabled, onClick: () => this.onToggle(true), "data-name": "switch-on-button", "data-value": "true", type: "button" }, this.translations?.ATUI?.ON || 'On')))));
    }
    static get is() { return "at-button-switch"; }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Label displayed alongside the toggle."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "info_text": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional info icon with detailed tooltip description.\n\nDisplayed at right of label."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "info_text"
            },
            "hint_text": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Short description or validation hint if required."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hint_text"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Disable interaction with the toggle."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled"
            },
            "value": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set the toggles state."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "translations": {}
        };
    }
    static get events() {
        return [{
                "method": "atuiChange",
                "name": "atuiChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits an event when toggled with `event.detail` being true if the switch is enabled"
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
