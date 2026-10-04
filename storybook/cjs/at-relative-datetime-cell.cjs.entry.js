'use strict';

var index = require('./index-Dzqi4iVM.js');
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
        return (index.h(index.Host, { key: '6aacfa890ff85945638373ca83e1e44b0abea8a4', class: "flex h-full items-center" }, index.h("div", { key: 'e345df71a4d6edd4444c2dd743160c02e06ed921', class: "flex h-full flex-col justify-center" }, index.h("div", { key: 'd7086f6277ad72d210fed9bbf8cfcd9cd557e311', class: "truncate text-sm leading-normal" }, this.relativeLabel), this.dateTimeLabel && (index.h("div", { key: '3b1ce3042c20f5ef0eb08a48dd0d3688f7cbc7db', class: "text-med truncate text-[10px] leading-normal font-normal" }, "(", this.dateTimeLabel, ")")))));
    }
};

exports.at_relative_datetime_cell = AtRelativeDateTimeCell;
