import { r as registerInstance, a as getElement, h, H as Host } from './index-46ti_ijN.js';
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
        return (h(Host, { key: '6f3b1394acf5845b2f034ff67240392c5b8ca33a', class: "flex h-full items-center" }, h("div", { key: 'c021c01311ded4d12c24529b28079609219aadaa', class: "flex h-full flex-col justify-center" }, h("div", { key: '61d63d741fe3d1916c39c2c64300d8a6d84a49e0', class: "truncate text-sm leading-normal" }, this.relativeLabel), this.dateTimeLabel && (h("div", { key: '0974275138a71dbc810d67391c5f242969c5ea0b', class: "text-med truncate text-[10px] leading-normal font-normal" }, "(", this.dateTimeLabel, ")")))));
    }
};

export { AtRelativeDateTimeCell as at_relative_datetime_cell };
