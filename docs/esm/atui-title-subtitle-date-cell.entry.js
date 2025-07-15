import { r as registerInstance, h, H as Host, g as getElement } from './index-8kq1vl9Q.js';
import { T as TimeDatePresentationUtil } from './time-date-presentation.util-DxoFI1OS.js';
import { c as DateFormat } from './time-date.util-BsTT-_r-.js';
import './moment-C5Sle45O.js';
import './moment-9az102YM.js';

const AtuiTitleSubtitleDateCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
        return (h(Host, { key: '03a0795982813323c39e918cb20d1b4fee993f52' }, h("div", { key: '5db05ec76f7d17c81de156351358bbcc70fd1225', class: "flex h-full flex-col justify-center" }, h("div", { key: '572ae72c1294e84414f2cd3fbf07b875c2a5b5e4', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: '341d44e9120c15283c328d73c8b26bc0d99419b7', class: "truncate text-xs font-normal leading-[100%] text-med" }, this.yearMonthDay))));
    }
    get el() { return getElement(this); }
};

export { AtuiTitleSubtitleDateCell as atui_title_subtitle_date_cell };
//# sourceMappingURL=atui-title-subtitle-date-cell.entry.js.map

//# sourceMappingURL=atui-title-subtitle-date-cell.entry.js.map