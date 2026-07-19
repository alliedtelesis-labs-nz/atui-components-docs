'use strict';

exports.AtChartColorPalette = void 0;
(function (AtChartColorPalette) {
    AtChartColorPalette["CATEGORICAL"] = "categorical";
    AtChartColorPalette["SEQUENTIAL"] = "sequential";
    AtChartColorPalette["ALERT"] = "alert";
    AtChartColorPalette["DEVICE_STATUS"] = "device-status";
    AtChartColorPalette["ONBOARDING_STATUS"] = "onboarding-status";
    AtChartColorPalette["CUSTOM"] = "custom";
})(exports.AtChartColorPalette || (exports.AtChartColorPalette = {}));
function readChartFontFamily() {
    const raw = getComputedStyle(document.documentElement)
        .getPropertyValue('--token-font-family-base')
        .trim();
    return raw ? `${raw}` : 'sans-serif';
}
function readChartTextColors() {
    const style = getComputedStyle(document.documentElement);
    const get = (name) => style.getPropertyValue(name).trim();
    return {
        axisLine: get('--chart-axis-line'),
        label: get('--chart-label'),
        title: get('--chart-title'),
        tooltipBg: get('--chart-tooltip-bg'),
        tooltipTitle: get('--chart-tooltip-title'),
        tooltipBody: get('--chart-tooltip-body'),
    };
}
function readPaletteColors(palette) {
    const style = getComputedStyle(document.documentElement);
    const get = (name) => style.getPropertyValue(name).trim();
    if (palette === exports.AtChartColorPalette.CUSTOM) {
        return null;
    }
    if (palette === exports.AtChartColorPalette.CATEGORICAL) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => get(`--chart-categorical-${n}`));
    }
    if (palette === exports.AtChartColorPalette.SEQUENTIAL) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => get(`--chart-sequential-${n}`));
    }
    if (palette === exports.AtChartColorPalette.ALERT) {
        return [1, 2, 3, 4].map((n) => get(`--chart-alert-${n}`));
    }
    if (palette === exports.AtChartColorPalette.DEVICE_STATUS) {
        return [1, 2, 3, 4, 5].map((n) => get(`--chart-device-status-${n}`));
    }
    if (palette === exports.AtChartColorPalette.ONBOARDING_STATUS) {
        return [1, 2, 3, 4, 5].map((n) => get(`--chart-onboarding-status-${n}`));
    }
    return null;
}

exports.readChartFontFamily = readChartFontFamily;
exports.readChartTextColors = readChartTextColors;
exports.readPaletteColors = readPaletteColors;
