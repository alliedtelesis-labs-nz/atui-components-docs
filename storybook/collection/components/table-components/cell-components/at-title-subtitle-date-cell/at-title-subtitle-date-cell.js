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
        return (h(Host, { key: '67298967c616f8c8e3d6b9199a671da013a1e97d' }, h("div", { key: '9f5e0729e8700e07e77954611f607a165974a8d1', class: "flex h-full flex-col justify-center" }, h("div", { key: 'a816f08b7aeed335edfae746a8756ae5f04223e3', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: '15e8452161ff1c234d65ed6d30c34c9744e0c47d', class: "text-secondary truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
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
