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
        return (h(Host, { key: '5b0ba1b851878f1315bd92986e2d43ad93a29431' }, h("div", { key: 'b1ae21a6ae45362d556fa978da2c7b0ba334d2cc', class: "flex h-full flex-col justify-center" }, h("div", { key: 'e01fc7df929b5b5806828fe5ba60104bbdd419ca', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: 'b3f2b81cb97bd82b0694af090ae92ebe5fe59e7b', class: "text-secondary truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
};

export { AtTitleSubtitleDateCell as at_title_subtitle_date_cell };
