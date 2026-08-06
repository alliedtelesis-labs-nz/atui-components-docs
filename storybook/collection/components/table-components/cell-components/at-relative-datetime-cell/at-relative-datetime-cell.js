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
        return (h(Host, { key: '7e2c7efdb2c4656d2f9d7ed3189cf1f9503d578c', class: "flex h-full items-center" }, h("div", { key: 'cd8285842cc4c61e0c1a21803b2371626fa28d4a', class: "flex h-full flex-col justify-center" }, h("div", { key: '1635d9d9324f204144b69b94db9683d57c6f7e22', class: "truncate text-sm leading-normal" }, this.relativeLabel), this.dateTimeLabel && (h("div", { key: 'c21742ad4962082cdff12040df62f33907af9874', class: "text-med truncate text-[10px] leading-normal font-normal" }, "(", this.dateTimeLabel, ")")))));
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
