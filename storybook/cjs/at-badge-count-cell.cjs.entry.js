'use strict';

var index = require('./index-BCGHtseN.js');

const AtBadgeCountCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
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
        return (index.h(index.Host, { key: '92fb1adc127a590706f20541872161c742847ff2', class: "flex h-full min-w-0 items-center gap-4 overflow-hidden" }, visible.map((segment, index$1) => (index.h("at-badge", { key: segment.label ?? index$1, label: String(segment.count), type: segment.type ?? 'default', impact: this.params?.impact ?? 'low',
            // A bare aria-label on an element with no role is
            // dropped by most screen readers, so the badge would
            // read as a number with nothing to attach it to.
            role: segment.label ? 'img' : undefined, "aria-label": segment.label
                ? `${segment.count} ${segment.label}`
                : undefined })))));
    }
};

exports.at_badge_count_cell = AtBadgeCountCell;
