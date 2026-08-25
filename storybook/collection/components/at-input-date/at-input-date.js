import { h, Host, } from "@stencil/core";
import { MIN_DATE, MAX_DATE } from "../../types";
import { fetchTranslations } from "../../utils/translation";
import { TimeDatePresentationUtil } from "../../utils/time-date-presentation.util";
import { classlist } from "../../utils/classlist";
const inputVariantsConfig = {
    variants: {
        disabled: {
            false: 'focus-within:ring-active-glow bg-input-background',
            true: 'bg-surface-1 !text-disabled pointer-events-none border-none',
        },
        readonly: {
            false: 'focus-within:ring-active-glow',
            true: '!bg-surface-1 !text-foreground cursor-text border-none',
        },
        invalid: {
            false: 'border-input focus-within:border-active-accent focus-within:ring-active-glow',
            true: 'border-error-base focus-within:border-error-base focus-within:ring-error-glow',
        },
    },
    defaultVariants: {
        disabled: false,
        readonly: false,
        invalid: false,
    },
};
export class AtInputDate {
    /**
     * Minimum selectable date
     */
    min_date = MIN_DATE;
    /**
     * Maximum selectable date
     */
    max_date = MAX_DATE;
    /**
     * Label text displayed above the date picker
     */
    label;
    /**
     * Short description or validation hint if required
     */
    hint_text;
    /**
     * Optional info icon with detailed tooltip description
     */
    info_text;
    /**
     * Error text displayed when invalid is set
     */
    error_text;
    /**
     * Current value of the selected date
     */
    value;
    /**
     * Adds a required * to the element
     */
    required;
    /**
     * Shows the error text
     */
    invalid;
    /**
     * Makes the input read only
     */
    readonly;
    /**
     * Disables interaction with the input
     */
    disabled = false;
    /**
     * Accessible name for the input. Use when a shared column header supplies the
     * visible label and `label` is therefore left unset.
     */
    aria_label;
    selectedDate;
    translations;
    el;
    inputId = `datepicker-${Math.random().toString(36).substring(2, 11)}`;
    /**
     * Emitted when the date selection changes
     */
    atuiChange;
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
        if (!this.value) {
            this.value = new Date();
        }
        this.selectedDate = TimeDatePresentationUtil.getFormattedDate(this.value, 'YYYY-MM-DD');
    }
    watchValue(newValue) {
        if (newValue) {
            this.selectedDate = TimeDatePresentationUtil.getFormattedDate(newValue, 'YYYY-MM-DD');
        }
    }
    componentWillRender() {
        if (!this.selectedDate && this.value) {
            this.selectedDate = TimeDatePresentationUtil.getFormattedDate(this.value, 'YYYY-MM-DD');
        }
    }
    render() {
        const getClassname = classlist(`placeholder-text-muted relative flex h-input min-h-input w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-input border border-solid transition-colors duration-300 ease-in-out outline-none focus-within:ring focus-within:outline-0 focus-within:z-10`, inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (h(Host, { key: '278d57190ce7c4d8d68edb09bcda1b1a2f9b5530' }, h("style", { key: '32e8bb25936e382291520c9e67a50d94e1a9c237' }, `
                input[data-name="datepicker"]::-webkit-calendar-picker-indicator {
                    cursor: pointer;
                    position: absolute;
                    right: 8px;
                    top: 50%;
                    transform: translateY(-50%);
                }

                input[data-name="datepicker"] {
                    padding-right: 22px;
                    position: relative;
                }
                `), h("div", { key: '55488659f51c1ab56cb32cb7e57d92e936eacb15', class: "flex w-full flex-col" }, h("div", { key: '9bdf74a7b2ad934544078769b819aa793218058b', class: "flex flex-col" }, h("div", { key: '2def4ae81c085528ae34af8c33db20275c8c646a', class: "mb-4 flex flex-col empty:hidden" }, (this.label ||
            this.required ||
            this.info_text) && (h("at-form-label", { key: '44d262348f277d1c63a170431cc8e889f19a0ab9', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: 'af34d8f8baf546497a22a451edcc7b17329b5bf4', class: "text-muted mb-8 inline-block text-xs leading-tight", "data-name": "datepicker-hint" }, this.hint_text))), h("div", { key: 'e403952a78edcf2dd77691d4f4732aa0e9faeec0', class: classname }, h("input", { key: 'b24a258128037242c1f1fd50ed4e7cc79836fcb3', type: "date", id: this.inputId, "aria-label": this.aria_label ?? undefined, name: "datePicker", class: "py-input-y px-input-x flex w-full cursor-pointer outline-0", readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, value: this.selectedDate, min: TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), "data-name": "datepicker", onChange: (event) => {
                const dateString = event.target.value;
                const input = event.target;
                // Validate year is 4 digits (between 0000-9999)
                const yearMatch = dateString.match(/^(\d{4})-/);
                if (!yearMatch ||
                    yearMatch[1].length !== 4) {
                    // Reset to previous valid date if year is invalid
                    event.target.value = this.selectedDate;
                    return;
                }
                this.selectedDate = dateString;
                this.invalid = !input.validity.valid;
                // Parse as a local date: new Date('YYYY-MM-DD')
                // parses as UTC midnight, which shifts the
                // displayed day in negative-UTC-offset zones.
                const [year, month, day] = dateString
                    .split('-')
                    .map(Number);
                this.value = new Date(year, month - 1, day);
                this.atuiChange.emit(this.value);
            } }))), this.error_text && this.invalid && (h("span", { key: '86429e8948b9f58f9277f966ebb237fe13c0d9f7', class: "text-error text-sm", "data-name": "datepicker-error" }, this.error_text)))));
    }
    static get is() { return "at-input-date"; }
    static get properties() {
        return {
            "min_date": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "Date",
                    "resolved": "Date",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Minimum selectable date"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "MIN_DATE"
            },
            "max_date": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "Date",
                    "resolved": "Date",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maximum selectable date"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "MAX_DATE"
            },
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
                    "text": "Label text displayed above the date picker"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Short description or validation hint if required"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hint_text"
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
                    "text": "Optional info icon with detailed tooltip description"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "info_text"
            },
            "error_text": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Error text displayed when invalid is set"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error_text"
            },
            "value": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "Date",
                    "resolved": "Date",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current value of the selected date"
                },
                "getter": false,
                "setter": false
            },
            "required": {
                "type": "boolean",
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
                    "text": "Adds a required * to the element"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required"
            },
            "invalid": {
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
                    "text": "Shows the error text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "invalid"
            },
            "readonly": {
                "type": "boolean",
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
                    "text": "Makes the input read only"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "readonly"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Disables interaction with the input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "aria_label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Accessible name for the input. Use when a shared column header supplies the\nvisible label and `label` is therefore left unset."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "aria_label"
            }
        };
    }
    static get states() {
        return {
            "selectedDate": {},
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
                    "text": "Emitted when the date selection changes"
                },
                "complexType": {
                    "original": "Date",
                    "resolved": "Date",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "watchValue"
            }];
    }
}
