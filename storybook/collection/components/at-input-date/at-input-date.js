import { h, Host, } from "@stencil/core";
import { MIN_DATE, MAX_DATE } from "../../types";
import { fetchTranslations, interpolate } from "../../utils/translation";
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
            true: '!bg-[var(--token-input-readonly-background)] !text-foreground cursor-text border-none',
        },
        invalid: {
            false: 'border-input focus-within:border-active-accent focus-within:ring-active-glow',
            true: 'border-error focus-within:border-error focus-within:ring-error-glow',
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
     * Earliest selectable date. The calendar disables earlier days, and a typed
     * date outside `min_date` and `max_date` shows a range error once the field
     * loses focus.
     */
    min_date = MIN_DATE;
    /**
     * Latest selectable date. The calendar disables later days, and a typed
     * date outside `min_date` and `max_date` shows a range error once the field
     * loses focus.
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
     * Shows the error state styling and `error_text`. The host owns this: the
     * component never sets it. The component shows its own range error for a
     * date outside `min_date` and `max_date`, and leaves `required` to the
     * host. A partly typed date counts as empty and emits `atuiChange` with
     * null.
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
    hasLeftField = false;
    el;
    inputId = `datepicker-${Math.random().toString(36).substring(2, 11)}`;
    /**
     * Emitted when the date selection changes. Emits `null` when the date is cleared.
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
        this.selectedDate = newValue
            ? TimeDatePresentationUtil.getFormattedDate(newValue, 'YYYY-MM-DD')
            : '';
    }
    componentWillRender() {
        if (!this.selectedDate && this.value) {
            this.selectedDate = TimeDatePresentationUtil.getFormattedDate(this.value, 'YYYY-MM-DD');
        }
    }
    formatBound(date) {
        return TimeDatePresentationUtil.getFormattedDate(date, 'YYYY-MM-DD');
    }
    get hasMinBound() {
        return (!!this.min_date && this.min_date.getTime() !== MIN_DATE.getTime());
    }
    get hasMaxBound() {
        return (!!this.max_date && this.max_date.getTime() !== MAX_DATE.getTime());
    }
    get isOutOfRange() {
        if (!this.value || !this.selectedDate)
            return false;
        return ((this.hasMinBound &&
            this.selectedDate < this.formatBound(this.min_date)) ||
            (this.hasMaxBound &&
                this.selectedDate > this.formatBound(this.max_date)));
    }
    displayBound(date) {
        const lang = this.el.closest('[lang]')?.lang || 'en';
        return date.toLocaleDateString(lang, { dateStyle: 'medium' });
    }
    get rangeErrorText() {
        const messages = this.translations?.ATUI?.TIME?.VALIDATION;
        if (!messages || !this.hasLeftField || !this.isOutOfRange)
            return;
        const bounds = {
            min: this.hasMinBound ? this.displayBound(this.min_date) : '',
            max: this.hasMaxBound ? this.displayBound(this.max_date) : '',
        };
        if (this.hasMinBound && this.hasMaxBound) {
            return interpolate(messages.DATE_RANGE, bounds);
        }
        return this.hasMinBound
            ? interpolate(messages.DATE_ON_OR_AFTER, bounds)
            : interpolate(messages.DATE_ON_OR_BEFORE, bounds);
    }
    get errorText() {
        if (this.invalid && this.error_text)
            return this.error_text;
        return this.rangeErrorText;
    }
    render() {
        const getClassname = classlist(`placeholder-text-muted relative flex h-input min-h-input w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-input border border-solid transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out outline-none focus-within:ring focus-within:outline-0 focus-within:z-10`, inputVariantsConfig);
        const classname = getClassname({
            invalid: !!this.invalid || !!this.rangeErrorText,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (h(Host, { key: '2fd888d1a09a1f633e8926a2cd9515b7d1b5969a' }, h("style", { key: 'd288eb44b97073c399724bcf8391bce574d5fe96' }, `
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
                `), h("div", { key: '284637271ac435b7c9234c8c7262df1dbe8784c6', class: "flex w-full flex-col" }, h("div", { key: '1b649486f0fd5d6a04b2b257ac5bd193f9ac87c8', class: "flex flex-col" }, h("div", { key: 'e025f724122a2d217008d686fab07eabbd308b8c', class: "mb-4 flex flex-col empty:hidden" }, (this.label ||
            this.required ||
            this.info_text) && (h("at-form-label", { key: 'd2f9951f4f11756a0feb68799d690acfe5a79cc4', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: '111542b00d6284875f7226f5fe914f3e76cf7697', class: "text-muted mb-8 inline-block text-xs leading-tight", "data-name": "datepicker-hint" }, this.hint_text))), h("div", { key: '410622bf1e4bf569f2485ff735d1326947d92e81', class: classname }, h("input", { key: '247e5583f286475f29fc0f82dd2c135cf6a794c5', type: "date", id: this.inputId, "aria-label": this.aria_label ?? undefined, name: "datePicker", class: "py-input-y px-input-x flex w-full cursor-pointer outline-0", readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, value: this.selectedDate, min: TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), "data-name": "datepicker", "aria-invalid": this.invalid || this.rangeErrorText
                ? 'true'
                : undefined, onBlur: () => {
                this.hasLeftField = true;
            }, onChange: (event) => {
                const dateString = event.target.value;
                if (dateString === '') {
                    this.value = null;
                    this.atuiChange.emit(null);
                    return;
                }
                // Validate year is 4 digits (between 0000-9999)
                const yearMatch = dateString.match(/^(\d{4})-/);
                if (!yearMatch ||
                    yearMatch[1].length !== 4) {
                    // Reset to previous valid date if year is invalid
                    event.target.value = this.selectedDate;
                    return;
                }
                this.selectedDate = dateString;
                // Parse as a local date: new Date('YYYY-MM-DD')
                // parses as UTC midnight, which shifts the
                // displayed day in negative-UTC-offset zones.
                const [year, month, day] = dateString
                    .split('-')
                    .map(Number);
                this.value = new Date(year, month - 1, day);
                this.atuiChange.emit(this.value);
            } }))), this.errorText && (h("span", { key: '41fd412b0e8509237a0cc97d5f75f13e5849ce3c', class: "text-error text-sm", "data-name": "datepicker-error" }, this.errorText)))));
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
                    "text": "Earliest selectable date. The calendar disables earlier days, and a typed\ndate outside `min_date` and `max_date` shows a range error once the field\nloses focus."
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
                    "text": "Latest selectable date. The calendar disables later days, and a typed\ndate outside `min_date` and `max_date` shows a range error once the field\nloses focus."
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
                    "text": "Shows the error state styling and `error_text`. The host owns this: the\ncomponent never sets it. The component shows its own range error for a\ndate outside `min_date` and `max_date`, and leaves `required` to the\nhost. A partly typed date counts as empty and emits `atuiChange` with\nnull."
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
            "translations": {},
            "hasLeftField": {}
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
                    "text": "Emitted when the date selection changes. Emits `null` when the date is cleared."
                },
                "complexType": {
                    "original": "Date | null",
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
                "methodName": "watchValue",
                "handlerOptions": {
                    "immediate": true
                }
            }];
    }
}
