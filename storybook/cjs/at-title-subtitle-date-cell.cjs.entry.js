'use strict';

var index = require('./index-Bc1nzv_X.js');
var timeDatePresentation_util = require('./time-date-presentation.util-CBDuvYdu.js');
var date = require('./date-DDRmOnS1.js');
require('./at-time-date.util-6Fmc04Ie.js');

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
        return (index.h(index.Host, { key: '580473bc2de20080d5f129c59833841126de1bd3' }, index.h("div", { key: 'c15cace9e4e34959d76c4dbed8239be052d52338', class: "flex h-full flex-col justify-center" }, index.h("div", { key: '015a4e9d6a3ee567ab5e44cd9e6754599d466e7f', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), index.h("div", { key: '52a0b55481747ab523effb8aa4eb110cddb635fd', class: "text-secondary truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
};

exports.at_title_subtitle_date_cell = AtTitleSubtitleDateCell;
