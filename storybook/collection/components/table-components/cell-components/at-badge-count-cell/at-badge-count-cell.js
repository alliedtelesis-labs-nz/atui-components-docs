import { h, Host } from "@stencil/core";
/**
 * @category Data Tables
 * @description A cell component for displaying a distribution as a row of counted badges - how a population splits across states, such as devices by health. Segments keep the order they are given so a state sits in the same place in every row, and zero counts are dropped unless asked for.
 * @dependency at-badge
 */
export class AtBadgeCountCell {
    el;
    segments = [];
    params;
    init(params) {
        this.params = params;
        this.segments = params.segments
            ? (params.segments(params.data) ?? [])
            : (params.value ?? []);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.init(params);
        return true;
    }
    render() {
        const showZeros = this.params?.show_zero_counts ?? false;
        const visible = this.segments.filter((segment) => showZeros || segment.count !== 0);
        return (h(Host, { key: '746ab07c756657338bf38d377a239563bb12aed9', class: "flex h-full min-w-0 items-center gap-4 overflow-hidden" }, visible.map((segment, index) => (h("at-badge", { key: segment.label ?? index, label: String(segment.count), type: segment.type ?? 'default', impact: this.params?.impact ?? 'low',
            // A bare aria-label on an element with no role is
            // dropped by most screen readers, so the badge would
            // read as a number with nothing to attach it to.
            role: segment.label ? 'img' : undefined, "aria-label": segment.label
                ? `${segment.count} ${segment.label}`
                : undefined })))));
    }
    static get is() { return "at-badge-count-cell"; }
    static get states() {
        return {
            "segments": {},
            "params": {}
        };
    }
    static get elementRef() { return "el"; }
}
