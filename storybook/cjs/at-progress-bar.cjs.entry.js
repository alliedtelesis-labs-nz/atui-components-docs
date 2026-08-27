'use strict';

var index = require('./index-Bo1AxtqW.js');

const progressBarVariants = {
    success: 'bg-feedback-success-accent',
    warning: 'bg-feedback-warning-accent',
    error: 'bg-feedback-error-accent',
    info: 'bg-feedback-info-accent',
};
function fillClass(type) {
    return progressBarVariants[type] ?? progressBarVariants.info;
}
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
        return `${this.size === 'lg' ? 'h-[16px]' : 'h-8'} flex items-stretch`;
    }
    get segments() {
        return `flex flex-grow items-stretch justify-center transition-all duration-500`;
    }
    renderIndeterminate() {
        return (index.h(index.Host, { role: "progressbar", "aria-busy": "true", "aria-valuemin": "0", "aria-valuemax": "100", class: this.statusBarClass }, index.h("slot", { name: "label-before" }), index.h("div", { class: "bg-surface-1 relative h-full w-full overflow-hidden rounded-full" }, index.h("div", { class: `${fillClass(this.type)} motion-safe:animate-progress-left absolute top-0 h-full`, style: {
                width: '30%',
                left: '-30%',
                willChange: 'left',
            }, "aria-hidden": "true" })), index.h("slot", { name: "label-after" })));
    }
    renderDeterminate() {
        const background = 100 - this.clamped;
        const fill = this.clamped;
        return (index.h(index.Host, { role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": this.clamped, class: this.statusBarClass }, index.h("slot", { name: "label-before" }), index.h("div", { class: "flex w-full flex-1 items-stretch justify-start overflow-hidden rounded-full" }, index.h("div", { class: `${this.segments} ${fillClass(this.type)}`, style: {
                flexBasis: fill.toString() + '%',
            }, "aria-hidden": "true" }), index.h("div", { class: `bg-surface-2 ${this.segments}`, style: {
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
