import { h, Host } from "@stencil/core";
const DEFAULT_THRESHOLDS = {
    warning: 90,
    error: 100,
};
/**
 * @category Data Tables
 * @description A cell component for displaying capacity usage as a progress bar with a percentage label. Derives its colour from usage thresholds, so a full or over-subscribed row reads as at-risk without the user comparing numbers.
 */
export class AtProgressBarCell {
    el;
    percentage = 0;
    labelValue = '';
    type = 'info';
    params;
    init(params) {
        this.setCellValues(params);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.setCellValues(params);
        return true;
    }
    setCellValues(params) {
        this.params = params;
        this.percentage = this.resolvePercentage(params);
        this.type = this.resolveType(params);
        this.labelValue = params.label
            ? params.label(params.data)
            : `${Math.round(this.percentage)}%`;
    }
    resolvePercentage(params) {
        if (params.percentage) {
            return this.toNumber(params.percentage(params.data));
        }
        const value = params.value;
        if (value?.percentage !== undefined) {
            return this.toNumber(value.percentage);
        }
        const used = params.used
            ? this.toNumber(params.used(params.data))
            : this.toNumber(value?.used);
        const total = params.total
            ? this.toNumber(params.total(params.data))
            : this.toNumber(value?.total);
        // A zero-capacity row has nothing to consume, so it reads as empty rather
        // than as a divide-by-zero overrun.
        return total > 0 ? (used / total) * 100 : 0;
    }
    resolveType(params) {
        if (params.mapValueToType) {
            return params.mapValueToType(params.data);
        }
        const thresholds = params.thresholds ?? DEFAULT_THRESHOLDS;
        if (this.percentage >= thresholds.error) {
            return 'error';
        }
        if (this.percentage >= thresholds.warning) {
            return 'warning';
        }
        return 'info';
    }
    toNumber(value) {
        const n = Number(value);
        return Number.isFinite(n) ? n : 0;
    }
    render() {
        // `w-full` on the host is load-bearing: ag-grid lays the cell out as a
        // flex container, so without it the host shrinks to fit the label and the
        // bar resolves to zero width.
        return (h(Host, { key: 'b9d8c715c7417a8d3947b89c624e279dda1aa791', class: "flex h-full w-full min-w-0 items-center" }, h("at-tooltip", { key: '70657ed109c2e2af5c3bbaed0f8e7b8243a18860', position: "top", disabled: !this.params?.generateTooltip, class: "min-w-0 flex-1 self-center" }, h("div", { key: 'dcab026defa0ca6bb15af77e32da3fd12b0c18a4', slot: "tooltip-trigger", class: "flex min-w-0 items-center gap-8" }, h("at-progress-bar", { key: '21bc459a5ed512d35262b654005654afdfbd19be', class: "min-w-0 flex-1", percentage: this.percentage, type: this.type, size: this.params?.size ?? 'sm' }), !this.params?.hideLabel && (
        // Reserved width so the bars align down the column
        // rather than jittering with the label's digit count.
        h("span", { key: '46b3f54d4a41a7fab62f2d2aad9c7ffceacd96e3', class: "text-secondary min-w-[2.5rem] shrink-0 text-right text-xs leading-normal font-normal tabular-nums" }, this.labelValue))), this.params?.generateTooltip && (h("span", { key: '064cf9941000548169e7e34c4458eb16340b02f9', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
    static get is() { return "at-progress-bar-cell"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-progress-bar-cell.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-progress-bar-cell.css"]
        };
    }
    static get states() {
        return {
            "percentage": {},
            "labelValue": {},
            "type": {},
            "params": {}
        };
    }
    static get elementRef() { return "el"; }
}
