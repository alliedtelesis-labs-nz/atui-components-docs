import { h, } from "@stencil/core";
import { Duration, MIN_DATE, } from "../../../types";
import dayjs from "dayjs";
import { AtTimeDateUtil } from "../../../utils/at-time-date.util";
import { fetchTranslations } from "../../../utils/translation";
import { TimeDatePresentationUtil } from "../../../utils/time-date-presentation.util";
export class AtCustomTimeRangeComponent {
    /**
     * Whether time selection is enabled in addition to date selection
     */
    can_set_time = true;
    /**
     * Minimum number of seconds for the time range
     */
    min_seconds = 60;
    /**
     * Minimum selectable date
     */
    min_date = MIN_DATE;
    validateMinDate(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        this.min_date = this.floorToMinute(newValue);
    }
    /**
     * Maximum selectable date
     */
    max_date = new Date(Date.now());
    validateMaxDate(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        this.max_date = this.floorToMinute(newValue);
    }
    /**
     * Default value for the from date
     */
    default_from_date;
    validateDefaultFromDate(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        this.default_from_date = this.floorToMinute(newValue);
        this.from_date_value = this.default_from_date;
        this.initialFromDate = this.from_date_value;
    }
    /**
     * Default value for the to date
     */
    default_to_date;
    validateDefaultToDate(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        this.default_to_date = this.floorToMinute(newValue);
        this.to_date_value = this.default_to_date
            ? this.default_to_date
            : this.max_date;
        this.initialToDate = this.to_date_value;
    }
    /**
     * Current value of the from date
     */
    from_date_value;
    validateFromDateValue(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        if (this.from_date_value === undefined)
            this.from_date_value = new Date();
        if (this.from_date_value.toISOString() !==
            this.floorToMinute(newValue).toISOString()) {
            this.from_date_value = newValue && this.floorToMinute(newValue);
        }
        this.setFromDateAndTime(this.from_date_value);
        this.updateMinMaxFlags();
    }
    /**
     * Current value of the to date
     */
    to_date_value;
    validateToDateValue(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        if (this.to_date_value === undefined)
            this.to_date_value = new Date();
        if (this.to_date_value.toISOString() !==
            this.floorToMinute(newValue).toISOString()) {
            this.to_date_value = newValue && this.floorToMinute(newValue);
        }
        this.setToDateAndTime(this.to_date_value);
        this.updateMinMaxFlags();
    }
    /**
     * Whether to lock the end date to the current time
     */
    lock_end_date_to_now = false;
    isFromMinDay = true;
    isToMaxDay = true;
    isFromMaxDay = false;
    isToMinDay = false;
    toDate;
    toTime;
    fromDate;
    fromTime;
    translations;
    setDateNowSwitch;
    el;
    hasSavedInitial = false;
    initialFromDate;
    initialToDate;
    initialLockEndDateToNow;
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    componentWillRender() {
        if (!this.fromDate && !this.fromTime) {
            this.from_date_value = this.default_from_date
                ? this.default_from_date
                : this.min_date;
            this.setFromDateAndTime(this.from_date_value);
        }
        if (!this.toDate && !this.toTime) {
            this.to_date_value = this.default_to_date
                ? this.default_to_date
                : this.max_date;
            this.setToDateAndTime(this.to_date_value);
        }
        if (!this.hasSavedInitial) {
            this.savedInitialState();
        }
    }
    savedInitialState() {
        this.initialFromDate = this.from_date_value;
        this.initialToDate = this.to_date_value;
        this.initialLockEndDateToNow = this.lock_end_date_to_now;
        this.hasSavedInitial = true;
    }
    clearSelection() {
        this.from_date_value = this.default_from_date
            ? this.default_from_date
            : this.min_date;
        this.to_date_value = this.default_to_date
            ? this.default_to_date
            : this.max_date;
    }
    floorToMinute(date) {
        return AtTimeDateUtil.floorDateByTimeUnit(date, Duration.MINUTES);
    }
    getCustomToDateTime() {
        return dayjs(`${this.toDate} ${this.toTime}`, 'YYYY-MM-DD HH:mm').toDate();
    }
    getCustomFromDateTime() {
        return dayjs(`${this.fromDate} ${this.fromTime}`, 'YYYY-MM-DD HH:mm').toDate();
    }
    updateMinMaxFlags() {
        const to = this.getCustomToDateTime();
        this.isToMinDay = AtTimeDateUtil.isSameDateByUnit(to, this.min_date, Duration.DAYS);
        this.isToMaxDay = AtTimeDateUtil.isSameDateByUnit(to, this.max_date, Duration.DAYS);
        const from = this.getCustomFromDateTime();
        this.isFromMinDay = AtTimeDateUtil.isSameDateByUnit(from, this.min_date, Duration.DAYS);
        this.isFromMaxDay = AtTimeDateUtil.isSameDateByUnit(from, this.max_date, Duration.DAYS);
    }
    setDateNow() {
        const toggleValue = this.setDateNowSwitch.value;
        if (toggleValue) {
            this.lock_end_date_to_now = true;
            const date = this.floorToMinute(new Date(Date.now()));
            this.to_date_value = date;
        }
        else {
            this.lock_end_date_to_now = false;
        }
    }
    setToDateAndTime(toDate) {
        this.toDate = TimeDatePresentationUtil.getFormattedDate(toDate, 'YYYY-MM-DD');
        this.toTime = dayjs(toDate).format('HH:mm');
    }
    setFromDateAndTime(fromDate) {
        this.fromDate = TimeDatePresentationUtil.getFormattedDate(fromDate, 'YYYY-MM-DD');
        this.fromTime = dayjs(fromDate).format('HH:mm');
    }
    get fromTimeMin() {
        this.updateMinMaxFlags();
        return this.isFromMinDay
            ? dayjs(this.min_date).format('HH:mm')
            : undefined;
    }
    get fromTimeMax() {
        this.updateMinMaxFlags();
        return this.isFromMaxDay
            ? dayjs(AtTimeDateUtil.shiftDateByUnit(this.max_date, -1, Duration.HOURS)).format('HH:mm')
            : undefined;
    }
    get isFromDateAfterToDate() {
        const from = this.getCustomFromDateTime();
        const to = this.getCustomToDateTime();
        if (!from || !to || isNaN(from.getTime()) || isNaN(to.getTime()))
            return false;
        return from >= to;
    }
    get isRangeInvalid() {
        return this.isFromDateAfterToDate;
    }
    get toTimeMin() {
        this.updateMinMaxFlags();
        return this.isToMinDay
            ? dayjs(AtTimeDateUtil.shiftDateByUnit(this.min_date, 1, Duration.HOURS)).format('HH:mm')
            : undefined;
    }
    get toTimeMax() {
        this.updateMinMaxFlags();
        return this.isToMaxDay
            ? dayjs(this.max_date).format('HH:mm')
            : undefined;
    }
    /**
     * Emitted when the user cancels the time range selection
     */
    atuiCancel;
    /**
     * Emitted when the user submits the time range selection
     */
    atuiSubmit;
    /**
     * Restores the from/to/lock_end_date_to_now fields to the last applied values,
     * or the initial defaults if no changes have been applied.
     */
    async resetForm() {
        this.from_date_value = this.initialFromDate;
        this.to_date_value = this.initialToDate;
        this.lock_end_date_to_now = this.initialLockEndDateToNow;
    }
    handleCancel() {
        this.resetForm();
        this.atuiCancel.emit();
    }
    handleSubmit() {
        this.atuiSubmit.emit({
            from: dayjs(`${this.fromDate} ${this.fromTime}`, 'YYYY-MM-DD HH:mm')
                .toDate()
                .toISOString(),
            to: dayjs(`${this.toDate} ${this.toTime}`, 'YYYY-MM-DD HH:mm')
                .toDate()
                .toISOString(),
            lockEndDateToNow: this.lock_end_date_to_now,
        });
        this.savedInitialState();
    }
    render() {
        return (h("div", { key: '547a006919341085b229ae672517332c88e7773b', class: "flex w-fit flex-col gap-8" }, h("h5", { key: '9d4494e3565e409d8e5ff56372d1a75c586b44af', class: "text-h5 text-foreground p-12 font-medium" }, this.translations.ATUI.TIME.SELECT_ABSOLUTE_TIME), h("div", { key: '28a7bf8cf087e2bca6626a292fa1565d7e3c00e8', class: "grid grid-cols-2 gap-16 px-12" }, h("div", { key: '8dc08c82f0c2464efdbb51a42e5849da5fa56672', class: "flex-fill flex flex-col gap-8" }, h("at-input-date", { key: '20485d5e01a6fb29e53f49399339fdf54e736209', class: "w-full", label: this.translations.ATUI.TIME.FROM_DATE, value: this.from_date_value, min_date: this.min_date, max_date: this.max_date, invalid: this.isFromDateAfterToDate, onAtuiChange: (event) => {
                this.from_date_value = event.detail;
            } }), this.can_set_time && (h("at-input-time", { key: '6c7ff8ec25e625c41e43b9c45d91b9212bd5b3e2', class: "w-full", label: this.translations.ATUI.TIME.FROM_TIME, value: this.fromTime, min: this.fromTimeMin, max: this.fromTimeMax, onAtuiChange: (event) => {
                if (event.detail) {
                    this.from_date_value = dayjs(`${this.fromDate} ${event.detail}`, 'YYYY-MM-DD HH:mm').toDate();
                }
            } }))), h("div", { key: '9e4ce58dd46262e7c2dc1fcbb22a20d58414821c', class: "flex-fill flex flex-col gap-8" }, h("at-input-date", { key: 'd3152c4663a46bab01f4f225069af51874aa4b2b', class: "w-full", label: this.translations.ATUI.TIME.TO_DATE, value: this.to_date_value, min_date: this.min_date, max_date: this.max_date, invalid: this.isFromDateAfterToDate, disabled: this.lock_end_date_to_now, onAtuiChange: (event) => {
                this.to_date_value = event.detail;
            } }), this.can_set_time && (h("at-input-time", { key: '101ef16af2dd979903109753d71f4b71c23e2d9d', class: "w-full", label: this.translations.ATUI.TIME.TO_TIME, value: this.toTime, min: this.toTimeMin, max: this.toTimeMax, disabled: this.lock_end_date_to_now, onAtuiChange: (event) => {
                if (event.detail) {
                    this.to_date_value = dayjs(`${this.toDate} ${event.detail}`, 'YYYY-MM-DD HH:mm').toDate();
                }
            } })))), h("div", { key: '0aefd697c871d1502bf0edd88928d69b0708c8ff', class: "align-center rounded-input my-8 flex flex-row justify-between gap-8 px-12" }, h("div", { key: '59ef3d795267093634d13d02c6d55d1b712bb72a', class: "flex flex-col" }, h("label", { key: '6d67daa6527277f8e1b181b526e79d18ca8e92b5', class: "c-form__label" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW), h("span", { key: 'f7b7ee1c7c08a2ebe790137c6d6274d199c25015', class: "text-secondary text-xs" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW_DESCRIPTION)), h("at-toggle-switch", { key: 'd6549e64656607afcffa1db851925eac094f68c7', value: this.lock_end_date_to_now, onChange: () => this.setDateNow(), ref: (el) => (this.setDateNowSwitch = el) })), this.isFromDateAfterToDate && (h("div", { key: '05cd2f5d7e00e180157bc06de8a88cc15f827344', class: "flex flex-col gap-4 px-12" }, h("span", { key: 'ca55358f744b45fa9db857b9ccb14a797d6689d5', class: "text-error text-sm", "data-name": "custom-time-range-error-from" }, this.translations.ATUI.TIME.VALIDATION
            .FROM_MUST_BE_BEFORE_TO))), h("div", { key: '0b7d88a8f224e67d0e770ef35fb864c37a877b74', class: "flex flex-row justify-between p-8" }, h("at-button", { key: '195728feaf322e372492f51af115a445b8eda1ab', type: "secondaryOutline", "data-name": "custom-time-range-clear", label: this.translations.ATUI.CLEAR_SELECTION, onAtuiClick: () => this.clearSelection() }), h("div", { key: '3b2f321d34056ae603a6c165cb07c9a77d5cf120', class: "flex flex-row gap-8" }, h("at-button", { key: 'c1f45c291e308d8566ef0d6c1cc040e3ab288448', type: "secondaryOutline", "data-name": "custom-time-range-cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), h("at-button", { key: '443fbbe224b43d35657995a17157cdec46b24a06', "data-name": "custom-time-range-apply", label: this.translations.ATUI.APPLY, disabled: this.isRangeInvalid, onAtuiClick: () => this.handleSubmit() })))));
    }
    static get is() { return "at-custom-time-range"; }
    static get properties() {
        return {
            "can_set_time": {
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
                    "text": "Whether time selection is enabled in addition to date selection"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "can_set_time",
                "defaultValue": "true"
            },
            "min_seconds": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Minimum number of seconds for the time range"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "min_seconds",
                "defaultValue": "60"
            },
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
                "defaultValue": "new Date(Date.now())"
            },
            "default_from_date": {
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
                    "text": "Default value for the from date"
                },
                "getter": false,
                "setter": false
            },
            "default_to_date": {
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
                    "text": "Default value for the to date"
                },
                "getter": false,
                "setter": false
            },
            "from_date_value": {
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
                    "text": "Current value of the from date"
                },
                "getter": false,
                "setter": false
            },
            "to_date_value": {
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
                    "text": "Current value of the to date"
                },
                "getter": false,
                "setter": false
            },
            "lock_end_date_to_now": {
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
                    "text": "Whether to lock the end date to the current time"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "lock_end_date_to_now",
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isFromMinDay": {},
            "isToMaxDay": {},
            "isFromMaxDay": {},
            "isToMinDay": {},
            "toDate": {},
            "toTime": {},
            "fromDate": {},
            "fromTime": {},
            "translations": {},
            "setDateNowSwitch": {}
        };
    }
    static get events() {
        return [{
                "method": "atuiCancel",
                "name": "atuiCancel",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the user cancels the time range selection"
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "atuiSubmit",
                "name": "atuiSubmit",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the user submits the time range selection"
                },
                "complexType": {
                    "original": "AtIDateRangeStrings",
                    "resolved": "AtIDateRangeStrings",
                    "references": {
                        "AtIDateRangeStrings": {
                            "location": "import",
                            "path": "../../../types",
                            "id": "src/types/index.ts::AtIDateRangeStrings",
                            "referenceLocation": "AtIDateRangeStrings"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "resetForm": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Restores the from/to/lock_end_date_to_now fields to the last applied values,\nor the initial defaults if no changes have been applied.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "min_date",
                "methodName": "validateMinDate"
            }, {
                "propName": "max_date",
                "methodName": "validateMaxDate"
            }, {
                "propName": "default_from_date",
                "methodName": "validateDefaultFromDate"
            }, {
                "propName": "default_to_date",
                "methodName": "validateDefaultToDate"
            }, {
                "propName": "from_date_value",
                "methodName": "validateFromDateValue"
            }, {
                "propName": "to_date_value",
                "methodName": "validateToDateValue"
            }];
    }
}
