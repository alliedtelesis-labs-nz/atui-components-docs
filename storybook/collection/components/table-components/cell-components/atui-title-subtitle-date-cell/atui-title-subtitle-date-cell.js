import { h, Host } from "@stencil/core";
import { TimeDatePresentationUtil } from "../../../../utils/time-date-presentation.util";
import { DateFormat } from "../../../../types";
/**
 * @category Table Cell
 * @description A cell component for displaying a title and subtitle with a date.
 */
export class AtuiTitleSubtitleDateCell {
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
        return (h(Host, { key: 'c5f23fb43427665d31076bd80452ea9ec21b7fe0' }, h("div", { key: '2c601332a3cc8c2958f54f208051be2e6201b07c', class: "flex h-full flex-col justify-center" }, h("div", { key: '16c41d9fb006a006cfe39c5178fd78143b9baf56', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: 'e56a5202c82cabc01f9dd46f17a2707b7354c611', class: "text-med truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
    static get is() { return "atui-title-subtitle-date-cell"; }
    static get states() {
        return {
            "value": {},
            "params": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-title-subtitle-date-cell.js.map
