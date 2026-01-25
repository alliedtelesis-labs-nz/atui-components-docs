'use strict';

var index = require('./index-CzDB71Wy.js');
var timeDatePresentation_util = require('./time-date-presentation.util-DEyLiy6n.js');
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
        return (index.h(index.Host, { key: '564b16bd93937abdf2c46b714e619893a2e6d3b8' }, index.h("div", { key: 'ff9c9eba0540e6bd34dd36ffede9d89d1eb4cb55', class: "flex h-full flex-col justify-center" }, index.h("div", { key: '4105c6da64e89c183364c02f5371158867305815', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), index.h("div", { key: 'f89608533c167b7b525481f3b9e7ea8af4f4e5d5', class: "text-med truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
};

exports.AtTitleSubtitleDateCell = AtTitleSubtitleDateCell;
