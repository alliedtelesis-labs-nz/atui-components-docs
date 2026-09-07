import { r as registerInstance, a as getElement, h, H as Host } from './index-CGGSFxDu.js';
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
        return (h(Host, { key: '6f2d93c3b5a54b47137d79fc37fa72961c873e94' }, h("div", { key: '20ed6c4b717abeb22edf9449f40801cc53a2e52c', class: "flex h-full flex-col justify-center" }, h("div", { key: '7e516927071957d0e078e269774cd960d6f22226', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: 'b0e363d03e29c61141a5a1c4113bd5b2fc78f53b', class: "text-secondary truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
};

export { AtTitleSubtitleDateCell as at_title_subtitle_date_cell };
