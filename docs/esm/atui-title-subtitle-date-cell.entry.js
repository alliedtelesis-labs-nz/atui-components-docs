import { r as registerInstance, h, H as Host, g as getElement } from './index-HJO1YDmC.js';
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
        return (h(Host, { key: '74e390b03d39fedac8687dbeff5d49799c2aecd4' }, h("div", { key: 'de7b1bb0846ba467fbb2221cdb4c7a1f116f6cd9', class: "flex h-full flex-col justify-center" }, h("div", { key: '4e412abfe225ad445e6bf692f3b281d766b33fde', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: '24d0f94a7f2ed85ab199cf2568546c1fba5d70a2', class: "truncate text-xs font-normal leading-[100%] text-med" }, this.yearMonthDay))));
    }
    get el() { return getElement(this); }
};

export { AtuiTitleSubtitleDateCell as atui_title_subtitle_date_cell };
//# sourceMappingURL=atui-title-subtitle-date-cell.entry.js.map

//# sourceMappingURL=atui-title-subtitle-date-cell.entry.js.map