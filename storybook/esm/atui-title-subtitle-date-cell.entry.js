import { r as registerInstance, h, H as Host, g as getElement } from './index-D3rwhcmG.js';
import { T as TimeDatePresentationUtil } from './time-date-presentation.util-WdLhbnM8.js';
import { c as DateFormat } from './time-date.util-M_jUzjda.js';
import './table-styles-3wjBk_6c.js';
import './moment-BMuAbjcg.js';

const AtuiTitleSubtitleDateCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
        return (h(Host, { key: 'c5f23fb43427665d31076bd80452ea9ec21b7fe0' }, h("div", { key: '2c601332a3cc8c2958f54f208051be2e6201b07c', class: "flex h-full flex-col justify-center" }, h("div", { key: '16c41d9fb006a006cfe39c5178fd78143b9baf56', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: 'e56a5202c82cabc01f9dd46f17a2707b7354c611', class: "truncate text-xs font-normal leading-[100%] text-med" }, this.yearMonthDay))));
    }
    get el() { return getElement(this); }
};

export { AtuiTitleSubtitleDateCell as atui_title_subtitle_date_cell };
//# sourceMappingURL=atui-title-subtitle-date-cell.entry.js.map

//# sourceMappingURL=atui-title-subtitle-date-cell.entry.js.map