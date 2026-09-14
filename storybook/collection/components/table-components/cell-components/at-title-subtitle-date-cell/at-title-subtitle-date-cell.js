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
        return (h(Host, { key: 'e40e8301f883fb2c9c5ae6e2bfa870b499adbbe7' }, h("div", { key: '7b8df750063e9d1891cefb8556d6041603508f6d', class: "flex h-full flex-col justify-center" }, h("div", { key: 'c13f613aaf71dcedcd5e5f5fe2fb3c3c21dd3ba2', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: '457efd03723009cab59abbfe3af777554ff12a27', class: "text-secondary truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
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
