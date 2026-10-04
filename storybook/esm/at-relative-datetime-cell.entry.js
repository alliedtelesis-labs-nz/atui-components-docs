import { r as registerInstance, a as getElement, h, H as Host } from './index-Baj27LS8.js';
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
        return (h(Host, { key: '6aacfa890ff85945638373ca83e1e44b0abea8a4', class: "flex h-full items-center" }, h("div", { key: 'e345df71a4d6edd4444c2dd743160c02e06ed921', class: "flex h-full flex-col justify-center" }, h("div", { key: 'd7086f6277ad72d210fed9bbf8cfcd9cd557e311', class: "truncate text-sm leading-normal" }, this.relativeLabel), this.dateTimeLabel && (h("div", { key: '3b1ce3042c20f5ef0eb08a48dd0d3688f7cbc7db', class: "text-med truncate text-[10px] leading-normal font-normal" }, "(", this.dateTimeLabel, ")")))));
    }
};

export { AtRelativeDateTimeCell as at_relative_datetime_cell };
