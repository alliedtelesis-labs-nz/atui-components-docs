'use strict';

var index = require('./index-Bo1AxtqW.js');
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
        return (index.h(index.Host, { key: '5dd02de1d68c643d344bbdbf6c377af178dff71b', class: "flex h-full items-center" }, index.h("div", { key: '67415954fb6bc7c2360ba1cd2457c271bd7264be', class: "flex h-full flex-col justify-center" }, index.h("div", { key: 'cfa127738a21652a339455a1635fb88aa52bd907', class: "truncate text-sm leading-normal" }, this.relativeLabel), this.dateTimeLabel && (index.h("div", { key: 'fcff9c4f940ddb35e404a1dd167e989b9948c693', class: "text-med truncate text-[10px] leading-normal font-normal" }, "(", this.dateTimeLabel, ")")))));
    }
};

exports.at_relative_datetime_cell = AtRelativeDateTimeCell;
