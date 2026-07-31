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
        return (h(Host, { key: '3ece491c1f2fc5eb55de14088c0f98bf07815214' }, h("div", { key: '73fb27ca96fc0cfa9e475498548cc908aed6227c', class: "flex h-full flex-col justify-center" }, h("div", { key: '6e6eedd95a91366171ef0a6f65ac7ea57970576e', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: '615262d08f92f019bfd3a64388587d4a7f568d20', class: "text-secondary truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
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
