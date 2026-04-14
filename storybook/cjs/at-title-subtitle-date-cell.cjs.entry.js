'use strict';

var index = require('./index-BRms7T38.js');
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
        return (index.h(index.Host, { key: 'c29235610aedae642d82045976f4dcdde545a5d6' }, index.h("div", { key: '44cc52a4f741d9b6669fb99ad4ee0ca4f5055ef2', class: "flex h-full flex-col justify-center" }, index.h("div", { key: '66531f34dbd4936ecf86b1909b34586f29a19c80', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), index.h("div", { key: '2542752ec1d4b1ef0df7f2e2490c89f14ad45980', class: "text-med truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
};

exports.at_title_subtitle_date_cell = AtTitleSubtitleDateCell;
