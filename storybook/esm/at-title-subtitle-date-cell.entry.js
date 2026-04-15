import { r as registerInstance, g as getElement, h, H as Host } from './index-Dm8LkzEZ.js';
import { T as TimeDatePresentationUtil } from './time-date-presentation.util-CZMVvhsm.js';
import { D as DateFormat } from './date-C3LwY5aR.js';
import './at-time-date.util-DLDlk6Fx.js';

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
        return (h(Host, { key: '02bd658202445e47f368a21814c74b47e9d42eca' }, h("div", { key: '0d4b15f934131ca5a9b3b0d29cbe1b466d42162b', class: "flex h-full flex-col justify-center" }, h("div", { key: 'a9cd15b5bc4d033de03c86311091130b5c18d29a', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: 'e401ca6e4ff405dd435ce3c0970d97779bc005ed', class: "text-med truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
};

export { AtTitleSubtitleDateCell as at_title_subtitle_date_cell };
