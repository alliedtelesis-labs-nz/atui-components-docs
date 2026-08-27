import { r as registerInstance, a as getElement, h, H as Host } from './index-lWb16Ay7.js';
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
        return (h(Host, { key: '5dd02de1d68c643d344bbdbf6c377af178dff71b', class: "flex h-full items-center" }, h("div", { key: '67415954fb6bc7c2360ba1cd2457c271bd7264be', class: "flex h-full flex-col justify-center" }, h("div", { key: 'cfa127738a21652a339455a1635fb88aa52bd907', class: "truncate text-sm leading-normal" }, this.relativeLabel), this.dateTimeLabel && (h("div", { key: 'fcff9c4f940ddb35e404a1dd167e989b9948c693', class: "text-med truncate text-[10px] leading-normal font-normal" }, "(", this.dateTimeLabel, ")")))));
    }
};

export { AtRelativeDateTimeCell as at_relative_datetime_cell };
