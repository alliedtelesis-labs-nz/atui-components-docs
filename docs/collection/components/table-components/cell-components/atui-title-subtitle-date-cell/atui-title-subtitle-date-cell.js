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
        return (h(Host, { key: '74e390b03d39fedac8687dbeff5d49799c2aecd4' }, h("div", { key: 'de7b1bb0846ba467fbb2221cdb4c7a1f116f6cd9', class: "flex h-full flex-col justify-center" }, h("div", { key: '4e412abfe225ad445e6bf692f3b281d766b33fde', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: '24d0f94a7f2ed85ab199cf2568546c1fba5d70a2', class: "truncate text-xs font-normal leading-[100%] text-med" }, this.yearMonthDay))));
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
