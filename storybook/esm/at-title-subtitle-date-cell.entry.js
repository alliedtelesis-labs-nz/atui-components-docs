import { r as registerInstance, g as getElement, h, H as Host } from './index-BAAX2Der.js';
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
        return (h(Host, { key: '657746ed200a9c4d00803fd1755ea0cb7f1dccc2' }, h("div", { key: 'ae7627510dad013b8b2f3215c2fbccea182d700c', class: "flex h-full flex-col justify-center" }, h("div", { key: '16f05a83b3bc413f5755962d10d0030f663399fb', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: '5035c8e12071cc64f67edbed94a44925a418c150', class: "text-secondary truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
};

export { AtTitleSubtitleDateCell as at_title_subtitle_date_cell };
