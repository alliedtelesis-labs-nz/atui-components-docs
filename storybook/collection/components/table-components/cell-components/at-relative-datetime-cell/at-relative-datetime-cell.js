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
        return (h(Host, { key: '9283ebad119228b15bb766d3afef3457f995a95e', class: "flex h-full items-center" }, h("div", { key: 'acc398de76959961aea8379606ce7bd11e6d4103', class: "flex h-full flex-col justify-center" }, h("div", { key: '6fb89f0065e76ce1023069001b92b8ba72fc2c80', class: "truncate text-sm leading-normal" }, this.relativeLabel), this.dateTimeLabel && (h("div", { key: '5035313e599e1ebea7ae3dc1ecae2c08eb092fb6', class: "text-med truncate text-[10px] leading-normal font-normal" }, "(", this.dateTimeLabel, ")")))));
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
