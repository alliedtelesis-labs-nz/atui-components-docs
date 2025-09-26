import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Cv5ME95Z.js';
import { b as TimeUnit, T as TimeDateUtil, D as Duration } from './p-BI7XO4bL.js';
import { h as hooks } from './p-BMuAbjcg.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$d } from './p-anL6prWM.js';
import { d as defineCustomElement$c } from './p-BDmiy56u.js';
import { d as defineCustomElement$b } from './p-C-N_4Z35.js';
import { d as defineCustomElement$a } from './p-Bux9NeQv.js';
import { d as defineCustomElement$9 } from './p-CdWdq1MG.js';
import { d as defineCustomElement$8 } from './p-CaCFWbHQ.js';
import { d as defineCustomElement$7 } from './p-pDYyfeah.js';
import { d as defineCustomElement$6 } from './p-BvmILoSj.js';
import { d as defineCustomElement$5 } from './p-DqhL9GCv.js';
import { d as defineCustomElement$4 } from './p-DDPw0GUw.js';
import { d as defineCustomElement$3 } from './p-C8JeNnXH.js';
import { d as defineCustomElement$2 } from './p-D-MOVsDh.js';
import { M as MIN_DATE, T as TimeRangeDisplay } from './p-DJyIoUiL.js';

var AbreviatedTimeUnits;
(function (AbreviatedTimeUnits) {
    AbreviatedTimeUnits["SECONDS"] = "s";
    AbreviatedTimeUnits["MINUTES"] = "min";
    AbreviatedTimeUnits["HOURS"] = "hr";
    AbreviatedTimeUnits["DAYS"] = "d";
    AbreviatedTimeUnits["WEEKS"] = "w";
    AbreviatedTimeUnits["MONTHS"] = "m";
    AbreviatedTimeUnits["YEARS"] = "yr";
})(AbreviatedTimeUnits || (AbreviatedTimeUnits = {}));
var FullTimeUnits;
(function (FullTimeUnits) {
    FullTimeUnits["SECONDS"] = "SECONDS";
    FullTimeUnits["MINUTES"] = "MINUTES";
    FullTimeUnits["HOURS"] = "HOURS";
    FullTimeUnits["DAYS"] = "DAYS";
    FullTimeUnits["WEEKS"] = "WEEKS";
    FullTimeUnits["MONTHS"] = "MONTHS";
    FullTimeUnits["YEARS"] = "YEARS";
})(FullTimeUnits || (FullTimeUnits = {}));

const AtTimeRangeComponent = /*@__PURE__*/ proxyCustomElement(class AtTimeRangeComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiChange = createEvent(this, "atuiChange", 7);
        /**
         * Selected time range.
         */
        this.selected_time_range = {
            selected: {
                unit: TimeUnit.HOURS,
                value: 1,
            },
        };
        /**
         * Lower limit of the time range.
         */
        this.range_limit = 7;
        /**
         * Enable relative time selection.
         */
        this.enable_relative_time = true;
        /**
         * Custom error message to show when an invalid time is inputted.
         */
        this.custom_error_message = null;
        /**
         * Enable all time selection.
         */
        this.show_all_time = false;
        /**
         * Enable range limit setting. If set to false, use Jan 1, 1985 as the lower limit of time range, ignoring
         * the value of range limit.
         */
        this.enable_range_limit = true;
        this.units = [
            TimeUnit.MINUTES,
            TimeUnit.HOURS,
            TimeUnit.DAYS,
            TimeUnit.WEEKS,
            TimeUnit.MONTHS,
            TimeUnit.YEARS,
        ];
        this.minSeconds = 300;
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
        this.today = new Date();
    }
    componentWillRender() {
        this.lowerLimit = this.enable_range_limit
            ? hooks().subtract(this.range_limit, 'day').toDate()
            : TimeDateUtil.floorDateByTimeUnit(MIN_DATE, Duration.HOURS);
        this.defaultFromDate = hooks(this.today).subtract(1, 'hours').toDate();
    }
    getLongUnitDisplay(time) {
        if (time.custom || !time.selected) {
            return;
        }
        return FullTimeUnits[time.selected['unit']];
    }
    getRelativeDate(time) {
        if (time.custom || !time.selected) {
            return;
        }
        return TimeDateUtil.getRelativeDateRange(time.selected);
    }
    getCustomStartAndEndDate(selectedTime) {
        if (!selectedTime.custom) {
            return;
        }
        const { from, to } = selectedTime.custom;
        const fromDate = hooks(from).toDate();
        const toDate = hooks(to).toDate();
        return { fromDate, toDate };
    }
    getShortUnitDisplay(time) {
        return AbreviatedTimeUnits[time.unit];
    }
    onChangeCustomTime(customTime) {
        this.selected_time_range = {
            selected: TimeRangeDisplay.CUSTOM,
            custom: customTime,
        };
        this.atuiChange.emit(Object.assign({}, this.selected_time_range));
    }
    onChangeRelativeTime(time) {
        this.selected_time_range = {
            selected: time,
        };
        this.atuiChange.emit(Object.assign({}, this.selected_time_range));
    }
    get buttonGroupOptions() {
        var _a, _b;
        const output = [];
        if (this.selected_time_range.selected === TimeRangeDisplay.ALL) {
            output.push({
                value: (h("div", { class: "text-dark flex items-center gap-4 font-normal" }, h("span", { class: "font-medium" }, this.translations.ATUI.TIME.ALL_TIME_LABEL))),
            });
        }
        else if (this.selected_time_range.custom) {
            output.push({
                value: [
                    h("div", { class: "text-dark flex items-center gap-4 font-normal" }, h("span", null, (_a = this.getCustomStartAndEndDate(this.selected_time_range)) === null || _a === void 0 ? void 0 : _a.fromDate.toLocaleString()), h("span", { class: "icon-md material-icons text-light" }, "arrow_forward"), h("span", null, this.selected_time_range.custom.lockEndDateToNow
                        ? 'NOW'
                        : (_b = this.getCustomStartAndEndDate(this.selected_time_range)) === null || _b === void 0 ? void 0 : _b.toDate.toLocaleString())),
                ],
            });
        }
        else {
            output.push({
                value: (h("div", { class: "text-dark flex items-center gap-4 font-normal" }, h("span", { class: "font-medium" }, this.translations.ATUI.TIME.LAST, ` `, this.selected_time_range.selected['value'], ` `, this.translations.ATUI.TIME[this.getLongUnitDisplay(this.selected_time_range)], ' ', ":"), h("span", null, this.getRelativeDate(this.selected_time_range).startDate.toLocaleString()), h("span", { class: "icon-md material-icons text-light" }, "arrow_forward"), h("span", null, "NOW"))),
            });
        }
        output.push({
            value: (h("div", { class: "flex items-center" }, h("span", { class: "icon-md material-icons text-light" }, "date_range"))),
        });
        return output;
    }
    get predefinedTimeRanges() {
        const output = [];
        this.presets.forEach((timerange) => {
            output.push({
                value: (h("span", null, timerange.value, this.getShortUnitDisplay(timerange))),
            });
        });
        output.push({
            value: (h("div", { class: "flex items-center" }, h("span", { class: "material-icons text-body text-light" }, "date_range"))),
        });
        return output;
    }
    render() {
        var _a, _b, _c;
        return (h(Host, { key: 'e661a4d9cddc605c403a7a46fb22c05d80d5393d', class: "relative flex justify-center gap-8" }, this.enable_relative_time && (h("at-button-group", { key: '71f712be56accabca5a49718a8823bc16c4c9946', options: this.buttonGroupOptions, onAtuiIndexChange: (event) => (event.detail === 0 &&
                this.relativeTimeMenuEl.focus()) ||
                (event.detail === 1 &&
                    this.absoluteTimeMenuEl.focus()) })), !this.enable_relative_time && (h("at-button-group", { key: '46eca9e81facc2216c81e793a1faa883b3f987b2', options: this.predefinedTimeRanges, onAtuiIndexChange: (event) => {
                if (event.detail < this.presets.length) {
                    this.onChangeRelativeTime(this.presets[event.detail]);
                }
                else if (event.detail ===
                    this.predefinedTimeRanges.length - 1) {
                    this.absoluteTimeMenuEl.focus();
                }
            } })), h("div", { key: 'fd8278c48a61d2ba3c2b2033b95c34e8831be95c', ref: (el) => (this.relativeTimeMenuEl = el), class: "absolute top-[42px] z-10 h-0 overflow-hidden bg-white focus-within:h-fit focus-within:overflow-visible focus:h-fit", tabindex: 0, onChange: (event) => event.stopPropagation() }, h("at-time-with-unit", { key: 'bd737a6f862d8596fbc092f16bb7560f68b1f1fa', units: this.units, common_options: this.presets, min_date: this.lowerLimit, min_seconds: this.minSeconds, initial_selected_time: this.selected_time_range.selected ===
                TimeRangeDisplay.CUSTOM
                ? TimeRangeDisplay.ALL
                : this.selected_time_range.selected, custom_error_message: this.custom_error_message, show_all_time: this.show_all_time, onAtuiSubmit: (event) => this.onChangeRelativeTime(event.detail), onAtuiCancel: () => {
                this.relativeTimeMenuEl.focus();
                this.relativeTimeMenuEl.blur();
            } })), h("div", { key: 'bd0c1a39f7880b9b421e8fe37b495e983a33cbdc', ref: (el) => (this.absoluteTimeMenuEl = el), class: "absolute top-[42px] z-10 h-0 overflow-hidden bg-white focus-within:h-fit focus-within:overflow-visible focus:h-fit", tabindex: 0, onChange: (event) => event.stopPropagation() }, h("at-custom-time-range", { key: '8d16cf48768d4ae26a4c387eddbbdc1a0c36423d', min_date: this.lowerLimit, default_to_date: this.today, default_from_date: this.defaultFromDate, from_date_value: (_a = this.getCustomStartAndEndDate(this.selected_time_range)) === null || _a === void 0 ? void 0 : _a.fromDate, to_date_value: (_b = this.getCustomStartAndEndDate(this.selected_time_range)) === null || _b === void 0 ? void 0 : _b.toDate, lock_end_date_to_now: (_c = this.selected_time_range.custom) === null || _c === void 0 ? void 0 : _c.lockEndDateToNow, onAtuiSubmit: (event) => this.onChangeCustomTime(event.detail), onAtuiCancel: () => {
                this.absoluteTimeMenuEl.focus();
                this.absoluteTimeMenuEl.blur();
            } }))));
    }
    get el() { return this; }
}, [256, "at-time-range", {
        "selected_time_range": [16],
        "range_limit": [2],
        "presets": [16],
        "enable_relative_time": [4],
        "custom_error_message": [8],
        "show_all_time": [4],
        "enable_range_limit": [4],
        "today": [32],
        "lowerLimit": [32],
        "defaultFromDate": [32],
        "translations": [32],
        "relativeTimeMenuEl": [32],
        "absoluteTimeMenuEl": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-time-range", "at-button", "at-button-group", "at-button-group-option", "at-custom-time-range", "at-form-label", "at-input-numeric", "at-loading", "at-menu", "at-select", "at-time-with-unit", "at-toggle-switch", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-time-range":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTimeRangeComponent);
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "at-button-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "at-button-group-option":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "at-custom-time-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "at-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "at-input-numeric":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "at-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "at-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "at-time-with-unit":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-toggle-switch":
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

const AtTimeRange = AtTimeRangeComponent;
const defineCustomElement = defineCustomElement$1;

export { AtTimeRange, defineCustomElement };
//# sourceMappingURL=at-time-range.js.map

//# sourceMappingURL=at-time-range.js.map