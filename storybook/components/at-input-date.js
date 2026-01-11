import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { T as TimeDatePresentationUtil } from './p-DmuEKRw7.js';
import { c as classlist } from './p-COG8_R0C.js';
import { d as defineCustomElement$3 } from './p-C5fEyGHP.js';
import { d as defineCustomElement$2 } from './p-DLJt5gbB.js';
import { M as MIN_DATE, a as MAX_DATE } from './p-C3LwY5aR.js';

const inputVariantsConfig = {
    variants: {
        disabled: {
            false: 'focus-within:ring-active-foreground/30 bg-white',
            true: 'bg-surface-1 !text-disabled pointer-events-none border-none',
        },
        readonly: {
            false: 'focus-within:ring-active-foreground/30',
            true: '!bg-surface-1 !text-dark cursor-text border-none',
        },
        invalid: {
            false: 'border-med focus-within:border-active-dark focus-within:ring-active-foreground/30',
            true: 'border-error-base focus-within:border-error-base focus-within:ring-destructive-foreground/30',
        },
    },
    defaultVariants: {
        disabled: false,
        readonly: false,
        invalid: false,
    },
};
const AtInputDate$1 = /*@__PURE__*/ proxyCustomElement(class AtInputDate extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
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
    selectedDate;
    translations;
    get el() { return this; }
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
    componentWillRender() {
        if (!this.selectedDate && this.value) {
            this.selectedDate = TimeDatePresentationUtil.getFormattedDate(this.value, 'YYYY-MM-DD');
        }
    }
    render() {
        const getClassname = classlist('placeholder-text-light pr -24 relative flex min-h-36 min-h-[36px] w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-md border border-solid overflow-ellipsis transition-colors duration-300 ease-in-out outline-none focus-within:ring-2 focus-within:outline-0', inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (h(Host, { key: 'b16cfbdd4b8907628096ecc437a48f14536a54b4' }, h("style", { key: '47033bdf463d18809abb1e649b783b84ab5a7bb3' }, `
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
                `), h("div", { key: '58708dce6f9ca6eddc46f390f394fa23cddf78a5', class: "flex flex-row" }, h("div", { key: '2cb47bea29c518086c3fb0016cac515a0a7a75bb', class: "flex-fill flex flex-col" }, h("div", { key: 'c309501815b4a9ac4d16badc093deefd0bc409b1', class: "flex flex-col" }, (this.label ||
            this.required ||
            this.info_text) && (h("at-form-label", { key: 'd1666aab6fba8813de2aed44675a384710cb19f7', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: '5a32e86ac3e7fdc7472cfafec5044f4e1e98a74c', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "datepicker-hint" }, this.hint_text)), h("div", { key: 'aaed98d0cd0cdd707617c2fc53ce86207d84835e', class: classname }, h("input", { key: 'd1ec68f8190d675b018a303e5ec777ef46b315c5', type: "date", id: this.inputId, name: "datePicker", class: "flex w-full cursor-pointer px-8 py-8 outline-0", readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, value: this.selectedDate, min: TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), "data-name": "datepicker", onChange: (event) => {
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
                this.value = new Date(dateString);
                this.atuiChange.emit(this.value);
            } }))), this.error_text && this.invalid && (h("span", { key: '7cba384b138c337d8ec87c70f2fea7b0832ed394', class: "text-error text-sm", "data-name": "datepicker-error" }, this.error_text))))));
    }
}, [256, "at-input-date", {
        "min_date": [1040],
        "max_date": [1040],
        "label": [1],
        "hint_text": [1],
        "info_text": [1],
        "error_text": [1],
        "value": [1040],
        "required": [4],
        "invalid": [4],
        "readonly": [4],
        "disabled": [4],
        "selectedDate": [32],
        "translations": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-input-date", "at-form-label", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-input-date":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtInputDate$1);
            }
            break;
        case "at-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtInputDate = AtInputDate$1;
const defineCustomElement = defineCustomElement$1;

export { AtInputDate, defineCustomElement };
//# sourceMappingURL=at-input-date.js.map

//# sourceMappingURL=at-input-date.js.map