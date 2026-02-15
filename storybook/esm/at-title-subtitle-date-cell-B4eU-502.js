import { r as registerInstance, g as getElement, h, H as Host } from './index-jvbUuQtg.js';
import { T as TimeDatePresentationUtil } from './time-date-presentation.util-hg_omoyE.js';
import { D as DateFormat } from './date-C3LwY5aR.js';

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
        return (h(Host, { key: 'a979824e3916398e49775820cf60940d1a552aae' }, h("div", { key: 'a3d5510e7ac1bac0afa2dd96b7200025f7c656a0', class: "flex h-full flex-col justify-center" }, h("div", { key: '803424b8ac3c58c5805fb5c84adb3bbd18565fd7', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: '27516406f2a423bedee1f36cf97cfdf49c7b3d25', class: "text-med truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
};

export { AtTitleSubtitleDateCell as A };
