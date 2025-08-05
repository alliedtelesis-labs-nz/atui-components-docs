import { h, Host } from "@stencil/core";
import { TimeDatePresentationUtil } from "../../../../utils/time-date-presentation.util";
import { DateFormat } from "../../../../types";
/**
 * @category Table Cell
 * @description A cell component for displaying a title and subtitle with a date.
 */
export class AtuiTitleSubtitleDateCell {
    init(params) {
        const { value } = params;
        this.params = params;
        if (typeof value === 'string') {
            this.value = new Date(value);
        }
        else {
            this.value = value;
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
        return (h(Host, { key: 'b1ba682af47b1337fdbb54721576247312fb024f' }, h("div", { key: '087f9100165096c76e137432c5fac213119115cd', class: "flex h-full flex-col justify-center" }, h("div", { key: '65bdcb972209643a18c5f3eac3f7c806f7689477', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: '88028e7ab99a785bef45fb5108acf3858a0d80a7', class: "truncate text-xs font-normal leading-[100%] text-med" }, this.yearMonthDay))));
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
