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
        return (h(Host, { key: 'c29235610aedae642d82045976f4dcdde545a5d6' }, h("div", { key: '44cc52a4f741d9b6669fb99ad4ee0ca4f5055ef2', class: "flex h-full flex-col justify-center" }, h("div", { key: '66531f34dbd4936ecf86b1909b34586f29a19c80', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: '2542752ec1d4b1ef0df7f2e2490c89f14ad45980', class: "text-med truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
};

export { AtTitleSubtitleDateCell as at_title_subtitle_date_cell };
