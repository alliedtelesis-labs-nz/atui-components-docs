import { r as registerInstance, a as getElement, h, H as Host } from './index-HD-uhvb8.js';
import { p as parseCellDateTime, g as getRelativeTimeLabel } from './relative-time-label-CLVJlEqK.js';

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
        const parsedDate = parseCellDateTime(sourceDateTime);
        if (!parsedDate) {
            this.relativeLabel = '-';
            this.dateTimeLabel = '';
            return;
        }
        this.relativeLabel = getRelativeTimeLabel(parsedDate);
        this.dateTimeLabel = sourceDateTime;
    }
    render() {
        return (h(Host, { key: 'ead45e148b00f7f77e9c82f9dc8fee1d27e52b24', class: "flex h-full items-center" }, h("div", { key: '0f18f13df368958fab4cf378a534fbfe450e4fd4', class: "flex h-full flex-col justify-center" }, h("div", { key: '64a1d635ba8c2410b39cddd778d5b207b12ba532', class: "truncate text-sm leading-normal" }, this.relativeLabel), this.dateTimeLabel && (h("div", { key: '27c4fa2461178f5fa1f6c59eb490ab0af89cd1eb', class: "text-med truncate text-[10px] leading-normal font-normal" }, "(", this.dateTimeLabel, ")")))));
    }
};

export { AtRelativeDateTimeCell as at_relative_datetime_cell };
