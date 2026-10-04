'use strict';

var index = require('./index-Dzqi4iVM.js');
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
        return (index.h(index.Host, { key: '2cc653d3623a2d6b02d87f74c1d29ab4346c2f12' }, index.h("div", { key: '08b750419f84173e3aec1a337dc816619191f5fb', class: "flex h-full flex-col justify-center" }, index.h("div", { key: 'ecd8d58cee4b1a5cc51d8764028a763a6ae6276f', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), index.h("div", { key: '46afcd1414bf18632271667a654ddf8572a44225', class: "text-secondary truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
};

exports.at_title_subtitle_date_cell = AtTitleSubtitleDateCell;
