import { r as registerInstance, g as getElement, h, H as Host } from './index-EP34iaAr.js';
import { T as TimeDatePresentationUtil } from './time-date-presentation.util-z4fe7bzG.js';
import { D as DateFormat } from './date-C3LwY5aR.js';
import './moment-BMuAbjcg.js';
import './time-date.util-DLaek6ce.js';

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
        return (h(Host, { key: '564b16bd93937abdf2c46b714e619893a2e6d3b8' }, h("div", { key: 'ff9c9eba0540e6bd34dd36ffede9d89d1eb4cb55', class: "flex h-full flex-col justify-center" }, h("div", { key: '4105c6da64e89c183364c02f5371158867305815', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: 'f89608533c167b7b525481f3b9e7ea8af4f4e5d5', class: "text-med truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
};

export { AtTitleSubtitleDateCell as at_title_subtitle_date_cell };
//# sourceMappingURL=at-title-subtitle-date-cell.entry.js.map
