import { r as registerInstance, a as getElement, h, H as Host } from './index-Baj27LS8.js';
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
        return (h(Host, { key: '2cc653d3623a2d6b02d87f74c1d29ab4346c2f12' }, h("div", { key: '08b750419f84173e3aec1a337dc816619191f5fb', class: "flex h-full flex-col justify-center" }, h("div", { key: 'ecd8d58cee4b1a5cc51d8764028a763a6ae6276f', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: '46afcd1414bf18632271667a654ddf8572a44225', class: "text-secondary truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
};

export { AtTitleSubtitleDateCell as at_title_subtitle_date_cell };
