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
        return (h(Host, { key: '05f4cbb68de43b2a974b396c57c83ac8cb4fd01e' }, h("div", { key: 'e96ff8be03de11d1d5ecbed2ca81f98c483e0a6d', class: "flex h-full flex-col justify-center" }, h("div", { key: '552101d24f6dc6f1c5f84f94d8f7125592156fae', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: '774e3872830635ca4e887ae87f964a1267484d5f', class: "text-secondary truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
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
