'use strict';

var index = require('./index-Bc1nzv_X.js');
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
        return (index.h(index.Host, { key: 'b79bf14f56c0732ee6a2f674e075976e6a967e23', class: "flex h-full items-center" }, index.h("div", { key: '7f69ba38d6dd32a9e554c83b53f3608ebfb2782a', class: "flex h-full flex-col justify-center" }, index.h("div", { key: '386ec5dae04e63479569bc1d7a4ca3d8a891d558', class: "truncate text-sm leading-normal" }, this.relativeLabel), this.dateTimeLabel && (index.h("div", { key: '704c5c08a115781f4c82934c6eca33ab473033b3', class: "text-med truncate text-[10px] leading-normal font-normal" }, "(", this.dateTimeLabel, ")")))));
    }
};

exports.at_relative_datetime_cell = AtRelativeDateTimeCell;
