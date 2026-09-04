import { r as registerInstance, a as getElement, h, H as Host } from './index-CKYs7vaG.js';
import { T as TimeDatePresentationUtil } from './time-date-presentation.util-H5gcGi8Y.js';
import { D as DateFormat } from './date-C3LwY5aR.js';
import './at-time-date.util-Bfdzn_RG.js';

const AtTitleSubtitleDateCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
        return (h(Host, { key: '6081bc9519fbc5bda98338165e2d2430856723b7' }, h("div", { key: '6d21a2c19b0d1ce7d2924b7145d18017e2e168bc', class: "flex h-full flex-col justify-center" }, h("div", { key: '8b6b0bc5442bdec47c138d1ae815a21e2a058dd2', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: 'ac2d1524c5131450f312fa0805ebb75ab38d1c8e', class: "text-secondary truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
};

export { AtTitleSubtitleDateCell as at_title_subtitle_date_cell };
