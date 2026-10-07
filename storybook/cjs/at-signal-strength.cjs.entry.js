'use strict';

var index = require('./index-D62KzS1q.js');
var signalStrength = require('./signal-strength-CunZSyq8.js');

const sizePx = {
    sm: 12,
    md: 16,
    lg: 24,
};
const textSizeClass = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-body',
};
const BAR_WIDTH = 2.5;
const BAR_BASELINE = 15;
const bars = [
    { x: 0.75, height: 4 },
    { x: 4.75, height: 7 },
    { x: 8.75, height: 10 },
    { x: 12.75, height: 13 },
];
const EMPTY_BAR_FILL = 'var(--token-state-disabled-background, #e2e8f0)';
function statusFill(level) {
    if (level >= 3) {
        return 'var(--chart-alert-1, #4caf50)';
    }
    if (level === 2) {
        return 'var(--chart-alert-2, #f59f00)';
    }
    return 'var(--chart-alert-3, #ff5252)';
}
const AtSignalStrength = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Received signal strength in dBm (e.g. -62). A missing value renders as "No signal".
     */
    rssi;
    /**
     * Minimum dBm for one, two, three and four bars. Defaults to -85, -75, -67 and -60.
     */
    thresholds = [...signalStrength.AT_SIGNAL_STRENGTH_DEFAULT_THRESHOLDS];
    /**
     * `status` colours the filled bars by level (good, warning, poor); `mono` fills them in the current text colour.
     */
    variant = 'status';
    /**
     * Size of the bars glyph.
     */
    size = 'md';
    /**
     * Shows the dBm value after the bars.
     */
    show_value = false;
    renderBars(level, accessibleName) {
        const filledFill = this.variant === 'mono' ? 'currentColor' : statusFill(level);
        const dimension = sizePx[this.size];
        return (index.h("svg", { "data-name": "signal-strength-bars", width: dimension, height: dimension, viewBox: "0 0 16 16", role: "img", "aria-label": accessibleName, class: "shrink-0" }, bars.map((bar, index$1) => {
            const isFilled = index$1 < level;
            return (index.h("rect", { "data-name": "signal-strength-bar", "data-state": isFilled ? 'filled' : 'empty', x: bar.x, y: BAR_BASELINE - bar.height, width: BAR_WIDTH, height: bar.height, rx: "0.75", fill: isFilled ? filledFill : EMPTY_BAR_FILL }));
        })));
    }
    render() {
        const level = signalStrength.atGetSignalLevel(this.rssi, this.thresholds);
        const label = signalStrength.AT_SIGNAL_STRENGTH_LABELS[level];
        const value = signalStrength.atFormatRssi(this.rssi);
        const accessibleName = value
            ? `Signal strength: ${label}, ${value}`
            : `Signal strength: ${label}`;
        return (index.h(index.Host, { key: '986f02028f32ca976e7ba7fea133ece27bca5f01', "data-name": "signal-strength", "data-level": level, class: `inline-flex items-center gap-4 ${textSizeClass[this.size]}` }, this.renderBars(level, accessibleName), this.show_value && value && (index.h("span", { key: '3cbd6fea02717ac4197990cca4f0e398ff7b1fe8', "data-name": "signal-strength-value", class: "text-foreground whitespace-nowrap tabular-nums", "aria-hidden": "true" }, value)), index.h("slot", { key: '33ca2587c6fc2941b5b21ef9b4e6b3b750cf6dba' })));
    }
};

exports.at_signal_strength = AtSignalStrength;
