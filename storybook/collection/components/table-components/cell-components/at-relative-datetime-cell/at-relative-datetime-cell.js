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
        return (h(Host, { key: 'dffe1e6964f3417cc45b2aeeab8187dc248200d0', class: "flex h-full items-center" }, h("div", { key: 'e4133b25f1469f6fc428fc3476a3487b52def9f8', class: "flex h-full flex-col justify-center" }, h("div", { key: 'e14fb5bc49e8587831c1aa1cff2793aed4839dde', class: "truncate text-sm leading-normal" }, this.relativeLabel), this.dateTimeLabel && (h("div", { key: '398b5b1acc4fe7427e91a170dbdcfb7756220aca', class: "text-med truncate text-[10px] leading-normal font-normal" }, this.dateTimeLabel)))));
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
