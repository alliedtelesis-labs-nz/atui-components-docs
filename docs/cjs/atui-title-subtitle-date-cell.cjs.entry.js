'use strict';

var index = require('./index-DGivrgtr.js');
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
        return (index.h(index.Host, { key: 'b1ba682af47b1337fdbb54721576247312fb024f' }, index.h("div", { key: '087f9100165096c76e137432c5fac213119115cd', class: "flex h-full flex-col justify-center" }, index.h("div", { key: '65bdcb972209643a18c5f3eac3f7c806f7689477', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), index.h("div", { key: '88028e7ab99a785bef45fb5108acf3858a0d80a7', class: "truncate text-xs font-normal leading-[100%] text-med" }, this.yearMonthDay))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_title_subtitle_date_cell = AtuiTitleSubtitleDateCell;
//# sourceMappingURL=atui-title-subtitle-date-cell.entry.cjs.js.map

//# sourceMappingURL=atui-title-subtitle-date-cell.cjs.entry.js.map