import { r as registerInstance, a as getElement, h, H as Host } from './index-B5bw8iR3.js';
import { T as TimeDatePresentationUtil } from './time-date-presentation.util-j8nVdcoJ.js';
import { D as DateFormat } from './date-DJyIoUiL.js';
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
        return (h(Host, { key: '2fe9eb7cae29b465cb302134bf97c0cb581d772d' }, h("div", { key: '2aec7b4752f5da6ce7eec5b48a8cddcfcab302b0', class: "flex h-full flex-col justify-center" }, h("div", { key: '77ce434c0f5ba5c492e599ae9b4a1c6010106231', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: '6e678757c29f8874ea233dc764fb6f02a7f3db5e', class: "text-med truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
};

export { AtTitleSubtitleDateCell as at_title_subtitle_date_cell };
//# sourceMappingURL=at-title-subtitle-date-cell.entry.js.map
