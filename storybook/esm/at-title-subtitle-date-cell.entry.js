import { r as registerInstance, a as getElement, h, H as Host } from './index-lWb16Ay7.js';
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
        return (h(Host, { key: '97d064343f19d2db1d775980c8f519074c7a80b7' }, h("div", { key: '3326209209183436fadc6e3b6bf3ff9230cd8ae7', class: "flex h-full flex-col justify-center" }, h("div", { key: '3f55229fccdf7a7229037b7ad393a1dccf7348c5', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: '67ea4875a3a88f147c69a26833943e37ecde01f4', class: "text-secondary truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
};

export { AtTitleSubtitleDateCell as at_title_subtitle_date_cell };
