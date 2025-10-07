'use strict';

var index = require('./index-CA9vC8ae.js');
var timeDatePresentation_util = require('./time-date-presentation.util-B-nAI0C1.js');
var date = require('./date-2rkBZCUu.js');
require('./moment-BU5SUH_o.js');
require('./time-date.util-D_xgQTJS.js');

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
        return (index.h(index.Host, { key: '2fe9eb7cae29b465cb302134bf97c0cb581d772d' }, index.h("div", { key: '2aec7b4752f5da6ce7eec5b48a8cddcfcab302b0', class: "flex h-full flex-col justify-center" }, index.h("div", { key: '77ce434c0f5ba5c492e599ae9b4a1c6010106231', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), index.h("div", { key: '6e678757c29f8874ea233dc764fb6f02a7f3db5e', class: "text-med truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
};

exports.at_title_subtitle_date_cell = AtTitleSubtitleDateCell;
//# sourceMappingURL=at-title-subtitle-date-cell.entry.cjs.js.map
