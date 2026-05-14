var AtChartColorPalette;
(function (AtChartColorPalette) {
    AtChartColorPalette["CATEGORICAL"] = "categorical";
    AtChartColorPalette["SEQUENTIAL"] = "sequential";
    AtChartColorPalette["ALERT"] = "alert";
    AtChartColorPalette["DEVICE_STATUS"] = "device-status";
    AtChartColorPalette["ONBOARDING_STATUS"] = "onboarding-status";
    AtChartColorPalette["CUSTOM"] = "custom";
})(AtChartColorPalette || (AtChartColorPalette = {}));
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
    if (palette === AtChartColorPalette.CUSTOM) {
        return null;
    }
    if (palette === AtChartColorPalette.CATEGORICAL) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => get(`--chart-categorical-${n}`));
    }
    if (palette === AtChartColorPalette.SEQUENTIAL) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => get(`--chart-sequential-${n}`));
    }
    if (palette === AtChartColorPalette.ALERT) {
        return [1, 2, 3, 4].map((n) => get(`--chart-alert-${n}`));
    }
    if (palette === AtChartColorPalette.DEVICE_STATUS) {
        return [1, 2, 3, 4, 5].map((n) => get(`--chart-device-status-${n}`));
    }
    if (palette === AtChartColorPalette.ONBOARDING_STATUS) {
        return [1, 2, 3, 4, 5].map((n) => get(`--chart-onboarding-status-${n}`));
    }
    return null;
}

export { AtChartColorPalette as A, readPaletteColors as a, readChartTextColors as r };
