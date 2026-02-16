'use strict';

var index = require('./index-CzDB71Wy.js');
var timeDatePresentation_util = require('./time-date-presentation.util-D1DRhr0h.js');
var date = require('./date-DDRmOnS1.js');

const AtTitleSubtitleDateCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
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
        return timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.value, date.DateFormat.HOURS_MINUTES_SECONDS);
    }
    get yearMonthDay() {
        return timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.value, date.DateFormat.YEAR_MONTH_DAY);
    }
    render() {
        return (index.h(index.Host, { key: 'a979824e3916398e49775820cf60940d1a552aae' }, index.h("div", { key: 'a3d5510e7ac1bac0afa2dd96b7200025f7c656a0', class: "flex h-full flex-col justify-center" }, index.h("div", { key: '803424b8ac3c58c5805fb5c84adb3bbd18565fd7', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), index.h("div", { key: '27516406f2a423bedee1f36cf97cfdf49c7b3d25', class: "text-med truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
};

exports.AtTitleSubtitleDateCell = AtTitleSubtitleDateCell;
