const AT_SIGNAL_STRENGTH_DEFAULT_THRESHOLDS = [
    -85, -75, -67, -60,
];
const AT_SIGNAL_STRENGTH_LABELS = {
    0: 'No signal',
    1: 'Poor',
    2: 'Fair',
    3: 'Good',
    4: 'Excellent',
};
function atHasRssi(rssi) {
    return typeof rssi === 'number' && !Number.isNaN(rssi);
}
function atParseRssi(value) {
    if (value === null || value === undefined || value === '') {
        return undefined;
    }
    const parsed = Number(value);
    return Number.isNaN(parsed) ? undefined : parsed;
}
/**
 * Counts how many of the minimum-dBm thresholds an RSSI value meets, capped at four bars.
 * A missing or non-numeric value is level 0.
 */
function atGetSignalLevel(rssi, thresholds = AT_SIGNAL_STRENGTH_DEFAULT_THRESHOLDS) {
    if (!atHasRssi(rssi)) {
        return 0;
    }
    const thresholdsMet = thresholds.filter((min) => rssi >= min).length;
    return Math.min(thresholdsMet, 4);
}
function atFormatRssi(rssi) {
    return atHasRssi(rssi) ? `${rssi} dBm` : '';
}

export { AT_SIGNAL_STRENGTH_DEFAULT_THRESHOLDS as A, atParseRssi as a, atFormatRssi as b, atGetSignalLevel as c, AT_SIGNAL_STRENGTH_LABELS as d };
