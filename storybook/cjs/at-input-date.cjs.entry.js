'use strict';

var index = require('./index-CzDB71Wy.js');
var translation = require('./translation-HqquF7bU.js');
var timeDatePresentation_util = require('./time-date-presentation.util-D1DRhr0h.js');
var classlist = require('./classlist-BPb95vgj.js');
var date = require('./date-DDRmOnS1.js');
require('moment');
require('./time-date.util-Y1RHGLUD.js');

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
        return (index.h(index.Host, { key: 'e8c12ead3ab015809f21b52fb3cc0a765e697809' }, index.h("style", { key: '73acfce6a94a775e54ead02d79e5094253fa4717' }, `
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
                `), index.h("div", { key: '0bba05d1e0eb173c2fbb476527d2e9d5e9c1b2df', class: "flex flex-row" }, index.h("div", { key: '5699cebd8d825be8d2e24e14202d254bb159f63b', class: "flex-fill flex flex-col" }, index.h("div", { key: '725d6b539f991fe93024e9f277e7955276592e14', class: "flex flex-col" }, (this.label ||
            this.required ||
            this.info_text) && (index.h("at-form-label", { key: '3d6e21ef8098da38b9f89ea439ae9667896ed5d4', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: 'b5242afd6c751fa31896e3d0173790f00bf516b0', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "datepicker-hint" }, this.hint_text)), index.h("div", { key: '5dd182d1d43da29703292528f6b1ff225f3e1baa', class: classname }, index.h("input", { key: '9ac22acd21e875f82f67498bdda1cc97f9918f41', type: "date", id: this.inputId, name: "datePicker", class: "flex w-full cursor-pointer px-8 py-8 outline-0", readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, value: this.selectedDate, min: timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), "data-name": "datepicker", onChange: (event) => {
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
            } }))), this.error_text && this.invalid && (index.h("span", { key: '39c66ff5fd402f70fe6ba6076009c1bbb72dd9f7', class: "text-error text-sm", "data-name": "datepicker-error" }, this.error_text))))));
    }
};

exports.at_input_date = AtInputDate;
