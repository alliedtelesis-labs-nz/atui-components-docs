'use strict';

var index = require('./index-i7hIKTeN.js');
var timeDatePresentation_util = require('./time-date-presentation.util-C9fOrkKs.js');
var date = require('./date-2rkBZCUu.js');
require('./moment-BU5SUH_o.js');
require('./time-date.util-D_xgQTJS.js');

const AtuiTitleSubtitleDateCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
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
        return (index.h(index.Host, { key: 'c5f23fb43427665d31076bd80452ea9ec21b7fe0' }, index.h("div", { key: '2c601332a3cc8c2958f54f208051be2e6201b07c', class: "flex h-full flex-col justify-center" }, index.h("div", { key: '16c41d9fb006a006cfe39c5178fd78143b9baf56', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), index.h("div", { key: 'e56a5202c82cabc01f9dd46f17a2707b7354c611', class: "text-med truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_title_subtitle_date_cell = AtuiTitleSubtitleDateCell;
//# sourceMappingURL=atui-title-subtitle-date-cell.entry.cjs.js.map

//# sourceMappingURL=atui-title-subtitle-date-cell.cjs.entry.js.map