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
        return (index.h(index.Host, { key: '74e390b03d39fedac8687dbeff5d49799c2aecd4' }, index.h("div", { key: 'de7b1bb0846ba467fbb2221cdb4c7a1f116f6cd9', class: "flex h-full flex-col justify-center" }, index.h("div", { key: '4e412abfe225ad445e6bf692f3b281d766b33fde', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), index.h("div", { key: '24d0f94a7f2ed85ab199cf2568546c1fba5d70a2', class: "truncate text-xs font-normal leading-[100%] text-med" }, this.yearMonthDay))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_title_subtitle_date_cell = AtuiTitleSubtitleDateCell;
//# sourceMappingURL=atui-title-subtitle-date-cell.entry.cjs.js.map

//# sourceMappingURL=atui-title-subtitle-date-cell.cjs.entry.js.map