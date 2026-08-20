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
        return (h(Host, { key: '5e3b6fca92accd05c6a1027c99ef308223bdfebc', class: "flex h-full items-center" }, h("div", { key: '6665500622f61f8da9c17a21bdd874fb28e17410', class: "flex h-full flex-col justify-center" }, h("div", { key: 'bea9fdf1e41a7faddafbaca2b0446adc61ec7678', class: "truncate text-sm leading-normal" }, this.relativeLabel), this.dateTimeLabel && (h("div", { key: 'a0f147199577d2be9ce1511a414c1f1dfcbbfd48', class: "text-med truncate text-[10px] leading-normal font-normal" }, "(", this.dateTimeLabel, ")")))));
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
