'use strict';

var index = require('./index-BAt2i-T2.js');
var timeDatePresentation_util = require('./time-date-presentation.util-B9Nq5Am9.js');
var timeDate_util = require('./time-date.util-CvNz3hWU.js');
require('./moment-DRlRqWvO.js');
require('./moment-w2EYXu2o.js');

const AtuiTitleSubtitleDateCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    init(params) {
        const { value } = params;
        this.params = params;
        if (typeof value === 'string') {
            this.value = new Date(value);
        }
        else {
            this.value = value;
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
        return timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.value, timeDate_util.DateFormat.HOURS_MINUTES_SECONDS);
    }
    get yearMonthDay() {
        return timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.value, timeDate_util.DateFormat.YEAR_MONTH_DAY);
    }
    render() {
        return (index.h(index.Host, { key: '03a0795982813323c39e918cb20d1b4fee993f52' }, index.h("div", { key: '5db05ec76f7d17c81de156351358bbcc70fd1225', class: "flex h-full flex-col justify-center" }, index.h("div", { key: '572ae72c1294e84414f2cd3fbf07b875c2a5b5e4', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), index.h("div", { key: '341d44e9120c15283c328d73c8b26bc0d99419b7', class: "truncate text-xs font-normal leading-[100%] text-med" }, this.yearMonthDay))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_title_subtitle_date_cell = AtuiTitleSubtitleDateCell;
//# sourceMappingURL=atui-title-subtitle-date-cell.entry.cjs.js.map

//# sourceMappingURL=atui-title-subtitle-date-cell.cjs.entry.js.map