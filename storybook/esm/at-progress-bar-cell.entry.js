import { r as registerInstance, a as getElement, h, H as Host } from './index-DgqokAJi.js';

const atProgressBarCellCss = () => `@charset "UTF-8";.ag-cell-wrapper:has(at-progress-bar-cell),.ag-cell-value:has(at-progress-bar-cell){width:100%;min-width:0}`;

const DEFAULT_THRESHOLDS = {
    warning: 90,
    error: 100,
};
const AtProgressBarCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
        return (h(Host, { key: '4da9db931c804fec137ab0ef4a266648d47af28a', class: "flex h-full w-full min-w-0 items-center" }, h("at-tooltip", { key: '802c064f8ef338a26baf0beb86b84a4daadca751', position: "top", disabled: !this.params?.generateTooltip, class: "min-w-0 flex-1 self-center" }, h("div", { key: '1899989a62a5c8a249c7de90eb295a74e3e94603', slot: "tooltip-trigger", class: "flex min-w-0 items-center gap-8" }, h("at-progress-bar", { key: '81a93a4baf1d39149c562fa943d393b04f98be94', class: "min-w-0 flex-1", percentage: this.percentage, type: this.type, size: this.params?.size ?? 'sm' }), !this.params?.hideLabel && (
        // Reserved width so the bars align down the column
        // rather than jittering with the label's digit count.
        h("span", { key: '495403e2a62cf85ce98a8022e43e3b43eb142ac3', class: "text-secondary min-w-[2.5rem] shrink-0 text-right text-xs leading-normal font-normal tabular-nums" }, this.labelValue))), this.params?.generateTooltip && (h("span", { key: 'ef78f166307571895be3be02b4db0ddeb77aac4c', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};
AtProgressBarCell.style = atProgressBarCellCss();

export { AtProgressBarCell as at_progress_bar_cell };
