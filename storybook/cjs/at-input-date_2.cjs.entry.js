'use strict';

var index = require('./index-CdUivN1V.js');
var translation = require('./translation-C7aG_Jvq.js');
var timeDatePresentation_util = require('./time-date-presentation.util-Cuo92_C5.js');
var classlist = require('./classlist-BPb95vgj.js');
var date = require('./date-DDRmOnS1.js');
require('./time-date.util-CvDG1n3R.js');

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
const AtInputDate = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
    }
    /**
     * Minimum selectable date
     */
    min_date = date.MIN_DATE;
    /**
     * Maximum selectable date
     */
    max_date = date.MAX_DATE;
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
    get el() { return index.getElement(this); }
    inputId = `datepicker-${Math.random().toString(36).substring(2, 11)}`;
    /**
     * Emitted when the date selection changes
     */
    atuiChange;
    async componentWillLoad() {
        this.translations = await translation.fetchTranslations(this.el);
        if (!this.value) {
            this.value = new Date();
        }
        this.selectedDate = timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.value, 'YYYY-MM-DD');
    }
    watchValue(newValue) {
        if (newValue) {
            this.selectedDate = timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(newValue, 'YYYY-MM-DD');
        }
    }
    componentWillRender() {
        if (!this.selectedDate && this.value) {
            this.selectedDate = timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.value, 'YYYY-MM-DD');
        }
    }
    render() {
        const getClassname = classlist.classlist('placeholder-text-light pr -24 relative flex min-h-36 min-h-[36px] w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-md border border-solid overflow-ellipsis transition-colors duration-300 ease-in-out outline-none focus-within:ring-2 focus-within:outline-0', inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (index.h(index.Host, { key: '489ca46541eddc952569515547e56a3acc673416' }, index.h("style", { key: 'fc8535d4e9a42e94a28054d2d64405db6c4c854d' }, `
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
                `), index.h("div", { key: 'd17fe355c347a2ffde30833c66210546589542e9', class: "flex w-full flex-col" }, index.h("div", { key: '6133d84cb17c3360c15dc7db45a5901c8cba0be3', class: "flex flex-col" }, (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: '09ad46f28c113a45cf072690e8cc4861e964aeb6', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: 'b401c5643ec2fc40925240aef80f77d0d9fd8513', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "datepicker-hint" }, this.hint_text)), index.h("div", { key: 'bcc53e3a1413ec23368d3b141a049f37696c38a2', class: classname }, index.h("input", { key: 'bfc084cdf2732e39c60989435a1a4a2f5cb247a0', type: "date", id: this.inputId, name: "datePicker", class: "flex w-full cursor-pointer px-8 py-8 outline-0", readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, value: this.selectedDate, min: timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), "data-name": "datepicker", onChange: (event) => {
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
            } }))), this.error_text && this.invalid && (index.h("span", { key: '8af549e506f6542b1857a6139699e33f050f7c67', class: "text-error text-sm", "data-name": "datepicker-error" }, this.error_text)))));
    }
    static get watchers() { return {
        "value": [{
                "watchValue": 0
            }]
    }; }
};

const variantsConfig = {
    variants: {
        disabled: {
            false: null,
            true: 'pointer-events-none opacity-50 grayscale-[1]',
        },
        labelPosition: {
            before: 'flex-row',
            after: 'flex-row-reverse',
        },
    },
};
const trackVariantsConfig = {
    variants: {
        disabled: {
            false: 'shadow-inset-xs cursor-pointer',
            true: 'shadow-inset-xs cursor-default',
        },
        active: {
            false: 'border-med bg-surface-2 border border-solid',
            true: 'bg-active-foreground/30 group-focus-within/switch:ring-active-foreground group-focus-within/switch:ring-1',
        },
    },
};
const thumbVariantsConfig = {
    variants: {
        active: {
            false: 'bg-disabled-dark translate-x-[-10px]',
            true: 'bg-active-foreground group-focus-within/switch:ring-active-foreground/30 translate-x-[10px] group-focus-within/switch:ring-[6px]',
        },
        disabled: {
            false: 'cursor-pointer',
            true: null,
        },
    },
};
const AtToggleSwitchComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
    }
    /**
     * Label displayed alongside the toggle.
     */
    label;
    /**
     * Short description or validation hint if required.
     */
    hint_text;
    /**
     * Position of the label, left or right of the toggle.
     */
    label_position = 'before';
    /**
     * Show the toggle label.
     */
    show_label = true;
    /**
     * Disable interaction with the toggle.
     */
    disabled;
    /**
     * Set the toggles state.
     */
    value = false;
    inputEl;
    toggleId = `toggle-${Math.random().toString(36).substring(2, 11)}`;
    /**
     * Emits an event when toggled with `event.detail` being true if the switch is enabled
     */
    atuiChange;
    onToggle(change) {
        this.value = change;
        this.atuiChange.emit(change);
    }
    render() {
        const getClassname = classlist.classlist('group/switch outline-active hover:bg-surface-1 focus:bg-surface-1 flex w-fit cursor-pointer items-center gap-8 rounded-full rounded-md p-8 outline-0 outline-none', variantsConfig);
        const classname = getClassname({
            disabled: this.disabled,
            labelPosition: this.label_position,
        });
        const getThumbClassname = classlist.classlist('material-icons text-icon-md absolute relative m-2 flex h-[16px] w-[16px] scale-1 items-center justify-center rounded-full text-center text-white select-none transition-all duration-300 ease-in-out', thumbVariantsConfig);
        const thumbClassname = getThumbClassname({
            active: this.value,
            disabled: this.disabled,
        });
        const getTrackClassname = classlist.classlist('absolute top-0 right-0 bottom-0 left-0 flex h-[20px] w-[40px] items-center justify-center rounded-full align-middle [transition:0.2s]', trackVariantsConfig);
        const trackClassname = getTrackClassname({
            disabled: this.disabled,
            active: this.value,
        });
        return (index.h(index.Host, { key: '685c95f5eb8d66cbf424fbc728f8b8d3f0faa170', id: `${this.toggleId}-host`, role: "switch", "aria-labelledby": `${this.toggleId}-label`, class: classname, tabIndex: 0, onClick: () => this.inputEl.click(), onKeyDown: (event) => {
                if (event.key === ' ' || event.key === 'Enter') {
                    event.preventDefault();
                    this.inputEl.click();
                }
            } }, index.h("div", { key: 'cbd82a2132638f18b14a90d689f56b7314045a0e', class: "flex flex-col" }, index.h("slot", { key: '333ddd1b2bd95a4efb232448bfdf396d1a22c1f5', name: "label" }), !!this.label && this.show_label && (index.h("at-form-label", { key: '64b86940b9169273a717b728796d498ee2b1098e', label: this.label, class: "pointer-events-none select-none", for: this.toggleId, id: `${this.toggleId}-label`, "data-name": "switch-label" })), this.hint_text && (index.h("span", { key: '69d8525e05be1cabe44ab6f85edba174b2b9eb79', class: "text-light inline-block text-xs leading-tight", "data-name": "select-hint" }, this.hint_text))), index.h("div", { key: 'fc460c1ae714e9632024e825d3cdb69a4210e36e', class: "relative flex h-20 w-40" }, index.h("input", { key: '192b80cc948f10d7b94a36389538331113443a7b', id: this.toggleId, class: "h-0 w-0 opacity-0", disabled: this.disabled, type: "checkbox", checked: this.value, tabIndex: -1, onChange: (e) => this.onToggle(e.target.checked), ref: (el) => (this.inputEl = el), "data-name": "switch-input" }), index.h("span", { key: 'dda1a80193ee4388bfd73dea84e46fbfad1d026b', class: trackClassname }, index.h("span", { key: '15c891b40a482ed1545aa0ee7940843838904fea', class: thumbClassname }, this.value ? 'check' : 'remove')))));
    }
};

exports.at_input_date = AtInputDate;
exports.at_toggle_switch = AtToggleSwitchComponent;
