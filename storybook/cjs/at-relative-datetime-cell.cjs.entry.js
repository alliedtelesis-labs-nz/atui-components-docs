'use strict';

var index = require('./index--r5sCsiV.js');

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
        const parsedDate = this.parseDateTime(sourceDateTime);
        if (!parsedDate) {
            this.relativeLabel = '-';
            this.dateTimeLabel = '';
            return;
        }
        this.relativeLabel = this.getRelativeLabel(parsedDate);
        this.dateTimeLabel = sourceDateTime;
    }
    parseDateTime(value) {
        const normalizedValue = value.replace(' ', 'T');
        const parsedDate = new Date(normalizedValue);
        if (Number.isNaN(parsedDate.getTime())) {
            return null;
        }
        return parsedDate;
    }
    getRelativeLabel(date) {
        const now = Date.now();
        const then = date.getTime();
        const diffSeconds = Math.max(0, Math.floor((now - then) / 1000));
        if (diffSeconds < 60) {
            return this.formatSingleUnit(diffSeconds, 'second');
        }
        const minutes = Math.floor(diffSeconds / 60);
        if (minutes < 60) {
            return this.formatSingleUnit(minutes, 'minute');
        }
        const hours = Math.floor(minutes / 60);
        if (hours < 24) {
            return this.formatSingleUnit(hours, 'hour');
        }
        const days = Math.floor(hours / 24);
        if (days < 30) {
            return this.formatSingleUnit(days, 'day');
        }
        const months = Math.floor(days / 30);
        if (months < 12) {
            const monthRemainderDays = days % 30;
            if (monthRemainderDays > 0) {
                return `${this.formatUnit(months, 'month')}, ${this.formatUnit(monthRemainderDays, 'day')} ago`;
            }
            return this.formatSingleUnit(months, 'month');
        }
        const years = Math.floor(months / 12);
        const yearRemainderMonths = months % 12;
        if (yearRemainderMonths > 0) {
            return `${this.formatUnit(years, 'year')}, ${this.formatUnit(yearRemainderMonths, 'month')} ago`;
        }
        return this.formatSingleUnit(years, 'year');
    }
    formatSingleUnit(value, unit) {
        return `${this.formatUnit(value, unit)} ago`;
    }
    formatUnit(value, unit) {
        return `${value} ${unit}${value === 1 ? '' : 's'}`;
    }
    render() {
        return (index.h(index.Host, { key: 'b2309be6aaa47ea7fe3b125325b9c267575b8640', class: "flex h-full items-center" }, index.h("div", { key: 'ac168aa464238825ce183d7abcfb777aeca073af', class: "flex h-full flex-col justify-center" }, index.h("div", { key: '8d227775883d34dee3c2fabac8ea5f915e45c5f8', class: "truncate text-sm leading-normal" }, this.relativeLabel), this.dateTimeLabel && (index.h("div", { key: '76d0d1c3894c12792cd54bfed4ca2aff76bed145', class: "text-med truncate text-[10px] leading-normal font-normal" }, "(", this.dateTimeLabel, ")")))));
    }
};

exports.at_relative_datetime_cell = AtRelativeDateTimeCell;
