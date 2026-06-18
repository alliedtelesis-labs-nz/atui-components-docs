import { r as registerInstance, a as getElement, h, H as Host } from './index-BXUxu8jr.js';

const AtRelativeDateTimeCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
        return (h(Host, { key: '8adf12f3c8b0908da53a7e94081795a892bf9426', class: "flex h-full items-center" }, h("div", { key: '815a0e95f755fcc02a20d3ed4744df252f85488b', class: "flex h-full flex-col justify-center" }, h("div", { key: '11596bed043fc9ec4d64ca87b1e4c16d4a0bfc60', class: "truncate text-sm leading-normal" }, this.relativeLabel), this.dateTimeLabel && (h("div", { key: '5c4e9795efb9c729389b7df86ccd2d3c48189250', class: "text-med truncate text-[10px] leading-normal font-normal" }, "(", this.dateTimeLabel, ")")))));
    }
};

export { AtRelativeDateTimeCell as at_relative_datetime_cell };
