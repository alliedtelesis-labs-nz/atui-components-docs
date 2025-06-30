import { h, Host, } from "@stencil/core";
import { cva } from "class-variance-authority";
const variants = cva('group/checkbox transition-[color,background-color, box-shadow] relative flex w-full cursor-pointer items-start gap-8 rounded-md p-8 outline-0 duration-300 ease-in-out focus:outline-0 focus-visible:ring-2 focus-visible:ring-active-foreground/30', {
    variants: {
        disabled: {
            false: 'cursor-pointer',
            true: 'pointer-events-none opacity-70 grayscale-[1]',
        },
        checked: {
            false: 'bg-white hover:bg-surface-1',
            true: 'bg-active-foreground/15',
        },
    },
});
const checkboxVariants = cva('material-icons shadow-inset-xs pointer-events-none z-10 !h-16 !w-16 cursor-pointer rounded-sm border border-solid accent-active-foreground ' +
    'transition-all duration-300 ease-in-out', {
    variants: {
        checked: {
            false: 'bg-surface-1 group-focus-visible/checkbox:border-2 group-focus-visible/checkbox:border-active-foreground',
            true: 'bg-active-foreground/50 group-focus-visible/checkbox:border-2 group-focus-visible/checkbox:border-active-foreground',
        },
        disabled: {
            false: 'group-focus-visible/checkbox:ring-2 group-focus-visible/checkbox:ring-active-foreground/30',
            true: null,
        },
    },
});
/**
 * @category Form Controls
 * @description A checkbox component for selecting a single option from a predefined list. Provides validation, labeling, and accessibility features for checkbox collections.
 *
 * @slot - Placed after the title & subtitle elements.
 */
export class AtuiCheckbox {
    handleChange(value) {
        this.value = value.target.checked;
        this.atuiChange.emit(this.value);
    }
    render() {
        const classname = variants({
            disabled: this.disabled,
            checked: this.value,
        });
        const checkboxClassname = checkboxVariants({
            checked: this.value,
            disabled: this.disabled,
        });
        return (h(Host, { key: '1ae3c00b350419b864f583d19ac2e81837912cea', role: "checkbox", "aria-checked": this.value, "aria-labelledby": `${this.option_id}-label`, tabindex: 0, class: classname, "data-name": "checkbox-container", onKeyDown: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.checkboxEl.click(), onClick: () => this.checkboxEl.click() }, h("input", { key: '03776df1e2f71d579ffc58a15e46201f9a651b1b', type: "checkbox", class: checkboxClassname, "data-name": "checkbox-input", checked: this.value, onChange: (event) => this.handleChange(event), id: this.option_id, tabindex: -1, ref: (el) => (this.checkboxEl = el), disabled: this.disabled }), (this.label || this.hint_text) && (h("div", { key: '3e8581ee2249aca9cce3087138a762af83483956', class: "pointer-events-none flex flex-col" }, h("slot", { key: '3266c3f72a790c0f0594b613b1c784091efba81e', name: "label" }), this.label && (h("label", { key: 'c5bd92e735ef8a4477611c68804230ef7754641f', class: "mt-0 pl-4 text-xs font-medium", id: `${this.option_id}-label`, "data-name": "checkbox-label" }, this.label)), this.hint_text && (h("span", { key: '70e9ddc8f08fc8442240f88ad0cae47c497df629', class: "mt-0 pl-4 text-xs text-light", "data-name": "checkbox-hint" }, this.hint_text)))), h("slot", { key: 'b95224f3877b9f2bbce5b98d461fee11686f1c82' })));
    }
    static get is() { return "atui-checkbox"; }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "attribute": "label",
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
                    "text": "Title of the checkbox component."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "hint_text": {
                "type": "string",
                "attribute": "hint_text",
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
                    "text": "Subtitle of the checkbox component."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "option_id": {
                "type": "string",
                "attribute": "option_id",
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
                    "text": "Id of the checkbox."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "value": {
                "type": "boolean",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "State of the checkbox"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Disables interaction with the checkbox"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
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
                    "text": "When the checkbox is toggled, this will emit true if the current value is checked, vice versa."
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
//# sourceMappingURL=atui-checkbox.js.map
