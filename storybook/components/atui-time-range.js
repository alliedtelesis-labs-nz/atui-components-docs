import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-DJD-7SVX.js';
import { d as TimeUnit, T as TimeDateUtil, M as MIN_DATE, D as Duration, c as TimeRangeDisplay } from './p-BP6gV1HR.js';
import { h as hooks } from './p-C5Sle45O.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$d } from './p-CGoVUV9r.js';
import { d as defineCustomElement$c } from './p-DMz4MVfW.js';
import { d as defineCustomElement$b } from './p-CyG09UfR.js';
import { d as defineCustomElement$a } from './p-Do5CKMwv.js';
import { d as defineCustomElement$9 } from './p-BYrz7h7d.js';
import { d as defineCustomElement$8 } from './p-CTWl1Fr1.js';
import { d as defineCustomElement$7 } from './p-ByK4-pDJ.js';
import { d as defineCustomElement$6 } from './p-D7IRw6kM.js';
import { d as defineCustomElement$5 } from './p-DjfM-T-T.js';
import { d as defineCustomElement$4 } from './p-B7AXFdMn.js';
import { d as defineCustomElement$3 } from './p-CwX_VO1t.js';
import { d as defineCustomElement$2 } from './p-BLBTk09G.js';

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

const AtuiTimeRangeComponent = /*@__PURE__*/ proxyCustomElement(class AtuiTimeRangeComponent extends H {
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
                value: (h("div", { class: "flex items-center gap-4 font-normal text-dark" }, h("span", { class: "font-medium" }, this.translations.ATUI.TIME.ALL_TIME_LABEL))),
            });
        }
        else if (this.selected_time_range.custom) {
            output.push({
                value: [
                    h("div", { class: "flex items-center gap-4 font-normal text-dark" }, h("span", null, (_a = this.getCustomStartAndEndDate(this.selected_time_range)) === null || _a === void 0 ? void 0 : _a.fromDate.toLocaleString()), h("span", { class: "icon-md material-icons text-light" }, "arrow_forward"), h("span", null, this.selected_time_range.custom.lockEndDateToNow
                        ? 'NOW'
                        : (_b = this.getCustomStartAndEndDate(this.selected_time_range)) === null || _b === void 0 ? void 0 : _b.toDate.toLocaleString())),
                ],
            });
        }
        else {
            output.push({
                value: (h("div", { class: "flex items-center gap-4 font-normal text-dark" }, h("span", { class: "font-medium" }, this.translations.ATUI.TIME.LAST, ` `, this.selected_time_range.selected['value'], ` `, this.translations.ATUI.TIME[this.getLongUnitDisplay(this.selected_time_range)], ' ', ":"), h("span", null, this.getRelativeDate(this.selected_time_range).startDate.toLocaleString()), h("span", { class: "icon-md material-icons text-light" }, "arrow_forward"), h("span", null, "NOW"))),
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
        return (h(Host, { key: 'd07e8b17309291a2685b7103746266bba72a1958', class: "relative flex justify-center gap-8" }, this.enable_relative_time && (h("atui-button-group", { key: '2eba6a88504a0ddd6216f3a6d401d529eff1557b', options: this.buttonGroupOptions, onAtuiIndexChange: (event) => (event.detail === 0 &&
                this.relativeTimeMenuEl.focus()) ||
                (event.detail === 1 &&
                    this.absoluteTimeMenuEl.focus()) })), !this.enable_relative_time && (h("atui-button-group", { key: '69767eea4bba11607c037f8bb169696261a14e05', options: this.predefinedTimeRanges, onAtuiIndexChange: (event) => {
                if (event.detail < this.presets.length) {
                    this.onChangeRelativeTime(this.presets[event.detail]);
                }
                else if (event.detail ===
                    this.predefinedTimeRanges.length - 1) {
                    this.absoluteTimeMenuEl.focus();
                }
            } })), h("div", { key: '00027710277d9cafbcc10ef468f345dd697335bb', ref: (el) => (this.relativeTimeMenuEl = el), class: "absolute top-[42px] z-10 h-0 overflow-hidden bg-white focus-within:h-fit focus-within:overflow-visible focus:h-fit", tabindex: 0, onChange: (event) => event.stopPropagation() }, h("atui-time-with-unit", { key: '01e0f91b6e86a89b7059914668beeb10fdbac4f2', units: this.units, common_options: this.presets, min_date: this.lowerLimit, min_seconds: this.minSeconds, initial_selected_time: this.selected_time_range.selected ===
                TimeRangeDisplay.CUSTOM
                ? TimeRangeDisplay.ALL
                : this.selected_time_range.selected, custom_error_message: this.custom_error_message, show_all_time: this.show_all_time, onAtuiSubmit: (event) => this.onChangeRelativeTime(event.detail), onAtuiCancel: () => {
                this.relativeTimeMenuEl.focus();
                this.relativeTimeMenuEl.blur();
            } })), h("div", { key: '8643e058491ac5038835c96f97eb2fbbc73a7e58', ref: (el) => (this.absoluteTimeMenuEl = el), class: "absolute top-[42px] z-10 h-0 overflow-hidden bg-white focus-within:h-fit focus-within:overflow-visible focus:h-fit", tabindex: 0, onChange: (event) => event.stopPropagation() }, h("atui-custom-time-range", { key: '9f55b8a5d1c9700518eb7d060dbe720aaf200020', min_date: this.lowerLimit, default_to_date: this.today, default_from_date: this.defaultFromDate, from_date_value: (_a = this.getCustomStartAndEndDate(this.selected_time_range)) === null || _a === void 0 ? void 0 : _a.fromDate, to_date_value: (_b = this.getCustomStartAndEndDate(this.selected_time_range)) === null || _b === void 0 ? void 0 : _b.toDate, lock_end_date_to_now: (_c = this.selected_time_range.custom) === null || _c === void 0 ? void 0 : _c.lockEndDateToNow, onAtuiSubmit: (event) => this.onChangeCustomTime(event.detail), onAtuiCancel: () => {
                this.absoluteTimeMenuEl.focus();
                this.absoluteTimeMenuEl.blur();
            } }))));
    }
    get el() { return this; }
}, [0, "atui-time-range", {
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
    const components = ["atui-time-range", "atui-button", "atui-button-group", "atui-button-group-option", "atui-custom-time-range", "atui-form-label", "atui-input-numeric", "atui-loading", "atui-menu", "atui-select", "atui-time-with-unit", "atui-toggle-switch", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-time-range":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTimeRangeComponent);
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "atui-button-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "atui-button-group-option":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "atui-custom-time-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "atui-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "atui-input-numeric":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "atui-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "atui-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "atui-time-with-unit":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-toggle-switch":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtuiTimeRange = AtuiTimeRangeComponent;
const defineCustomElement = defineCustomElement$1;

export { AtuiTimeRange, defineCustomElement };
//# sourceMappingURL=atui-time-range.js.map

//# sourceMappingURL=atui-time-range.js.map