'use strict';

var index = require('./index-D6_HFEr-.js');
var relativeTimeLabel = require('./relative-time-label-Cl44YHvZ.js');

const AtRelativeDateTimeCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    relativeLabel = '-';
    dateTimeLabel = '';
    init(params) {
        this.setValues(params);
    }
    refresh(params) {
        this.setValues(params);
        return true;
    }
    getGui() {
        return this.el;
    }
    setValues(params) {
        const sourceDateTime = params.getDateTime
            ? params.getDateTime(params.data)
            : params.value;
        if (!sourceDateTime) {
            this.relativeLabel = '-';
            this.dateTimeLabel = '';
            return;
        }
        const parsedDate = relativeTimeLabel.parseCellDateTime(sourceDateTime);
        if (!parsedDate) {
            this.relativeLabel = '-';
            this.dateTimeLabel = '';
            return;
        }
        this.relativeLabel = relativeTimeLabel.getRelativeTimeLabel(parsedDate);
        this.dateTimeLabel = sourceDateTime;
    }
    render() {
        return (index.h(index.Host, { key: 'a1150b7e8cb83923bccf6313fcef14c74d4862ab', class: "flex h-full items-center" }, index.h("div", { key: '192022f4b2619f1ad251a7a6c6030a8cf470c343', class: "flex h-full flex-col justify-center" }, index.h("div", { key: '1733b23021562e025251e51f3590075eddec3d16', class: "truncate text-sm leading-normal" }, this.relativeLabel), this.dateTimeLabel && (index.h("div", { key: '2a016b3554065fceb4eef103827ce416f7bd86b5', class: "text-med truncate text-[10px] leading-normal font-normal" }, this.dateTimeLabel)))));
    }
};

exports.at_relative_datetime_cell = AtRelativeDateTimeCell;
