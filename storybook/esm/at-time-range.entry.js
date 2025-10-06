import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-B5bw8iR3.js';
import { a as TimeUnit, T as TimeDateUtil, D as Duration } from './time-date.util-DLaek6ce.js';
import { h as hooks } from './moment-BMuAbjcg.js';
import { f as fetchTranslations } from './translation-DuLooPsr.js';
import { M as MIN_DATE, T as TimeRangeDisplay } from './date-DJyIoUiL.js';

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

const AtTimeRangeComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    /**
     * Selected time range.
     */
    selected_time_range = {
        selected: {
            unit: TimeUnit.HOURS,
            value: 1,
        },
    };
    /**
     * Lower limit of the time range.
     */
    range_limit = 7;
    /**
     * Define the presets for the relative time ranges.
     */
    presets;
    /**
     * Enable relative time selection.
     */
    enable_relative_time = true;
    /**
     * Custom error message to show when an invalid time is inputted.
     */
    custom_error_message = null;
    /**
     * Enable all time selection.
     */
    show_all_time = false;
    /**
     * Enable range limit setting. If set to false, use Jan 1, 1985 as the lower limit of time range, ignoring
     * the value of range limit.
     */
    enable_range_limit = true;
    today;
    lowerLimit;
    defaultFromDate;
    translations;
    relativeTimeMenuEl;
    absoluteTimeMenuEl;
    get el() { return getElement(this); }
    units = [
        TimeUnit.MINUTES,
        TimeUnit.HOURS,
        TimeUnit.DAYS,
        TimeUnit.WEEKS,
        TimeUnit.MONTHS,
        TimeUnit.YEARS,
    ];
    minSeconds = 300;
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
    /**
     * Emits an event containing the selected time range when it changes
     */
    atuiChange;
    onChangeCustomTime(customTime) {
        this.selected_time_range = {
            selected: TimeRangeDisplay.CUSTOM,
            custom: customTime,
        };
        this.atuiChange.emit({ ...this.selected_time_range });
    }
    onChangeRelativeTime(time) {
        this.selected_time_range = {
            selected: time,
        };
        this.atuiChange.emit({ ...this.selected_time_range });
    }
    get buttonGroupOptions() {
        const output = [];
        if (this.selected_time_range.selected === TimeRangeDisplay.ALL) {
            output.push({
                value: (h("div", { class: "text-dark flex items-center gap-4 font-normal" }, h("span", { class: "font-medium" }, this.translations.ATUI.TIME.ALL_TIME_LABEL))),
            });
        }
        else if (this.selected_time_range.custom) {
            output.push({
                value: [
                    h("div", { class: "text-dark flex items-center gap-4 font-normal" }, h("span", null, this.getCustomStartAndEndDate(this.selected_time_range)?.fromDate.toLocaleString()), h("span", { class: "icon-md material-icons text-light" }, "arrow_forward"), h("span", null, this.selected_time_range.custom.lockEndDateToNow
                        ? 'NOW'
                        : this.getCustomStartAndEndDate(this.selected_time_range)?.toDate.toLocaleString())),
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
        return (h(Host, { key: 'c36fa8298f5f9aeced963d1edd2aec38ac952b93', class: "relative flex justify-center gap-8" }, this.enable_relative_time && (h("at-button-group", { key: '5d523e6801c638ec3616549d45513bc82eddceab', options: this.buttonGroupOptions, onAtuiIndexChange: (event) => (event.detail === 0 &&
                this.relativeTimeMenuEl.focus()) ||
                (event.detail === 1 &&
                    this.absoluteTimeMenuEl.focus()) })), !this.enable_relative_time && (h("at-button-group", { key: '9255bf9ca2fca4fa353a366b05573adfa7296fb0', options: this.predefinedTimeRanges, onAtuiIndexChange: (event) => {
                if (event.detail < this.presets.length) {
                    this.onChangeRelativeTime(this.presets[event.detail]);
                }
                else if (event.detail ===
                    this.predefinedTimeRanges.length - 1) {
                    this.absoluteTimeMenuEl.focus();
                }
            } })), h("div", { key: '4e38618754a2a754763bc9354aed96afd529c7a4', ref: (el) => (this.relativeTimeMenuEl = el), class: "absolute top-[42px] z-10 h-0 overflow-hidden bg-white focus-within:h-fit focus-within:overflow-visible focus:h-fit", tabindex: 0, onChange: (event) => event.stopPropagation() }, h("at-time-with-unit", { key: 'de4c931444aeb19b7715a913f2dd7248bbf70d72', units: this.units, common_options: this.presets, min_date: this.lowerLimit, min_seconds: this.minSeconds, initial_selected_time: this.selected_time_range.selected ===
                TimeRangeDisplay.CUSTOM
                ? TimeRangeDisplay.ALL
                : this.selected_time_range.selected, custom_error_message: this.custom_error_message, show_all_time: this.show_all_time, onAtuiSubmit: (event) => this.onChangeRelativeTime(event.detail), onAtuiCancel: () => {
                this.relativeTimeMenuEl.focus();
                this.relativeTimeMenuEl.blur();
            } })), h("div", { key: '43fedc474a652079da7757f569df18535d510d5b', ref: (el) => (this.absoluteTimeMenuEl = el), class: "absolute top-[42px] z-10 h-0 overflow-hidden bg-white focus-within:h-fit focus-within:overflow-visible focus:h-fit", tabindex: 0, onChange: (event) => event.stopPropagation() }, h("at-custom-time-range", { key: '129da0c146954b73a8ea8bfd9a1450cb356f2c11', min_date: this.lowerLimit, default_to_date: this.today, default_from_date: this.defaultFromDate, from_date_value: this.getCustomStartAndEndDate(this.selected_time_range)?.fromDate, to_date_value: this.getCustomStartAndEndDate(this.selected_time_range)?.toDate, lock_end_date_to_now: this.selected_time_range.custom?.lockEndDateToNow, onAtuiSubmit: (event) => this.onChangeCustomTime(event.detail), onAtuiCancel: () => {
                this.absoluteTimeMenuEl.focus();
                this.absoluteTimeMenuEl.blur();
            } }))));
    }
};

export { AtTimeRangeComponent as at_time_range };
//# sourceMappingURL=at-time-range.entry.js.map
