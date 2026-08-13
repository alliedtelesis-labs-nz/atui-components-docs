'use strict';

var index = require('./index-BrO0jece.js');

/**
 * The bright `accent` step is only exposed on the `feedback` colour group in
 * tailwind.config.cjs — the state groups (`success`, `warning`, `info`, `destructive`)
 * stop at DEFAULT / foreground / background / *-inv. `bg-success-accent` and
 * `bg-success-base` match no rule at all, so the fill renders unpainted rather than
 * merely pale, which hid the state entirely in every consumer. See issue #285.
 */
const progressBarVariants = {
    success: 'bg-feedback-success-accent',
    warning: 'bg-feedback-warning-accent',
    error: 'bg-feedback-error-accent',
    info: 'bg-feedback-info-accent',
};
const trackClass = 'bg-surface-0 rounded-full overflow-hidden';
const AtProgressBar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Percentage value of the progress bar.
     */
    percentage = 0;
    /**
     * Mode of the progress bar, either determinate or indeterminate (loading).
     */
    mode = 'determinate';
    /**
     * Type of the progress bar, which determines its color.
     */
    type = 'info';
    /**
     * Height of the progress bar
     */
    size = 'sm';
    clamped = 0;
    onPercentageChange() {
        this.clampPercentage();
    }
    componentWillLoad() {
        this.clampPercentage();
    }
    clampPercentage() {
        const n = Number(this.percentage);
        if (Number.isFinite(n)) {
            this.clamped = Math.min(100, Math.max(0, n));
        }
        else {
            this.clamped = 0;
        }
    }
    get statusBarClass() {
        return `${this.size === 'lg' ? 'h-[16px]' : 'h-8'} flex items-stretch rounded-full overflow-hidden`;
    }
    get segments() {
        return `flex flex-grow items-stretch justify-center transition-all duration-500`;
    }
    renderIndeterminate() {
        return (index.h(index.Host, { role: "progressbar", "aria-busy": "true", "aria-valuemin": "0", "aria-valuemax": "100", class: `${this.statusBarClass} overflow-hidden` }, index.h("slot", { name: "label-before" }), index.h("div", { class: `relative h-full w-full ${trackClass}` }, index.h("div", { class: `${progressBarVariants[this.type]} motion-safe:animate-progress-left absolute top-0 h-full`, style: {
                width: '30%',
                left: '-30%',
                willChange: 'left',
            }, "aria-hidden": "true" })), index.h("slot", { name: "label-after" })));
    }
    renderDeterminate() {
        const background = 100 - this.clamped;
        const fill = this.clamped;
        return (index.h(index.Host, { role: "progressbar", "aria-busy": "true", "aria-valuemin": "0", "aria-valuemax": "100", class: this.statusBarClass }, index.h("slot", { name: "label-before" }), index.h("div", { class: "flex w-full flex-1 items-stretch justify-start overflow-visible" }, index.h("div", { class: `${this.segments} ${progressBarVariants[this.type]}`, style: {
                flexBasis: fill.toString() + '%',
            }, "aria-hidden": "true" }), index.h("div", { class: ` ${this.segments} ${trackClass}`, style: {
                flexBasis: background.toString() + '%',
            }, "aria-hidden": "true" })), index.h("slot", { name: "label-after" })));
    }
    render() {
        return this.mode === 'indeterminate'
            ? this.renderIndeterminate()
            : this.renderDeterminate();
    }
    static get watchers() { return {
        "percentage": [{
                "onPercentageChange": 0
            }]
    }; }
};

exports.at_progress_bar = AtProgressBar;
