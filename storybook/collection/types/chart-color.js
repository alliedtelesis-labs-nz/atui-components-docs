export var AtChartColorPalette;
(function (AtChartColorPalette) {
    AtChartColorPalette["CATEGORICAL"] = "categorical";
    AtChartColorPalette["SEQUENTIAL"] = "sequential";
    AtChartColorPalette["ALERT"] = "alert";
    AtChartColorPalette["DEVICE_STATUS"] = "device-status";
    AtChartColorPalette["ONBOARDING_STATUS"] = "onboarding-status";
    AtChartColorPalette["CUSTOM"] = "custom";
})(AtChartColorPalette || (AtChartColorPalette = {}));
export function readChartFontFamily() {
    const raw = getComputedStyle(document.documentElement)
        .getPropertyValue('--token-font-family-base')
        .trim();
    return raw ? `${raw}` : 'sans-serif';
}
export function readChartTextColors() {
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
/**
 * Reads the chart typography tokens. Sizes are returned in rem (their native
 * unit) plus `remPx` — the current px value of 1rem for `el` — so canvas
 * callers (which can't use CSS var()/rem directly) can convert to px
 * themselves via `remPx * xRem`, while DOM callers can use the rem value as-is.
 */
export function readChartTypography(el) {
    const remPx = parseFloat(getComputedStyle(el).fontSize) || 16;
    const root = getComputedStyle(document.documentElement);
    const rem = (name, fallback) => {
        const parsed = parseFloat(root.getPropertyValue(name));
        return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
    };
    const weight = (name, fallback) => {
        const parsed = parseInt(root.getPropertyValue(name), 10);
        return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
    };
    return {
        remPx,
        valueRem: rem('--token-font-size-xl', 3),
        textRem: rem('--token-font-size-base', 1),
        legendRem: rem('--token-font-size-xs', 0.85),
        weightBold: weight('--token-font-weight-bold', 700),
        weightLight: weight('--token-font-weight-light', 300),
    };
}
export function readPaletteColors(palette) {
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
        return [1, 2, 3, 4, 5, 6].map((n) => get(`--chart-onboarding-status-${n}`));
    }
    return null;
}
