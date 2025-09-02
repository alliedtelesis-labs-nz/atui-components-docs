import { h, } from "@stencil/core";
import { DateFormat, Duration, MIN_DATE, } from "../../../types";
import { TimeDateUtil } from "../../../utils/time-date.util";
import { fetchTranslations } from "../../../utils/translation";
import { TimeDatePresentationUtil } from "../../../utils/time-date-presentation.util";
import moment from "moment";
export class AtuiCustomTimeRangeComponent {
    constructor() {
        /**
         * Whether time selection is enabled in addition to date selection
         */
        this.can_set_time = true;
        /**
         * Minimum number of seconds for the time range
         */
        this.min_seconds = 60;
        /**
         * Minimum selectable date
         */
        this.min_date = MIN_DATE;
        /**
         * Maximum selectable date
         */
        this.max_date = new Date(Date.now());
        /**
         * Whether to lock the end date to the current time
         */
        this.lock_end_date_to_now = false;
        this.isFromMinDay = true;
        this.isToMaxDay = true;
        this.isFromMaxDay = false;
        this.isToMinDay = false;
    }
    validateMinDate(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        this.min_date = this.floorMinDate(newValue);
    }
    validateMaxDate(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        this.max_date = this.ceilingMaxDate(newValue);
    }
    validateDefaultFromDate(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        this.default_from_date = this.floorMinDate(newValue);
        this.from_date_value = this.default_from_date;
    }
    validateDefaultToDate(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        this.default_to_date = this.ceilingMaxDate(newValue);
        this.to_date_value = this.default_to_date
            ? this.default_to_date
            : this.max_date;
    }
    validateFromDateValue(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        if (this.from_date_value === undefined)
            this.from_date_value = new Date();
        if (this.from_date_value.toISOString() !==
            this.floorMinDate(newValue).toISOString()) {
            this.from_date_value = newValue && this.floorMinDate(newValue);
        }
        this.setFromDateAndTime(this.from_date_value);
        this.updateMinMaxFlags();
    }
    validateToDateValue(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        if (this.to_date_value === undefined)
            this.to_date_value = new Date();
        if (this.to_date_value.toISOString() !==
            this.ceilingMaxDate(newValue).toISOString()) {
            this.to_date_value = newValue && this.ceilingMaxDate(newValue);
        }
        this.setToDateAndTime(this.to_date_value);
        this.updateMinMaxFlags();
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    componentWillRender() {
        if (!this.fromDate && !this.fromTime) {
            this.from_date_value = this.default_from_date
                ? this.default_from_date
                : this.min_date;
        }
        if (!this.toDate && !this.toTime) {
            this.to_date_value = this.default_to_date
                ? this.default_to_date
                : this.max_date;
        }
    }
    clearSelection() {
        this.from_date_value = this.default_from_date
            ? this.default_from_date
            : this.min_date;
        this.to_date_value = this.default_to_date
            ? this.default_to_date
            : this.max_date;
    }
    ceilingMaxDate(date) {
        return TimeDateUtil.ceilingDateByTimeUnit(date, Duration.HOURS);
    }
    floorMinDate(date) {
        return TimeDateUtil.floorDateByTimeUnit(date, Duration.HOURS);
    }
    getCustomToDateTime() {
        return TimeDatePresentationUtil.buildDateFromStrings(this.toDate, this.toTime);
    }
    getCustomFromDateTime() {
        return TimeDatePresentationUtil.buildDateFromStrings(this.fromDate, this.fromTime);
    }
    updateMinMaxFlags() {
        const to = this.getCustomToDateTime();
        this.isToMinDay = TimeDateUtil.isSameDateByUnit(to, this.min_date, Duration.DAYS);
        this.isToMaxDay = TimeDateUtil.isSameDateByUnit(to, this.max_date, Duration.DAYS);
        const from = this.getCustomFromDateTime();
        this.isFromMinDay = TimeDateUtil.isSameDateByUnit(from, this.min_date, Duration.DAYS);
        this.isFromMaxDay = TimeDateUtil.isSameDateByUnit(from, this.max_date, Duration.DAYS);
    }
    setDateNow() {
        const toggleValue = this.setDateNowSwitch.value;
        if (toggleValue) {
            this.lock_end_date_to_now = true;
            const date = this.ceilingMaxDate(new Date(Date.now()));
            this.to_date_value = date;
        }
        else {
            this.lock_end_date_to_now = false;
        }
    }
    setToDateAndTime(toDate) {
        this.toDate = TimeDatePresentationUtil.getFormattedDate(toDate, 'YYYY-MM-DD');
        this.toTime = TimeDatePresentationUtil.getFormattedDate(toDate, 'hh:mm a');
    }
    setFromDateAndTime(fromDate) {
        this.fromDate = TimeDatePresentationUtil.getFormattedDate(fromDate, 'YYYY-MM-DD');
        this.fromTime = TimeDatePresentationUtil.getFormattedDate(fromDate, 'hh:mm a');
    }
    get getFromTimes() {
        this.updateMinMaxFlags();
        if (this.isFromMinDay) {
            return TimeDatePresentationUtil.getTimeOptions(TimeDatePresentationUtil.getFormattedDate(this.min_date, DateFormat.HOURS_ONLY));
        }
        else if (this.isFromMaxDay) {
            const fromMaxTime = TimeDatePresentationUtil.getFormattedDate(TimeDateUtil.shiftDateByUnit(this.max_date, -1, Duration.HOURS), DateFormat.HOURS_ONLY);
            return TimeDatePresentationUtil.getTimeOptions(undefined, fromMaxTime);
        }
        else {
            return TimeDatePresentationUtil.getTimeOptions();
        }
    }
    get getToTimes() {
        this.updateMinMaxFlags();
        if (this.isToMinDay) {
            const toMaxTime = TimeDatePresentationUtil.getFormattedDate(TimeDateUtil.shiftDateByUnit(this.min_date, 1, Duration.HOURS), DateFormat.HOURS_ONLY);
            return TimeDatePresentationUtil.getTimeOptions(toMaxTime);
        }
        else if (this.isToMaxDay) {
            return TimeDatePresentationUtil.getTimeOptions(undefined, TimeDatePresentationUtil.getFormattedDate(this.max_date, DateFormat.HOURS_ONLY));
        }
        else {
            return TimeDatePresentationUtil.getTimeOptions();
        }
    }
    handleCancel() {
        this.atuiCancel.emit();
    }
    handleSubmit() {
        if (moment(this.from_date_value).isBefore(moment(this.to_date_value))) {
            this.atuiSubmit.emit({
                from: TimeDatePresentationUtil.buildDateFromStrings(this.fromDate, this.fromTime).toISOString(),
                to: TimeDatePresentationUtil.buildDateFromStrings(this.toDate, this.toTime).toISOString(),
                lockEndDateToNow: this.lock_end_date_to_now,
            });
        }
    }
    render() {
        return (h("div", { key: 'f0e969fce01a36c89d378f65a8ffaf8e28439bca', class: "flex w-fit flex-col gap-8 border border-gray-300" }, h("h5", { key: '614d36a490a4a517d026c0f09f4503fe636fc1d5', class: "text-h5 text-dark p-12 font-medium" }, this.translations.ATUI.TIME.SELECT_ABSOLUTE_TIME), h("div", { key: '299832c72461b8c0c17471dcb97917acc631de29', class: "flex flex-row gap-16 px-12" }, h("div", { key: '6b53d1a6b0394daeb01f4c8de10e4792abde621d', class: "flex-fill flex flex-col gap-8" }, h("div", { key: '8012547f5c0a060616602bbb6e74ef5998270095' }, h("label", { key: '58c19b812cc8ca3e7a62d5231fc6095c5b14b022' }, this.translations.ATUI.TIME.FROM_DATE), h("div", { key: '011aa0810c102729cfe47c3efea78a706659cde4' }, h("input", { key: 'c8ce860da7b8fd6e79c22e06689184202fe6af61', type: "date", name: "fromDp", class: "cursor-pointer", min: TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), value: this.fromDate, onChange: (event) => {
                this.from_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(event.target.value, this.fromTime);
                this.setToDateAndTime(this.to_date_value);
            } }))), this.can_set_time && (h("div", { key: '73d2865215cd1fd1b6ea3c8670a14cf54a861eb8' }, h("label", { key: '6664d3affda7e5c09daccb5988d220c720fd8847' }, this.translations.ATUI.TIME.FROM_TIME), h("div", { key: 'fbfb8663765c563538305fd751d09e7058980b9e' }, h("atui-select", { key: '2ea1c5cb242f18244afa5a9e366e7e724e380568', options: this.getFromTimes, value: this.fromTime, onAtuiChange: (event) => {
                this.from_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(this.fromDate, event.detail);
            } }))))), h("div", { key: '9c0fa5cca5b78f2bed902a1d6be86c6ea65d56bc', class: "flex-fill flex flex-col gap-8" }, h("div", { key: '209985e0bb011389ac022efb59a544fb5c2bb7c8' }, h("label", { key: '101676d6f0fd759b5edd53d58d9e56ded3d5fb33' }, this.translations.ATUI.TIME.TO_DATE), h("div", { key: 'ec5c9eef850b8e046adff70bab768577d4e61ae4' }, h("input", { key: 'f5be5938124f627966d71de991d6230b7fd1e1d8', type: "date", name: "toDp", class: "cursor-pointer", disabled: this.lock_end_date_to_now, min: TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), value: this.toDate, ref: (el) => (this.toDatePickerEl = el), onChange: (event) => {
                this.to_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(event.target.value, this.toTime);
                this.setToDateAndTime(this.to_date_value);
            } }))), this.can_set_time && (h("div", { key: '9555a3ad1882338dd63ace9ec4a77c94b4450d0c' }, h("label", { key: '18bbb04e4b137bcefa5164506f0eaa54137f9ebb' }, this.translations.ATUI.TIME.TO_TIME), h("div", { key: '3241742104de228da72327d8a7d9454b95a54dea' }, h("atui-select", { key: '8cf999252e956db8691ea6b5d8a7ccafa211bd3c', options: this.getToTimes, value: this.toTime, disabled: this.lock_end_date_to_now, ref: (el) => (this.toTimePickerEl = el), onAtuiChange: (event) => {
                this.to_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(this.toDate, event.detail);
            } })))))), h("div", { key: '0bef6c42b12d2d12377af36a706c3cad28b4cc71', class: "align-center my-8 flex flex-row justify-between gap-8 rounded-md px-12" }, h("div", { key: '024c852ad225106917991811b4a740b2239c696f', class: "flex flex-col" }, h("label", { key: 'f13431b1470843c278eb81eaec277f38e8df97ca', class: "c-form__label" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW), h("span", { key: '501e7a0d7cb92d53bbd6f8233d84ad3218d1e2de', class: "text-med text-xs" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW_DESCRIPTION)), h("atui-toggle-switch", { key: 'b05055db760f6ac588afaf1f9e0b1548cb371980', value: this.lock_end_date_to_now, onChange: () => this.setDateNow(), ref: (el) => (this.setDateNowSwitch = el) })), h("div", { key: 'e91250f1525d989724ea833c9cef4255b72d8e06', class: "flex flex-row justify-between p-8" }, h("atui-button", { key: '4e8acbc9f724a8c65ab893018635a6e2e65843f1', type: "secondaryOutline", "data-name": "custom-time-range-clear", label: this.translations.ATUI.CLEAR_SELECTION, onClick: () => this.clearSelection() }), h("div", { key: '9cd9f3be7f5907bb47831730acc759d42c1d5de4', class: "flex flex-row gap-8" }, h("atui-button", { key: 'c8acc952d9789ea0a3a1bd82336112b9d8010deb', type: "secondaryOutline", "data-name": "custom-time-range-cancel", label: this.translations.ATUI.CANCEL, onClick: () => this.handleCancel() }), h("atui-button", { key: 'fff482facc45a13e311b3c7fcf209248592997f3', "data-name": "custom-time-range-apply", label: this.translations.ATUI.APPLY, onClick: () => this.handleSubmit() })))));
    }
    static get is() { return "atui-custom-time-range"; }
    static get properties() {
        return {
            "can_set_time": {
                "type": "boolean",
                "attribute": "can_set_time",
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
                "defaultValue": "true"
            },
            "min_seconds": {
                "type": "number",
                "attribute": "min_seconds",
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
                "defaultValue": "60"
            },
            "min_date": {
                "type": "unknown",
                "attribute": "min_date",
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
                "attribute": "max_date",
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
                "attribute": "default_from_date",
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
                "attribute": "default_to_date",
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
                "attribute": "from_date_value",
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
                "attribute": "to_date_value",
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
                "attribute": "lock_end_date_to_now",
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
            "setDateNowSwitch": {},
            "toDatePickerEl": {},
            "toTimePickerEl": {}
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
                    "original": "DateRangeStrings",
                    "resolved": "DateRangeStrings",
                    "references": {
                        "DateRangeStrings": {
                            "location": "import",
                            "path": "../../../types",
                            "id": "src/types/index.ts::DateRangeStrings"
                        }
                    }
                }
            }];
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
//# sourceMappingURL=atui-custom-time-range.js.map
