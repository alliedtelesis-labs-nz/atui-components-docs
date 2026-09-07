'use strict';

var index = require('./index-ByfMXhOa.js');
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
        return (index.h(index.Host, { key: 'fb611fbc41327992d11bd1b62be09cde89ed34a0', class: "flex h-full items-center" }, index.h("div", { key: 'e5fab70089ee0851aba255cb91e98fc59e5a4963', class: "flex h-full flex-col justify-center" }, index.h("div", { key: 'bb645f05498b56062c7f0c3387abf920aee7bfdc', class: "truncate text-sm leading-normal" }, this.relativeLabel), this.dateTimeLabel && (index.h("div", { key: 'a0bc80190065006033a2f89823fe6d9f436baad6', class: "text-med truncate text-[10px] leading-normal font-normal" }, "(", this.dateTimeLabel, ")")))));
    }
};

exports.at_relative_datetime_cell = AtRelativeDateTimeCell;
