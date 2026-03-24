'use strict';

var index = require('./index-CdUivN1V.js');
var timeDatePresentation_util = require('./time-date-presentation.util-BcQ_XLZG.js');
var date = require('./date-DDRmOnS1.js');
require('./at-time-date.util-Bw12yr56.js');

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
        return (index.h(index.Host, { key: '85eea4bf4b2088e15a700c4567477b7c9b2abd5f' }, index.h("div", { key: '53c2941dd8a6304efc75fbbb441275cf22f3315c', class: "flex h-full flex-col justify-center" }, index.h("div", { key: '5c4760fc3cf95f062c294f730d3ba7c987f515a9', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), index.h("div", { key: 'e7b6badfaccd847bbf1eced63b0cff0c0967555d', class: "text-med truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
};

exports.at_title_subtitle_date_cell = AtTitleSubtitleDateCell;
