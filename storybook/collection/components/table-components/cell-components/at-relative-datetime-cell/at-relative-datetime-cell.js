import { h, Host } from "@stencil/core";
import { getRelativeTimeLabel, parseCellDateTime, } from "../../utils/relative-time-label";
/**
 * @category Data Tables
 * @description A cell component for displaying relative time since a datetime with the source datetime shown below.
 */
export class AtRelativeDateTimeCell {
    el;
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
        return (h(Host, { key: 'a1150b7e8cb83923bccf6313fcef14c74d4862ab', class: "flex h-full items-center" }, h("div", { key: '192022f4b2619f1ad251a7a6c6030a8cf470c343', class: "flex h-full flex-col justify-center" }, h("div", { key: '1733b23021562e025251e51f3590075eddec3d16', class: "truncate text-sm leading-normal" }, this.relativeLabel), this.dateTimeLabel && (h("div", { key: '2a016b3554065fceb4eef103827ce416f7bd86b5', class: "text-med truncate text-[10px] leading-normal font-normal" }, this.dateTimeLabel)))));
    }
    static get is() { return "at-relative-datetime-cell"; }
    static get states() {
        return {
            "relativeLabel": {},
            "dateTimeLabel": {}
        };
    }
    static get elementRef() { return "el"; }
}
