import { h, Host } from "@stencil/core";
import { TimeDatePresentationUtil } from "../../../../utils/time-date-presentation.util";
import { DateFormat } from "../../../../types";
/**
 * @category Data Tables
 * @description A cell component for displaying a title and subtitle with a date.
 */
export class AtTitleSubtitleDateCell {
    el;
    value;
    params;
    init(params) {
        this.params = params;
        if (typeof params.value === 'string') {
            this.value = new Date(params.value);
        }
        else {
            this.value = params.value;
        }
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params.value);
        return true;
    }
    updateCell(newValue) {
        this.params.value = newValue;
        this.value = newValue;
    }
    get hourMinuteSecond() {
        return TimeDatePresentationUtil.getFormattedDate(this.value, DateFormat.HOURS_MINUTES_SECONDS);
    }
    get yearMonthDay() {
        return TimeDatePresentationUtil.getFormattedDate(this.value, DateFormat.YEAR_MONTH_DAY);
    }
    render() {
        return (h(Host, { key: '5a5a65445e0a65a75f401f764553d07c0257d729' }, h("div", { key: 'aa0ca3223e7fac528268c728a41be993439eb9c1', class: "flex h-full flex-col justify-center" }, h("div", { key: '8f1857aeccc2930d0d7abe53149a28de585f49dc', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: 'c4c16494c75fc9e17fc360c56318e40a89ef21d5', class: "text-secondary truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
    static get is() { return "at-title-subtitle-date-cell"; }
    static get states() {
        return {
            "value": {},
            "params": {}
        };
    }
    static get elementRef() { return "el"; }
}
