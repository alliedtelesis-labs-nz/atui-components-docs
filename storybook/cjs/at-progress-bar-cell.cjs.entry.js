'use strict';

var index = require('./index-Bc1nzv_X.js');

const atProgressBarCellCss = () => `@charset "UTF-8";.ag-cell-wrapper:has(at-progress-bar-cell),.ag-cell-value:has(at-progress-bar-cell){width:100%;min-width:0}`;

const DEFAULT_THRESHOLDS = {
    warning: 90,
    error: 100,
};
const AtProgressBarCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
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
        return (index.h(index.Host, { key: 'f7c2e5eaceb0c8b19ce10eb611e6c08fa849a3af', class: "flex h-full w-full min-w-0 items-center" }, index.h("at-tooltip", { key: '76d9511e96c241deda559adac5b67c5b67c03fd2', position: "top", disabled: !this.params?.generateTooltip, class: "min-w-0 flex-1 self-center" }, index.h("div", { key: 'b0dafe77e21b1b98217e0d1ca2534efd85ece043', slot: "tooltip-trigger", class: "flex min-w-0 items-center gap-8" }, index.h("at-progress-bar", { key: '7894fe3472867438d332d5ded905ca89614b1f39', class: "min-w-0 flex-1", percentage: this.percentage, type: this.type, size: this.params?.size ?? 'sm' }), !this.params?.hideLabel && (
        // Reserved width so the bars align down the column
        // rather than jittering with the label's digit count.
        index.h("span", { key: '85bb36917646cdec92586a3586cdacbd78cbf158', class: "text-secondary min-w-[2.5rem] shrink-0 text-right text-xs leading-normal font-normal tabular-nums" }, this.labelValue))), this.params?.generateTooltip && (index.h("span", { key: 'c5ec3ec74f9f6da83f55bf4b49e6f9af888b7746', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};
AtProgressBarCell.style = atProgressBarCellCss();

exports.at_progress_bar_cell = AtProgressBarCell;
