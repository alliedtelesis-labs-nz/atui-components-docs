import { r as registerInstance, g as getElement, h, H as Host } from './index-CkS36Ijo.js';
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
        return (h(Host, { key: '85eea4bf4b2088e15a700c4567477b7c9b2abd5f' }, h("div", { key: '53c2941dd8a6304efc75fbbb441275cf22f3315c', class: "flex h-full flex-col justify-center" }, h("div", { key: '5c4760fc3cf95f062c294f730d3ba7c987f515a9', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: 'e7b6badfaccd847bbf1eced63b0cff0c0967555d', class: "text-med truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
};

export { AtTitleSubtitleDateCell as at_title_subtitle_date_cell };
